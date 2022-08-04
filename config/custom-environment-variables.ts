export default {
  port: "PORT",
  postgresConfig: {
    host: "POSTGRES_HOST",
    port: "POSTGRES_PORT",
    username: "POSTGRES_USER",
    password: "POSTGRES_PASSWORD",
    database: "POSTGRES_DB",
  },
  redis_url: "REDIS_URL",
  redis_password: "REDIS_PASSWORD",
  accessTokenPrivateKey: "JWT_ACCESS_TOKEN_PRIVATE_KEY",
  accessTokenPublicKey: "JWT_ACCESS_TOKEN_PUBLIC_KEY",
  refreshTokenPrivateKey: "JWT_REFRESH_TOKEN_PRIVATE_KEY",
  refreshTokenPublicKey: "JWT_REFRESH_TOKEN_PUBLIC_KEY",
};
