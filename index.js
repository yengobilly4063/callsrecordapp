const express = require('express');

const app = express();
const eventsRoute = require('./routes/events');

const PORT = process.env.PORT | 3000;

app.use(express.json());
app.use('/events', eventsRoute);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
