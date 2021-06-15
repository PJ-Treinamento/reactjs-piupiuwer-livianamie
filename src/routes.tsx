import { BrowserRouter, Route } from 'react-router-dom';
import FeedPage from './pages/FeedPage';
// import LoginPage from './pages/TeacherForm';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/Feed" exact component={FeedPage}/>
      {/* <Route path="/Login" component={LoginPage} /> */}
    </BrowserRouter>
  )
}

export default Routes;