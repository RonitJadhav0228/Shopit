let shop = document.getElementById("shop");

// Adding the deatils by using arrays
let shopItemsData = [{
    id: "t1ofproject",
    name: "Casual Shirt",
    price: 39,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "./img/tshirt01.jpg"
},

{
    id: "t2ofproject",
    name: "Shirt",
    price: 49,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "./img/tshirt02.jpg"
},

{
    id: "t3ofproject",
    name: "Casual Shirt",
    price: 39,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "./img/tshirt01.jpg"
},

{
    id: "t4ofproject",
    name: "Black",
    price: 39,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "./img/tshirt04.jpg"
},

];

let basket = JSON.parse(localStorage.getItem("data")) || [];



// Creating the arrow function and retriving html in javascript 

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        let { id, price, img, desc } = x;
        return `
    <div id = product-id-${id} class= "item" >
            <img width="220" src="${img}" alt=" " />
            <div class="details">
                <h3>${x.name}</h3>
               <p> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <div class="price-quantity">
                    <h2>$ ${x.price}</h2>
                    <div class="buttons">
                        <i onclick = "decrement(${id})" class="bi bi-dash-lg"></i>
                        <div id = ${id} class="quantity">0</div>
                        <i onclick = "increment(${id})" class="bi bi-plus-lg"></i>
                    </div>

                </div>
            </div>
        </div>
` ;
    }).join("")); // we use .join in order to remove commas 
};

generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    }
    else {
        search.item += 1;
    }

    localStorage.setItem("data",JSON.stringify(basket));


    // console.log(basket);
    update(selectedItem.id);
};

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search.item === 0) return;
    else {
        search.item -= 1;
    }

    localStorage.setItem("data",JSON.stringify(basket));
    // console.log(basket);
    update(selectedItem.id);

};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();

};

let calculation = () => {
    let cartIcon = document.getElementById("cart-amount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) =>x+y,0);
    
}