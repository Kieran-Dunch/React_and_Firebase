import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Navbar from "./components/Navbar";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

import './index.css'

function App() {
  const { authIsReady, user } = useAuthContext()
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {!user && <Redirect to='/login'/>}
              { user && <Home />}
            </Route>
            <Route path="/signup">
            {user && <Redirect to='/'/>}
            {!user && <Signup />}
            </Route>
            <Route path="/login">
             {user && <Redirect to='/'/>}
             {!user && <Login /> }
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
