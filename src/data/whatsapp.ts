/**
 * Helper único para todos os links de WhatsApp do site.
 *
 * Regra (documentada em Bases/processo-criativo-refinamento.md, ponto 4 do
 * ciclo @leyasantoshair): um CTA de WhatsApp nunca deve abrir um chat vazio.
 * Cada chamada deste helper recebe uma mensagem pré-preenchida e contextual
 * ao lugar da página onde o link aparece.
 *
 * Número real da cliente (CTA.txt): wa.me/351935657144
 */
const WHATSAPP_NUMBER = "351935657144";

export function whatsappLink(mensagem: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
}
