import { mempools } from "mempools-server-sdk";

mempools.config({
  clientToken: process.env.CLIENT_TOKEN,
  apiEndpoint: process.env.API_URL,
});
