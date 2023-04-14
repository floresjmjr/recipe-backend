const router = require('express').Router();

router.get('/home', async(req, res)=>{
  res.send('Works');
})

module.exports = router;