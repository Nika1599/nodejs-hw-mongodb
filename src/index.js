import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoDB';

const bootstrap = async () => {
  await initMongoConnection();
  setupServer();
};

bootstrap();
