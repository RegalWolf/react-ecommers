import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import SignInPage from './pages/SignInPage/SignInPage';
import { auth } from './utils/Firebase/Firebase';

const App = () => {
  const [currentUser, setCurrentUser] = useState('null');
  const [born, setBorn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (born) {
      auth.onAuthStateChanged(user => {
        setCurrentUser(user);
      });
    } else if (!born && currentUser !== 'null') {
      setCurrentUser(null);
    } else if (!born) {
      setBorn(true);
    }
  }, [born, currentUser]);

  const render = useMemo(() => {
    if (!loading) {
      return (
        <BrowserRouter>
          <Header currentUser={currentUser}/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path='/signin' component={SignInPage} />
          </Switch>
          {console.log(currentUser)}
        </BrowserRouter>
      )
    } else {
      setLoading(false);
      return <div>Loading...</div>
    }
  }, [currentUser, loading]);

  return (
    <>
      {render}
    </>
  )
};

export default App;
