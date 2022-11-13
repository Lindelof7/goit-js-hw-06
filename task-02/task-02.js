const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const elements = ingredients.map(ingredient => {
    const newLink = document.createElement("li");
    newLink.textContent = ingredient;
    newLink.classList.add("item");
    return newLink;
});

ingredientsEl.append(...elements);
console.log(elements);