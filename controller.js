const db = require ('./database/index.js')

const getAllParks = (req, res) => {
  console.log('hello from the other side')
  db.find()
  .then(parks => {
    res.json(parks)
  })
  .catch(error => {
    res.status(400).send(`error processing request: ${error}`)
  })
}

const getOnePark = (req, res) => {
  console.log (req.params, 'req.params.id')
  db.findOne({_id: req.params.id})
  .then(park => {
    console.log (park)
    res.json(park)
  })
  .catch(error => {
    res.status(400).send(`error processing request: ${error}`)
  })
}

module.exports = { getAllParks, getOnePark }