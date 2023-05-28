const express = require("express");
const morgan = require("morgan");

const reviewRouter = require("./routes/reviewRoutes");

const app = express();

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes
app.use("/reviews", reviewRouter);

// Any other route other than /reviews
app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

module.exports = app;
