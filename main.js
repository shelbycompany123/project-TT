// Import Express module
const express = require('express');

// Create an Express application
const app = express();

// Thiết lập view engine là EJS
app.set('view engine', 'ejs');

//Middleware và Static files
app.use(express.static('public'));

// Cấu hình thư mục chứa các view (các tệp EJS)
app.set('views', [__dirname + '/views', __dirname + '/views/jobs', __dirname + '/views/staff', __dirname + '/views/user']);

//Route prefix
const tableRoute = require('./routes/routes');
app.use("", tableRoute);

app.get('/', (req, res) => {
    res.render('index', {title: 'Trang chủ | Quản lý công việc'});
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:3000/`);
});
