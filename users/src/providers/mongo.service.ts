import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

export class MongoConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    const user = process.env.MONGO_ROOT_USER;
    const password = process.env.MONGO_ROOT_PASSWORD;
    const host = process.env.MONGO_HOST;
    const base = process.env.MONGO_DATABASE;
    const port = process.env.MONGO_PORT;
    const urlMongo = `mongodb://${user}:${password}@${host}:${port}/${base}?authSource=admin`;
    return {
      uri: urlMongo,
    };
  }
}
