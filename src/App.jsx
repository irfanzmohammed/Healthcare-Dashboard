
import './App.css'
import Header from './components/Header/Header.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import DashboardMainContent from './components/Dashboard/DashboardMainContent.jsx'
import { navItems } from './data/navItems.js'


function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
          <Sidebar navItems={navItems} /> 
           <DashboardMainContent /> 
      </div>
      
    </div>
  );
}


export default App
