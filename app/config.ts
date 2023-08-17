import { mempools } from "mempools-sdk";

mempools.config({
  clientToken: process.env.CLIENT_TOKEN,
  apiEndpoint: process.env.API_URL,
});
