import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FocusStyleManager } from '@blueprintjs/core';

import Jobs from './components/jobs/jobs';
import Error from './components/small/error/error';
import Welcome from './components/welcome/welcome';
import { GeneralProvider } from './components/contexts/contexts';

import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import './App.scss';

FocusStyleManager.onlyShowFocusOnTabs();

function App() {
  return (
    <>
      <GeneralProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </Router>
      </GeneralProvider>
    </>
  );
}

export default App;
