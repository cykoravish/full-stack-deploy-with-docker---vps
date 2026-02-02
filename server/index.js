import express from "express";
import cors from "cors";
import env from "dotenv";

const app = express();

env.config();

app.use(express.json());
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL1,
      process.env.FRONTEND_URL2,
      process.env.FRONTEND_URL3,
      //add production url
    ],
    credentials: true,
  }),
);

app.get("/api/message", (req, res) => {
  res.json({
    message: "Hellow from cykoravish server. let's deploy a full stack project",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`server is running at http://localhost:${PORT}`),
);
