



import { Suspense } from 'react';
import {  Outlet } from 'react-router-dom';
import { Header } from "../Header/Header.jsx";
import { Footer } from "../Header/Footer/Footer.jsx";
import { Loader } from "components/Loader/Loader";
import { Container } from "../Container/Container.jsx";


export const SharedLayout = () => {

    return (
        <div>
            <Container>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
        <Footer />
      </Container>
        </div>)
}