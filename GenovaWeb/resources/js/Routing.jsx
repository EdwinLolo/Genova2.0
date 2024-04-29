import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Home from "./Page/Home";
import Divisi from "./Page/Divisi";
import Eulympic from "./Page/Eulympic";
import Ucare from "./Page/Ucare";
import Unify from "./Page/Unify";
import Unveiling from "./Page/Unveiling";
import Ulympic from "./Page/Ulympic";

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/division" element={<Divisi />} />
                {/* <Route path="/map" element={<MapPage />} /> */}
                {/* <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute>
                            <Admin />
                        </ProtectedRoute>
                    }
                /> */}
                <Route path="/ulympic" element={<Ulympic />} />
                <Route path="/ucare" element={<Ucare />} />
                <Route path="/unify" element={<Unify />} />
                <Route path="/eulympic" element={<Eulympic />} />
                <Route path="/unveiling" element={<Unveiling />} />
            </Routes>
        </Router>
    );
}

export default Routing;
