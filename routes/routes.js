const express = require('express');
const router = express.Router();

//Mục Các công việc
router.get('/table-route', (req, res) => {
    res.render('status-table', {title: 'Các công việc | Tự động sắp xếp công việc'});
});

router.get('/create-job', (req, res) => {
    res.render('add-job', {title: 'Thêm công việc | Tự động sắp xếp công việc'});
})

router.get('/calendar-route', (req, res) => {
    res.render('calendar', {title: 'Lịch làm việc | Tự động lên lịch công việc'});
})

module.exports = router;
