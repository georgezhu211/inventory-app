const app = require("./app");

const PORT = process.env.PORT || 4000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Server running on port ${PORT}`);
});
