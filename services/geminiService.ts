import { GoogleGenAI, Type } from "@google/genai";
import { InsightResult } from "../types";

const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const generateSaaSIdeas = async (niche: string): Promise<InsightResult[]> => {
  if (!apiKey) {
    return [
      {
        title: "App de Agendamento Premium (Demo)",
        description: "Sistema completo com gestão de horários, pagamentos via Pix automatizado e lembretes via WhatsApp para reduzir o no-show."
      },
      {
        title: "Clube de Assinatura Recorrente (Demo)",
        description: "Plataforma para gerir planos mensais de serviços, com renovação automática e área exclusiva para membros."
      },
      {
        title: "CRM Especializado (Demo)",
        description: "Gestão de leads específica para o nicho, com funil de vendas automatizado e integração com Google Calendar."
      }
    ];
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Atue como um arquiteto de software e estrategista de negócios. O usuário tem um negócio no nicho: "${niche}". 
      Sugira 3 ideias de Micro SaaS (aplicativos web) específicos para esse nicho que resolvam dores operacionais e aumentem o faturamento.
      Para cada ideia, forneça um 'title' (Nome criativo do App) e uma 'description' detalhada listando as funcionalidades principais (ex: agendamento, pagamentos, integrações).
      Responda EXCLUSIVAMENTE com um JSON array.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING }
            },
            required: ["title", "description"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];
    
    return JSON.parse(text) as InsightResult[];
  } catch (error) {
    console.error("Erro ao gerar ideias:", error);
    return [
      {
        title: "Erro na conexão",
        description: "Não foi possível gerar ideias personalizadas no momento. Tente novamente."
      }
    ];
  }
};