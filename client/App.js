import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import './App.scss';


// wrapping/composing
const BasicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
);

const Home = function () {
  return <div>Home <Link to="/login">LLL</Link></div>;
}

const Login = function () {
  return <div>Login</div>;
}


export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <BasicRoute exact path="/" component={Home} />
            <BasicRoute path="/login" component={Login} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}
