const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//@route    Get API/auth
//@desc     Test Route for now
//@access   Public
router.get('/',auth, (req, res) => res.send('Auth Route'));

module.exports = router;
