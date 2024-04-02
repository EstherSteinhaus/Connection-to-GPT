const { response } = require("express");
const service = require("./service.js");

class Controller {
    sendQuestion = async (req, res) => {
        const question = req.body.question;
        const url = req.body.url;
        const response = await service.sendQuestion(question, url)
        res.send(response);
    }
}
const controller = new Controller();
module.exports = controller;