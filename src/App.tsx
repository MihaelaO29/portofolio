import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Projects from './components/projects/project';
import Navigation from './components/navigation/navigation';
import { useEffect } from 'react';
import writeUserData from './utils/firebase-utils';
import { LAST_VISIT_TIME, USER_ID } from './utils/constants';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

function App() {
  useEffect(() => {
    // If user doesn't have and id generat and set one
    if (!localStorage.getItem(USER_ID)) {
      localStorage.setItem(USER_ID, uuidv4())
    }

    // If user never visited the website before
    if (!localStorage.getItem(LAST_VISIT_TIME)) {
      // Set the time as last login time 
      localStorage.setItem(LAST_VISIT_TIME, moment.now() + '');
      writeUserData();
    } else {
      // If user visited the website before
      const lastLoginTime = moment(Number(localStorage.getItem(LAST_VISIT_TIME)));
      // If 10 minutes passed since last visit
      if (lastLoginTime.add(10, 'minutes').isBefore(moment.now())) {
        localStorage.setItem(LAST_VISIT_TIME, moment.now() + '');
        writeUserData();
      }
    }
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
