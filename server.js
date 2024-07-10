/* const app = require("./app.js");
require("dotenv").config();

app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000");
});

const mongoose = require("mongoose");

// Adres bazy danych (zmień na swój)
const PORT = process.env.MAIN_PORT || 3000;
const dbURI = process.env.DB_HOST;

// Połączenie z bazą danych
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to database:", err.message);
    process.exit(1); // Zakończ proces w razie błędu
  });
*/
/*
//korcz
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const apiRouter = require("./routes/api/index");

require("dotenv").config();

const { DB_HOST: urlDb } = process.env;

const connection = await mongoose.connect(urlDb);

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", apiRouter);

app.use((req, res) => {
  res.status(404).json({ message: `Not found - ${req.path}` });
});

app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: err.message });
  } else {
    res.status(500).json({ message: err.message || "Something went wrong" });
  }
});

const startServer = async () => {
  try {
    await connection;
    console.log("Database connected");
    app.listen(3000, () => {
      console.log("Server started on http://localhost:3000");
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

startServer();
*/

const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const apiRouter = require("./routes/api/contacts.js");
const dotenv = require("dotenv");

// const contactsRouter = require('./routes/api/contacts')

dotenv.config();

const { DB_HOST: urlDb } = process.env;
console.log(urlDb);
const connection = mongoose.connect(urlDb);

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", apiRouter);

app.use((req, res) => {
  res.status(404).json({ message: `Not found - ${req.path}` });
});

app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: err.message });
  } else {
    res.status(500).json({ message: err.message || "Something went wrong" });
  }
});

const startServer = async () => {
  try {
    await connection;
    console.log("Database connected");
    app.listen(8000, () => {
      console.log("Server started on http://localhost:8000");
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

startServer();

/*
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const apiRouter = require("./routes/api/index.js"); // Poprawiona ścieżka
const dotenv = require("dotenv");

dotenv.config();

const { DB_HOST: urlDb } = process.env;
console.log(urlDb);

// Połączenie z bazą danych MongoDB
mongoose
  .connect(urlDb)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err.message);
    process.exit(1);
  });

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", apiRouter); // Poprawiona ścieżka

app.use((req, res) => {
  res.status(404).json({ message: `Not found - ${req.path}` });
});

app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: err.message });
  } else {
    res.status(500).json({ message: err.message || "Something went wrong" });
  }
});

const PORT = process.env.MAIN_PORT || 8000; // Użyj zmiennej PORT z env lub domyślnie 8000
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
*/
