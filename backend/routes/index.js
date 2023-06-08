const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const NotFoundError = require('../errors/NotFoundError');

const cardsRoutes = require('./cards');
const usersRoutes = require('./users');
const { createUser } = require('../controllers/users');
const { login } = require('../controllers/users');
const auth = require('../middlewares/auth');

const regExUrl = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;

router.post(
  '/signup',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
      avatar: Joi.string().regex(regExUrl),
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  }),
  createUser,
);

router.post(
  '/signin',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  }),
  login,
);

router.use('/users', auth, usersRoutes);
router.use('/cards', auth, cardsRoutes);

router.all('*', (req, res, next) => {
  next(new NotFoundError('Неверный адрес'));
});

module.exports = router;
