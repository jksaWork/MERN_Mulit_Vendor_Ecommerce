const { default: ErrorHandler } = require("./utils/ErrorHandler");

require("./app");
console.log("hello World");
// Error Handler
app.use(ErrorHandler);
app.listen(3000, () => console.log("Server Is Read"));
