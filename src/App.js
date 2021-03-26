
import "./App.css";
import PaginationComponent from "./components/PaginationComponent";
import PaginationWithRouter from "./components/PaginationWithRouter/PaginationWithRouter";
import PaginationReactPaginate from './components/PaginationReactPaginate/PaginationReactPaginate'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <div className="App-header">
      <nav>
          <ul>
            <li>
              <Link to="/">Pagination with Router</Link>
            </li>
            <li>
              <Link to="/react-paginate">Pagination with Router + React-paginate</Link>
            </li>
            <li>
              <Link to="/basic">Basic pagination</Link>
            </li>

          </ul>
        </nav>
      </div>
          <Switch>
          <Route path="/" exact>
              <PaginationWithRouter/>
          </Route>
          <Route path="/react-paginate">
              <PaginationReactPaginate />
          </Route>
          <Route path="/basic">
              <PaginationComponent />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
