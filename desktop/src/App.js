import React from "react";
import { HelmetProvider } from "react-helmet-async";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
//Pages
import ChangePassword from "./pages/ChangePassword";
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import TopicJobs from "./pages/TopicJobs";
import TopicNews from "./pages/TopicNews";
import Topics from "./pages/Topics";

function App() {
  return (
    <HelmetProvider>
      <Router> 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/change-password/:changeid" component={ChangePassword} />
        <Route path="/contact" component={Contact} />
        <Route path="/topics" component={Topics} />
        <Route path="/topic/:topicname/news" component={TopicNews} />
        <Route path="/topic/:topicname/jobs" component={TopicJobs} />
        <Route path="/settings" component={Settings} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </Router>

    </HelmetProvider>
    
  );
}

export default App;
