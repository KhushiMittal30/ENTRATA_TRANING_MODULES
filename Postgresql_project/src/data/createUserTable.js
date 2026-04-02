//to run the sql query, use the following command in terminal

const createUserTable = async () => {
    const queryText = `
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,  
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT NOW()
    );
    `;
    try {
        const result = await pool.query(queryText);
        console.log("User table created successfully");
    } catch (error) {
        console.error("Error creating user table:", error);
    }

};
export default createUserTable;
