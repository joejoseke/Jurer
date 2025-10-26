
import { GoogleGenAI, Type } from "@google/genai";
import type { GeneratedDocument } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export async function performLegalTask(caseText: string, task: string): Promise<GeneratedDocument> {
  try {
    const response = await ai.models.generateContent({
       model: "gemini-2.5-flash",
       contents: `Based on the following legal document text, please perform the task: "${task}".\n\nDOCUMENT TEXT:\n"""\n${caseText}\n"""`,
       config: {
         systemInstruction: "You are JuriMind AI, a sophisticated legal AI assistant. Your responses must be formal, well-structured, precise, and objective. Do not provide legal advice or express personal opinions. Generate the output as a JSON object with a title and content.",
         responseMimeType: "application/json",
         responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: {
                type: Type.STRING,
                description: 'A concise title for the generated document (e.g., "Case Summary", "Key Legal Arguments").',
              },
              content: {
                type: Type.STRING,
                description: 'The main body of the generated text, formatted with paragraphs as needed.',
              },
            },
            required: ["title", "content"],
          },
       },
    });

    const jsonText = response.text.trim();
    const document = JSON.parse(jsonText);
    // Add some formatting to the content for better display
    document.content = document.content.replace(/\n/g, '<br />');
    return document;
  } catch (error) {
    console.error("Error performing legal task:", error);
    throw new Error("Failed to generate response. The AI model may be experiencing high load. Please try again.");
  }
}
