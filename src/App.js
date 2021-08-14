import './App.css';
import Layout from './components/Layout/Layout';
import AboutMe from './screens/AboutMe/AboutMe';
import Contact from './screens/ContactMe/Contact';
import Landing from './screens/LandingScreen/Landing';
import Project from './screens/Projects/Project';
import Tech from './screens/TechStack/Tech';

function App() {
  return (
    <div className="App">
      <Layout>
        <Landing />
        <AboutMe />
        <Tech />
        <Project />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
