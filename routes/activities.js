var express = require('express');
var router = express.Router();
var models = require('../models/index');
const { Response, Response2 } = require('../helpers/util')


router.get('/', async function (req, res, next) {
  try {
    const data = await models.activities.findAll()
    res.json(new Response(data, "Berhasil"))
  } catch (e) {
    res.status(500).json(new Response(e, "gagal"))
  }
});

router.get('/:activity_id', async function (req, res, next) {
  try {
    const data = await models.activities.find({
      where: {
        activity_id: req.params.activity_id
      }
    })
    res.json(new Response(data, "Berhasil"))
  } catch (e) {
    res.status(500).json(new Response('not found', "gagal"))
  }
});

router.post('/', async function (req, res, next) {
  try {
    const { title, email } = req.body
    const data = await models.activities.create({ title, email })
    res.json(new Response(data, "Berhasil"))
  } catch (e) {
    res.status(500).json(new Response(e, "gagal"))
  }
});

router.put('/:activity_id', async function (req, res, next) {
  try {
    const { title, email } = req.body
    const data = await models.activities.update({ title, email },
      {
        where: {
          activity_id: req.params.activity_id
        }
      })
      const data2 = await models.activities.find({
        where: {
          activity_id: req.params.activity_id
        }
      })
    res.json(new Response(data2, "Berhasil"))
  } catch (e) {
    res.status(500).json(new Response(e, "gagal"))
  }
});

router.delete('/:activity_id', async function (req, res, next) {
  try {
    const { title, email } = req.body
    const data = await models.activities.destroy({
      where: {
        activity_id: req.params.activity_id
      }
    })
    const data2 = await models.activities.find({
      where: {
        activity_id: req.params.activity_id
      }
    })
    res.status(404).json(new Response2(`Activity with ID ${req.params.activity_id} Not Found`, "Not Found"))

  } catch (e) {
    res.status(500).json(new Response(e, "gagal Delete"))
  }
});

module.exports = router;
