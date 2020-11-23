import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Reservation from './components/Reservation';
import AboutSection from './pages/AboutSection';
import NewsSection from './pages/NewsSection';
import NewPage from './components/NewsPage';
import Contact from './components/ContactUs';
//Router
import { Switch, Route } from 'react-router-dom';

function App() {
  const [isReservationClose, setIsReservationClose] = useState(true);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  return (
    <div className="App">
      <Navbar isNavCollapsed={isNavCollapsed} setIsNavCollapsed={setIsNavCollapsed} isReservationClose={isReservationClose} setIsReservationClose={setIsReservationClose}/>
      <Reservation isReservationClose={isReservationClose} setIsReservationClose={setIsReservationClose}/>
      <Switch>
        <Route path="/" exact >
          <AboutSection isReservationClose={isReservationClose} setIsReservationClose={setIsReservationClose}/>
        </Route>
        <Route path="/news" exact>
          <NewsSection />
        </Route>
        <Route path="/news/id/1" exact>
          <NewPage />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
