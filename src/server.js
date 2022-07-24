import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import FileStore from 'session-file-store';
import indexRouter from './routes/indexRouter';
import apiRouter from './routes/apiRouter';
import postsRouter from './routes/postsRouter';
import authCheck from './middlewares/authCheck';

const SessionStore = FileStore(session);
const PORT = 3000;
const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionConfig = {
  name: 'user_sid', 				// Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test',	// Секретное слово для шифрования, может быть любым
  resave: false, 				// Пересохранять ли куку при каждом запросе
  store: new SessionStore(),
  saveUninitialized: false, 		// Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, 				// Серверная установка и удаление куки, по умолчанию true
  },
};

app.use(session(sessionConfig));

app.use('/', indexRouter);

app.use(authCheck);

app.use('/posts', postsRouter);
app.use('/api/v1', apiRouter);

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
