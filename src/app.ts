import express from 'express';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));

app.get('/health', (req, res) => {
  res.json({ Hello: 'World' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
