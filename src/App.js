import React from 'react';
import Navbar from './components/Navbar';
import AboutSection from './pages/AboutSection';
//Router
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact >
          <AboutSection />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
