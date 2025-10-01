import React from "react";

export interface LocalizedString {
	es: string;
	pt: string;
}

export interface Lecture {
	id: number;
	title: LocalizedString;
	content?: {
		es: React.ComponentType<unknown>;
		pt: React.ComponentType<unknown>;
	};
}

export interface Module {
	module: number;
	title: LocalizedString;
	lectures: Lecture[];
}

export interface ChatMessage {
	role: "user" | "model";
	text: string;
}
