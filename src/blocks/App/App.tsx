import { Routes, Route } from 'react-router-dom';

import './App.scss';

import PageHeader from '../../containers/PageHeader/PageHeader';
import MainView from '../../containers/MainView/MainView';
import ContributionsView from '../../containers/ContributionsView/ContributionsView';
import BuildingsView from '../../containers/BuildingsView/BuildingsView';

import { useAppDispatch } from "../../store/hooks";
import { loadPlayers } from "../../store/asyncActions";
import { useEffect } from "react";

function App() {
  const isDev = process.env.NODE_ENV === 'development' ? true : false;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadPlayers());
  })

  return (
    <div className="App">
      <PageHeader />
      <Routes>
        <Route path={isDev ? "/" : '/golden-banana/'} element={<MainView />} />
        <Route path={isDev ? "/contributions" : '/golden-banana/contributions'} element={<ContributionsView />} />
        <Route path={isDev ? "/buildings" : '/golden-banana/buildings'} element={<BuildingsView />} />
      </Routes>
    </div>
  );
}

export default App;
