    import express from "express";
    import cors from "cors";
    import dotenv from "dotenv";
    import pool from "./config/db.js"

    import userRoutes from "./routes/userRoutes.js";
    import errorHandling from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";
    dotenv.config();

    // Initialize Express app   
    const app = express();
    const port = process.env.PORT || 3001;


    //middleware
    app.use(express.json());
    app.use(cors());

    //routes
    app.use("/api", userRoutes);


    //error handling middleware
    app.use(errorHandling); 
    
    // Create user table if it doesn't exist before server starts running
    // This is a one-time setup to ensure the database schema is ready
    createUserTable();

    //testing postgres connection
    app.get("/", async(req, res) => {
        const result = await pool.query("SELECT current_database()");
        console.log(result);
        res.send(`The database name is : ${result.rows[0].current_database}`);
    });


    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });

    // This is the main entry point for the application
    // It sets up a basic Express server that listens on port 3000