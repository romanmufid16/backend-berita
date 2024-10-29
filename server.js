import express from "express";
import cors from "cors";
import sequelize from "./config/db.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import postRoutes from "./routes/postRoutes.js";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/category', categoryRoutes);
app.use('/post', postRoutes);

sequelize.sync().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    })
}).catch(err => {
    console.log("Unable to connect to database "+err);
});