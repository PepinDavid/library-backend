export const config = {
    jwt: {
        secret: process.env.JWT_SECRET || 'default_secret',
        expiresIn: process.env.JWT_EXPIRES_IN || '1h',
    },
    database: {
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT || '5432', 10),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME || 'database',
    },
    server: {
        port: parseInt(process.env.SERVER_PORT || '3000', 10),
    },
};