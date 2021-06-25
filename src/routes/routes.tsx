import { BrowserRouter, Switch } from 'react-router-dom';

import FeedPage from '../pages/FeedPage';
import LoginPage from '../pages/LoginPage';

import Redirection from './redirect';
import Route from './Route';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route isPrivate path="/feed" component={FeedPage}/>
        <Route component={Redirection}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;