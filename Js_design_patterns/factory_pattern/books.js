const crypto = require("crypto");

const createBook = (title) => ({
  id: crypto.randomUUID(),
  createdAt: Date.now(),
  title,
});

module.exports = { createBook };
