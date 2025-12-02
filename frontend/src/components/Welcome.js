import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login");
    };

    return (
        <div className="container text-center mt-5">
            <h1>WT Winds Consultancy</h1>
            <button className="btn btn-danger mt-3" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}

export default Welcome;
