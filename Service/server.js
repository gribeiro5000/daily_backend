import app from "./app.js";

const hostname = '127.0.0.1'
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://${hostname}:${PORT}`)
})