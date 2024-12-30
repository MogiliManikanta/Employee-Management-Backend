const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const userRegister = require("./userSeed");
const authRouter = require("./routes/auth");
const departmentRouter = require("./routes/department");
const employeeRouter = require("./routes/employee");
const salaryRouter = require("./routes/salary");
const leaveRouter = require("./routes/leave");
const settingRouter = require("./routes/setting");
const dashboardRouter = require("./routes/dashboard");

// Load environment variables
dotEnv.config();

const app = express();

// Configure CORS
const corsOptions = {
  origin: "https://employee-management-frontend-hazel.vercel.app", // Allow only your frontend origin
  methods: "GET,POST,PUT,DELETE,OPTIONS", // Allowed methods
  allowedHeaders: "Content-Type,Authorization", // Allowed headers
  credentials: true, // Allow cookies/credentials
};
app.use(cors(corsOptions));

// Parse JSON requests
app.use(express.json());

// Seed users (if needed)
userRegister();

// Serve static files
app.use(express.static("public/uploads"));

// API routes
app.use("/api/auth", authRouter);
app.use("/api/department", departmentRouter);
app.use("/api/employee", employeeRouter);
app.use("/api/salary", salaryRouter);
app.use("/api/leave", leaveRouter);
app.use("/api/setting", settingRouter);
app.use("/api/dashboard", dashboardRouter);

// Start the server
app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
