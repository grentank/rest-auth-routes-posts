import express from 'express';
import template from '../template';
import { Post, User } from '../db/models';
import copy from '../utils/copy';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(template({
    path: req.originalUrl,
    username: req.session?.username,
  }));
});

router.post('/', async (req, res) => {
  const curUser = await User.findOne({ where: { username: req.session.username } });
  await Post.create({ ...req.body, user_id: curUser.id });
  const posts = await Post.findAll({
    include: { model: User },
    order: [['updatedAt', 'DESC']],
  });
  console.log('All posts -> ', copy(posts));
  res.json(copy(posts));
});

router.delete('/:id', async (req, res) => {
  try {
    await Post.destroy({ where: { id: parseInt(req.params.id) } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findOne({
      where: { id: parseInt(req.params.id) },
      include: { model: User },
    });
    res.send(template({
      path: req.originalUrl,
      post: copy(post),
      username: req.session?.username,
    }));
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    await Post.update(req.body, { where: { id: parseInt(req.params.id) } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

export default router;
