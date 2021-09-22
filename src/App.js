import "./App.css"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Navigation from "./components/shared/Navigation/Navigation"
import Authenticate from "./Pages/Authenticate/Authenticate"
import Activate from "./Pages/Activate/Activate"
import Rooms from "./Pages/Rooms/Rooms"
import { useSelector } from "react-redux"
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefresh"
import Loader from "./components/shared/Loader/Loader"

function App() {
 const {loading}= useLoadingWithRefresh();
  //call refresh endpoint ane anna mate custom hooks use karya che
  return loading ? (
    <Loader message="Loading, Please Wait....." />
  ) : (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <GuestRoute path="/" exact>
          <Home />
        </GuestRoute>
        <GuestRoute path="/authenticate">
          <Authenticate />
        </GuestRoute>
        <SemiProtectedRoute path="/activate">
          <Activate />
        </SemiProtectedRoute>
        <ProtectedRoute path="/rooms">
          <Rooms />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  )
}
const GuestRoute = ({ children, ...rest }) => {
  const { isAuth } = useSelector(state => state.auth)
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuth ? (
          <Redirect
            to={{
              pathname: "/rooms",
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }}
    ></Route>
  )
}
const SemiProtectedRoute = ({ children, ...rest }) => {
  const { user, isAuth } = useSelector(state => state.auth)
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !isAuth ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : isAuth && !user.activated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }}
    ></Route>
  )
}
const ProtectedRoute = ({ children, ...rest }) => {
  const { user, isAuth } = useSelector(state => state.auth)
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !isAuth ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : isAuth && !user.activated ? (
          <Redirect
            to={{
              pathname: "/activate",
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }}
    ></Route>
  )
}

export default App