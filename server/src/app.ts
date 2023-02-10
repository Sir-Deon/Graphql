import dotenv from "dotenv";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import mongoose from "mongoose";
import schema from "./schema/schema";
const cors = require("cors");
dotenv.config();

const app = express();

// GraphQl middleware
app.use(cors());
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

// Connect with database
mongoose
  .connect(String(process.env.mongodb))
  .then(() => console.log("Connected to database 😄"))
  .catch(() => console.log("Unable to connect to database 😦"));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Now listening on ${port} 🚀`));
