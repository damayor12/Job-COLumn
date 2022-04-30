// Package imports
import { useEffect, useState } from 'react';
import { Divider, MaybeElement } from '@blueprintjs/core';

// Local imports
import { useFilterContext } from '../contexts/filter';
import { useFilteredJobsContext } from '../contexts/filteredJobs';
import { useJobsContext } from '../contexts/jobs';
import { useSortContext } from '../contexts/sort';
import { useThemeContext } from '../contexts/theme';
import { useUserContext } from '../contexts/user';
import {
  Footer,
  HeaderAndLogo
} from '../helpers';
import Back from '../small/buttons/backButton';
import SecondaryButton from '../small/buttons/secondaryButton';
import ToggleDarkMode from '../small/buttons/toggleDarkMode';
import {
  filterJobs,
  filtersDefined,
  sortJobs,
  sortDefined,
  userDetails
} from '../helpers/sidebar';

// Styling
import css from '../contexts/themes.scss';
import './sidebar.scss';

const largeScreen = window.innerWidth >= css.mobile.split('p')[0];

const Sidebar: React.FC = () => {
  // Contexts and states
  const [darkMode] = useThemeContext();
  const [user] = useUserContext();
  const [filters, setFilters] = useFilterContext();
  const [sort, setSort] = useSortContext();
  const [jobs] = useJobsContext();
  const [, setFilteredJobs] = useFilteredJobsContext();
  const [navbarVisible, setNavbarVisible] = useState<boolean>(true);

  // Filter setter functions
  function keywordsOnChange (e : React.ChangeEvent<HTMLInputElement>) {
    setFilters({
      ...filters,
      keywords: e.target.value
    });
  }

  function numericOnChange (value: number) {
    setFilters({
      ...filters,
      salary: value
    });
  }

  // Sort setter function
  function sortOnClick () {
    setSort({
      ...sort,
      order: `${sort.order === 'asc' ? 'desc' : 'asc'}`
    })
  }

  // Navbar visibility setter function
  function toggleNavbar () {
    setNavbarVisible(!navbarVisible)
  }

  // Fix navbar loses visibility bug
  function bringBackSidebar () {
    if (largeScreen) setNavbarVisible(true);
  }

  useEffect(() => {
    window.addEventListener('resize', bringBackSidebar);
    return () => {
      window.removeEventListener('resize', bringBackSidebar);
    }
  }, []);

  // Job filter and sort function
  function filterAndSort () {
    setFilteredJobs(sortJobs(filterJobs(jobs, filters), sort));
  }

  return (
    <nav className='background-color'>
      {/* Header and visibility toggle */}
      <div>
        <HeaderAndLogo />
        <Divider />
        <SecondaryButton
          ariaLabel='Toggle navbar button'
          icon={'menu' as unknown as MaybeElement}
          id='toggle-sidebar'
          onClick={toggleNavbar}
        />
      </div>
      {navbarVisible && <>
        <ToggleDarkMode text={`${darkMode ? 'Light Mode' : 'Dark Mode'}`} />
        <Divider />
        {/* User details */}
        {userDetails(user)}
        {/* Filter options */}
        <Divider />
        {filtersDefined({
          keywords: filters.keywords,
          keywordsOnChange,
          numericOnChange
        })}
        <Divider />
        {/* Sort options */}
        {sortDefined({
          filterAndSort,
          sortOrder: sort.order,
          sortOnClick
        })}
        <Divider />
        <Back />
        <Divider />
        <Footer />
      </>}
    </nav>
  );
}

export default Sidebar;
