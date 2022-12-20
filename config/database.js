module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cd345tun6mpqnrgcna5g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_xxvo'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'n10cLYFua1Pza9BS1D0vt0tZEwWdctst'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
