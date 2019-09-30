// @flow
/* APP */
export const APP_DID_MOUNT = 'APP_DID_MOUNT';

export const APP_DATA_REQUEST = 'APP_DATA_REQUEST';
export const APP_DATA_REQUEST_SUCCESS = 'APP_DATA_REQUEST_SUCCESS';
export const APP_DATA_REQUEST_ERROR = 'APP_DATA_REQUEST_ERROR';

export const APP_CREATE_MESSAGE = 'APP_CREATE_MESSAGE';
export const APP_SET_MESSAGE_DONE = 'APP_SET_MESSAGE_DONE';

/* CLUSTER_PAGE */
export const CLUSTER_PAGE_DID_MOUNT = 'CLUSTER_PAGE_DID_MOUNT';

export const CLUSTER_PAGE_FILTER_SET = 'CLUSTER_PAGE_FILTER_SET';
export const CLUSTER_PAGE_MODAL_FILTER_SET = 'CLUSTER_PAGE_MODAL_FILTER_SET';

export const CLUSTER_PAGE_DATA_REQUEST = 'CLUSTER_PAGE_DATA_REQUEST';
export const CLUSTER_PAGE_DATA_REQUEST_SUCCESS = 'CLUSTER_PAGE_DATA_REQUEST_SUCCESS';
export const CLUSTER_PAGE_DATA_REQUEST_ERROR = 'CLUSTER_PAGE_DATA_REQUEST_ERROR';

export const CLUSTER_PAGE_REFRESH_LISTS_REQUEST = 'CLUSTER_PAGE_REFRESH_LISTS_REQUEST';
export const CLUSTER_PAGE_REFRESH_LISTS_REQUEST_SUCCESS = 'CLUSTER_PAGE_REFRESH_LISTS_REQUEST_SUCCESS';
export const CLUSTER_PAGE_REFRESH_LISTS_REQUEST_ERROR = 'CLUSTER_PAGE_REFRESH_LISTS_REQUEST_ERROR';

export const CLUSTER_PAGE_SERVER_LIST_ROW_SELECT = 'CLUSTER_PAGE_SERVER_LIST_ROW_SELECT';
export const CLUSTER_PAGE_SERVER_POPUP_CLOSE = 'CLUSTER_PAGE_SERVER_POPUP_CLOSE';

export const CLUSTER_PAGE_REPLICASET_LIST_ROW_SELECT = 'CLUSTER_PAGE_REPLICASET_LIST_ROW_SELECT';
export const CLUSTER_PAGE_REPLICASET_POPUP_CLOSE = 'CLUSTER_PAGE_REPLICASET_POPUP_CLOSE';

export const CLUSTER_PAGE_BOOTSTRAP_VSHARD_REQUEST = 'CLUSTER_PAGE_BOOTSTRAP_VSHARD_REQUEST';
export const CLUSTER_PAGE_BOOTSTRAP_VSHARD_REQUEST_SUCCESS = 'CLUSTER_PAGE_BOOTSTRAP_VSHARD_REQUEST_SUCCESS';
export const CLUSTER_PAGE_BOOTSTRAP_VSHARD_REQUEST_ERROR = 'CLUSTER_PAGE_BOOTSTRAP_VSHARD_REQUEST_ERROR';

export const CLUSTER_PAGE_PROBE_SERVER_REQUEST = 'CLUSTER_PAGE_PROBE_SERVER_REQUEST';
export const CLUSTER_PAGE_PROBE_SERVER_REQUEST_SUCCESS = 'CLUSTER_PAGE_PROBE_SERVER_REQUEST_SUCCESS';
export const CLUSTER_PAGE_PROBE_SERVER_REQUEST_ERROR = 'CLUSTER_PAGE_PROBE_SERVER_REQUEST_ERROR';

export const CLUSTER_PAGE_JOIN_SERVER_REQUEST = 'CLUSTER_PAGE_JOIN_SERVER_REQUEST';
export const CLUSTER_PAGE_JOIN_SERVER_REQUEST_SUCCESS = 'CLUSTER_PAGE_JOIN_SERVER_REQUEST_SUCCESS';
export const CLUSTER_PAGE_JOIN_SERVER_REQUEST_ERROR = 'CLUSTER_PAGE_JOIN_SERVER_REQUEST_ERROR';

export const CLUSTER_PAGE_CREATE_REPLICASET_REQUEST = 'CLUSTER_PAGE_CREATE_REPLICASET_REQUEST';
export const CLUSTER_PAGE_CREATE_REPLICASET_REQUEST_SUCCESS = 'CLUSTER_PAGE_CREATE_REPLICASET_REQUEST_SUCCESS';
export const CLUSTER_PAGE_CREATE_REPLICASET_REQUEST_ERROR = 'CLUSTER_PAGE_CREATE_REPLICASET_REQUEST_ERROR';

export const SHOW_EXPEL_MODAL: 'SHOW_EXPEL_MODAL' = 'SHOW_EXPEL_MODAL'
export const HIDE_EXPEL_MODAL: 'HIDE_EXPEL_MODAL' = 'HIDE_EXPEL_MODAL'

export const CLUSTER_PAGE_EXPEL_SERVER_REQUEST = 'CLUSTER_PAGE_EXPEL_SERVER_REQUEST';
export const CLUSTER_PAGE_EXPEL_SERVER_REQUEST_SUCCESS = 'CLUSTER_PAGE_EXPEL_SERVER_REQUEST_SUCCESS';
export const CLUSTER_PAGE_EXPEL_SERVER_REQUEST_ERROR = 'CLUSTER_PAGE_EXPEL_SERVER_REQUEST_ERROR';

export const CLUSTER_PAGE_REPLICASET_EDIT_REQUEST = 'CLUSTER_PAGE_REPLICASET_EDIT_REQUEST';
export const CLUSTER_PAGE_REPLICASET_EDIT_REQUEST_SUCCESS = 'CLUSTER_PAGE_REPLICASET_EDIT_REQUEST_SUCCESS';
export const CLUSTER_PAGE_REPLICASET_EDIT_REQUEST_ERROR = 'CLUSTER_PAGE_REPLICASET_EDIT_REQUEST_ERROR';

export const CLUSTER_PAGE_UPLOAD_CONFIG_REQUEST = 'CLUSTER_PAGE_UPLOAD_CONFIG_REQUEST';
export const CLUSTER_PAGE_UPLOAD_CONFIG_REQUEST_SUCCESS = 'CLUSTER_PAGE_UPLOAD_CONFIG_REQUEST_SUCCESS';
export const CLUSTER_PAGE_UPLOAD_CONFIG_REQUEST_ERROR = 'CLUSTER_PAGE_UPLOAD_CONFIG_REQUEST_ERROR';

export const CLUSTER_PAGE_APPLY_TEST_CONFIG_REQUEST = 'CLUSTER_PAGE_APPLY_TEST_CONFIG_REQUEST';
export const CLUSTER_PAGE_APPLY_TEST_CONFIG_REQUEST_SUCCESS = 'CLUSTER_PAGE_APPLY_TEST_CONFIG_REQUEST_SUCCESS';
export const CLUSTER_PAGE_APPLY_TEST_CONFIG_REQUEST_ERROR = 'CLUSTER_PAGE_APPLY_TEST_CONFIG_REQUEST_ERROR';

export const CLUSTER_PAGE_FAILOVER_CHANGE_REQUEST = 'CLUSTER_PAGE_FAILOVER_CHANGE_REQUEST';
export const CLUSTER_PAGE_FAILOVER_CHANGE_REQUEST_SUCCESS = 'CLUSTER_PAGE_FAILOVER_CHANGE_REQUEST_SUCCESS';
export const CLUSTER_PAGE_FAILOVER_CHANGE_REQUEST_ERROR = 'CLUSTER_PAGE_FAILOVER_CHANGE_REQUEST_ERROR';

export const CLUSTER_SELF_UPDATE = 'CLUSTER_SELF_UPDATE';

export const CLUSTER_PAGE_STATE_RESET = 'CLUSTER_PAGE_STATE_RESET';

export const SET_BOOSTRAP_VSHARD_PANEL_VISIBLE = 'SET_BOOSTRAP_VSHARD_PANEL_VISIBLE';
export const SET_FAILOVER_MODAL_VISIBLE = 'SET_FAILOVER_MODAL_VISIBLE';
export const SET_PROBE_SERVER_MODAL_VISIBLE = 'SET_PROBE_SERVER_MODAL_VISIBLE';

/* CLUSTER_INSTANCE_PAGE */
export const CLUSTER_INSTANCE_DID_MOUNT = 'CLUSTER_INSTANCE_DID_MOUNT';

export const CLUSTER_INSTANCE_DATA_REQUEST = 'CLUSTER_INSTANCE_DATA_REQUEST';
export const CLUSTER_INSTANCE_DATA_REQUEST_SUCCESS = 'CLUSTER_INSTANCE_DATA_REQUEST_SUCCESS';
export const CLUSTER_INSTANCE_DATA_REQUEST_ERROR = 'CLUSTER_INSTANCE_DATA_REQUEST_ERROR';

export const CLUSTER_INSTANCE_REFRESH_REQUEST = 'CLUSTER_INSTANCE_REFRESH_REQUEST';
export const CLUSTER_INSTANCE_REFRESH_REQUEST_SUCCESS = 'CLUSTER_INSTANCE_REFRESH_REQUEST_SUCCESS';
export const CLUSTER_INSTANCE_REFRESH_REQUEST_ERROR = 'CLUSTER_INSTANCE_REFRESH_REQUEST_ERROR';

export const CLUSTER_INSTANCE_STATE_RESET = 'CLUSTER_INSTANCE_STATE_RESET';

/* Authorization */
export const AUTH_ACCESS_DENIED = 'AUTH_ACCESS_DENIED';

export const AUTH_TURN_REQUEST = 'AUTH_TURN_REQUEST';
export const AUTH_TURN_REQUEST_SUCCESS = 'AUTH_TURN_REQUEST_SUCCESS';
export const AUTH_TURN_REQUEST_ERROR = 'AUTH_TURN_REQUEST_ERROR';

export const AUTH_LOG_IN_REQUEST = 'AUTH_LOG_IN_REQUEST';
export const AUTH_LOG_IN_REQUEST_SUCCESS = 'AUTH_LOG_IN_REQUEST_SUCCESS';
export const AUTH_LOG_IN_REQUEST_ERROR = 'AUTH_LOG_IN_REQUEST_ERROR';

export const AUTH_LOG_OUT_REQUEST = 'AUTH_LOG_OUT_REQUEST';
export const AUTH_LOG_OUT_REQUEST_SUCCESS = 'AUTH_LOG_OUT_REQUEST_SUCCESS';
export const AUTH_LOG_OUT_REQUEST_ERROR = 'AUTH_LOG_OUT_REQUEST_ERROR';

/* Users */
export const SET_ADD_USER_MODAL_VISIBLE = 'SET_ADD_USER_MODAL_VISIBLE';
export const SET_REMOVE_USER_MODAL_VISIBLE = 'SET_REMOVE_USER_MODAL_VISIBLE';
export const SET_EDIT_USER_MODAL_VISIBLE = 'SET_EDIT_USER_MODAL_VISIBLE';
export const SET_AUTH_MODAL_VISIBLE = 'SET_AUTH_MODAL_VISIBLE';

export const USER_STATE_RESET = 'USER_STATE_RESET';
export const USER_ERROR_RESET = 'USER_ERROR_RESET';

export const USER_LIST_REQUEST = 'USER_LIST_REQUEST';
export const USER_LIST_REQUEST_SUCCESS = 'USER_LIST_REQUEST_SUCCESS';
export const USER_LIST_REQUEST_ERROR = 'USER_LIST_REQUEST_ERROR';

export const USER_ADD_REQUEST = 'USER_ADD_REQUEST';
export const USER_ADD_REQUEST_SUCCESS = 'USER_ADD_REQUEST_SUCCESS';
export const USER_ADD_REQUEST_ERROR = 'USER_ADD_REQUEST_ERROR';

export const USER_EDIT_REQUEST = 'USER_EDIT_REQUEST';
export const USER_EDIT_REQUEST_SUCCESS = 'USER_EDIT_REQUEST_SUCCESS';
export const USER_EDIT_REQUEST_ERROR = 'USER_EDIT_REQUEST_ERROR';

export const USER_REMOVE_REQUEST = 'USER_REMOVE_REQUEST';
export const USER_REMOVE_REQUEST_SUCCESS = 'USER_REMOVE_REQUEST_SUCCESS';
export const USER_REMOVE_REQUEST_ERROR = 'USER_REMOVE_REQUEST_ERROR';

/* Config files */

export const FETCH_CONFIG_FILES = 'FETCH_CONFIG_FILES'
export const FETCH_CONFIG_FILES_DONE = 'FETCH_CONFIG_FILES_DONE'
export const FETCH_CONFIG_FILES_FAIL = 'FETCH_CONFIG_FILES_FAIL'

export const FETCH_CONFIG_FILE_CONTENT = 'FETCH_CONFIG_FILE_CONTENT'
export const FETCH_CONFIG_FILE_CONTENT_DONE = 'FETCH_CONFIG_FILE_CONTENT_DONE'
export const FETCH_CONFIG_FILE_CONTENT_FAIL = 'FETCH_CONFIG_FILE_CONTENT_FAIL'

export const PUT_CONFIG_FILE_CONTENT = 'PUT_CONFIG_FILE_CONTENT'
export const PUT_CONFIG_FILE_CONTENT_DONE = 'PUT_CONFIG_FILE_CONTENT_DONE'
export const PUT_CONFIG_FILE_CONTENT_FAIL = 'PUT_CONFIG_FILE_CONTENT_FAIL'

export const SELECT_FILE = 'SELECT_FILE'
export const UPDATE_CONTENT = 'UPDATE_CONTENT'
export const SAVE_META_FILE = 'SAVE_META_FILE'
