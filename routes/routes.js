const express = require('express');
const router = express.Router();

//Mục Các công việc
router.get('/table-route', (req, res) => {
    res.render('status-table');
});

router.get('/create-job', (req, res) => {
    res.render('add-job');
})

router.get('/calendar-route', (req, res) => {
    res.render('calendar');
})

module.exports = router;
