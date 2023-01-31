export const btn = document.querySelector("#btn");
export const menu = document.querySelector("#menu");

export default btn.onclick = (event) => {
  event.preventDefault();
  switch (menu.selectedIndex) {
    case 1:
      ShowPrice("../img/IceCream.gif", "Ice cream image", "Ice cream", "12.000");
      break;

    case 2:
      ShowPrice("../img/Hamburger.gif", "Hamburger image", "Hamburger", "15.000");
      break;

    case 3:
      ShowPrice("../img/hotdog.gif", "Hotdog image", "Hotdog", "18.000");
      break;

    case 4:
      ShowPrice("../img/salad.gif", "Salad image", "Salad", "25.000");
      break;

    default:
      alert("You must chose a option from the menu.");
      break;
  }
};


export function ShowPrice(src, alt, ItemName, ItemPrice) {
  let item = document.getElementById("item");
  item.innerHTML = "";

  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;

  const container = document.createElement("div");
  container.className = "container";

  const Name = document.createElement("h4");
  Name.textContent = ItemName;

  const Price = document.createElement("p");
  Price.textContent = `Price: ${ItemPrice} COP`;

  container.appendChild(Name);
  container.appendChild(Price);
  card.appendChild(img);
  card.appendChild(container);

  item.appendChild(card);
}



