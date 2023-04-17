import express from "express";
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello Ajay!");
});

app.listen(PORT, () => console.log(`Server listening at Port : ${PORT}`));
