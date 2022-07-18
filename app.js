const path = require("path");
const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const cron = require("node-cron");

const cronHandler = require("./controllers/cronHandler");
const cors = require("cors");

// we are calling our dependencies.

const AppError = require("./utils/appError");

const globalErrorHandler = require("./controllers/");

// we have all routes here.
const userRoutes = require("./routes/userRoutes");
