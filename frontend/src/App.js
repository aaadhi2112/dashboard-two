import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Profile from './Pages/Profile/Profile';
import Sidebar from './Components/Sidebar/Sidebar';
import BarTop from './Components/BarTop/BarTop';
import GovernmentOverview from './Pages/GovernmentOverview/GovernmentOverview';
import InstituteRegistry from './Pages/InstituteRegistry/InstituteRegistry';
import Academics from './Pages/Academics/Academics';
import InstituteInspection from './Pages/IntituteInspection/InstituteInspection';
import RaiseATicket from './Pages/RaiseATicket/RaiseATicket';
import Communication from './Pages/Communication/Communication';

function App() {


  return (
    <BrowserRouter>
    <Sidebar>
      <BarTop/>
    <Routes>
      <Route path='/' element={<GovernmentOverview/>}/>
      <Route path='/instituteregistery' element={<InstituteRegistry/>}/>
      <Route path='/academics' element={<Academics/>}/>
      <Route path='/instituteinspection' element={<InstituteInspection/>}/>
      <Route path='/raiseaticket' element={<RaiseATicket/>}/>
      <Route path='/communication' element={<Communication/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </Sidebar>
    </BrowserRouter>
  );
}

export default App;
