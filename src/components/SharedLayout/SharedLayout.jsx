



import { Suspense } from 'react';
import {  Outlet } from 'react-router-dom';
import { Header } from "../Header/Header.jsx";
import { Footer } from "../Header/Footer/Footer.jsx";
import { Loader } from "components/Loader/Loader"


export const SharedLayout = () => {

    return (
        <div>
            <Header />
            <Suspense fallback={<Loader />}>
            <Outlet /></Suspense>
            <Footer/>
        </div>)
}