const router = require('express').Router();
const { getAllParks } = require ('./controller.js')
const { getOnePark } = require ('./controller.js')

router
.route('/skateparks/api/parks')
.get(getAllParks)

router
.route('/skateparks/api/parks/:id')
.get(getOnePark)

module.exports = router;