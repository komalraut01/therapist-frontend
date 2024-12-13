import Home from "./Components/Home";
import Test from "./Components/Test";
import AboutUs from "./Components/AboutUs";
import Doctors from "./Components/Docters";
import About from "./Components/About";

import Dashboard from "./users/views/dashboard/Dashboard";
import Appointments from "./users/views/appointments/Appointments";
import UserProfile from "./users/views/profile/Profile";
import UserLogin from "./users/views/pages/login/Login";
import UserRegister from "./users/views/pages/register/Register";
import UserLogout from "./users/views/Logout";

import DoctorLogin from "./doctors/views/pages/login/Login";
import DoctorRegister from "./doctors/views/pages/register/Register";
import DoctorLogout from "./doctors/views/Logout";
import DoctorProfile from "./doctors/views/profile/Profile";
import DoctorDashboard from "./doctors/views/dashboard/Dashboard";
import DoctorAppointmentNew from "./doctors/views/appointments/AppointmentsNew";
import DoctorAppointmentAccepted from "./doctors/views/appointments/AppointmentAccepted";

import AdminLogin from "./admin/views/pages/login/Login";
import AdminDashboard from "./admin/views/dashboard/Dashboard";
import AdminDoctorList from "./admin/views/doctors/Doctors";
import AdminUserList from "./admin/views/users/Users";
import AdminNewAppointments from "./admin/views/appointments/NewAppointments";
import AdminAcceptedAppointments from "./admin/views/appointments/AcceptedAppointments";
import AdminRejectedAppointments from "./admin/views/appointments/RejectedAppointments";

export const router = [
    {
        path: '/',
        name: 'Home',
        element: <Home />,
        exact: true,
        strict: false,
    },
    {
        path: '/test',
        name: 'Test',
        element: <Test />,
        exact: true,
        strict: false,
    },
    {
        path: '/aboutus',
        name: 'AboutUs',
        element: <AboutUs />,
        exact: true,
        strict: false,
    },
    {
        path: '/doctors',
        name: 'doctors',
        element: <Doctors />,
        exact: true,
        strict: false,
    },
    {
        path: '/about',
        name: 'about',
        element: <About />,
        exact: true,
        strict: false,
    },
    {
        path: '/user-login',
        name: 'User Login',
        element: <UserLogin />,
        exact: true,
        strict: false,
        layout: false
    },
    {
        path: '/user-register',
        name: 'User Register',
        element: <UserRegister />,
        exact: true,
        strict: false,
        layout: false
    },
    {
        path: '/doctor-login',
        name: 'User Login',
        element: <DoctorLogin />,
        exact: true,
        strict: false,
        layout: false
    },
    {
        path: '/doctor-register',
        name: 'User Register',
        element: <DoctorRegister />,
        exact: true,
        strict: false,
        layout: false
    },
    {
        path: '/admin-login',
        name: 'Admin Login',
        element: <AdminLogin />,
        exact: true,
        strict: false,
        layout: true
    },
]

export const userRoute = [
    {
        path: '/user/profile',
        name: 'User Profile',
        element: <UserProfile />,
        exact: true,
        strict: false,
        layout: true
    },
    {
        path: '/user/dashboard',
        name: 'User Dashboard',
        element: <Dashboard />,
        exact: true,
        strict: false,
        layout: true
    },
    {
        path: '/user/appointments',
        name: 'User Appointment',
        element: <Appointments />,
        exact: true,
        strict: false,
        layout: true
    },
    {
        path: '/user/logout',
        name: 'User Logout',
        element: <UserLogout />,
        exact: true,
        strict: false,
        layout: true
    },
]

export const doctorRoute = [
    {
        path: '/doctor/dashboard',
        name: 'Doctor Dashboard',
        element: <DoctorDashboard />,
        exact: true,
        strict: false,
        layout: true
    },
    {
        path: '/doctor/profile',
        name: 'Doctor Profile',
        element: <DoctorProfile />,
        exact: true,
        strict: false,
        layout: true
    },
    {
        path: '/doctor/appointments/new',
        name: 'Doctor Appointments New',
        element: <DoctorAppointmentNew />,
        exact: true,
        strict: false,
        layout: true
    },
    {
        path: '/doctor/appointments/accepted',
        name: 'Doctor Appointments Accept',
        element: <DoctorAppointmentAccepted />,
        exact: true,
        strict: false,
        layout: true
    },
    {
        path: '/doctor/logout',
        name: 'Doctor Logout',
        element: <DoctorLogout />,
        exact: true,
        strict: false,
        layout: true
    },
]

export const adminRoute = [
    {
        path: '/admins/dashboard',
        name: 'Admin Dashboard',
        element: <AdminDashboard />,
        exact: true,
        strict: false,
        layout: true
    },
    {
        path: '/admins/appointments/new',
        name: 'New Appointments',
        element: <AdminNewAppointments />,
        exact: true,
        strict: false,
        layout: true
    },
    {
        path: '/admins/appointments/accepted',
        name: 'Accepted Appointments',
        element: <AdminAcceptedAppointments />,
        exact: true,
        strict: false,
        layout: true
    },
    {
        path: '/admins/appointments/rejected',
        name: 'Rejected Appointments',
        element: <AdminRejectedAppointments />,
        exact: true,
        strict: false,
        layout: true
    },
    {
        path: '/admins/doctors',
        name: 'Doctor List',
        element: <AdminDoctorList />,
        exact: true,
        strict: false,
        layout: true
    },
    
    {
        path: '/admins/users',
        name: 'User List',
        element: <AdminUserList />,
        exact: true,
        strict: false,
        layout: true
    },
]