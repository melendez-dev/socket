import express from "express";
import http from 'http'

// const express
const app = express();
const server = http.createServer(app)

app.get('/', (_, res) => {
	res.send("hello wolrd ")
})


server.listen(4000, () => {
  console.log("server running on port 3000");
});
