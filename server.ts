import app from "./app/app";
import mongoose from "mongoose";
import { DB_HOST } from "./app/config";

console.log(1);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(3000, () => console.log("Server running"));
  })
  .catch((err) => {
    console.log("Error with connect to database", err);
    process.exit(1);
  });
