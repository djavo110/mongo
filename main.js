const express = require("express");
const dotenv = require("dotenv");
const mainRouter = require("./routes/index.routes");
const mongoose = require("mongoose");

dotenv.config();

let PORT = process.env.PORT || 3000;

let app = express();

app.use(express.json());

app.use("/api", mainRouter);

async function bootsrtapt() {
    try {
        await mongoose.connect("mongodb+srv://ilgorbekabdumalikov331:U1AJL8ZKmTeVovzZ@cluster0.snfai6r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);
        app.listen(PORT, () => {
          console.log(`Server running on port: ${PORT}`);
        });
    } catch (error) {
        console.log(error.message);
    }
}

bootsrtapt();

