const router= require('express').Router()

const homeRoutes= require('./homeroutes')
const apiRoutes=require('./api')
const dashRoutes=require('./dashroutes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashRoutes);


module.exports = router;