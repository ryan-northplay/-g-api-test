import 'server-only';
import { Generated, Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

interface User {
  id: Generated<number>;
  name: string;
  username: string;
  email: string;
  password: string;
}

interface Game {
  id: Generated<number>;
  name: string;
  menu_title: string;
  image: string;
  category: string;
}




interface Database {
  Game: Game;
  User: User;
}

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL
  })
});
