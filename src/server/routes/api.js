const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  console.log('api works');
  res.send('api works');
});

router.get('/sendmail', (req, res) => {
  console.log('made it here');
  res.redirect('/sendmail', req);
});

module.exports = router;