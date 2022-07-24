import express from 'express';
import { Post } from '../db/models';

const router = express.Router();

router.get('/posts', async (req, res) => {
  const posts = await Post.findAll({ order: [['updatedAt', 'DESC']] });
  res.json(posts);
});

export default router;
