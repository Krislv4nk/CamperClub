// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
// import { Header } from 'components/Header/Header';

// const SharedLayout = () => {
//   return (
//     <>
//       <Header />
//       <Suspense fallback={null}>
//         <Outlet />
//       </Suspense>
//     </>
//   );
// };

// export default SharedLayout;




import {  Outlet } from 'react-router-dom';
import { Header } from "../Header/Header.jsx";
import { Footer } from "../Header/Footer/Footer.jsx";
// import { Loader } from "components/Loader/Loader"


export const SharedLayout = () => {

    return (
        <div>
            <Header />
            <Outlet />
            <Footer/>
        </div>)
}