import './App.css';
import { Switch, Route } from "react-router-dom";
import Billing from './pages/Billing';
import Patient from './pages/Patient';
import Dashboard from './pages/Dashboard';
import Appointment from './pages/Appointment';
import Sidebar from './components/Sidebar';
import Invoice from './components/Invoice';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Sidebar} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/patient' component={Appointment} />
        <Route path='/appointment' component={Appointment} />
        <Route path='/billing' component={Billing} />
        <Route path='/invoice' component={Invoice} />

      </Switch>
    </>
  );
}

export default App;
