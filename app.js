var products = [
    {
        id:0,
        name:"Apples",
        price:"2.99",
        image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
        color:"red"
    },
    {
        id:1,
        name:"Bananas",
        price:"2.50",
        image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
        color:"gold"
    },
    {
        id:2,
        name:"oranges",
        price:"3.50",
        image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
        color:"orange"
    }
];
var fruits = new fruits();
function popUp (id) {
    const that = this;
    this.popUpele = document.createElement("div");
    this.popUpele.classList.add("popUp");
    this.imageele = document.createElement("img");
    this.imageele.setAttribute("src", products[id].image);
    this.nameele = document.createElement("p");
    this.priceele = document.createElement("p");
    this.nameele.innerHTML = "Name: " + products[id].name;
    this.priceele.innerHTML = "Price: $" + products[id].price;

    this.popUpele.addEventListener("click", function () {
        that.popUpele.style.display = "none";
    });

    this.popUpele.appendChild(this.imageele)
    this.popUpele.appendChild(this.nameele)
    this.popUpele.appendChild(this.priceele)

    document.body.appendChild(this.popUpele);
}
function fruits() {
    const that = this;
    this.productli = [];
    this.fruitele = document.createElement("div");
    this.fruitele.classList.add("products");


    for (let i = 0; i < products.length; i++) {
        this.productli.push(new product(i));
        this.productli[i].productele.addEventListener("click", function () {
            var pop = new popUp(i);
        });
        this.fruitele.appendChild(this.productli[i].productele);
    }
    document.body.appendChild(this.fruitele);
}
function product(id) {
    let that = this;
    this.productele = document.createElement("div");
    this.imageele = document.createElement("img");
    this.imageele.setAttribute("src", products[id].image);
    this.productele.append(this.imageele);
    this.nameele = document.createElement("p");
    this.priceele = document.createElement("p");
    this.productele.classList.add("product");

    this.nameele.innerHTML = "Name: " + products[id].name;
    this.priceele.innerHTML = "price: $" + products[id].price;
    this.productele.addEventListener("mouseover", function ()
    {
        that.productele.style.borderColor = products[id].color;
    });
    this.productele.addEventListener("mouseout", function()
    {
        that.productele.style.borderColor = "black";
    });
    this.productele.appendChild(this.nameele);
    this.productele.appendChild(this.priceele);
}

