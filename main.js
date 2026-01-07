const menu = [
  // HOT COFFEE
  {
    id: 1,
    name: "Espresso",
    description: "Strong and rich coffee shot",
    price: 30000,
    image: "./image copy 3.png",
    category: "hot",
    rating: 4.6
  },
  {
    id: 2,
    name: "Double Espresso",
    description: "Extra strong espresso",
    price: 35000,
    image: "./image copy 16.png",
    category: "hot",
    rating: 4.7
  },
  {
    id: 3,
    name: "Americano",  
    description: "Smooth black coffee",
    price: 35000,
    image: "./image copy 13.png",
    category: "hot",
    rating: 4.4
  },
  {
    id: 4,
    name: "Cappuccino",
    description: "Perfect balance of milk and foam",
    price: 45000,
    image: "./image copy 4.png",
    category: "hot",
    rating: 4.8
  },
  {
    id: 5,
    name: "Latte",
    description: "Smooth and creamy coffee",
    price: 50000,
    image: "./image copy 5.png",
    category: "hot",
    rating: 4.9
  },
  {
    id: 6,
    name: "Vanilla Latte",
    description: "Latte with vanilla flavor",
    price: 52000,
    image: "./image copy 17.png",
    category: "hot",
    rating: 4.7
  },
  {
    id: 7,
    name: "Caramel Latte",
    description: "Sweet caramel flavored latte",
    price: 53000,
    image: "./image copy 18.png",
    category: "hot",
    rating: 4.8
  },
  {
    id: 8,
    name: "Mocha",
    description: "Coffee with chocolate taste",
    price: 55000,
    image: "./image copy 15.png",
    category: "hot",
    rating: 4.6
  },
  {
    id: 9,
    name: "Macchiato",
    description: "Espresso with milk foam",
    price: 48000,
    image: "./image copy 14.png",
    category: "hot",
    rating: 4.5
  },

  // COLD COFFEE
  {
    id: 10,
    name: "Iced Americano",
    description: "Cold black coffee",
    price: 45000,
    image: "./image copy 19.png",
    category: "cold",
    rating: 4.3
  },
  {
    id: 11,
    name: "Iced Latte",
    description: "Cold and creamy latte",
    price: 55000,
    image: "./image copy 20.png",
    category: "cold",
    rating: 4.7
  },
  {
    id: 12,
    name: "Cold Brew",
    description: "Slow brewed cold coffee",
    price: 58000,
    image: "./image copy 21.png",
    category: "cold",
    rating: 4.9
  },
  {
    id: 13,
    name: "Frappe",
    description: "Blended iced coffee",
    price: 60000,
    image: "./image copy 22.png",
    category: "cold",
    rating: 4.6
  },
  {
    id: 14,
    name: "Iced Mocha",
    description: "Cold chocolate coffee",
    price: 60000,
    image: "./image copy 23.png",
    category: "cold",
    rating: 4.5
  },

  // DESSERTS
  {
    id: 15,
    name: "Croissant",
    description: "Buttery French pastry",
    price: 25000,
    image: "/image copy 24.png",
    category: "dessert",
    rating: 4.4
  },
  {
    id: 16,
    name: "Chocolate Muffin",
    description: "Soft chocolate muffin",
    price: 30000,
    image: "/image copy 25.png",
    category: "dessert",
    rating: 4.6
  },
  {
    id: 17,
    name: "Cheesecake",
    description: "Classic creamy cheesecake",
    price: 42000,
    image: "/image copy 26.png",
    category: "dessert",
    rating: 4.8
  },
  {
    id: 18,
    name: "Chocolate Cake",
    description: "Rich chocolate cake",
    price: 45000,
    image: "/image copy 27.png",
    category: "dessert",
    rating: 4.7
  }
];



let body = document.body
let featured = document.querySelector(".Featured")
let abu = document.querySelector(".abu")
let about = document.querySelector(".about")
let card1 = document.querySelector(".card1")
let card2 = document.querySelector(".card2")
let card3 = document.querySelector(".card3")
let header = document.querySelector("header")
let light = document.getElementById("light")
let dark = document.getElementById("dark")
let copylight = document.getElementById("copylight")
let copydark = document.getElementById("copydark")
let or = document.querySelector(".or")
let or2 = document.querySelector(".or2")
let or3 = document.querySelector(".or3")
let manucards = document.querySelector(".manucards")
let search = document.getElementById("search")
let points = document.querySelector(".points")
let pointt = document.querySelector(".tpoint")
let footer = document.querySelector(".footer")
let hamburger = document.querySelector(".hamburger")
let text = document.querySelector(".text")
let btns = document.querySelector(".btns")
let hamburgermanu = document.getElementById("hamburgermanu")

light.addEventListener("click",()=>{
    body.className = "light"
    header.className = "head"
    card1.className = "card1"
    card2.className = "card2"
    card3.className = "card3"
    about.className = "about"
    featured.className = "Featured"
    abu.className = "abu"
    points.className = "points"
    pointt.className = "tpoint"
    footer.className = "footer"
    or.className = "or"
    or2.className = "or2"
    or3.className = "or3"    
})
dark.addEventListener("click",()=>{
    body.className = "dark"
    header.className = "darkh"
    card1.className = "cardd1"
    card2.className = "cardd2"
    card3.className = "cardd3"
    about.className = "adark"
    abu.className = "abudark"
    featured.className = "fdark"
    points.className = "pointsd"
    pointt.className = "tpointd"
    footer.className = "darkfooter"
    or.className = "darkor"
    or2.className = "darkor2"
    or3.className = "darkor3"
})

hamburger.addEventListener("click", () => {
  text.classList.toggle("hamburgermanut")
  btns.classList.toggle("hamburgermanub")
});



function renderData (data){
    manucards.innerHTML = ``
    data.forEach((manu)=>{
        let manucard = document.createElement("div")
        manucard.innerHTML = `
                <div data-aos="fade-up">
                <img height="300px" src="${manu.image}" alt="">
                <h1>${manu.name}</h1>
                <p class="ratm">${manu.rating}⭐</p>
                <p>price:</p>
                <p>${manu.price} so'm</p>
                </div>
        `
        manucards.appendChild(manucard)
        manucard.className = "manucard"
        dark.addEventListener("click",()=>{
            manucard.className = "manucardd"
        })
        light.addEventListener("click",()=>{
            manucard.className = "manucard"
        })
    })
}


renderData(menu)

search.addEventListener("input", (e)=>{
    manucards.innerHTML = ``
    let ar = menu.filter((cofe)=>{
        return cofe.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    renderData(ar);
    console.log(ar);
});

