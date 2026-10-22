// Produkt w magazynie Elektro-Bud
interface Product {
  id: number;
  name: string;
  ean: string;
  category: string;
  sector: string;
  shelf: string;
  quantity: number;
}

// Lista produktów w magazynie (dane startowe)
let products: Product[] = [
  { id: 1, name: "Kabel YDY 3x2,5", ean: "5901234567890", category: "Kable", sector: "A", shelf: "3", quantity: 120 },
  { id: 2, name: "Gniazdo podtynkowe", ean: "5901234567891", category: "Osprzet", sector: "B", shelf: "1", quantity: 45 },
  { id: 3, name: "Wylacznik nadpradowy B16", ean: "5901234567892", category: "Ochrona", sector: "C", shelf: "2", quantity: 30 },
];