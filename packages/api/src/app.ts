import express, { Request, Response } from 'express';
import config from './config';

console.log(`api conf: `, config);

const app = express();
const port = 8080;

// health check
app.get('/', (req: Request, res: Response) => {
  console.log('received health check request');
  res.status(200).json({ message: 'health check confirmed' });
});

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});

export function shared() {
  return 'hola';
}

export default app;
