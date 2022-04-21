// Package imports
import { useParams } from 'react-router-dom';

// Local imports

function Details () {
  const { jobId } = useParams();
  return (
    <div>
      <p>
        Details! {jobId}
      </p>
    </div>
  );
}

export default Details;
