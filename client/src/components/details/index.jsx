// Package imports
import { Outlet, useParams } from 'react-router-dom';

// Local imports

function Details () {
  const { jobId } = useParams();
  return (
    <div>
      <p>
        Details! {jobId}
      </p>
      {/* Do I even need it here? */}
      <Outlet />
    </div>
  );
}

export default Details;
