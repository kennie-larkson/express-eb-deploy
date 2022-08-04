import { cleanEnv, port, str } from "envalid";

const validateEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
    POSTGRES_HOST: str(),
    POSTGRES_PORT: port(),
    POSTGRES_USER: str(),
    POSTGRES_PASSWORD: str(),
    POSTGRES_DB: str(),
    REDIS_URL: str(),
    LIVE_POSTGRES_DB: str(),
    LIVE_POSTGRES_HOST: str(),
    LIVE_POSTGRES_PORT: port(),
    LIVE_POSTGRES_USERNAME: str(),
    LIVE_POSTGRES_PASSWORD: str(),
    REDIS_PASSWORD: str(),
    JWT_ACCESS_TOKEN_PRIVATE_KEY: str(),
    JWT_ACCESS_TOKEN_PUBLIC_KEY: str(),
    JWT_REFRESH_TOKEN_PRIVATE_KEY: str(),
    JWT_REFRESH_TOKEN_PUBLIC_KEY: str(),
  });
};

export default validateEnv;
