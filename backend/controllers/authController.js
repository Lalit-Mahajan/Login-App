import User from "../models/User.js";

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // ✅ Directly save user every time (no checking)
        const newUser = new User({ email, password });
        await newUser.save();

        // ✅ Always send success response
        res.status(200).json({ message: "Login Success" });
    } catch (error) {
        console.error("❌ Server Error:", error.message);
        res.status(500).json({ message: "Server Error" });
    }
};
