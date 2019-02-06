import { connect } from 'react-redux';

import { selectServer } from 'src/store/actions/clusterPage.actions';
import ServerList from './ServerList';

const mapStateToProps = state => {
  const {
    clusterPage: {
      selectedServers,
    },
  } = state;

  return {
    selectedServers,
  };
};

const mapDispatchToProps = {
  selectServer
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerList);
