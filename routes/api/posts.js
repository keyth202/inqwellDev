const express = require('express');
const router = express.Router();

//@route    Get API/posts
//@desc     Test Route for now
//@access   Public
router.get('/', (req, res) => res.send('Posts Route'));

module.exports = router;
