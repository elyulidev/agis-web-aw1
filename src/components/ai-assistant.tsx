import { useState, useEffect, useRef } from "react";
import {
	startChatSession,
	sendMessageToAI,
	isAIAvailable,
} from "../services/gemini-service";
import type { ChatMessage } from "../types";
import { BotMessageSquareIcon } from "lucide-react";
import { useI18n } from "@/hooks/use-I18n";

const uiStrings = {
	es: {
		title: "Asistente IA",
		topic: "Tema",
		general: "General",
		placeholder: "Haz una pregunta...",
		send: "Enviar",
		initialMessage: (topicTitle: string) =>
			`¡Hola! Soy tu asistente de IA. Estamos viendo "${topicTitle}". ¿En qué puedo ayudarte?`,
	},
	pt: {
		title: "Assistente de IA",
		topic: "Tópico",
		general: "Geral",
		placeholder: "Faça uma pergunta...",
		send: "Enviar",
		initialMessage: (topicTitle: string) =>
			`Olá! Sou seu assistente de IA. Estamos vendo "${topicTitle}". Como posso ajudar?`,
	},
};

const AIAssistant = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState<ChatMessage[]>([]);
	const [userInput, setUserInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const isAvailable = isAIAvailable();
	const { lectureTitle, language } = useI18n();
	const t = uiStrings[language];

	useEffect(() => {
		if (lectureTitle && isOpen) {
			startChatSession(lectureTitle, language);
			setMessages([
				{
					role: "model",
					text: t.initialMessage(lectureTitle),
				},
			]);
		}
	}, [lectureTitle, isOpen, language, t]);

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	const handleSendMessage = async () => {
		if (!userInput.trim() || isLoading) return;

		const newUserMessage: ChatMessage = { role: "user", text: userInput };
		setMessages((prev) => [...prev, newUserMessage]);
		setUserInput("");
		setIsLoading(true);

		const aiResponse = await sendMessageToAI(userInput);
		const newAiMessage: ChatMessage = { role: "model", text: aiResponse };
		setMessages((prev) => [...prev, newAiMessage]);
		setIsLoading(false);
	};

	if (!isAvailable) {
		return (
			<div className='fixed bottom-6 right-6'>
				<button
					title='AI Assistant is unavailable. API_KEY not configured.'
					className='bg-gray-500 p-4 rounded-full shadow-lg cursor-not-allowed'
				>
					<BotMessageSquareIcon className='w-6 h-6 text-white' />
				</button>
			</div>
		);
	}

	return (
		<>
			<div className='fixed bottom-6 right-6 z-50'>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className='bg-sky-500 hover:bg-sky-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300'
					aria-label='Toggle AI Assistant'
				>
					<BotMessageSquareIcon className='w-6 h-6' />
				</button>
			</div>

			{isOpen && (
				<div className='fixed bottom-24 right-6 w-96 h-[32rem] bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-xl shadow-2xl flex flex-col z-40 animate-fade-in-up'>
					<div className='p-4 border-b border-slate-700'>
						<h3 className='font-bold text-lg text-sky-400'>{t.title}</h3>
						<p className='text-sm text-slate-400'>
							{t.topic}: {lectureTitle || t.general}
						</p>
					</div>
					<div className='flex-1 p-4 overflow-y-auto space-y-4'>
						{messages.map((msg, index) => (
							<div
								key={index}
								className={`flex ${
									msg.role === "user" ? "justify-end" : "justify-start"
								}`}
							>
								<div
									className={`max-w-xs md:max-w-sm rounded-lg px-4 py-2 ${
										msg.role === "user"
											? "bg-sky-600 text-white"
											: "bg-slate-700 text-slate-200"
									}`}
								>
									<p className='whitespace-pre-wrap'>{msg.text}</p>
								</div>
							</div>
						))}
						{isLoading && (
							<div className='flex justify-start'>
								<div className='bg-slate-700 text-slate-200 rounded-lg px-4 py-2'>
									<div className='flex items-center space-x-2'>
										<div className='w-2 h-2 bg-sky-400 rounded-full animate-pulse'></div>
										<div className='w-2 h-2 bg-sky-400 rounded-full animate-pulse [animation-delay:0.2s]'></div>
										<div className='w-2 h-2 bg-sky-400 rounded-full animate-pulse [animation-delay:0.4s]'></div>
									</div>
								</div>
							</div>
						)}
						<div ref={messagesEndRef} />
					</div>
					<div className='p-4 border-t border-slate-700'>
						<div className='flex space-x-2'>
							<input
								type='text'
								value={userInput}
								onChange={(e) => setUserInput(e.target.value)}
								onKeyUp={(e) => e.key === "Enter" && handleSendMessage()}
								placeholder={t.placeholder}
								className='flex-1 bg-slate-900 border border-slate-600 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-200'
								disabled={isLoading}
							/>
							<button
								onClick={handleSendMessage}
								disabled={isLoading}
								className='bg-sky-500 text-white px-4 py-2 rounded-full hover:bg-sky-600 disabled:bg-slate-600'
							>
								{t.send}
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default AIAssistant;
