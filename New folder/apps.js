// app.js
const express = require('express');
const sessionMiddleware = require('./middleware/session');
const patientRoutes = require('./routes/patientRoutes');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(sessionMiddleware);

// Use routes
app.use('/patients', patientRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
