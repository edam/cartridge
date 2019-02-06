import { connect } from 'react-redux';

import { selectServer } from 'src/store/actions/clusterPage.actions';
import ServerList from './ServerList';

const mapDispatchToProps = {
  selectServer
};

export default connect(null, mapDispatchToProps)(ServerList);
