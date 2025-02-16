import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Projects from './components/frontend/frontend';
import Design from './components/design/design';
import Navigation from './components/navigation/navigation';
import { useEffect } from 'react';
import writeUserData from './utils/firebase-utils';
import { LAST_VISIT_TIME, USER_ID } from './utils/constants';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DesignProject from './components/design-project/design-project';
import Frontend from './components/frontend/frontend';

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
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/design" element={<Design />} />
          <Route path="/design-project" element={<DesignProject />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;
