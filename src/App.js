import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import CreateRating from './components/CreateRating';
import RatingList from './components/RatingList';

const App = () => {
  return (
      <BrowserRouter>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <NavLink to="/" className="navbar-brand">Coffee Ratings</NavLink>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                          <NavLink className="nav-link" activeStyle={{ fontWeight: 'bold' }} to="/" exact>All Ratings</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className="nav-link" activeStyle={{ fontWeight: 'bold' }} to="/create">New Rating</NavLink>
                      </li>
                  </ul>
              </div>
          </nav>
          <div className="container">
              <br />
              <Route path="/" exact component={RatingList}></Route>
              <Route path="/create" exact component={CreateRating}></Route>
              {/* <Route path="/details/:id" exact component={PostDetails}></Route>
              <Route path="/delete/:id" exact component={DeletePost}></Route>
              <Route path="/edit/:id" exact component={EditPost}></Route> */}
          </div>
      </BrowserRouter>
  );
}

export default App;
