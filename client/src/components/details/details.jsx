// Package imports
import { useParams } from 'react-router-dom';

// Local imports
import Sidebar from '../sidebar/sidebar';

function Details () {
  const { jobId } = useParams();
  return (
    <main>
      <Sidebar />
      <p>
        Details! {jobId}
      </p>
    </main>
  );
}

export default Details;
