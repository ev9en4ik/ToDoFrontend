import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './index.css';
import Home from "./components/screens/Home/Home";
import Collections from "./components/screens/Collections/Collections";
import CollectionTasks from "./components/screens/CollectionTasks/CollectionTasks";
import Dashboard from "./components/screens/Dashboard/Dashboard";
import NotFound from "./components/screens/404/NotFound";
import Authorize from "./components/screens/Authorize/Authorize";
import WelcomeLayout from "./components/layout/WelcomeLayout";
import EnterEmail from "./components/screens/ForgotPassword/EnterEmail";
import Layout from "./components/layout/Layout";
import AboutUs from "./components/screens/AboutUs/AboutUs";
import Profile from "./components/screens/Profile/Profile";
import LogIn from "./components/screens/Authorize/LogIn/LogIn";
import SignIn from "./components/screens/Authorize/SignIn/SignIn";

const root = ReactDOM.createRoot(document.getElementById('root'));

// useEffect(() => {
//     try {
//         const auth = JSON.parse(localStorage.getItem('auth'));
//         if (auth?.successful) {
//             if (!authState?.successful || auth.accessToken !== authState.accessToken) {
//                 dispatch(setAuthState(auth));
//                 dispatch(setJwtState(jwt(auth.accessToken)));
//                 dispatch(getUserThunk());
//             }
//         } else if (authState?.successful) {
//             if (!auth?.successful || auth.accessToken !== authState.accessToken) {
//                 localStorage.setItem('auth', JSON.stringify(authState));
//                 dispatch(setJwtState(jwt(authState.accessToken)));
//                 dispatch(getUserThunk());
//             }
//         }
//     } catch (err) {
//         console.error(err);
//         localStorage.clear();
//     }
// }, [authState]);

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <>
                    <Route path="/" element={<WelcomeLayout><Home/></WelcomeLayout>}/>
                    <Route path="authorize/sign-in" element={<Authorize><SignIn/></Authorize>}/>
                    <Route path="authorize/log-in" element={<Authorize><LogIn/></Authorize>}/>
                    <Route path="forgot-password" element={<WelcomeLayout><EnterEmail/></WelcomeLayout>}/>
                    <Route path="about-us" element={<WelcomeLayout><AboutUs/></WelcomeLayout>}/>
                </>
                <>
                    <Route path="collections" element={<Layout><Collections/></Layout>}/>
                    <Route path="collection/:id" element={<Layout><CollectionTasks/></Layout>}/>
                    <Route path="dashboard" element={<Layout><Dashboard/></Layout>}/>
                    <Route path="profile" element={<Layout><Profile/></Layout>}/>
                </>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </Router>
    </React.StrictMode>
);

