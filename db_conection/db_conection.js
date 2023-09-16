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
    },
    options: {
        authSwitchHandler: function (data, cb) {
            if (data.pluginName === 'caching_sha2_password') {
                const password = '12345';
                const buffer = Buffer.allocUnsafe(password.length + 1);
                buffer.write(password);
                cb(null, buffer);
            } else {
                cb(new Error(`Unsupported auth plugin: ${data.pluginName}`));
            }
        },
    },
});

export default db;
