import { config } from "dotenv";
import { OpenAI } from "openai";
import * as readline from "readline";

config();

const openai = new OpenAI({ apiKey: process.env.API_KEY });

const userInterface = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

userInterface.question("Enter your message: ", async (input) => {
	const response = await openai.chat.completions.create({
		model: "gpt-3.5-turbo",
		messages: [{ role: "user", content: input }],
	});

	const assistantResponse = response.choices[0].message.content;
	console.log(assistantResponse);

	userInterface.close();
});

// import OpenAI from "openai";

// const openai = new OpenAI({ apiKey: "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" });

// async function main() {
// 	const completion = await openai.chat.completions.create({
// 		messages: [{ role: "system", content: "How many colors of apples exist?" }],
// 		model: "gpt-3.5-turbo",
// 	});

// 	console.log(completion.choices[0]);
// }

// main();
