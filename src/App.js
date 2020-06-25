import React from 'react';
import AdminRoutes from './routes/adminRoutes';
import { withRouter } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <AdminRoutes />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
