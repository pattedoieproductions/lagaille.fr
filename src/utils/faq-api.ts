import type { FaqData } from "../types/faq";

const API_URL = "https://api.wispra.fr";
const PUBLIC_CODE = "pk_faq_24f1a4072c4545c0a5c32f8ebb71ca6b";

export async function getFaq(): Promise<FaqData> {
  const response = await fetch(`${API_URL}/faq/public/${PUBLIC_CODE}`, {
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Erreur API: ${response.status}`);
  }

  return await response.json();
}
