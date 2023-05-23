const express = require('express');
const router = express.Router();

const {createlist,getalllist,updatelist,deletelist,singlelist} = require('../controller/todolist');

router.post('/create-list',createlist);
router.get('/getall',getalllist);
router.patch('/update-list/:id',updatelist);
router.delete('/delete-list/:id',deletelist)
router.get('/get-list/:id',singlelist)

module.exports = router;