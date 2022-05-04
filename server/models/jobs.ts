'use strict';
import db from './index';

async function getAllJobs () {
  return await db.Jobs.findAll();
}



export default { getAllJobs };


// async function destroyJobs() {
//   return await db.Jobs.destroy({} );
// }