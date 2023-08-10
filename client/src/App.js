import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "./routes/routes";
import MainLayout from "./components/Layout/MainLayout";

const App = () => {
    return (
        <MainLayout>
            <Routes>
                {routes.map(r =>
                    <Route key={r.path} path={r.path} element={r.element}/>
                )}
            </Routes>
        </MainLayout>
    );
};

export default App;