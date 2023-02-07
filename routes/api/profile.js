const express = require('express');
const router = express.Router();

//@route    Get API/profile
//@desc     Test Route for now
//@access   Public
router.get('/', (req, res) => res.send('Profile Route'));

module.exports = router;
