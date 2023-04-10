const express = require('express');
const router = express.Router();
const model = require('../models');

router.get('/', (req, res) => {
  model.User.findAll().then(users => {
    res.send(users);
  }).catch(error => {
    console.error('Error retrieving users: ' + error);
    res.status(500).send('Error retrieving users');
  });
});

router.post('/', async (req, res) => {
  await model.User.create({
      name: req.body.name,
      email: req.body.email
  }).then(function (users) {
      if (users) {
        res.send(users);
      } else {
        res.status(400).send('Error in insert new record');
      }
  }).catch(error => {
    console.error('Error retrieving users: ' + error);
    res.status(500).send('Error Creating users');
  });
})





router.put('/', async (req, res) => {

  const { userId, name, email } = req.body;

  try {
    const updatedRows = await model.User.update(
      { name: name, email: email },
      { where: { id: userId } }
    );

    if (updatedRows[0] === 0) {
      return res.status(404).send('User not found');
    }

    const updatedUser = await model.User.findOne({ where: { id: userId } });

    res.send(updatedUser);
  } catch (error) {
    console.error('Error updating user: ' + error);
    res.status(500).send('Error updating user');
  }
});




module.exports = router;
