import './App.css';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import { Route, Switch } from 'react-router-dom';
import Users from './Users';
import CreateUsers from './CreateUsers';
import EditUsers from './EditUser';
import Profile from './Profile';
import EditProfile from './EditProfile';

function App() {
  return (
    <div className="App">
      <div className="container-fluid navbar-container p-3  mb-4">
        <Navbar />
      </div>
      <div className="container">
        <div className="row">
          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/users" component={Users} exact />
            <Route path="/create-user" component={CreateUsers} exact />
            <Route path="/edit-user/:id" component={EditUsers} exact />
            <Route path="/profile/:id" component={Profile} exact />
            <Route path="/edit-profile/:id" component={EditProfile} exact />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;