"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
// const express
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.get('/', (_, res) => {
    res.send("hello wolrd ");
});
server.listen(4000, () => {
    console.log("server running on port 3000");
});
