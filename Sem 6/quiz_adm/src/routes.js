import { createBrowserHistory } from 'history'

const routes = {
  '/': 'Home',
  '/dashboard': 'Dashboard',
  '/subject/list': 'Listing Subject',
  '/subject/new': 'New Subject',
  '/user/list': 'Listing User',
  'user/new': 'New User'
};
export default routes;
export const history = createBrowserHistory();