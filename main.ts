// Zadanie 3PAZW - Projekt Elektro-Bud
//
// Zakres funkcjonalny aplikacji:
// 1. wyswietlanie listy produktow magazynowych,
// 2. dodawanie nowego produktu,
// 3. usuwanie produktu z listy.
//
// Aplikacja trzyma dane tylko w pamieci - po odswiezeniu strony wracaja dane startowe.

// Wyswietla wszystkie produkty w tabeli
function renderProducts(): void {
  const tbody = document.getElementById("product-rows") as HTMLTableSectionElement;
  tbody.innerHTML = "";

  for (const product of products) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td>${product.ean}</td>
      <td>${product.category}</td>
      <td>${product.sector} / ${product.shelf}</td>
      <td>${product.quantity}</td>
      <td><button>Usun</button></td>
    `;
    row.querySelector("button")!.addEventListener("click", () => removeProduct(product.id));
    tbody.appendChild(row);
  }
}

// Dodaje nowy produkt na podstawie danych z formularza
function addProduct(event: Event): void {
  event.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value.trim();
  const ean = (document.getElementById("ean") as HTMLInputElement).value.trim();
  const category = (document.getElementById("category") as HTMLInputElement).value.trim();
  const sector = (document.getElementById("sector") as HTMLInputElement).value.trim();
  const shelf = (document.getElementById("shelf") as HTMLInputElement).value.trim();
  const quantity = parseInt((document.getElementById("quantity") as HTMLInputElement).value, 10);

  if (name === "" || ean === "" || isNaN(quantity)) {
    alert("Wypelnij nazwe, kod EAN i ilosc.");
    return;
  }

  const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
  products.push({ id: newId, name, ean, category, sector, shelf, quantity });

  (document.getElementById("add-form") as HTMLFormElement).reset();
  renderProducts();
}

// Usuwa produkt o podanym id
function removeProduct(id: number): void {
  products = products.filter((product) => product.id !== id);
  renderProducts();
}

// Start aplikacji
function init(): void {
  (document.getElementById("add-form") as HTMLFormElement).addEventListener("submit", addProduct);
  renderProducts();
}

init();