// Package imports
import { Outlet } from 'react-router-dom';

// Local imports
import Sidebar from '../sidebar';

function Jobs () {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Jobs;
