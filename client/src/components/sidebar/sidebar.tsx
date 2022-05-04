import { useEffect, useState } from 'react';
import { Divider, MaybeElement } from '@blueprintjs/core';
import { useGeneralContext } from '../contexts/contexts';
import { Footer, HeaderAndLogo } from '../helpers';
import Back from '../small/buttons/backButton';
import SecondaryButton from '../small/buttons/secondaryButton';
import ToggleDarkMode from '../small/buttons/toggleDarkMode';
import { filterJobs, filtersDefined, sortJobs, sortDefined, userDetails } from '../helpers/sidebar';
import css from '../contexts/themes.scss';
import './sidebar.scss';

const largeScreen = window.innerWidth >= css.mobile?.split('p')[0];

const Sidebar: React.FC = () => {
  const {
    theme: [darkMode],
    user: [user],
    filter: [filters, setFilters],
    sort: [sort, setSort],
    jobs: [jobs],
    filteredjobs: [, setFilteredJobs],
  } = useGeneralContext();

  const [navbarVisible, setNavbarVisible] = useState<boolean>(true);

  function keywordsOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFilters({
      ...filters,
      keywords: e.target.value,
    });
  }

  function numericOnChange(value: number) {
    setFilters({
      ...filters,
      salary: value,
    });
  }

  function sortOnClick() {
    setSort({
      ...sort,
      order: `${sort.order === 'asc' ? 'desc' : 'asc'}`,
    });
  }

  function toggleNavbar() {
    setNavbarVisible(!navbarVisible);
  }

  function bringBackSidebar() {
    if (largeScreen) setNavbarVisible(true);
  }

  useEffect(() => {
    window.addEventListener('resize', bringBackSidebar);
    return () => {
      window.removeEventListener('resize', bringBackSidebar);
    };
  }, []);

  function filterAndSort(): void {
    setFilteredJobs(sortJobs(filterJobs(jobs, filters), sort));
  }

  return (
    <nav className="background-color">
      <div>
        <HeaderAndLogo />
        <Divider />
        <SecondaryButton
          ariaLabel="Toggle navbar button"
          icon={'menu' as unknown as MaybeElement}
          id="toggle-sidebar"
          onClick={toggleNavbar}
        />
      </div>
      {navbarVisible && (
        <>
          <ToggleDarkMode text={`${darkMode ? 'Light Mode' : 'Dark Mode'}`} />
          <Divider />
          {userDetails(user)}
          <Divider />
          {filtersDefined({
            keywords: filters.keywords,
            keywordsOnChange,
            numericOnChange,
          })}
          <Divider />
          {sortDefined({
            filterAndSort,
            sortOrder: sort.order,
            sortOnClick,
          })}
          <Divider />
          <Back />
          <Divider />
          <Footer />
        </>
      )}
    </nav>
  );
};

export default Sidebar;
