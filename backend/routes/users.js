const usersRoutes = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const regExUrl = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;

const {
  getCurrentUser,
  createUser,
  getUser,
  getUsers,
  updateAvatar,
  updateProfile,
} = require('../controllers/users');

usersRoutes.get('/', getUsers);

usersRoutes.get('/me', getCurrentUser);

usersRoutes.get(
  '/:userId',
  celebrate({
    params: Joi.object().keys({
      userId: Joi.string().length(24).required().hex(),
    }),
  }),
  getUser,
);

usersRoutes.post('/', createUser);

usersRoutes.patch(
  '/me',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
    }),
  }),
  updateProfile,
);

usersRoutes.patch(
  '/me/avatar',
  celebrate({
    body: Joi.object().keys({
      avatar: Joi.string().regex(regExUrl),
    }),
  }),
  updateAvatar,
);

module.exports = usersRoutes;
