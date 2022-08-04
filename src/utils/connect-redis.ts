require("dotenv").config;
import { createClient } from "redis";
import config from "config";

//const redisUrl = "redis://localhost:6379";
// const redisUrl =
//   "redis://redis-18571.c285.us-west-2-2.ec2.cloud.redislabs.com:18571";
const redisUrl = config.get<string>("redis_url");
const redisPassword = config.get<string>("redis_password");

const redisClient = createClient({
  url: redisUrl,
  password: redisPassword,
});

const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log("Redis client connected successfully");
    redisClient.set("try", "Hello Welcome to Express with TypeORM");
  } catch (error) {
    console.log(error);
    setTimeout(connectRedis, 5000);
  }
};

connectRedis();

export default redisClient;
