import logo from './logo.svg';
import './App.css';
import { createBrowserHistory } from 'history';

import { Route, Router, Routes, unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

import HomeTemplate from './templates/HomeTemplate'
import Home from './Pages/Home'
import Loadding from './components/Loadding/Loadding'

export const history = createBrowserHistory({ window });

function App() {
  return (
    <HistoryRouter history={history}>
      <Loadding />
      <Routes >
        <Route path='' element={<HomeTemplate />}>
          <Route index path='' element={<Home />}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
