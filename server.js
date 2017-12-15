const express = require('express');
const path = require('path');
const multer = require('multer');
const upload = multer();

const PORT = process.env.PORT || 3000;

const app = express();

// serve static html form
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.redirect('/index.html');
});

app.post('/size', upload.single('submit-file'), (req, res) => {
    // file in req.file
    res.end(JSON.stringify({
        size: req.file.size
    }));
});

app.listen(PORT, () => console.log('Listening on port ' + PORT + '...'));
