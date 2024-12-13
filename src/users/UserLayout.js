import React from "react";
import { Outlet } from "react-router-dom";
import { AppHeader, AppSidebar } from "./components";
import { Provider } from 'react-redux'
import store from './store'
import './scss/style.scss'

export default function UserLayout() {
    return (
        <>
            <Provider store={store}>
                <AppSidebar />
                <div className="wrapper d-flex flex-column min-vh-100">
                    <AppHeader />
                    <div className="body flex-grow-1">
                        <Outlet />
                    </div>
                </div>
            </Provider>
        </>

    )
}