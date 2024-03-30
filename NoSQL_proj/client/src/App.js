import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import AddPassenger from './pages/AddPassenger';
import AddTrain from './pages/AddTrain';
import AddTicket from './pages/AddTicket';
import Analytics from './pages/Analytics';
import Query1 from './pages/query1';
import Query2 from './pages/query2';
import Query3 from './pages/query3';
import Query4 from './pages/query4';
import Query5 from './pages/query5';
import Startpage from './pages/startpage';
import AdminLogin from './pages/adminlogin';
import UserLogin from './pages/userlogin';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path ='/' element = {<Startpage/>}/>
      <Route path="/add-passenger" element={<AddPassenger />} />
      <Route path="/add-train" element={<AddTrain />} />
      <Route path="/add-ticket" element={<AddTicket />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/query1" element={<Query1 />} />
      <Route path="/query2" element={<Query2 />} />
      <Route path="/query3" element={<Query3 />} />
      <Route path="/query4" element={<Query4 />} />
      <Route path="/query5" element={<Query5 />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/start-page" element={<HomePage />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;