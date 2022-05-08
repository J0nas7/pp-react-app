import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { GuestRoute } from './hoc/guest-route'
import { PrivateRoute } from './hoc/private-route'

import Home from './pages/Home'
import ReadOrder from './pages/ReadOrder'

import Login from './pages/Login'
import Forgot from './pages/Forgot'
import Register from './pages/Register'
import Recover from './pages/Recover'

import NotFound from './pages/NotFound'

const domain = ''

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path={domain+'/'} element={<PrivateRoute />}>
            <Route exact path={domain+'/'} element={<Home />}/>
          </Route>
          <Route exact path={domain+'/order/:orderId'} element={<PrivateRoute />}>
            <Route exact path={domain+'/order/:orderId'} element={<ReadOrder />}/>
          </Route>

          <Route exact path={domain+'/login'} element={<GuestRoute />}>
            <Route exact path={domain+'/login'} element={<Login />}/>
          </Route>
          <Route exact path={domain+'/register'} element={<GuestRoute />}>
            <Route exact path={domain+'/register'} element={<Register />}/>
          </Route>
          <Route exact path={domain+'/forgot'} element={<GuestRoute />}>
            <Route exact path={domain+'/forgot'} element={<Forgot />}/>
          </Route>
          <Route exact path={domain+'/recover'} element={<GuestRoute />}>
            <Route exact path={domain+'/recover'} element={<Recover />}/>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default App;
