import express from 'express';
import bcrypt from 'bcrypt';
import template from '../template';
import { User } from '../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(template({
    path: req.originalUrl,
    username: req.session?.username,
  }));
});

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  console.log('registring user --->>>', req.body);
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log('hash -->>', hashedPassword);
  const [currUser, created] = await User.findOrCreate({
    where: { username },
    defaults: { passhash: hashedPassword },
  });

  req.session.username = currUser.username;
  res.redirect('/posts');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const currUser = await User.findOne({
      where: { username },
    });
    console.log(currUser, password);
    if (currUser && await bcrypt.compare(password, currUser.passhash)) {
      req.session.username = currUser.username;
      res.redirect('/posts');
    } else {
      console.log('Incorrect password or no such user');
      res.redirect('/');
    }
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.redirect('/');
});

export default router;
