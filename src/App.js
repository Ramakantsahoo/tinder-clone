import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    // BEM class naming convention.
    <div className="app">
      <Header />
      <Router>
        <Switch>
          {/* Always have your default route at bottom */}
          <Route path="/chat">
            <h1>Chat page</h1>
          </Route>
          <Route path="/">
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
