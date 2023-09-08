import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./component/base/Layout";
import Books from "./pages/books";
import { useAppSelector } from "./containers/store";
import { useEffect } from "react";
import { getToken } from "./utilities/cookies";
import { useDispatch } from "react-redux";
import { login, loginSuccess } from "./containers/Auth/actions";
import './App.css';
import About from "./pages/About";
import Eiga from "./pages/Eiga";
import Seikaku from "./pages/Seikaku";
import Shashin from "./pages/Shashin";
import Kurumi from "./pages/Kurumi";
import Login from "./pages/signIn";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getToken();
    if(token) {
      dispatch(loginSuccess());
    }
  }, [])
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <PrivateRoute
              exact
              path="/Book"
              component={Books}
              isAuthenticated={false}
            />
            <Route exact path="/Eiga" component={Eiga} />
            <Route exact path="/Shashin" component={Shashin} />
            <Route exact path="/Seikaku" component={Seikaku} />
            <Route exact path="/Kurumi" component={Kurumi} />
            <Route exact path="/signin" component={Login} />
            <Route exact path="/" component={About} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  const isAuth = useAppSelector((state) => state.authReducer.isAuth);
  useEffect(() => {
    console.log('PrivateRoute', isAuth)
  }, [isAuth])

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/sign-in", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default App;
