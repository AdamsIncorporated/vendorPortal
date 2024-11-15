// Load environment variables from the .env file
import dotenv from 'dotenv';
import express from 'express';
import vendorRoutes from './routes/vendorRoutes.js';

// Load environment variables from .env
dotenv.config();

const app = express();

// Get environment variables
const dbPath = process.env.DB_PATH;
const PORT = process.env.PORT;

// Check if the required environment variables are set
if (!dbPath) {
  console.error("Error: DB_PATH environment variable is missing.");
  process.exit(1); // Exit the application with an error code
}

if (!PORT) {
  console.error("Error: PORT environment variable is missing.");
  process.exit(1); // Exit the application with an error code
}

// Use the vendor routes
app.use('/api', vendorRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
