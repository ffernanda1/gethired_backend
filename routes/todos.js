var express = require('express');
var router = express.Router();
var models = require('../models/index');
const { Response } = require('../helpers/util')


router.get('/', async function (req, res, next) {
  try {
    
    const data = await models.todos.findAll()
    // console.log('tes tes',await models.todos.findAll())
    res.json(new Response(data, "Berhasil"))
  } catch (e) {
    console.log(e)
    res.status(500).json(new Response(e, "gagal"))
    
  }
});

router.get('/:todo_id', async function (req, res, next) {
  try {

    const data = await models.todos.find({
      where: {
        todo_id: req.params.todo_id 
      }
    })
    
    res.json(new Response(data, "Berhasil"))
  } catch (e) {
    res.status(500).json(new Response('not found', "gagal"))
  }
});

router.post('/', async function (req, res, next) {
  try {
    const {activity_group_id, title } = req.body
    const data = await models.todos.create({ activity_group_id, title })
    res.json(new Response(data, "Berhasil"))
  } catch (e) {
    res.status(500).json(new Response(e, "gagal"))
  }
});

router.put('/:todo_id', async function (req, res, next) {
  try {
    const { activity_group_id, title, priority, is_active } = req.body
    const data = await models.todos.update({ activity_group_id, title, priority, is_active },
      {
        where: {
          todo_id: req.params.todo_id
        }
      })
      const data2 = await models.todos.find({
        where: {
          todo_id: req.params.todo_id
        }
      })
    res.json(new Response(data2, "Berhasil"))
  } catch (e) {
    res.status(500).json(new Response(e, "gagal"))
  }
});

router.delete('/:todo_id', async function (req, res, next) {
  try {
    const { title, email } = req.body
    const data = await models.todos.destroy({
      where: {
        todo_id: req.params.todo_id
      }
    })
    res.json(new Response(data, "Berhasil"))

  } catch (e) {
    res.status(500).json(new Response(e, "gagal Delete"))
  }
});

module.exports = router;
