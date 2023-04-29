"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 4100;
function appStart() {
    try {
        app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
    }
    catch (error) {
        console.log(error);
    }
}
appStart();
