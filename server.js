const experss =  require('express');
const mongoose =  require('mongoose');

const app = experss();

app.use(experss.json());

const dbURI = require('./config/databaseKey').mongoURI;
mongoose
    .connect(dbURI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .then(() => console.log('Database Connected'))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port,
     () => console.log
     (`Server running on port ${port}`))