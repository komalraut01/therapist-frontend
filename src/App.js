import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { router, userRoute, doctorRoute, adminRoute } from "./router";
import { Suspense } from "react";
import './css/style.css';
import './css/animate.css';
import './css/owl.theme.default.min.css';
import './css/magnific-popup.css';
import './css/aos.css';
import './css/bootstrap-datepicker.css';
import './css/jquery.timepicker.css';
import UserLayout from "./users/UserLayout";
import { isLoggedIn } from "./service/auth.service";
import DoctorLayout from "./doctors/DoctorLayout";
import AdminLayout from "./admin/AdminLayout";

function App() {

  const UserPrivateRoute = (props) => {
    if (!isLoggedIn('user')) {
      return <Navigate to="/user-login" replace />
    }
    return <UserLayout {...props} />
  }

  const DoctorPrivateRoute = (props) => {
    if (!isLoggedIn('doctor')) {
      return <Navigate to="/doctor-login" replace />
    }
    return <DoctorLayout {...props} />
  }

  const AdminPrivateRoute = (props) => {
    if (!isLoggedIn('admin')) {
      return <Navigate to="/admin-login" replace />
    }
    return <AdminLayout {...props} />
  }

  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Routes>
            {
              router.map(
                (route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                    exact={route.exact}
                    strict={route.strict}
                  />


                )
              )
            }
            <Route
              path='/user'
              element={<UserPrivateRoute />}
            >
              {userRoute.map(
                (route, indx) => route.element && (
                  <Route
                    key={indx}
                    path={route.path}
                    element={route.element}
                    exact={route.exact}
                    strict={route.strict}
                  />
                ),
              )}
            </Route>
            <Route
              path='/doctor'
              element={<DoctorPrivateRoute />}
            >
              {doctorRoute.map(
                (route, indx) => route.element && (
                  <Route
                    key={indx}
                    path={route.path}
                    element={route.element}
                    exact={route.exact}
                    strict={route.strict}
                  />
                ),
              )}
            </Route>
            <Route
              path='/admins'
              element={<AdminPrivateRoute />}
            >
              {adminRoute.map(
                (route, indx) => route.element && (
                  <Route
                    key={indx}
                    path={route.path}
                    element={route.element}
                    exact={route.exact}
                    strict={route.strict}
                  />
                ),
              )}
            </Route>
          </Routes>

        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
