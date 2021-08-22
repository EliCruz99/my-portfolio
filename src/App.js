import './App.css';
import Layout from './components/Layout/Layout';
import AboutMe from './screens/AboutMe/AboutMe';
import Contact from './screens/ContactMe/Contact';
import Landing from './screens/LandingScreen/Landing';
import Project from './screens/Projects/Project';

function App() {
  return (
    <div className="App">
      <Layout>
        <Landing />
        <AboutMe />
        <Project />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
