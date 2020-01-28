import { Router } from 'express';

const routes = new Router();

routes.get('/', (req,  res) => {
  return res.json({ messsage: 'Hello Omni!' })
})

export default routes;