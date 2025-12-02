// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoute.js";
// import serverless from "serverless-http";

// dotenv.config();
// connectDB();

// const app = express();

// const FRONTEND_URL = process.env.FRONTEND_URL || "https://app-test-client.vercel.app";

// app.use(cors({
//     origin: FRONTEND_URL,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     credentials: true
// }));

// app.use(express.json());

// // Routes
// app.use("/api/auth", authRoutes);

// // Root route (optional but good for testing)
// app.get("/", (req, res) => {
//     res.send("Backend is running successfully!");
// });

// // ✅ Only listen locally (not in Vercel)
// if (process.env.NODE_ENV !== "production") {
//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// }

// // ✅ Export handler for Vercel
// export const handler = serverless(app);
// export default app;



import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import serverless from "serverless-http";


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
