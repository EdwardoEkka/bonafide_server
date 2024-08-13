const express = require('express');
const router=express.Router();
const cors = require("cors");
router.use(cors());
const controller=require('../controller/form_controller')

router.post('/create_bonafide',controller.Bonafide_create_controller);
router.get('/get_bonafide',controller.getBonafide);

module.exports=router;