import express, { Application} from 'express';
import authRoutes from './routes/auth.router';
import teacherRoutes from './routes/teacher.router';
import fruitRoutes from "./routes/fruit.router";
import animalRoutes from "./routes/animal.router";
import carRoutes from "./routes/car.router";
import courseRoutes from "./routes/course.router";
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use("/auth", authRoutes);
app.use("/teacher", teacherRoutes);
app.use("/fruit", fruitRoutes);
app.use("/animal", animalRoutes);
app.use("/car", carRoutes);
app.use("/course", courseRoutes);

app.listen(3000);
console.log('Server on port', 3000);