import express from "express";
import cors from "cors";

const app = express();


app.use(express.json());
app.use(
  cors({
    origin: [
      "https://localhost:5173",
      "https://localhost:5174",
      "https://localhost:3000",
      //add production url
    ],
    credentials: true,
  }),
);

app.get("/api/message", (req, res) => {
  res.json({
    message: "Hellow from cykoravish server. let's deploy a full stack project.",
  });
});

const PORT = 4000;

app.listen(PORT, () =>
  console.log(`server is running at http://localhost:${PORT}`),
);
