'use strict';
import db from './index';

export const getAllJobsHelper = async() =>  {
  return await db.Jobs.findAll();
}

export const destroyJobs = async () => {
  return await db.Jobs.destroy({});
};



// export default { getAllJobs };


// async function destroyJobs() {
//   return await db.Jobs.destroy({} );
// }