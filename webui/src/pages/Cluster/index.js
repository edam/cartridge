import { connect } from 'react-redux';

import { evalString, saveConsoleState } from 'src/store/actions/app.actions';
import { createMessage } from 'src/store/actions/app.actions';
import { pageDidMount, selectListRowOnJoin, closeServerPopup, selectReplicaset, closeReplicasetPopup, bootstrapVshard,
  probeServer, joinServer, createReplicaset, expelServer, editReplicaset, uploadConfig, applyTestConfig,
  changeFailover, resetPageState, setVisibleBootstrapVshardModal, disableServers } from 'src/store/actions/clusterPage.actions';
import Cluster from './Cluster';

const mapStateToProps = state => {
  const {
    app: {
      clusterSelf,
      failover,
      evalResult,
      savedConsoleState,
    },
    clusterPage: {
      pageMount,
      pageDataRequestStatus,
      selectedServerUri,
      selectedReplicasetUuid,
      serverList,
      replicasetList,
      serverStat,
      canTestConfigBeApplied,
      selectedServers,
    },
    ui: {
      showBootstrapModal,
    }
  } = state;

  return {
    clusterSelf,
    failover,
    evalResult,
    savedConsoleState,
    pageMount,
    pageDataRequestStatus,
    selectedServerUri,
    selectedReplicasetUuid,
    serverList,
    replicasetList,
    serverStat,
    canTestConfigBeApplied,
    showBootstrapModal,
    selectedServers,
  };
};

const mapDispatchToProps = {
  evalString,
  saveConsoleState,
  pageDidMount,
  selectListRowOnJoin,
  closeServerPopup,
  selectReplicaset,
  closeReplicasetPopup,
  bootstrapVshard,
  probeServer,
  joinServer,
  createReplicaset,
  expelServer,
  editReplicaset,
  uploadConfig,
  applyTestConfig,
  createMessage,
  changeFailover,
  resetPageState,
  setVisibleBootstrapVshardModal,
  disableServers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cluster);
