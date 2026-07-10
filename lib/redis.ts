import { Redis } from "@upstash/redis";

const url = process.env.KV_REST_API_URL;
const token = process.env.KV_REST_API_TOKEN;

const redis =
  url && token
    ? new Redis({
        url,
        token,
      })
    : null;

export default redis;
