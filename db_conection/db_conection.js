import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const db = knex({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '12345',
        database: 'db_empresa',
    }
});

export default db;
