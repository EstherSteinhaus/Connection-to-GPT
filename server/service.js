const OpenAi = require("openai");
const openai = new OpenAi({ Api_Key: process.env.api_key });

class Service {
    async sendQuestion(question, url) {
        try {
            const response = await openai.chat.completions.create({
                messages: [{ content: `${question} in ${url}`, role: "user" }],
                model: "gpt-3.5-turbo"
            })

            return `<div style='width: 40%;background-color: indianred;padding: 20px;display: flex;flex-direction: column;justify-content: center;margin: 50 30%;'><h3>Answer</h3>${response.choices[0].message.content}</div>`;
            // return "<div style='width: 40%;background-color: indianred;padding: 20px;display: flex;flex-direction: column;justify-content: center;margin: 50 30%;'><h3>Answer</h3>i am very tierd i am very tierd i am very tierd i am very tierd i am very tierd i am very tierd i am very tierd i am very tierd i am very tierd i am very tierd i am very tierd i am very tierd i am very tierd i am very tierd i am very tierd i am very tierd i am very tierd i am very tierd i am very tierd i am very tierd i am very tierd i am very tierd </div>";
        }
        catch (e) {
            return `<p style="width:40%;display: flex;justify-content: center;margin: 50 30%;">${e.message}</p>`;
        }
    }
}
const service = new Service();
module.exports = service;