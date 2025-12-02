import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
                email,
                password,
            });

            if (res.data.message === "Login Success") {
                alert("✅ Login Successful!");
                navigate("/welcome");
            } else {
                alert("❌ Invalid Credentials");
            }
        } catch (error) {
            alert("❌ Invalid Credentials");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Login</h2>
            <form
                onSubmit={handleSubmit}
                className="border p-5 shadow rounded mx-auto"
                style={{
                    width: "70%",        // 🔹 बढ़ाई गई चौड़ाई (पहले 50% थी)
                    maxWidth: "600px",   // 🔹 बड़े स्क्रीन पर limit
                }}
            >
                <div className="mb-4">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control form-control-lg"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control form-control-lg"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100 btn-lg">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
