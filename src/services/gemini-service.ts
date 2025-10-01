import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
	// A real application would have better error handling or fail gracefully.
	// For this example, we'll log a warning. The UI will show a disabled state.
	console.warn(
		"API_KEY environment variable not set. AI Assistant will be disabled."
	);
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });
let chat: Chat | null = null;

const systemInstructions = {
	es: (topicTitle: string) =>
		`You are a world-class university database teaching assistant. Your tone is professional, encouraging, and clear. The student is currently studying the topic: "${topicTitle}". Answer their questions concisely in Spanish, using markdown for formatting and code blocks for SQL examples. Be helpful and guide them to understand the concepts.`,
	pt: (topicTitle: string) =>
		`You are a world-class university database teaching assistant. Your tone is professional, encouraging, and clear. The student is currently studying the topic: "${topicTitle}". Answer their questions concisely in Portuguese, using markdown for formatting and code blocks for SQL examples. Be helpful and guide them to understand the concepts.`,
};

export const startChatSession = (topicTitle: string, language: "es" | "pt") => {
	if (!API_KEY) return;

	const systemInstruction = systemInstructions[language](topicTitle);

	chat = ai.chats.create({
		model: "gemini-2.5-flash",
		config: {
			systemInstruction: systemInstruction,
		},
	});
};

export const sendMessageToAI = async (message: string): Promise<string> => {
	if (!API_KEY || !chat) {
		return "The AI assistant is currently unavailable. Please ensure the API key is configured.";
	}

	try {
		const response: GenerateContentResponse = await chat.sendMessage({
			message,
		});

		if (response.text === undefined) throw new Error("No response text");

		return response.text;
	} catch (error) {
		console.error("Error sending message to AI:", error);
		return "Sorry, I encountered an error trying to process your request. Please try again.";
	}
};

export const isAIAvailable = (): boolean => {
	return !!API_KEY;
};
