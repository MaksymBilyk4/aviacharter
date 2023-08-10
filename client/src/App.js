import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "./routes/routes";

const App = () => {
    return (
        <div>
            <Routes>
                {routes.map(r => {
                    <Route key={r.path} path={r.path} element={r.element}/>
                })}
            </Routes>
        </div>
    );
};

export default App;