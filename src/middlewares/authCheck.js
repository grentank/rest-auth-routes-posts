export default function authCheck(req, res, next) {
  if (req.session?.username) {
    next();
  } else {
    res.redirect('/');
  }
}
