const express = require('express');

const {
    getCake,
    getCakes,
    createCake,
    updateCake,
    deleteCake
} = require('../controllers/cakes');

const router = express.Router();

router
    .route('/')
    .get(getCakes)
    .post(createCake);

router
    .route('/:id')
    .get(getCake)
    .put(updateCake)
    .delete(deleteCake);

module.exports = router;