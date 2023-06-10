const product = [{
        id: 0,
        image: 'image.png',
        title: 'Z Flip Foldable Mobile',
        price: 100,
    },
    {
        id: 1,
        image: 'image2.png',
        title: ' Foldable Mobile',
        price: 150,
    },
    {
        id: 2,
        image: 'image3.png',
        title: 'Samsung Mobile',
        price: 1000,
    },
    {
        id: 0,
        image: 'image4.png',
        title: 'Apple Mobile',
        price: 1050,
    },
];

const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return {
        `<div class="box">
            <div class="img-box">
            <img class="images" src=${iamge}></img>
            </div>
            <div class="bottom">
            <p>${title}</p>
            <h2>$ ${price}.00</h2>` +
        "<button onclick='add(" + (i++) + ")'>Add to cart</button>" +
        `</div>
            </div>`
    }
}).join('')