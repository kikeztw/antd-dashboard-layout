import React, {
  lazy, Suspense, useState, useEffect,
} from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';


const Signin = lazy(() => import('../../pages/SignIn'));
const Signup = lazy(() => import('../../pages/SignUp'));
const MainApp = lazy(() => import('../MainApp'));

const App = (props) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/" component={MainApp} />
      </Switch>
    </Suspense>
  );
};


export default withRouter(App);
