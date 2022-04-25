function parseDate (date) {
  return new Date(date.split('/').reverse().join('/'));
}

export function sortJobs (jobs, {
  category,
  order
}) {
  return jobs.sort((a, b) => {
    let sortBy = '';
    switch (category) {
      case 'Location':
        sortBy = 'locationName';
        break;
      case 'Salary':
        sortBy = 'minimumSalary';
        break;
      case 'Expiry Date':
        sortBy = 'expirationDate';
        break;
      case 'Posted Date':
        sortBy = 'date';
        break;
      case 'Job Title':
        sortBy = 'jobTitle';
        break;
      default:
        sortBy = 'jobTitle';
    }

    let direction;
    if (sortBy === 'expirationDate' || sortBy === 'date') {
      direction = parseDate(a[sortBy]) - parseDate(b[sortBy]);
    } else if (typeof a[sortBy] === 'string') {
      if (a[sortBy].toLowerCase() > b[sortBy].toLowerCase()) direction = 1;
      else direction = -1;
    } else {
      direction = a[sortBy] - b[sortBy];
    }
    if (order === 'asc') return direction;
    return -direction;
  })
}
