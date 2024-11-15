import express from 'express';
import sqlite3 from 'sqlite3';

const router = express.Router();

// Get environment variable for the database path
const dbPath = process.env.DB_PATH;

// Create a new SQLite database (or open an existing one)
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Error opening database:", err);
    process.exit(1); // Exit the application if database connection fails
  } else {
    console.log(`Connected to the SQLite database at ${dbPath}`);
  }
});

// Define a route to get data from the Vendor table
router.get('/vendors', (req, res) => {
  const sql = 'SELECT * FROM Vendor';

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).json({ error: 'Failed to retrieve vendor data' });
    }
    
    res.json(rows);
  });
});

export default router;
