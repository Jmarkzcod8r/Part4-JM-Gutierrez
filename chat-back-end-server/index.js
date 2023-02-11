const express = require("express");
const app = express();
const cors = require("cors");
const messages = [];

app.use(cors());
app.use(express.json());

app.get("/messages", (request, response) => {
  response.json(messages);
});

app.post("/messages", (request, response) => {
  const message = request.body;
  messages.push(message);
  response.json(message);
});

app.delete("/messages/:id", (request, response) => {
    const id = request.params.id;
    messages = messages.filter(message => message.id !== id);
    response.json({ message: "Message deleted successfully" });
  });
  

const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
