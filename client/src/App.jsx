// Package imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FocusStyleManager } from "@blueprintjs/core";

// Local imports
import './App.scss';
import Welcome from './components/welcome/welcome';
import Jobs from './components/jobs/jobs';
import Details from './components/details/details';
import Error from './components/error/error';

// Styling
// ? Removing this changes nothing?
import '../node_modules/normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

// Accessibility
FocusStyleManager.onlyShowFocusOnTabs();

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/jobs/:jobId' element={<Details />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
