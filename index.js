const app = require("./app");

const PORT = process.env.PORT || 1600;
app.listen(PORT, () => {
  console.log(`Started express sever on port ${PORT}`);
});
