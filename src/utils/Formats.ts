import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function formattedDate(date: any) {
  return format(date, "dd/MM/yyyy", { locale: ptBR });
}

export const { format: formatPrice } = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
