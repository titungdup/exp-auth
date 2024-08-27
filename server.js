const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

const mockUsers = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
];

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/api/users", (req, res) => {
  res.status(200).send(mockUsers);
});

app.get("/api/users/:id", (req, res) => {
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId)) {
    return res.status(400).send("Invalid ID");
  }

  const user = mockUsers.find((user) => {
    console.log(user.id);
    console.log(parsedId);
    return user.id === parsedId;
  });

  if (!user) {
    return res.status(404).send("User not found");
  }

  return res.send(user);
});

app.listen(PORT, () => {
  console.log("Server is running on port 8080");
});
