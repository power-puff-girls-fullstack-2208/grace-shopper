 const router = require('express').Router();
const User = require('../db/User');
const bcrypt = require('bcrypt');


// GET /api/users
router.get('/', async (req, res, next) => {
  try {
    res.send(await User.findAll({
      attributes: {
        exclude: ['password']
      }
    }
    ));
  } catch (error) {
    next(error);
  }
});

// GET /api/users/:id
router.get('/:id', async (req, res, next) => {
  try {
    res.send(await User.findByPk(req.params.id,{
      attributes: {
        exclude: ['password']
     }
    }));
  } catch (error) {
    next(error);
  }
});

// POST /api/users
// router.post('/', async (req, res, next) => {
//   try {
//     res.status(201).send(await User.create(req.body));
//   } catch (error) {
//     next(error);
//   }
// });

router.post("/", async (req, res, next) => {
  try {
    const { username, password, email, fName, lName } = req.body;
    const hash = await bcrypt.hash(password, 10)
    res.status(201).json(await User.create({
      username,
      password: hash,
      email,
      fName,
      lName,
      isAdmin: false
    }));
  } catch(error) {
    next(error);
  }
})

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username: username }});
  if(!user) res.status(400).json({error:'User Doesnt Exist'});
  const dbPassword = user.password
  bcrypt.compare(password, dbPassword).then((match) => {
    if (!match) {
      res.status(400).json({error: "Wrong Username and Password Combination!"});
    } else {
      res.json("LOGGED IN!");
    }
  });
});

// PUT /api/users/:id
router.put('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(await user.update(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE /api/users/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.send(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;