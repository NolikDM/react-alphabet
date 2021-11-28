import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";

const AppRouter = () => {
    return (
        <div>
            {/* альтерантива switch*/}
            <Routes>
                <Route path='/about' element={<About/>} />
                <Route path='/posts' element={<Posts/>} />
                {/*альтернатива редиректу в 5 версии*/}
                <Route path="*" element={<Error />} />

                {/*<Route path="*" element={<Navigate to ="/Error" />}/>*/}

                {/*{ component: () => <Navigate to="/404" /> }*/}
            </Routes>
        </div>
    );
};

export default AppRouter;