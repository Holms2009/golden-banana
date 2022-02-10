import { Routes, Route } from 'react-router-dom';

import './App.scss';

import PageHeader from '../../containers/PageHeader/PageHeader';
import MainView from '../../containers/MainView/MainView';
import ContributionsView from '../../containers/ContributionsView/ContributionsView';
import BuildingsView from '../../containers/BuildingsView/BuildingsView';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/contributions" element={<ContributionsView />} />
        <Route path="/buildings" element={<BuildingsView />} />
      </Routes>
    </div>
  );
}

export default App;
