/* =========================================================
   TMSJEANS — FRESH COMPLETE APP.JS
========================================================= */


/* =========================================================
   FIREBASE
========================================================= */

const FIREBASE_CONFIG = {

  apiKey:
    "AIzaSyAxYqY7V2_h5FBCa4Cm9xX5pABu-oAUzg4",

  authDomain:
    "tmsjeans.firebaseapp.com",

  projectId:
    "tmsjeans",

  storageBucket:
    "tmsjeans.firebasestorage.app",

  messagingSenderId:
    "155013489437",

  appId:
    "1:155013489437:web:d1f91792dd8ebba29cf7f4",

  databaseURL:
    "https://tmsjeans-default-rtdb.firebaseio.com"

};


let auth = null;
let db = null;
let firebaseReady = false;


/* =========================================================
   PRODUCTS
========================================================= */

const products = [

  {
    id:1,
    name:"Classic Black Denim",
    category:"Jeans",
    price:799,
    oldPrice:1199,
    tag:"BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=90",
    gallery:[
      "assets/products/classic-black-denim/front.jpg",
      "assets/products/classic-black-denim/side.jpg",
      "assets/products/classic-black-denim/back.jpg",
      "assets/products/classic-black-denim/detail.jpg"
    ],
    description:
      "Clean black denim with a modern everyday fit."
  },


  {
    id:2,
    name:"Dark Blue Slim Fit Jeans",
    category:"Jeans",
    price:999,
    oldPrice:1499,
    tag:"POPULAR",
    image:
      "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?auto=format&fit=crop&w=1000&q=90",
    gallery:[
      "assets/products/dark-blue-slim/front.jpg",
      "assets/products/dark-blue-slim/side.jpg",
      "assets/products/dark-blue-slim/back.jpg",
      "assets/products/dark-blue-slim/detail.jpg"
    ],
    description:
      "Dark blue slim-fit denim designed for a clean silhouette."
  },


  {
    id:3,
    name:"Light Wash Baggy Jeans",
    category:"Jeans",
    price:899,
    oldPrice:1399,
    tag:"NEW",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1000&q=90",
    gallery:[
      "assets/products/light-wash-baggy/front.jpg",
      "assets/products/light-wash-baggy/side.jpg",
      "assets/products/light-wash-baggy/back.jpg",
      "assets/products/light-wash-baggy/detail.jpg"
    ],
    description:
      "Relaxed baggy denim with a contemporary streetwear fit."
  },


  {
    id:4,
    name:"Vintage Grey Straight Jeans",
    category:"Jeans",
    price:799,
    oldPrice:1199,
    tag:"",
    image:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=1000&q=90",
    gallery:[
      "assets/products/vintage-grey/front.jpg",
      "assets/products/vintage-grey/side.jpg",
      "assets/products/vintage-grey/back.jpg",
      "assets/products/vintage-grey/detail.jpg"
    ],
    description:
      "Vintage-washed grey denim with an easy straight fit."
  },


  {
    id:5,
    name:"Premium Indigo Denim",
    category:"Jeans",
    price:1199,
    oldPrice:1799,
    tag:"PREMIUM",
    image:
      "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?auto=format&fit=crop&w=1000&q=90",
    gallery:[
      "assets/products/premium-indigo/front.jpg",
      "assets/products/premium-indigo/side.jpg",
      "assets/products/premium-indigo/back.jpg",
      "assets/products/premium-indigo/detail.jpg"
    ],
    description:
      "Premium dark indigo denim for a refined everyday look."
  },


  {
    id:6,
    name:"Black Cargo Jeans",
    category:"Jeans",
    price:1199,
    oldPrice:1699,
    tag:"TRENDING",
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=90",
    gallery:[
      "assets/products/black-cargo/front.jpg",
      "assets/products/black-cargo/side.jpg",
      "assets/products/black-cargo/back.jpg",
      "assets/products/black-cargo/detail.jpg"
    ],
    description:
      "Utility-inspired cargo denim with a strong streetwear look."
  },


  {
    id:7,
    name:"Classic Denim Jacket",
    category:"Jackets",
    price:999,
    oldPrice:1499,
    tag:"NEW",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=90",
    gallery:[
      "assets/products/classic-denim-jacket/front.jpg",
      "assets/products/classic-denim-jacket/side.jpg",
      "assets/products/classic-denim-jacket/back.jpg",
      "assets/products/classic-denim-jacket/detail.jpg"
    ],
    description:
      "Classic denim jacket built for layering and everyday wear."
  },


  {
    id:8,
    name:"Washed Blue Denim Jacket",
    category:"Jackets",
    price:1199,
    oldPrice:1799,
    tag:"PREMIUM",
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=1000&q=90",
    gallery:[
      "assets/products/washed-blue-jacket/front.jpg",
      "assets/products/washed-blue-jacket/side.jpg",
      "assets/products/washed-blue-jacket/back.jpg",
      "assets/products/washed-blue-jacket/detail.jpg"
    ],
    description:
      "Washed denim jacket with a premium relaxed feel."
  },


  {
    id:9,
    name:"Oversized Essential Tee",
    category:"T-Shirts",
    price:399,
    oldPrice:599,
    tag:"POPULAR",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=90",
    gallery:[],
    description:
      "Everyday heavyweight oversized tee."
  },


  {
    id:10,
    name:"Premium White Tee",
    category:"T-Shirts",
    price:449,
    oldPrice:649,
    tag:"",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f37f4c7f?auto=format&fit=crop&w=1000&q=90",
    gallery:[],
    description:
      "Clean premium white tee for everyday styling."
  },


  {
    id:11,
    name:"Relaxed Overshirt",
    category:"Shirts",
    price:799,
    oldPrice:1199,
    tag:"NEW",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1000&q=90",
    gallery:[],
    description:
      "Relaxed overshirt with a versatile everyday silhouette."
  },


  {
    id:12,
    name:"Utility Black Shirt",
    category:"Shirts",
    price:899,
    oldPrice:1299,
    tag:"",
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=1000&q=90",
    gallery:[],
    description:
      "Minimal utility-inspired shirt with a clean finish."
  },


  {
    id:13,
    name:"Mid Blue Regular Jeans",
    category:"Jeans",
    price:899,
    oldPrice:1399,
    tag:"",
    image:
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=1000&q=90",
    gallery:[
      "assets/products/mid-blue-regular/front.jpg",
      "assets/products/mid-blue-regular/side.jpg",
      "assets/products/mid-blue-regular/back.jpg",
      "assets/products/mid-blue-regular/detail.jpg"
    ],
    description:
      "Classic mid-blue regular-fit denim."
  },


  {
    id:14,
    name:"Stone Wash Straight Jeans",
    category:"Jeans",
    price:999,
    oldPrice:1499,
    tag:"NEW",
    image:
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=1000&q=90",
    gallery:[
      "assets/products/stone-wash/front.jpg",
      "assets/products/stone-wash/side.jpg",
      "assets/products/stone-wash/back.jpg",
      "assets/products/stone-wash/detail.jpg"
    ],
    description:
      "Soft stone-washed denim with a timeless straight fit."
  },


  {
    id:15,
    name:"Jet Black Slim Jeans",
    category:"Jeans",
    price:799,
    oldPrice:1199,
    tag:"",
    image:
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1000&q=90",
    gallery:[
      "assets/products/jet-black-slim/front.jpg",
      "assets/products/jet-black-slim/side.jpg",
      "assets/products/jet-black-slim/back.jpg",
      "assets/products/jet-black-slim/detail.jpg"
    ],
    description:
      "Deep black slim denim for a sharp everyday look."
  },


  {
    id:16,
    name:"Loose Fit Blue Denim",
    category:"Jeans",
    price:899,
    oldPrice:1399,
    tag:"TRENDING",
    image:
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1000&q=90",
    gallery:[
      "assets/products/loose-fit-blue/front.jpg",
      "assets/products/loose-fit-blue/side.jpg",
      "assets/products/loose-fit-blue/back.jpg",
      "assets/products/loose-fit-blue/detail.jpg"
    ],
    description:
      "Relaxed loose-fit denim with modern proportions."
  }

];


/* =========================================================
   CART
========================================================= */

let cart =
  JSON.parse(
    localStorage.getItem(
      "tms_cart"
    ) || "[]"
  );


let currentFilter = "All";

let currentProduct = null;

let currentGallery = [];

let galleryIndex = 0;

let selectedSize = "32";

let currentQty = 1;


/* =========================================================
   HELPERS
========================================================= */

const $ =
  selector =>
    document.querySelector(
      selector
    );


const money =
  value =>
    "₹" +
    Number(
      value || 0
    ).toLocaleString(
      "en-IN"
    );


function toast(
  message
){

  let box =
    $("#toast");


  if(!box){

    box =
      document.createElement(
        "div"
      );

    box.id =
      "toast";

    document.body.appendChild(
      box
    );

  }


  box.textContent =
    message;


  box.classList.add(
    "show"
  );


  clearTimeout(
    window.tmsToastTimer
  );


  window.tmsToastTimer =
    setTimeout(
      () =>
        box.classList.remove(
          "show"
        ),
      2500
    );

}


/* =========================================================
   FIREBASE INIT
========================================================= */

async function initFirebase(){

  try{

    if(
      typeof firebase ===
      "undefined"
    ){

      console.error(
        "Firebase SDK not loaded."
      );

      return;

    }


    if(
      !firebase.apps.length
    ){

      firebase.initializeApp(
        FIREBASE_CONFIG
      );

    }


    auth =
      firebase.auth();


    db =
      firebase.database();


    firebaseReady =
      true;


    auth.onAuthStateChanged(
      user => {

        updateAccountButton();

        updateAccountArea();

      }
    );


    console.log(
      "Firebase connected."
    );

  }

  catch(error){

    console.error(
      "Firebase error:",
      error
    );

  }

}


/* =========================================================
   PRODUCTS
========================================================= */

function renderProducts(){

  const grid =
    $("#productGrid");


  if(!grid)
    return;


  const list =
    products.filter(
      product =>

        currentFilter ===
          "All"

        ||

        product.category ===
          currentFilter

    );


  grid.innerHTML =
    list
      .map(
        product => `

          <article
            class="product-card"
            data-product-id="${product.id}"
          >

            <div
              class="product-image"
            >

              ${
                product.tag
                  ? `
                    <div
                      class="product-tag"
                    >
                      ${product.tag}
                    </div>
                  `
                  : ""
              }


              <img
                src="${product.image}"
                alt="${product.name}"
              >


              <button
                class="quick-add"
                data-add="${product.id}"
                type="button"
              >
                ADD TO BAG —
                ${money(product.price)}
              </button>

            </div>


            <div
              class="product-info"
            >

              <h3>
                ${product.name}
              </h3>

              <p>
                ${product.category}
              </p>


              <div
                class="price-row"
              >

                <strong>
                  ${money(
                    product.price
                  )}
                </strong>

                ${
                  product.oldPrice
                    ? `
                      <del>
                        ${money(
                          product.oldPrice
                        )}
                      </del>
                    `
                    : ""
                }

              </div>

            </div>

          </article>

        `
      )
      .join("");


  grid
    .querySelectorAll(
      "[data-add]"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          event => {

            event.stopPropagation();


            addToCart(
              Number(
                button.dataset.add
              )
            );

          }
        );

      }
    );


  grid
    .querySelectorAll(
      ".product-card"
    )
    .forEach(
      card => {

        card.addEventListener(
          "click",
          () => {

            const id =
              Number(
                card.dataset.productId
              );


            openProduct(
              id
            );

          }
        );

      }
    );

}


/* =========================================================
   COLLECTIONS
========================================================= */

function setupCollections(){

  document
    .querySelectorAll(
      ".collection-card"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            currentFilter =
              button.dataset.filter;


            document
              .querySelectorAll(
                ".filter"
              )
              .forEach(
                filter =>
                  filter.classList.toggle(
                    "active",
                    filter.dataset
                      .filter ===
                    currentFilter
                  )
              );


            renderProducts();


            document
              .querySelector(
                "#shop"
              )
              ?.scrollIntoView({
                behavior:
                  "smooth"
              });

          }
        );

      }
    );

}


/* =========================================================
   FILTERS
========================================================= */

function setupFilters(){

  document
    .querySelectorAll(
      ".filter"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            currentFilter =
              button.dataset.filter;


            document
              .querySelectorAll(
                ".filter"
              )
              .forEach(
                item =>
                  item.classList.toggle(
                    "active",
                    item ===
                      button
                  )
              );


            renderProducts();

          }
        );

      }
    );

}


/* =========================================================
   CART
========================================================= */

function saveCart(){

  localStorage.setItem(
    "tms_cart",
    JSON.stringify(
      cart
    )
  );


  renderCart();

}


function addToCart(
  productId,
  quantity = 1
){

  const item =
    cart.find(
      cartItem =>
        cartItem.id ===
        productId
    );


  if(item){

    item.qty +=
      quantity;

  }

  else{

    cart.push({
      id:
        productId,

      qty:
        quantity

    });

  }


  saveCart();


  openCart();


  toast(
    "Added to your bag"
  );

}


function changeQty(
  productId,
  delta
){

  const item =
    cart.find(
      cartItem =>
        cartItem.id ===
        productId
    );


  if(!item)
    return;


  item.qty +=
    delta;


  if(
    item.qty <= 0
  ){

    cart =
      cart.filter(
        cartItem =>
          cartItem.id !==
          productId
      );

  }


  saveCart();

}


function renderCart(){

  const items =
    cart.map(
      item => {

        const product =
          products.find(
            p =>
              p.id ===
              item.id
          );


        return {

          ...item,

          product

        };

      }
    )
    .filter(
      item =>
        item.product
    );


  const count =
    items.reduce(
      (sum,item) =>
        sum + item.qty,
      0
    );


  $("#cartCount")
    .textContent =
    count;


  $("#cartItems")
    .innerHTML =
    items
      .map(
        item => `

          <div
            class="cart-row"
          >

            <img
              src="${item.product.image}"
              alt="${item.product.name}"
            >


            <div>

              <h4>
                ${item.product.name}
              </h4>


              <p>
                ${money(
                  item.product.price
                )}
              </p>


              <div
                class="qty-small"
              >

                <button
                  data-qty-minus="${item.id}"
                >
                  −
                </button>

                <span>
                  ${item.qty}
                </span>

                <button
                  data-qty-plus="${item.id}"
                >
                  +
                </button>

              </div>

            </div>


            <button
              class="remove-item"
              data-remove="${item.id}"
            >
              ×
            </button>

          </div>

        `
      )
      .join("");


  $("#cartEmpty")
    .style.display =
    items.length
      ? "none"
      : "block";


  $("#cartFooter")
    .style.display =
    items.length
      ? "block"
      : "none";


  const total =
    items.reduce(
      (sum,item) =>
        sum +
        item.product.price *
        item.qty,
      0
    );


  $("#cartTotal")
    .textContent =
    money(total);


  document
    .querySelectorAll(
      "[data-qty-minus]"
    )
    .forEach(
      button => {

        button.onclick =
          () =>
            changeQty(
              Number(
                button.dataset
                  .qtyMinus
              ),
              -1
            );

      }
    );


  document
    .querySelectorAll(
      "[data-qty-plus]"
    )
    .forEach(
      button => {

        button.onclick =
          () =>
            changeQty(
              Number(
                button.dataset
                  .qtyPlus
              ),
              1
            );

      }
    );


  document
    .querySelectorAll(
      "[data-remove]"
    )
    .forEach(
      button => {

        button.onclick =
          () => {

            const id =
              Number(
                button.dataset
                  .remove
              );


            cart =
              cart.filter(
                item =>
                  item.id !==
                  id
              );


            saveCart();

          };

      }
    );

}


function openCart(){

  $("#cartDrawer")
    .classList
    .add("open");


  $("#overlay")
    .classList
    .add("show");


  document.body.classList
    .add("no-scroll");

}


function closeCart(){

  $("#cartDrawer")
    .classList
    .remove("open");


  $("#overlay")
    .classList
    .remove("show");


  document.body.classList
    .remove("no-scroll");

}


/* =========================================================
   PRODUCT MODAL
========================================================= */

function getGallery(
  product
){

  if(
    product.gallery &&
    product.gallery.length
  ){

    return [
      product.image,
      ...product.gallery
    ];

  }


  return [
    product.image
  ];

}


function openProduct(
  productId
){

  const product =
    products.find(
      item =>
        item.id ===
        productId
    );


  if(!product)
    return;


  currentProduct =
    product;


  currentGallery =
    getGallery(
      product
    );


  galleryIndex =
    0;


  currentQty =
    1;


  selectedSize =
    "32";


  $("#productBadge")
    .textContent =
    product.tag ||
    "TMSJEANS";


  $("#productName")
    .textContent =
    product.name;


  $("#productCategory")
    .textContent =
    product.category;


  $("#productPrice")
    .textContent =
    money(
      product.price
    );


  $("#productOldPrice")
    .textContent =
    product.oldPrice
      ? money(
          product.oldPrice
        )
      : "";


  if(product.oldPrice){

    const discount =
      Math.round(
        (
          1 -
          product.price /
          product.oldPrice
        ) * 100
      );


    $("#productDiscount")
      .textContent =
      discount +
      "% OFF";

  }

  else{

    $("#productDiscount")
      .textContent =
      "";

  }


  $("#productDescription")
    .textContent =
    product.description;


  $("#qtyValue")
    .textContent =
    currentQty;


  document
    .querySelectorAll(
      ".size-option"
    )
    .forEach(
      button => {

        button.classList.toggle(
          "active",
          button.dataset.size ===
            "32"
        );

      }
    );


  renderGallery();


  $("#productModal")
    .classList
    .add("show");


  document.body.classList
    .add("no-scroll");

}


function renderGallery(){

  const thumbs =
    $("#productThumbs");


  thumbs.innerHTML =
    currentGallery
      .map(
        (
          image,
          index
        ) => `

          <button
            class="
              thumb
              ${
                index === 0
                  ? "active"
                  : ""
              }
            "
            data-gallery-index="${index}"
            type="button"
          >

            <img
              src="${image}"
              alt="Product image ${index + 1}"
            >

          </button>

        `
      )
      .join("");


  updateMainGalleryImage();


  thumbs
    .querySelectorAll(
      ".thumb"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            galleryIndex =
              Number(
                button.dataset
                  .galleryIndex
              );


            updateMainGalleryImage();

          }
        );


        const img =
          button.querySelector(
            "img"
          );


        img.addEventListener(
          "error",
          () => {

            img.src =
              currentProduct.image;

          }
        );

      }
    );

}


function updateMainGalleryImage(){

  if(
    !currentGallery.length
  )
    return;


  const image =
    currentGallery[
      galleryIndex
    ];


  const main =
    $("#productMainImage");


  main.src =
    image;


  main.alt =
    currentProduct.name;


  main.onerror =
    () => {

      main.onerror =
        null;

      main.src =
        currentProduct.image;

    };


  document
    .querySelectorAll(
      ".thumb"
    )
    .forEach(
      (
        thumb,
        index
      ) => {

        thumb.classList.toggle(
          "active",
          index ===
            galleryIndex
        );

      }
    );

}


function galleryNext(){

  if(
    currentGallery.length <
    2
  )
    return;


  galleryIndex =
    (
      galleryIndex +
      1
    ) %
    currentGallery.length;


  updateMainGalleryImage();

}


function galleryPrev(){

  if(
    currentGallery.length <
    2
  )
    return;


  galleryIndex =
    (
      galleryIndex -
      1 +
      currentGallery.length
    ) %
    currentGallery.length;


  updateMainGalleryImage();

}


function closeProduct(){

  $("#productModal")
    .classList
    .remove("show");


  document.body.classList
    .remove("no-scroll");

}


/* =========================================================
   CHECKOUT
========================================================= */

function openCheckout(){

  if(
    !cart.length
  ){

    toast(
      "Your bag is empty"
    );

    return;

  }


  if(
    firebaseReady &&
    auth &&
    !auth.currentUser
  ){

    openAccount();

    setAccountMessage(
      "Please login before placing your order."
    );

    return;

  }


  const items =
    cart.map(
      item => {

        const product =
          products.find(
            p =>
              p.id ===
              item.id
          );


        return {

          ...item,

          product

        };

      }
    )
    .filter(
      item =>
        item.product
    );


  $("#checkoutSummary")
    .innerHTML =
    items
      .map(
        item => `

          <div
            class="checkout-line"
          >

            <span>
              ${item.product.name}
              × ${item.qty}
            </span>

            <strong>
              ${money(
                item.product.price *
                item.qty
              )}
            </strong>

          </div>

        `
      )
      .join("");


  const total =
    items.reduce(
      (sum,item) =>
        sum +
        item.product.price *
        item.qty,
      0
    );


  $("#checkoutTotal")
    .textContent =
    money(
      total
    );


  $("#checkoutModal")
    .classList
    .add("show");


  document.body.classList
    .add("no-scroll");

}


function closeCheckout(){

  $("#checkoutModal")
    .classList
    .remove("show");


  document.body.classList
    .remove("no-scroll");

}


async function submitOrder(
  event
){

  event.preventDefault();


  if(
    !cart.length
  ){

    toast(
      "Your bag is empty"
    );

    return;

  }


  await firebaseReady;


  if(
    !auth ||
    !auth.currentUser
  ){

    openAccount();

    setAccountMessage(
      "Please login before placing your order."
    );

    return;

  }


  const form =
    new FormData(
      event.target
    );


  const items =
    cart.map(
      item => {

        const product =
          products.find(
            p =>
              p.id ===
              item.id
          );


        return {

          ...item,

          product

        };

      }
    )
    .filter(
      item =>
        item.product
    );


  const total =
    items.reduce(
      (sum,item) =>
        sum +
        item.product.price *
        item.qty,
      0
    );


  const orderId =
    "TMS-" +
    Date
      .now()
      .toString()
      .slice(-8);


  const order = {

    id:
      orderId,

    uid:
      auth.currentUser.uid,

    customer: {

      name:
        form.get(
          "name"
        ) || "",

      phone:
        form.get(
          "phone"
        ) || "",

      email:
        auth.currentUser.email ||
        "",

      address:
        form.get(
          "address"
        ) || "",

      city:
        form.get(
          "city"
        ) || "",

      pin:
        form.get(
          "pin"
        ) || ""

    },

    payment:
      form.get(
        "payment"
      ) || "",

    items:
      items.map(
        item => ({

          name:
            item.product.name,

          qty:
            item.qty,

          price:
            item.product.price

        })
      ),

    total:
      total,

    status:
      "New",

    createdAt:
      new Date()
        .toISOString()

  };


  try{

    await db
      .ref(
        "orders/" +
        auth.currentUser.uid +
        "/" +
        orderId
      )
      .set(
        order
      );


    localStorage.removeItem(
      "tms_cart"
    );


    cart = [];


    renderCart();

    closeCheckout();


    event.target.reset();


    toast(
      "Order " +
      orderId +
      " placed successfully"
    );


    openAccount();


    setTimeout(
      loadMyOrders,
      300
    );

  }

  catch(error){

    console.error(
      error
    );


    toast(
      "Order could not be saved. Check Firebase Rules."
    );

  }

}


/* =========================================================
   SEARCH
========================================================= */

function openSearch(){

  $("#searchModal")
    .classList
    .add("show");


  $("#searchInput")
    .focus();


  renderSearch(
    ""
  );

}


function closeSearch(){

  $("#searchModal")
    .classList
    .remove("show");

}


function renderSearch(
  query
){

  const q =
    query
      .toLowerCase()
      .trim();


  const list =
    products.filter(
      product =>

        product.name
          .toLowerCase()
          .includes(q)

        ||

        product.category
          .toLowerCase()
          .includes(q)

    )
    .slice(
      0,
      10
    );


  $("#searchResults")
    .innerHTML =
    list
      .map(
        product => `

          <button
            class="search-result"
            data-search-id="${product.id}"
            type="button"
          >

            <span>
              ${product.name}
            </span>

            <strong>
              ${money(
                product.price
              )}
            </strong>

          </button>

        `
      )
      .join("");


  document
    .querySelectorAll(
      "[data-search-id]"
    )
    .forEach(
      button => {

        button.onclick =
          () => {

            closeSearch();

            openProduct(
              Number(
                button.dataset
                  .searchId
              )
            );

          };

      }
    );

}


/* =========================================================
   ACCOUNT
========================================================= */

function openAccount(){

  $("#accountModal")
    .classList
    .add("show");


  document.body.classList
    .add("no-scroll");


  updateAccountArea();

}


function closeAccount(){

  $("#accountModal")
    .classList
    .remove("show");


  document.body.classList
    .remove("no-scroll");

}


function setAccountMessage(
  message,
  error = false
){

  $("#accountMessage")
    .textContent =
    message;


  $("#accountMessage")
    .style.color =
    error
      ? "#b00020"
      : "#444";

}


function updateAccountButton(){

  const button =
    $("#accountBtn");


  if(
    !button ||
    !firebaseReady
  )
    return;


  button.textContent =
    auth.currentUser
      ? "♙"
      : "♙";

}


function updateAccountArea(){

  if(!firebaseReady)
    return;


  const user =
    auth.currentUser;


  if(user){

    $("#loginArea")
      .style.display =
      "none";


    $("#loggedArea")
      .style.display =
      "block";


    $("#loggedEmail")
      .textContent =
      "Logged in as " +
      user.email;

  }

  else{

    $("#loginArea")
      .style.display =
      "block";


    $("#loggedArea")
      .style.display =
      "none";

  }

}


async function createAccount(){

  await firebaseReady;


  const email =
    $("#emailInput")
      .value
      .trim();


  const password =
    $("#passwordInput")
      .value;


  if(
    !email ||
    !password
  ){

    setAccountMessage(
      "Please enter email and password.",
      true
    );

    return;

  }


  if(
    password.length <
    6
  ){

    setAccountMessage(
      "Password must be at least 6 characters.",
      true
    );

    return;

  }


  try{

    const result =
      await auth
        .createUserWithEmailAndPassword(
          email,
          password
        );


    await db
      .ref(
        "users/" +
        result.user.uid
      )
      .set({

        email:
          email,

        createdAt:
          new Date()
            .toISOString()

      });


    toast(
      "Account created successfully"
    );


    updateAccountArea();

  }

  catch(error){

    console.error(
      error
    );


    setAccountMessage(
      friendlyAuthError(
        error
      ),
      true
    );

  }

}


async function loginAccount(){

  await firebaseReady;


  const email =
    $("#emailInput")
      .value
      .trim();


  const password =
    $("#passwordInput")
      .value;


  if(
    !email ||
    !password
  ){

    setAccountMessage(
      "Please enter email and password.",
      true
    );

    return;

  }


  try{

    await auth
      .signInWithEmailAndPassword(
        email,
        password
      );


    toast(
      "Login successful"
    );


    updateAccountArea();


    loadMyOrders();

  }

  catch(error){

    console.error(
      error
    );


    setAccountMessage(
      friendlyAuthError(
        error
      ),
      true
    );

  }

}


async function resetPassword(){

  await firebaseReady;


  const email =
    $("#emailInput")
      .value
      .trim();


  if(!email){

    setAccountMessage(
      "Enter your email first.",
      true
    );

    return;

  }


  try{

    await auth
      .sendPasswordResetEmail(
        email
      );


    setAccountMessage(
      "Password reset email sent."
    );

  }

  catch(error){

    console.error(
      error
    );


    setAccountMessage(
      friendlyAuthError(
        error
      ),
      true
    );

  }

}


async function logoutAccount(){

  await firebaseReady;


  try{

    await auth.signOut();

    $("#myOrders")
      .innerHTML =
      "";

    toast(
      "Logged out"
    );

    updateAccountArea();

  }

  catch(error){

    console.error(
      error
    );

  }

}


function friendlyAuthError(
  error
){

  switch(
    error.code
  ){

    case "auth/invalid-credential":
      return "Email or password is incorrect.";

    case "auth/invalid-email":
      return "Please enter a valid email.";

    case "auth/email-already-in-use":
      return "This email is already registered.";

    case "auth/weak-password":
      return "Password is too weak.";

    default:
      return "Authentication failed. Please try again.";

  }

}


/* =========================================================
   MY ORDERS
========================================================= */

async function loadMyOrders(){

  await firebaseReady;


  const user =
    auth.currentUser;


  if(!user)
    return;


  $("#myOrders")
    .innerHTML =
    `
      <p class="muted">
        Loading orders...
      </p>
    `;


  try{

    const snapshot =
      await db
        .ref(
          "orders/" +
          user.uid
        )
        .once(
          "value"
        );


    const data =
      snapshot.val() ||
      {};


    const orders =
      Object
        .values(
          data
        )
        .sort(
          (
            a,
            b
          ) =>
            new Date(
              b.createdAt
            ) -
            new Date(
              a.createdAt
            )
        );


    if(!orders.length){

      $("#myOrders")
        .innerHTML =
        `
          <p class="muted">
            No orders yet.
          </p>
        `;

      return;

    }


    $("#myOrders")
      .innerHTML =
      orders
        .map(
          order => `

            <div
              class="order-mini"
            >

              <strong>
                📦 ${order.id}
              </strong>

              <span>
                Total:
                ${money(
                  order.total
                )}
              </span>

              <br>

              <span>
                Status:
                ${
                  order.status ||
                  "New"
                }
              </span>

            </div>

          `
        )
        .join("");

  }

  catch(error){

    console.error(
      error
    );


    $("#myOrders")
      .innerHTML =
      `
        <p
          style="
          color:#b00020;
          font-size:13px;
          "
        >
          Unable to load orders.
        </p>
      `;

  }

}


/* =========================================================
   CUSTOMER SUPPORT
========================================================= */

const supportReply =
  "👨‍💼 TMSJEANS Customer Support is automated. Please tell us your problem and we will guide you.";


function openChat(){

  $("#chatbox")
    .classList
    .add("open");


  $("#chatInput")
    .focus();

}


function closeChat(){

  $("#chatbox")
    .classList
    .remove("open");

}


function addChatMessage(
  message,
  type
){

  const el =
    document.createElement(
      "div"
    );


  el.className =
    "chat-msg " +
    type;


  el.textContent =
    message;


  $("#chatMessages")
    .appendChild(
      el
    );


  $("#chatMessages")
    .scrollTop =
    $("#chatMessages")
      .scrollHeight;

}


function supportReplyFor(
  text
){

  const q =
    text
      .toLowerCase()
      .trim();


  if(
    q.includes(
      "support"
    )
    ||
    q.includes(
      "customer care"
    )
    ||
    q.includes(
      "customer support"
    )
  ){

    return supportReply;

  }


  if(
    q.includes(
      "return"
    )
    ||
    q.includes(
      "exchange"
    )
  ){

    return (
      "↩️ Please keep your TMSJEANS Order ID ready for return or exchange help."
    );

  }


  if(
    q.includes(
      "delivery"
    )
    ||
    q.includes(
      "shipping"
    )
  ){

    return (
      "🚚 Delivery timing depends on your PIN code and shipping availability."
    );

  }


  if(
    q.includes(
      "size"
    )
    ||
    q.includes(
      "fit"
    )
  ){

    return (
      "👕 Please tell us your usual size, height and weight for sizing guidance."
    );

  }


  if(
    q.includes(
      "order"
    )
  ){

    return (
      "📦 Please provide your TMSJEANS Order ID for order help."
    );

  }


  if(
    q.includes(
      "payment"
    )
  ){

    return (
      "💳 Payment support will be available here. UPI checkout is coming soon."
    );

  }


  return (
    "Thanks for contacting TMSJEANS Support. Please tell us your issue."
  );

}


/* =========================================================
   DOM EVENTS
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderProducts();

    renderCart();

    setupCollections();

    setupFilters();


    /* CART */

    $("#cartBtn")
      .addEventListener(
        "click",
        openCart
      );


    $("#closeCart")
      .addEventListener(
        "click",
        closeCart
      );


    $("#overlay")
      .addEventListener(
        "click",
        closeCart
      );


    $("#checkoutBtn")
      .addEventListener(
        "click",
        openCheckout
      );


    /* PRODUCT */

    $("#productClose")
      .addEventListener(
        "click",
        closeProduct
      );


    $("#galleryNext")
      .addEventListener(
        "click",
        galleryNext
      );


    $("#galleryPrev")
      .addEventListener(
        "click",
        galleryPrev
      );


    $("#qtyMinus")
      .addEventListener(
        "click",
        () => {

          if(
            currentQty >
            1
          ){

            currentQty--;

          }


          $("#qtyValue")
            .textContent =
            currentQty;

        }
      );


    $("#qtyPlus")
      .addEventListener(
        "click",
        () => {

          if(
            currentQty <
            10
          ){

            currentQty++;

          }


          $("#qtyValue")
            .textContent =
            currentQty;

        }
      );


    document
      .querySelectorAll(
        ".size-option"
      )
      .forEach(
        button => {

          button.addEventListener(
            "click",
            () => {

              selectedSize =
                button.dataset
                  .size;


              document
                .querySelectorAll(
                  ".size-option"
                )
                .forEach(
                  item =>
                    item.classList.toggle(
                      "active",
                      item ===
                        button
                    )
                );

            }
          );

        }
      );


    $("#modalAdd")
      .addEventListener(
        "click",
        () => {

          if(
            !currentProduct
          )
            return;


          addToCart(
            currentProduct.id,
            currentQty
          );


          closeProduct();

        }
      );


    $("#modalBuy")
      .addEventListener(
        "click",
        () => {

          if(
            !currentProduct
          )
            return;


          addToCart(
            currentProduct.id,
            currentQty
          );


          closeProduct();


          setTimeout(
            openCheckout,
            200
          );

        }
      );


    /* SEARCH */

    $("#searchBtn")
      .addEventListener(
        "click",
        openSearch
      );


    $("#closeSearch")
      .addEventListener(
        "click",
        closeSearch
      );


    $("#searchInput")
      .addEventListener(
        "input",
        event =>
          renderSearch(
            event.target.value
          )
      );


    /* ACCOUNT */

    $("#accountBtn")
      .addEventListener(
        "click",
        openAccount
      );


    $("#accountClose")
      .addEventListener(
        "click",
        closeAccount
      );


    $("#loginBtn")
      .addEventListener(
        "click",
        loginAccount
      );


    $("#createBtn")
      .addEventListener(
        "click",
        createAccount
      );


    $("#forgotBtn")
      .addEventListener(
        "click",
        resetPassword
      );


    $("#logoutBtn")
      .addEventListener(
        "click",
        logoutAccount
      );


    $("#myOrdersBtn")
      .addEventListener(
        "click",
        loadMyOrders
      );


    /* CHECKOUT */

    $("#checkoutClose")
      .addEventListener(
        "click",
        closeCheckout
      );


    $("#orderForm")
      .addEventListener(
        "submit",
        submitOrder
      );


    /* CHAT */

    $("#chatFab")
      .addEventListener(
        "click",
        openChat
      );


    $("#closeChat")
      .addEventListener(
        "click",
        closeChat
      );


    $("#chatForm")
      .addEventListener(
        "submit",
        event => {

          event.preventDefault();


          const input =
            $("#chatInput");


          const message =
            input.value.trim();


          if(!message)
            return;


          addChatMessage(
            message,
            "user"
          );


          input.value =
            "";


          setTimeout(
            () =>
              addChatMessage(
                supportReplyFor(
                  message
                ),
                "bot"
              ),
            300
          );

        }
      );


    /* MODAL BACKDROPS */

    [
      "productModal",
      "searchModal",
      "accountModal",
      "checkoutModal"
    ]
    .forEach(
      id => {

        const modal =
          document.getElementById(
            id
          );


        modal.addEventListener(
          "click",
          event => {

            if(
              event.target ===
              modal
            ){

              modal.classList
                .remove(
                  "show"
                );

              document.body
                .classList
                .remove(
                  "no-scroll"
                );

            }

          }
        );

      }
    );


    document.addEventListener(
      "keydown",
      event => {

        if(
          event.key ===
          "Escape"
        ){

          closeProduct();

          closeSearch();

          closeAccount();

          closeCheckout();

          closeCart();

        }

      }
    );


    initFirebase();

  }
);
