import {createServer} from 'http';
import app from './app';
import {sequelize} from '@database/sequelize';
import "./config"

const port = process.env.PORT || 3333;

(async () => {

  await sequelize.sync({force: true});
  // await sequelize.sync({force: false});

  createServer(app)
    .listen(port, () => console.log(`Server listen on port ${port}`));

})();