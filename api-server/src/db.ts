/* Autor: Dennis Heuermann */

import { Express } from 'express';
import { Client } from 'pg';
import { PsqlGenericDAO } from './models/psql-generic.dao';
import { InMemoryGenericDAO } from './models/in-memory-generic.dao';
import { User } from './models/user';

export default async function startDB(app: Express, dbms = 'in-memory-db') {
  switch (dbms) {
    case 'psql':
      return await startPsql(app);
    default:
      return await startInMemoryDB(app);
  }
}

async function startPsql(app: Express) {
  const client = await connectToPsql();
  app.locals.userDAO = new PsqlGenericDAO<User>(client!, 'users');
  return async () => await client.end();
}

async function connectToPsql() {
  const client = new Client({
    user: 'xyz',
    host: 'localhost',
    database: 'user',
    password: 'password',
    port: 5432,
    keepAlive: true,
    keepAliveInitialDelayMillis: 1500
  });
  try {
    await client.connect();
    console.log('Succesfully connected to PostgreSQL database');
    return client;
  } catch (err) {
    console.log('Could not connect to PostgreSQL: ', err.stack);
    process.exit(1);
  }
}

async function startInMemoryDB(app: Express) {
  app.locals.userDAO = new InMemoryGenericDAO<User>();
  const userDAO = app.locals.userDAO;
  userDAO.create(
    {
      id: "1",
      firstName: "Max",
      lastName: "Mustermann",
      email: "max@mustermann.de",
      password: "password"
    }
  );
  return async () => Promise.resolve();
}
