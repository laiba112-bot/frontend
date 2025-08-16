const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const authRoutes = require("./routes/profile")
dotenv.config();
const router = express.Router();

const app = express();
const port =5000;

router.use(cors({
    origin: "ht4tp://localhost:5173",
    credentials : true,
}));

router.use(express.json());
router.use("/api/auth", authRoutes);
router.use("api/profile",)



mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("connected to MongoDB");
    
})
.catch((error) => {
    console.log("error:", error);
    
})

app.listen(port, () => {
    console.log("Server is running");
    
})