// Import Express module
const express = require('express');

// Create an Express application
const app = express();

// Thiết lập view engine là EJS
app.set('view engine', 'ejs');

//Middleware và Static files
app.use(express.static('public'));

// Cấu hình thư mục chứa các view (các tệp EJS)
app.set('views', __dirname + '/views');

// Định nghĩa route
app.get('/', (req, res) => {
    // Render một view (ví dụ: index.ejs)
    res.render('index');
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:3000/`);
});
