#!/usr/bin/env python3

import json
import time
import pytest
from conftest import Server

cluster = [
    Server(
        alias = 'router',
        instance_uuid = 'aaaaaaaa-aaaa-4000-b000-000000000001',
        replicaset_uuid = 'aaaaaaaa-0000-4000-b000-000000000000',
        roles = ['vshard-router'],
        binary_port = 33001,
        http_port = 8081,
    ),
    Server(
        alias = 'storage',
        instance_uuid = 'bbbbbbbb-bbbb-4000-b000-000000000001',
        replicaset_uuid = 'bbbbbbbb-0000-4000-b000-000000000000',
        roles = ['vshard-storage'],
        binary_port = 33002,
        http_port = 8082,
    ),
    Server(
        alias = 'expelled',
        instance_uuid = 'cccccccc-cccc-4000-b000-000000000001',
        replicaset_uuid = 'cccccccc-0000-4000-b000-000000000000',
        roles = [],
        binary_port = 33009,
        http_port = 8089,
    )
]

def test_servers(cluster):
    obj = cluster['router'].graphql("""
        {
            servers {
                uri
                replicaset { roles }
            }
        }
    """)

    servers = obj['data']['servers']
    assert len(servers) == 3
    assert {
        'uri': 'localhost:33001',
        'replicaset': {'roles': ['vshard-router']}
    } in servers
    assert {
        'uri': 'localhost:33002',
        'replicaset': {'roles': ['vshard-storage']}
    } in servers
    assert {
        'uri': 'localhost:33009',
        'replicaset': {'roles': []}
    } in servers

def test_replicasets(cluster):
    obj = cluster['router'].graphql("""
        {
            replicasets {
                uuid
                roles
                status
                servers { uri }
            }
        }
    """)

    replicasets = obj['data']['replicasets']
    assert len(replicasets) == 3
    assert {
        'uuid': 'aaaaaaaa-0000-4000-b000-000000000000',
        'roles': ['vshard-router'],
        'status': 'healthy',
        'servers': [{'uri': 'localhost:33001'}]
    } in replicasets
    assert {
        'uuid': 'bbbbbbbb-0000-4000-b000-000000000000',
        'roles': ['vshard-storage'],
        'status': 'healthy',
        'servers': [{'uri': 'localhost:33002'}]
    } in replicasets
    assert {
        'uuid': 'cccccccc-0000-4000-b000-000000000000',
        'roles': [],
        'status': 'healthy',
        'servers': [{'uri': 'localhost:33009'}]
    } in replicasets

def test_edit_server(cluster):
    cluster['expelled'].kill()
    obj = cluster['router'].graphql("""
        mutation {
            expell_server(
                uuid: "cccccccc-cccc-4000-b000-000000000001"
            )
        }
    """)
    assert 'errors' not in obj

    obj = cluster['router'].graphql("""
        mutation {
            edit_server(
                uuid: "aaaaaaaa-aaaa-4000-b000-000000000001"
                uri: "localhost:3303"
            )
        }
    """)
    assert obj['errors'][0]['message'] == \
        'servers[aaaaaaaa-aaaa-4000-b000-000000000001].uri "localhost:3303" is not in membership'

    obj = cluster['router'].graphql("""
        mutation {
            edit_server(
                uuid: "cccccccc-cccc-4000-b000-000000000001"
                uri: "localhost:3303"
            )
        }
    """)
    assert obj['errors'][0]['message'] == \
        'servers[cccccccc-cccc-4000-b000-000000000001] is expelled'

    obj = cluster['router'].graphql("""
        mutation {
            edit_server(
                uuid: "dddddddd-dddd-4000-b000-000000000001"
                uri: "localhost:3303"
            )
        }
    """)
    assert obj['errors'][0]['message'] == \
        'server "dddddddd-dddd-4000-b000-000000000001" not in config'

def test_edit_replicaset(cluster):
    obj = cluster['router'].graphql("""
        mutation {
            edit_replicaset(
                uuid: "bbbbbbbb-0000-4000-b000-000000000000"
                roles: ["vshard-router", "vshard-storage"]
            )
        }
    """)
    assert 'errors' not in obj

    obj = cluster['storage'].graphql("""
        {
            replicasets(uuid: "bbbbbbbb-0000-4000-b000-000000000000") {
                uuid
                roles
                status
                servers { uri }
            }
        }
    """)

    replicasets = obj['data']['replicasets']
    assert len(replicasets) == 1
    assert {
        'uuid': 'bbbbbbbb-0000-4000-b000-000000000000',
        'roles': ['vshard-router', 'vshard-storage'],
        'status': 'healthy',
        'servers': [{'uri': 'localhost:33002'}]
    } in replicasets

def test_join_server_fail(cluster, confdir, module_tmpdir, helpers):
    srv = Server(
        binary_port = 33003,
        http_port = 8083,
    )
    srv.start(
        workdir="{}/localhost-{}".format(module_tmpdir, srv.binary_port),
    )

    try:
        helpers.wait_for(srv.ping_udp, timeout=5)

        obj = cluster['router'].graphql("""
            mutation {
                probe_server(
                    uri: "localhost:33003"
                )
            }
        """)
        assert 'errors' not in obj
        assert obj['data']['probe_server'] == True

        obj = cluster['router'].graphql("""
            mutation {
                join_server(
                    uri: "localhost:33003"
                    instance_uuid: "cccccccc-cccc-4000-b000-000000000001"
                )
            }
        """)
        assert obj['errors'][0]['message'] == \
            'servers[cccccccc-cccc-4000-b000-000000000001] is already joined'

        obj = cluster['router'].graphql("""
            mutation {
                join_server(
                    uri: "localhost:33003"
                    instance_uuid: "bbbbbbbb-bbbb-4000-b000-000000000002"
                    replicaset_uuid: "bbbbbbbb-0000-4000-b000-000000000000"
                    roles: []
                )
            }
        """)
        assert obj['errors'][0]['message'] == \
            'join_server() can not edit existing replicaset'

        obj = cluster['router'].graphql("""
            mutation {
                join_server(
                    uri: "localhost:33003"
                    instance_uuid: "dddddddd-dddd-4000-b000-000000000001"
                    replicaset_uuid: "dddddddd-0000-4000-b000-000000000000"
                )
            }
        """)
        assert obj['errors'][0]['message'] == \
            'join_server() missing roles for new replicaset'

    finally:
        srv.kill()

def test_join_server_good(cluster, confdir, module_tmpdir, helpers):
    srv = Server(
        binary_port = 33003,
        http_port = 8083,
    )
    srv.start(
        workdir="{}/localhost-{}".format(module_tmpdir, srv.binary_port)
    )

    try:
        helpers.wait_for(srv.ping_udp, timeout=5)

        obj = cluster['router'].graphql("""
            mutation {
                probe_server(uri: "localhost:33003")
            }
        """)
        assert 'errors' not in obj
        assert obj['data']['probe_server'] == True


        obj = cluster['router'].graphql("""
            mutation {
                join_server(
                    uri: "localhost:33003"
                    instance_uuid: "dddddddd-dddd-4000-b000-000000000001"
                    replicaset_uuid: "dddddddd-0000-4000-b000-000000000000"
                    roles: []
                )
            }
        """)
        assert 'errors' not in obj
        assert obj['data']['join_server'] == True

        helpers.wait_for(srv.connect, timeout=5)
        helpers.wait_for(cluster['router'].connect, timeout=5)

        obj = cluster['router'].graphql("""
            {
                servers {
                    uri
                    uuid
                    status
                    replicaset { uuid status roles }
                }
            }
        """)

        assert 'errors' not in obj
        servers = obj['data']['servers']
        assert len(servers) == 3
        assert {
            'uri': 'localhost:33003',
            'uuid': 'dddddddd-dddd-4000-b000-000000000001',
            'status': 'healthy',
            'replicaset': {
                'uuid': 'dddddddd-0000-4000-b000-000000000000',
                'roles': [],
                'status': 'healthy',
            }
        } in servers

    finally:
        srv.kill()