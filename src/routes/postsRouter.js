import express from 'express';
import template from '../template';
import { Post } from '../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(template({ path: req.originalUrl }));
});

router.post('/', async (req, res) => {
  await Post.create(req.body);
  const posts = await Post.findAll({ order: [['updatedAt', 'DESC']] });
  res.json(posts);
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
    const post = await Post.findOne({ where: { id: parseInt(req.params.id) } });
    res.send(template({ path: req.originalUrl, post: JSON.parse(JSON.stringify(post)) }));
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
