const data = [
  {
    name: "Hamburger",
    description: "Beef patty, sauce, coleslow, tomatoes, pickles",
    price: "90,000 L.L",
    category: "sandwiches",
  },
  {
    name: "Cheese Burger",
    description: "Beef patty, Cheese, sauce, coleslow, tomatoes, pickles",
    price: "105,000 L.L",
    category: "sandwiches",
  },
  {
    name: "Double Cheese Burger",
    description: "2 Beef patty, 2 Cheese, sauce, coleslow, tomatoes, pickles",
    price: "180,000 L.L",
    category: "sandwiches",
  },
  {
    name: "Zoro Burger",
    description: "Beef patty, Cheese, ham, sauce, coleslow, tomatoes, pickles",
    price: "140,000 L.L",
    category: "sandwiches",
  },
  {
    name: "Chiken Breast Burger",
    description: "Grilled chicken, fries, garlic, mayo, lettuce, pickles",
    price: "85,000 L.L",
    category: "sandwiches",
  },
  {
    name: "Crispy Chiken Burger",
    description:
      "Crispy chicken, cheese, fries, garlic, mayo, lettuce, pickles",
    price: "110,000 L.L",
    category: "sandwiches",
  },
  {
    name: "Steak & Cheese",
    description: "Steak, cheese, mushrooms, mayo, lettuce, pickles",
    price: "140,000 L.L",
    category: "sandwiches",
  },
  {
    name: "Chiken Fajitas",
    description:
      "Grilled chicken, cheese, mushrooms, onions, peppers, soy sauce, mayo, lettuce, pickles",
    price: "115,000 L.L",
    category: "sandwiches",
  },
  {
    name: "Philadelphia Steak",
    description:
      "Steak, cheese, mushrooms, onions, peppers, soy sauce, mayo, lettuce, pickles",
    price: "150,000 L.L",
    category: "sandwiches",
  },
  {
    name: "Tawook",
    description: "Grilled Tawouk, fries, mayo, lettuce, pickles",
    price: "100,000 L.L",
    category: "sandwiches",
  },
  {
    name: "Sujuk",
    description: "Sujuk, mayo, lettuce, tomatoes, pickles",
    price: "110,000 L.L",
    category: "sandwiches",
  },
  {
    name: "Cheese Sujuk",
    description: "Sujuk, cheese, mayo, lettuce, tomatoes, pickles",
    price: "130,000 L.L",
    category: "sandwiches",
  },
  {
    name: "Submarine",
    description:
      "Cheese, ham, salami, mayo, mustard, tomatoes, lettuce, pickles",
    price: "125,000 L.L",
    category: "sandwiches",
  },
  {
    name: "Hot Dog",
    description: "Hot dog, ketchup, mayo, mustard, tomatoes, lettuce, pickles",
    price: "70,000 L.L",
    category: "sandwiches",
  },
  {
    name: "Tuna Fish",
    description: "Tuna, mayo, mustard, lettuce, tomatoes, pickles",
    price: "100,000 L.L",
    category: "sandwiches",
  },
  {
    name: "Chiken Tenders",
    description:
      "5 pieces of crispy chicken, served with coleslaw, fries and garlic mayo dip",
    price: "160,000 L.L",
    category: "plates",
  },
  {
    name: "Chiken Fajitas Plate",
    description: "",
    price: "190,000 L.L",
    category: "plates",
  },
  {
    name: "Hamburger Plate",
    description:
      "2 Beef patties served with coleslaw, fries and one burger bun",
    price: "170,000 L.L",
    category: "plates",
  },
  {
    name: "Cheese Burger Plate",
    description:
      "2 Beef patties with cheese served with coleslaw, fries and one burger bun",
    price: "200,000 L.L",
    category: "plates",
  },
  {
    name: "Chiken Breast Burger Plate",
    description:
      "2 Grilled chicken served with coleslaw, fries, garlic mayo dip and one burger bun",
    price: "160,000 L.L",
    category: "plates",
  },
  {
    name: "Tawouk Plate",
    description:
      "Grilled tawouk served with coleslaw, fries, garlic mayo dip and lebanese bread",
    price: "170,000 L.L",
    category: "plates",
  },
  {
    name: "Pizza Peperoni",
    description: "Pepperoni, cheese, mushrooms, sauce",
    price: "200,000 L.L",
    category: "pizzas",
  },
  {
    name: "Pizza Chiken",
    description: "Chicken, cheese, mushrooms, sauce",
    price: "180,000 L.L",
    category: "pizzas",
  },
  {
    name: "Pizza Regular",
    description: "Ham, salami, cheese, olives, mushrooms, green pepper, sauce",
    price: "180,000 L.L",
    category: "pizzas",
  },
  {
    name: "Pizza margarita",
    description: "Cheese, sauce",
    price: "130,000 L.L",
    category: "pizzas",
  },
  {
    name: "Pizza Vegetarian",
    description: "Cheese, mushrooms, corn, green pepper, olives, sauce",
    price: "160,000 L.L",
    category: "pizzas",
  },
  {
    name: "Pizza Tuna",
    description: "Tuna, mushrooms, tomatoes, green pepper, onions, sauce",
    price: "150,000 L.L",
    category: "pizzas",
  },
  {
    name: "Mixed Salad",
    description:
      "Lettuce, tomatoes,cucumbers, palmitos, artichokes, corn, asparagus",
    price: "",
    category: "salads",
  },
  {
    name: "Chef Salad",
    description: "Lettuce, tomatoes, cucumbers, tuna, ham, corn, cheese",
    price: "110,000 L.L",
    category: "salads",
  },
  {
    name: "Season Salad",
    description: "Lettuce, tomatoes, cucumbers, corn",
    price: "60,000 L.L",
    category: "salads",
  },
  {
    name: "Rocca Salad",
    description: "",
    price: "",
    category: "salads",
  },
  {
    name: "Cabbage Salad",
    description: "Cabbage, mayonnaise, corn",
    price: "40,000 L.L",
    category: "salads",
  },
  {
    name: "Chiken Caesar Salad",
    description: "Iceberg, grilled chicken, croutons, caesar sauce",
    price: "100,000 L.L",
    category: "salads",
  },
  {
    name: "Crab Salad",
    description: "Crab, lettuce, corn, carrots",
    price: "110,000 L.L",
    category: "salads",
  },
  {
    name: "Fries sandwish",
    description: "Fries, coleslaw, pickles, ketchup",
    price: "50,000 L.L",
    category: "fries",
  },
  {
    name: "Fries Plate",
    description: "",
    price: "60,000 L.L",
    category: "fries",
  },
  {
    name: "Fries Box",
    description: "",
    price: "50,000 L.L",
    category: "fries",
  },
  {
    name: "Chocoba",
    description: "",
    price: "35,000 L.L",
    category: "desserts",
  },
  {
    name: "Cocktail sauce",
    description: "",
    price: "5,000 L.L",
    category: "dips",
  },
  {
    name: "Garlic mayo",
    description: "",
    price: "8,000 L.L",
    category: "dips",
  },
  {
    name: "Soft Drinks",
    description: "",
    price: "25,000 L.L",
    category: "drinks",
  },
  {
    name: "Water (Small)",
    description: "",
    price: "10,000 L.L",
    category: "drinks",
  },
  {
    name: "Water (Big)",
    description: "",
    price: "15,000 L.L",
    category: "drinks",
  },
  {
    name: "Nescafe",
    description: "",
    price: "20,000 L.L",
    category: "drinks",
  },
  {
    name: "Cappuccino",
    description: "",
    price: "20,000 L.L",
    category: "drinks",
  },
  {
    name: "Tea",
    description: "",
    price: "15,000 L.L",
    category: "drinks",
  },
  {
    name: "Green Tea",
    description: "",
    price: "15,000 L.L",
    category: "drinks",
  },
  {
    name: "Camomile",
    description: "",
    price: "15,000 L.L",
    category: "drinks",
  },
  {
    name: "Almaza Beer",
    description: "",
    price: "40,000 L.L",
    category: "drinks",
  },
  {
    name: "Heineken Beer",
    description: "",
    price: "",
    category: "drinks",
  },
  {
    name: "Ananas Xtra",
    description: "",
    price: "20,000 L.L",
    category: "drinks",
  },
  {
    name: "Mexican Beer",
    description: "",
    price: "55,000 L.L",
    category: "drinks",
  },
];

const body = document.querySelector("#body");
window.onload = function () {
  body.style.display = "block";
  document.getElementById("loading-screen").style.display = "none";
};

const menuBtnDOM = document.getElementById("btn-group");
const menuBodyDOM = document.getElementById("menu-body");
let categories = [];

data.forEach(
  (item) =>
    !categories.includes(item.category) && categories.push(item.category)
);

displayMenu();
function displayMenu() {
  menuBtnDOM.innerHTML = "";
  menuBodyDOM.innerHTML = "";
  categories.forEach((type) => {
    menuBtnDOM.innerHTML += `
      <button onclick="click_Tag('${type}')">
        <a class="reference" href="#${type}">
          <img src="./icons/${type}.png">
          <div>${type}</div>
        </a>
      </button>`;

    const section = document.createElement("section");
    section.id = type;
    section.innerHTML += `
        <button class="section-btn"   onclick="toggleDropdown('${type}')">
          <img src="./icons/${type}.png" />
          <p>${capitalizeFirstLetter(type)}</p>
          <div class='closer'><i class="fa fa-angle-up"></i></div>
        </button>`;

    const article = document.createElement("article");
    article.className = "dropdown-body show";
    section.appendChild(article);
    const newItems = data.filter((i) => i.category === type);
    newItems.forEach((item) => {
      article.innerHTML += `
        <fieldset>
          <legend class="title">${item.name}</legend>
          <div class="description">${item.description}</div>
          <div class="price">${item.price}</div>
        </fieldset>`;
    });
    menuBodyDOM.appendChild(section);
  });
}

function capitalizeFirstLetter(s) {
  return s[0].toUpperCase() + s.slice(1);
}

function click_Tag(id) {
  document.querySelector(`a[href="#${id}"]`).click();
}

function toggleDropdown(type) {
  let section = document.querySelector(`#${type}`);
  let btn = section.querySelector("button");
  let upDownAngle = btn.querySelector(".closer");
  let article = section.querySelector(`article`);
  let allFieldset = article.querySelectorAll("fieldset");

  btn.classList.toggle("animate");
  article.classList.toggle("show");
  article.classList.toggle("hide");

  let length = allFieldset.length;
  let articleDelayNb;
  let delayNb = 0.1;
  length < 4
    ? (articleDelayNb = 0.4)
    : length < 10
    ? (articleDelayNb = length * delayNb)
    : (articleDelayNb = 1);

  delayNb = articleDelayNb / allFieldset.length;

  article.style.transition = `all ${articleDelayNb}s `;
  if (article.classList.contains("show")) {
    upDownAngle.innerHTML = '<i class="fa fa-angle-up"></i>';
    // Add a delay to each list item
    for (let i = 0; i < allFieldset.length; i++) {
      let fieldset = allFieldset[i];
      let delay = i * delayNb;
      fieldset.style.transitionDelay = delay + "s";
    }
  } else {
    upDownAngle.innerHTML = '<i class="fa fa-angle-down"></i>';
    // Set the transition delay for each list item
    for (let i = allFieldset.length - 1; i >= 0; i--) {
      let fieldset = allFieldset[i];
      let delay = (allFieldset.length - i - 1) * delayNb + delayNb;
      fieldset.style.transitionDelay = delay + "s";
    }
  }
}

// footer
let date = new Date().getFullYear();
let copy = document.getElementById("copy");
copy.innerHTML = `copyright &copy; ${date}`;

//links
const scrollLinks = document.querySelectorAll(".reference");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = menuBtnDOM.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight - 7;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});

//show and remove whatsapp and back to top links
const wpBtn = document.getElementById("wp-btn");
const upBtn = document.getElementById("up-btn");
const appearPoint = window.innerHeight * 0.1;

window.addEventListener("scroll", () => {
  const scrollPosition = window.pageYOffset;
  if (scrollPosition >= appearPoint) {
    wpBtn.style.display = "flex";
    upBtn.style.display = "flex";
  } else {
    wpBtn.style.display = "none";
    upBtn.style.display = "none";
  }
});
