import express from 'express';
import { Post, User } from '../db/models';
import copy from '../utils/copy';

const router = express.Router();

router.get('/posts', async (req, res) => {
  const posts = await Post.findAll({
    include: { model: User },
    order: [['updatedAt', 'DESC']],
  });
  console.log('Here are the posts ->>', copy(posts));
  res.json(posts);
});

export default router;
