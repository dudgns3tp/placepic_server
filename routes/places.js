const express = require('express');
const router = express.Router();

const authUtils = require('../middlewares/auth');
const controller = require('../controllers/places');

router.get('/', authUtils.checkToken, controller.getAllPlaces);
router.get('/:placeIdx', controller.getPlace);
router.get('/group/:groupIdx', controller.getPlacesByGroup);


module.exports = router;
