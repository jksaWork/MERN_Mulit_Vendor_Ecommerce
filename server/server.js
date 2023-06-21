const { default: ErrorHandler } = require("./utils/ErrorHandler");

require(".");
console.log("hello World");
// Error Handler
app.use(ErrorHandler);
app.listen(3000, () => console.log("Server Is Read"));
