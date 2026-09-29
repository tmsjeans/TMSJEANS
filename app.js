/* =========================================================
   TMSJEANS COMPLETE APP.JS
   Products + Cart + Search + Checkout
   Email Login + My Orders + Firebase Orders
   Customer Support
========================================================= */


/* =========================================================
   FIREBASE CONFIG
========================================================= */

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAxYqY7V2_h5FBCa4Cm9xX5pABu-oAUzg4",
  authDomain: "tmsjeans.firebaseapp.com",
  projectId: "tmsjeans",
  storageBucket: "tmsjeans.firebasestorage.app",
  messagingSenderId: "155013489437",
  appId: "1:155013489437:web:d1f91792dd8ebba29cf7f4",
  databaseURL: "https://tmsjeans-default-rtdb.firebaseio.com"
};


/* =========================================================
   PRODUCTS
========================================================= */

const products = [

  /* ORIGINAL PRODUCTS */

  {
    id: 1,
    name: "Classic Black Denim",
    category: "Jeans",
    price: 699,
    oldPrice: 999,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=85",
    tag: "BESTSELLER"
  },

  {
    id: 2,
    name: "Washed Blue Straight Fit",
    category: "Jeans",
    price: 749,
    oldPrice: 1099,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=85",
    tag: "NEW"
  },

  {
    id: 3,
    name: "Oversized Essential Tee",
    category: "T-Shirts",
    price: 399,
    oldPrice: 599,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85",
    tag: "POPULAR"
  },

  {
    id: 4,
    name: "Premium White Tee",
    category: "T-Shirts",
    price: 449,
    oldPrice: 649,
    image: "https://images.unsplash.com/photo-1583743814966-8936f37f4c7f?auto=format&fit=crop&w=800&q=85",
    tag: ""
  },

  {
    id: 5,
    name: "Relaxed Fit Overshirt",
    category: "Shirts",
    price: 799,
    oldPrice: 1199,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=85",
    tag: "NEW"
  },

  {
    id: 6,
    name: "Utility Black Shirt",
    category: "Shirts",
    price: 899,
    oldPrice: 1299,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=85",
    tag: ""
  },

  {
    id: 7,
    name: "Vintage Grey Denim",
    category: "Jeans",
    price: 799,
    oldPrice: 1199,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85",
    tag: "LIMITED"
  },

  {
    id: 8,
    name: "Heavyweight Black Tee",
    category: "T-Shirts",
    price: 499,
    oldPrice: 699,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=85",
    tag: ""
  },


  /* NEW JEANS COLLECTION */

  {
    id: 101,
    name: "Charcoal Grey Straight Fit Jeans",
    category: "Jeans",
    price: 799,
    oldPrice: 1199,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=85",
    tag: "NEW"
  },

  {
    id: 102,
    name: "Black Relaxed Fit Jeans",
    category: "Jeans",
    price: 899,
    oldPrice: 1299,
    image: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?auto=format&fit=crop&w=800&q=85",
    tag: "BESTSELLER"
  },

  {
    id: 103,
    name: "Dark Blue Slim Fit Jeans",
    category: "Jeans",
    price: 999,
    oldPrice: 1499,
    image: "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?auto=format&fit=crop&w=800&q=85",
    tag: "POPULAR"
  },

  {
    id: 104,
    name: "Ice Blue Wide Leg Jeans",
    category: "Jeans",
    price: 899,
    oldPrice: 1399,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=85",
    tag: "NEW"
  },

  {
    id: 105,
    name: "Vintage Blue Straight Jeans",
    category: "Jeans",
    price: 799,
    oldPrice: 1199,
    image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=85",
    tag: ""
  },

  {
    id: 106,
    name: "Light Wash Baggy Jeans",
    category: "Jeans",
    price: 999,
    oldPrice: 1499,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85",
    tag: "TRENDING"
  },

  {
    id: 107,
    name: "Steel Grey Mom Fit Jeans",
    category: "Jeans",
    price: 899,
    oldPrice: 1299,
    image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?auto=format&fit=crop&w=800&q=85",
    tag: ""
  },

  {
    id: 108,
    name: "Mid Blue Regular Fit Jeans",
    category: "Jeans",
    price: 799,
    oldPrice: 1199,
    image: "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=800&q=85",
    tag: ""
  },

  {
    id: 109,
    name: "Washed Grey Slim Jeans",
    category: "Jeans",
    price: 899,
    oldPrice: 1399,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=85",
    tag: "NEW"
  },

  {
    id: 110,
    name: "Deep Indigo Bootcut Jeans",
    category: "Jeans",
    price: 999,
    oldPrice: 1499,
    image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=85",
    tag: ""
  },

  {
    id: 111,
    name: "Loose Fit Washed Blue Jeans",
    category: "Jeans",
    price: 799,
    oldPrice: 1199,
    image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=800&q=85",
    tag: "POPULAR"
  },

  {
    id: 112,
    name: "Black Cargo Style Jeans",
    category: "Jeans",
    price: 1199,
    oldPrice: 1699,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=85",
    tag: "PREMIUM"
  },

  {
    id: 113,
    name: "Classic Blue Regular Jeans",
    category: "Jeans",
    price: 899,
    oldPrice: 1299,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=85",
    tag: ""
  },

  {
    id: 114,
    name: "Stone Wash Straight Jeans",
    category: "Jeans",
    price: 999,
    oldPrice: 1499,
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=800&q=85",
    tag: "NEW"
  },

  {
    id: 115,
    name: "Jet Black Slim Jeans",
    category: "Jeans",
    price: 799,
    oldPrice: 1199,
    image: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?auto=format&fit=crop&w=800&q=85",
    tag: ""
  },

  {
    id: 116,
    name: "Light Blue Relaxed Jeans",
    category: "Jeans",
    price: 899,
    oldPrice: 1399,
    image: "https://images.unsplash.com/photo-1602293589914-9e5e6b4f53b4?auto=format&fit=crop&w=800&q=85",
    tag: "TRENDING"
  },

  {
    id: 117,
    name: "Grey Distressed Denim",
    category: "Jeans",
    price: 999,
    oldPrice: 1499,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=85",
    tag: "LIMITED"
  },

  {
    id: 118,
    name: "Dark Wash Straight Fit",
    category: "Jeans",
    price: 1199,
    oldPrice: 1699,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85",
    tag: "PREMIUM"
  },

  {
    id: 119,
    name: "Blue Relaxed Bootcut Jeans",
    category: "Jeans",
    price: 899,
    oldPrice: 1399,
    image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=85",
    tag: ""
  },

  {
    id: 120,
    name: "Premium Dark Denim",
    category: "Jeans",
    price: 1199,
    oldPrice: 1799,
    image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?auto=format&fit=crop&w=800&q=85",
    tag: "PREMIUM"
  }

];


/* =========================================================
   STATE
========================================================= */

let cart =
  JSON.parse(
    localStorage.getItem("tms_cart") || "[]"
  );

let currentFilter = "All";

let auth = null;
let db = null;
let firebaseLoaded = false;


/* =========================================================
   HELPERS
========================================================= */

const $ = selector =>
  document.querySelector(selector);


const money = value =>
  "₹" +
  Number(value || 0)
    .toLocaleString("en-IN");


/* =========================================================
   FIREBASE LOADING
========================================================= */

function loadFirebaseScript(src){

  return new Promise(
    (resolve,reject) => {

      const existing =
        document.querySelector(
          `script[src="${src}"]`
        );


      if(existing){

        resolve();

        return;

      }


      const script =
        document.createElement("script");


      script.src =
        src;

      script.async =
        true;


      script.onload =
        resolve;


      script.onerror =
        reject;


      document.head.appendChild(
        script
      );

    }
  );

}


async function initFirebase(){

  try{

    await loadFirebaseScript(
      "https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js"
    );


    await loadFirebaseScript(
      "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth-compat.js"
    );


    await loadFirebaseScript(
      "https://www.gstatic.com/firebasejs/12.19.0/firebase-database-compat.js"
    );


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


    firebaseLoaded =
      true;


    auth.onAuthStateChanged(
      user => {

        updateLoginButton(
          user
        );

        updateAccountUI(
          user
        );

      }
    );


    console.log(
      "TMSJEANS Firebase connected"
    );

  }

  catch(error){

    console.error(
      "Firebase connection failed:",
      error
    );

  }

}


const firebaseReady =
  initFirebase();


/* =========================================================
   CART STORAGE
========================================================= */

function saveCart(){

  localStorage.setItem(
    "tms_cart",
    JSON.stringify(cart)
  );


  renderCart();

}


/* =========================================================
   PRODUCTS
========================================================= */

function renderProducts(
  filter = currentFilter,
  query = ""
){

  const q =
    query
      .toLowerCase()
      .trim();


  const list =
    products.filter(
      product => {

        const filterMatch =
          filter === "All" ||
          product.category ===
            filter;


        const searchMatch =
          !q ||
          product.name
            .toLowerCase()
            .includes(q) ||
          product.category
            .toLowerCase()
            .includes(q);


        return (
          filterMatch &&
          searchMatch
        );

      }
    );


  const grid =
    $("#productGrid");


  if(!grid)
    return;


  grid.innerHTML =

    list.length

      ? list
          .map(
            product => `

              <article
                class="product-card"
              >

                <div
                  class="product-image"
                >

                  ${
                    product.tag
                      ? `
                        <span class="tag">
                          ${product.tag}
                        </span>
                      `
                      : ""
                  }

                  <img
                    src="${product.image}"
                    alt="${product.name}"
                  >

                  <button
                    class="quick-add"
                    onclick="
                      addToCart(
                        ${product.id}
                      )
                    "
                  >
                    ADD TO BAG —
                    ${money(
                      product.price
                    )}
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

                  <p
                    class="price"
                  >

                    ${money(
                      product.price
                    )}

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

                  </p>

                </div>

              </article>

            `
          )
          .join("")

      : "<p>No products found.</p>";

}


/* =========================================================
   ADD TO CART
========================================================= */

function addToCart(
  id
){

  const item =
    cart.find(
      product =>
        product.id === id
    );


  if(item){

    item.qty++;

  }

  else{

    cart.push({

      id:
        id,

      qty:
        1

    });

  }


  saveCart();

  openCart();

  toast(
    "Added to your bag"
  );

}


/* =========================================================
   CHANGE QUANTITY
========================================================= */

function changeQty(
  id,
  delta
){

  const item =
    cart.find(
      product =>
        product.id === id
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
        product =>
          product.id !== id
      );

  }


  saveCart();

}


/* =========================================================
   RENDER CART
========================================================= */

function renderCart(){

  const count =
    cart.reduce(
      (sum,item) =>
        sum + item.qty,
      0
    );


  if($("#cartCount")){

    $("#cartCount")
      .textContent =
      count;

  }


  const items =
    cart
      .map(
        item => ({

          ...item,

          product:
            products.find(
              product =>
                product.id ===
                item.id
            )

        })
      )
      .filter(
        item =>
          item.product
      );


  if($("#cartItems")){

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
                  class="qty"
                >

                  <button
                    onclick="
                      changeQty(
                        ${item.id},
                        -1
                      )
                    "
                  >
                    −
                  </button>

                  <span>
                    ${item.qty}
                  </span>

                  <button
                    onclick="
                      changeQty(
                        ${item.id},
                        1
                      )
                    "
                  >
                    +
                  </button>

                </div>

              </div>


              <button
                class="remove"
                onclick="
                  changeQty(
                    ${item.id},
                    -${item.qty}
                  )
                "
              >
                ×
              </button>

            </div>

          `
        )
        .join("");

  }


  const total =
    items.reduce(
      (sum,item) =>
        sum +
        item.product.price *
        item.qty,
      0
    );


  if($("#cartTotal")){

    $("#cartTotal")
      .textContent =
      money(total);

  }


  if($("#cartEmpty")){

    $("#cartEmpty")
      .style.display =
      items.length
        ? "none"
        : "block";

  }


  if($("#cartFooter")){

    $("#cartFooter")
      .style.display =
      items.length
        ? "block"
        : "none";

  }

}


/* =========================================================
   CART OPEN / CLOSE
========================================================= */

function openCart(){

  if($("#cartDrawer")){

    $("#cartDrawer")
      .classList
      .add("open");

  }


  if($("#overlay")){

    $("#overlay")
      .classList
      .add("show");

  }

}


function closeCart(){

  if($("#cartDrawer")){

    $("#cartDrawer")
      .classList
      .remove("open");

  }


  if($("#overlay")){

    $("#overlay")
      .classList
      .remove("show");

  }

}


/* =========================================================
   CHECKOUT
========================================================= */

function openCheckout(){

  if(!cart.length){

    toast(
      "Your bag is empty"
    );

    return;

  }


  if(
    firebaseLoaded &&
    auth &&
    !auth.currentUser
  ){

    openAccount();

    setAccountMessage(
      "Please login before placing your order."
    );

    return;

  }


  closeCart();


  const items =
    cart.map(
      item => ({

        ...item,

        product:
          products.find(
            product =>
              product.id ===
              item.id
          )

      })
    );


  if($("#checkoutSummary")){

    $("#checkoutSummary")
      .innerHTML =

      items
        .map(
          item => `

            <div
              class="summary-item"
            >

              <span>
                ${item.product.name}
                ×
                ${item.qty}
              </span>

              <b>
                ${money(
                  item.product.price *
                  item.qty
                )}
              </b>

            </div>

          `
        )
        .join("");

  }


  const total =
    items.reduce(
      (sum,item) =>
        sum +
        item.product.price *
        item.qty,
      0
    );


  if($("#checkoutTotal")){

    $("#checkoutTotal")
      .textContent =
      money(total);

  }


  if($("#checkoutModal")){

    $("#checkoutModal")
      .classList
      .add("show");

  }

}


function closeCheckout(){

  if($("#checkoutModal")){

    $("#checkoutModal")
      .classList
      .remove("show");

  }

}


/* =========================================================
   CREATE ORDER
========================================================= */

async function submitOrder(
  event
){

  event.preventDefault();


  if(!cart.length){

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
      item => ({

        ...item,

        product:
          products.find(
            product =>
              product.id ===
              item.id
          )

      })
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
        form.get("name") ||
        "",

      phone:
        form.get("phone") ||
        "",

      email:
        auth.currentUser.email ||
        "",

      address:
        form.get("address") ||
        "",

      city:
        form.get("city") ||
        "",

      pin:
        form.get("pin") ||
        ""

    },

    payment:
      form.get("payment") ||
      "",

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

    createdAt:
      new Date()
        .toISOString(),

    status:
      "New"

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


    const oldOrders =
      JSON.parse(
        localStorage.getItem(
          "tms_orders"
        ) || "[]"
      );


    oldOrders.unshift(
      order
    );


    localStorage.setItem(
      "tms_orders",
      JSON.stringify(
        oldOrders
      )
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


    setTimeout(
      () => {

        openAccount();

        loadMyOrders();

      },
      500
    );

  }

  catch(error){

    console.error(
      "Order save error:",
      error
    );


    toast(
      "Order could not be saved. Please check Firebase Rules."
    );

  }

}


/* =========================================================
   SEARCH
========================================================= */

function renderSearch(
  query
){

  const q =
    query
      .toLowerCase()
      .trim();


  const list =
    products
      .filter(
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
        8
      );


  if($("#searchResults")){

    $("#searchResults")
      .innerHTML =

      list
        .map(
          product => `

            <div
              class="search-result"
            >

              <span>
                ${product.name}
              </span>

              <b>
                ${money(
                  product.price
                )}
              </b>

            </div>

          `
        )
        .join("");

  }

}


/* =========================================================
   TOAST
========================================================= */

function toast(
  text
){

  const box =
    $("#toast");


  if(!box)
    return;


  box.textContent =
    text;


  box.classList
    .add("show");


  setTimeout(
    () => {

      box.classList
        .remove("show");

    },
    2500
  );

}


/* =========================================================
   EMAIL ACCOUNT UI
========================================================= */

const accountCSS =
  document.createElement(
    "style"
  );


accountCSS.textContent = `

#tmsAccountButton{

  position:fixed;

  left:20px;

  bottom:20px;

  z-index:99998;

  border:0;

  border-radius:999px;

  padding:11px 16px;

  background:#111;

  color:#fff;

  font-weight:700;

  cursor:pointer;

  box-shadow:
    0 8px 25px rgba(0,0,0,.2);

}


#tmsAccountModal{

  position:fixed;

  inset:0;

  z-index:100000;

  display:none;

  align-items:center;

  justify-content:center;

  padding:20px;

  background:
    rgba(0,0,0,.6);

}


#tmsAccountModal.show{

  display:flex;

}


.tms-account-box{

  width:400px;

  max-width:100%;

  max-height:90vh;

  overflow:auto;

  background:#fff;

  color:#111;

  border-radius:20px;

  padding:25px;

  box-shadow:
    0 25px 80px rgba(0,0,0,.35);

}


.tms-account-head{

  display:flex;

  justify-content:space-between;

  align-items:center;

}


.tms-account-head h2{

  margin:0;

}


.tms-close{

  border:0;

  background:transparent;

  font-size:26px;

  cursor:pointer;

}


.tms-account-box input{

  width:100%;

  box-sizing:border-box;

  padding:13px;

  margin:7px 0;

  border:1px solid #ddd;

  border-radius:10px;

  outline:none;

}


.tms-main-btn{

  width:100%;

  padding:13px;

  margin-top:9px;

  border:0;

  border-radius:10px;

  background:#111;

  color:#fff;

  font-weight:700;

  cursor:pointer;

}


.tms-light-btn{

  width:100%;

  padding:12px;

  margin-top:8px;

  border:1px solid #ddd;

  border-radius:10px;

  background:#fff;

  color:#111;

  font-weight:700;

  cursor:pointer;

}


#tmsAccountMessage{

  min-height:20px;

  font-size:13px;

  margin-top:10px;

}


.tms-order-box{

  border:1px solid #e5e5e5;

  border-radius:12px;

  padding:12px;

  margin-top:10px;

  font-size:14px;

}


@media(max-width:500px){

  #tmsAccountButton{

    left:12px;

    bottom:12px;

  }

}

`;

document.head.appendChild(
  accountCSS
);


document.body.insertAdjacentHTML(
  "beforeend",

  `

  <button
    id="tmsAccountButton"
  >
    👤 Login
  </button>


  <div
    id="tmsAccountModal"
  >

    <div
      class="tms-account-box"
    >

      <div
        class="tms-account-head"
      >

        <h2>
          TMSJEANS Account
        </h2>

        <button
          class="tms-close"
          id="tmsAccountClose"
        >
          ×
        </button>

      </div>


      <div
        id="tmsLoginArea"
      >

        <p
          style="
          color:#666;
          font-size:13px;
          "
        >
          Create your TMSJEANS account
          or login to continue.
        </p>


        <input
          id="tmsEmail"
          type="email"
          placeholder="Email address"
          autocomplete="email"
        >


        <input
          id="tmsPassword"
          type="password"
          placeholder="Password"
          autocomplete="current-password"
        >


        <button
          id="tmsLoginBtn"
          class="tms-main-btn"
          type="button"
        >
          Login
        </button>


        <button
          id="tmsCreateBtn"
          class="tms-light-btn"
          type="button"
        >
          Create Account
        </button>


        <button
          id="tmsForgotBtn"
          class="tms-light-btn"
          type="button"
        >
          Forgot Password
        </button>


        <div
          id="tmsAccountMessage"
        ></div>

      </div>


      <div
        id="tmsLoggedArea"
        style="display:none"
      >

        <p
          id="tmsLoggedEmail"
          style="
          color:#666;
          font-size:13px;
          "
        ></p>


        <button
          id="tmsOrdersBtn"
          class="tms-main-btn"
          type="button"
        >
          📦 My Orders
        </button>


        <div
          id="tmsMyOrders"
        ></div>


        <button
          id="tmsLogoutBtn"
          class="tms-light-btn"
          type="button"
        >
          Logout
        </button>

      </div>

    </div>

  </div>

  `
);


/* =========================================================
   ACCOUNT FUNCTIONS
========================================================= */

function openAccount(){

  $("#tmsAccountModal")
    .classList
    .add("show");

  updateAccountUI(
    auth &&
    auth.currentUser
  );

}


function closeAccount(){

  $("#tmsAccountModal")
    .classList
    .remove("show");

}


function setAccountMessage(
  text,
  error = false
){

  const box =
    $("#tmsAccountMessage");


  if(!box)
    return;


  box.textContent =
    text;


  box.style.color =
    error
      ? "#b00020"
      : "#444";

}


function updateLoginButton(
  user
){

  const button =
    $("#tmsAccountButton");


  if(!button)
    return;


  button.textContent =
    user
      ? "👤 My Account"
      : "👤 Login";

}


function updateAccountUI(
  user
){

  const loginArea =
    $("#tmsLoginArea");


  const loggedArea =
    $("#tmsLoggedArea");


  if(!loginArea ||
     !loggedArea)
    return;


  if(user){

    loginArea.style.display =
      "none";


    loggedArea.style.display =
      "block";


    $("#tmsLoggedEmail")
      .textContent =
      "Logged in as " +
      (
        user.email ||
        ""
      );

  }

  else{

    loginArea.style.display =
      "block";


    loggedArea.style.display =
      "none";

  }

}


/* =========================================================
   CREATE CUSTOMER ACCOUNT
========================================================= */

async function createCustomerAccount(){

  await firebaseReady;


  const email =
    $("#tmsEmail")
      .value
      .trim();


  const password =
    $("#tmsPassword")
      .value;


  if(!email ||
     !password){

    setAccountMessage(
      "Enter email and password.",
      true
    );

    return;

  }


  if(
    password.length < 6
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


    updateAccountUI(
      result.user
    );

  }

  catch(error){

    console.error(
      error
    );


    if(
      error.code ===
      "auth/email-already-in-use"
    ){

      setAccountMessage(
        "This email is already registered. Please login.",
        true
      );

    }

    else{

      setAccountMessage(
        error.message ||
        "Could not create account.",
        true
      );

    }

  }

}


/* =========================================================
   LOGIN
========================================================= */

async function loginCustomer(){

  await firebaseReady;


  const email =
    $("#tmsEmail")
      .value
      .trim();


  const password =
    $("#tmsPassword")
      .value;


  if(!email ||
     !password){

    setAccountMessage(
      "Enter email and password.",
      true
    );

    return;

  }


  try{

    const result =
      await auth
        .signInWithEmailAndPassword(
          email,
          password
        );


    toast(
      "Login successful"
    );


    updateAccountUI(
      result.user
    );


    loadMyOrders();

  }

  catch(error){

    console.error(
      error
    );


    setAccountMessage(
      "Login failed. Check your email and password.",
      true
    );

  }

}


/* =========================================================
   PASSWORD RESET
========================================================= */

async function resetPassword(){

  await firebaseReady;


  const email =
    $("#tmsEmail")
      .value
      .trim();


  if(!email){

    setAccountMessage(
      "Enter your email address first.",
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
      "Could not send reset email.",
      true
    );

  }

}


/* =========================================================
   LOAD MY ORDERS
========================================================= */

async function loadMyOrders(){

  await firebaseReady;


  if(
    !auth ||
    !auth.currentUser
  ){

    return;

  }


  const box =
    $("#tmsMyOrders");


  if(!box)
    return;


  box.innerHTML =
    `
      <p
        style="
        color:#777;
        font-size:13px;
        "
      >
        Loading orders...
      </p>
    `;


  try{

    const snapshot =
      await db
        .ref(
          "orders/" +
          auth.currentUser.uid
        )
        .once(
          "value"
        );


    const data =
      snapshot.val() ||
      {};


    const orders =
      Object
        .values(data)
        .sort(
          (a,b) =>

            new Date(
              b.createdAt ||
              0
            ) -

            new Date(
              a.createdAt ||
              0
            )

        );


    if(!orders.length){

      box.innerHTML =
        `
          <p
            style="
            color:#777;
            font-size:14px;
            "
          >
            No orders yet.
          </p>
        `;

      return;

    }


    box.innerHTML =
      orders
        .map(
          order =>

            `

            <div
              class="tms-order-box"
            >

              <strong>
                📦 ${order.id}
              </strong>

              <div
                style="
                margin-top:5px;
                "
              >
                Total:
                ${money(
                  order.total
                )}
              </div>

              <div
                style="
                margin-top:4px;
                color:#777;
                font-size:12px;
                "
              >
                Status:
                ${order.status || "New"}
              </div>

            </div>

            `
        )
        .join("");

  }

  catch(error){

    console.error(
      error
    );


    box.innerHTML =
      `
        <p
          style="
          color:#b00020;
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

  if($("#chatbox")){

    $("#chatbox")
      .classList
      .add("open");

  }


  if($("#chatInput")){

    $("#chatInput")
      .focus();

  }

}


function closeChat(){

  if($("#chatbox")){

    $("#chatbox")
      .classList
      .remove("open");

  }

}


function addChatMessage(
  text,
  type = "bot"
){

  if(!$("#chatMessages"))
    return;


  const message =
    document.createElement(
      "div"
    );


  message.className =
    "chat-msg " +
    type;


  message.textContent =
    text;


  $("#chatMessages")
    .appendChild(
      message
    );


  $("#chatMessages")
    .scrollTop =
    $("#chatMessages")
      .scrollHeight;

}


function replyTo(
  text
){

  const message =
    text
      .toLowerCase()
      .trim();


  if(

    message.includes(
      "support"
    )

    ||

    message.includes(
      "customer care"
    )

    ||

    message.includes(
      "customer support"
    )

    ||

    message.includes(
      "agent"
    )

    ||

    message.includes(
      "team"
    )

  ){

    return supportReply;

  }


  return (
    "Thanks for contacting TMSJEANS Customer Support. Please tell us your problem and we will guide you."
  );

}


/* =========================================================
   EVENT LISTENERS
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {


    /* CART */

    if($("#cartBtn"))
      $("#cartBtn")
        .onclick =
        openCart;


    if($("#closeCart"))
      $("#closeCart")
        .onclick =
        closeCart;


    if($("#overlay"))
      $("#overlay")
        .onclick =
        closeCart;


    if($("#checkoutBtn"))
      $("#checkoutBtn")
        .onclick =
        openCheckout;


    if($("#closeCheckout"))
      $("#closeCheckout")
        .onclick =
        closeCheckout;


    if($("#emptyShop"))
      $("#emptyShop")
        .onclick =
        closeCart;


    /* CHECKOUT */

    if($("#orderForm")){

      $("#orderForm")
        .addEventListener(
          "submit",
          submitOrder
        );

    }


    /* FILTERS */

    document
      .querySelectorAll(
        "#filters button"
      )
      .forEach(
        button => {

          button.onclick =
            () => {

              document
                .querySelectorAll(
                  "#filters button"
                )
                .forEach(
                  item =>
                    item.classList
                      .remove(
                        "active"
                      )
                );


              button.classList
                .add(
                  "active"
                );


              currentFilter =
                button.dataset
                  .filter;


              renderProducts();

            };

        }
      );


    /* COLLECTION CARDS */

    document
      .querySelectorAll(
        ".collection-card"
      )
      .forEach(
        card => {

          card.onclick =
            () => {

              currentFilter =
                card.dataset
                  .filter;


              document
                .querySelectorAll(
                  "#filters button"
                )
                .forEach(
                  button =>
                    button.classList
                      .toggle(
                        "active",
                        button.dataset
                          .filter ===
                        currentFilter
                      )
                );


              renderProducts();

            };

        }
      );


    /* SEARCH */

    if($("#searchBtn")){

      $("#searchBtn")
        .onclick =
        () => {

          $("#searchModal")
            .classList
            .add("show");


          $("#searchInput")
            .focus();


          renderSearch("");

        };

    }


    if($("#closeSearch")){

      $("#closeSearch")
        .onclick =
        () => {

          $("#searchModal")
            .classList
            .remove(
              "show"
            );

        };

    }


    if($("#searchInput")){

      $("#searchInput")
        .addEventListener(
          "input",
          event =>
            renderSearch(
              event.target.value
            )
        );

    }


    /* NEWSLETTER */

    if(
      $("#newsletterForm")
    ){

      $("#newsletterForm")
        .addEventListener(
          "submit",
          event => {

            event.preventDefault();

            event.target.reset();

            toast(
              "Thanks — you're on the list!"
            );

          }
        );

    }


    /* CUSTOMER SUPPORT */

    if($("#chatFab")){

      $("#chatFab")
        .onclick =
        openChat;

    }


    if($("#closeChat")){

      $("#closeChat")
        .onclick =
        closeChat;

    }


    if(
      $("#chatFooterLink")
    ){

      $("#chatFooterLink")
        .onclick =
        event => {

          event.preventDefault();

          openChat();

        };

    }


    if($("#chatForm")){

      $("#chatForm")
        .addEventListener(
          "submit",
          event => {

            event.preventDefault();


            const input =
              $("#chatInput");


            const text =
              input.value.trim();


            if(!text)
              return;


            addChatMessage(
              text,
              "user"
            );


            input.value =
              "";


            setTimeout(
              () => {

                addChatMessage(
                  replyTo(text)
                );

              },
              350
            );

          }
        );

    }


    /* ACCOUNT */

    if(
      $("#tmsAccountButton")
    ){

      $("#tmsAccountButton")
        .onclick =
        openAccount;

    }


    if(
      $("#tmsAccountClose")
    ){

      $("#tmsAccountClose")
        .onclick =
        closeAccount;

    }


    if(
      $("#tmsAccountModal")
    ){

      $("#tmsAccountModal")
        .addEventListener(
          "click",
          event => {

            if(
              event.target.id ===
              "tmsAccountModal"
            ){

              closeAccount();

            }

          }
        );

    }


    if(
      $("#tmsLoginBtn")
    ){

      $("#tmsLoginBtn")
        .onclick =
        loginCustomer;

    }


    if(
      $("#tmsCreateBtn")
    ){

      $("#tmsCreateBtn")
        .onclick =
        createCustomerAccount;

    }


    if(
      $("#tmsForgotBtn")
    ){

      $("#tmsForgotBtn")
        .onclick =
        resetPassword;

    }


    if(
      $("#tmsOrdersBtn")
    ){

      $("#tmsOrdersBtn")
        .onclick =
        loadMyOrders;

    }


    if(
      $("#tmsLogoutBtn")
    ){

      $("#tmsLogoutBtn")
        .onclick =
        async () => {

          await firebaseReady;

          await auth.signOut();

          toast(
            "Logged out"
          );

        };

    }


    /* INITIAL RENDER */

    renderProducts();

    renderCart();

  }
);
/* =========================================================
   TMSJEANS PREMIUM PRODUCT EXPERIENCE
   Product Quick View + 3-Image Gallery + Premium UI
========================================================= */

(function(){

  const galleryImages = [

    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=90",

    "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=1000&q=90",

    "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1000&q=90",

    "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?auto=format&fit=crop&w=1000&q=90",

    "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?auto=format&fit=crop&w=1000&q=90",

    "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?auto=format&fit=crop&w=1000&q=90",

    "https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=1000&q=90",

    "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=90",

    "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1000&q=90"

  ];


  /* =====================================================
     PREMIUM CSS
  ===================================================== */

  const style =
    document.createElement("style");

  style.textContent = `

    .product-card{
      position:relative;
      transition:
        transform .25s ease,
        box-shadow .25s ease;
      cursor:pointer;
    }

    .product-card:hover{
      transform:translateY(-6px);
      box-shadow:
        0 18px 40px rgba(0,0,0,.12);
    }

    .product-image{
      overflow:hidden;
      position:relative;
      aspect-ratio:4/5;
      background:#f2f2f2;
    }

    .product-image img{
      width:100%;
      height:100%;
      object-fit:cover;
      transition:
        transform .45s ease,
        filter .3s ease;
    }

    .product-card:hover
    .product-image img{
      transform:scale(1.045);
    }

    .product-card
    .quick-add{
      opacity:0;
      transform:translateY(10px);
      transition:.25s ease;
    }

    .product-card:hover
    .quick-add{
      opacity:1;
      transform:translateY(0);
    }


    /* ===================================================
       PRODUCT MODAL
    =================================================== */

    #tmsProductModal{
      position:fixed;
      inset:0;
      background:rgba(10,10,10,.72);
      z-index:100001;
      display:none;
      align-items:center;
      justify-content:center;
      padding:25px;
      backdrop-filter:blur(10px);
    }

    #tmsProductModal.show{
      display:flex;
    }

    .tms-product-window{
      width:min(1180px,100%);
      max-height:92vh;
      overflow:auto;
      background:#fff;
      border-radius:24px;
      position:relative;
      box-shadow:
        0 30px 100px rgba(0,0,0,.35);
    }

    .tms-product-close{
      position:absolute;
      right:18px;
      top:18px;
      z-index:5;
      width:42px;
      height:42px;
      border:0;
      border-radius:50%;
      background:#fff;
      box-shadow:
        0 5px 20px rgba(0,0,0,.12);
      font-size:25px;
      cursor:pointer;
    }

    .tms-product-content{
      display:grid;
      grid-template-columns:
        1.05fr .95fr;
      gap:35px;
      padding:30px;
    }

    .tms-gallery{
      display:grid;
      grid-template-columns:90px 1fr;
      gap:15px;
    }

    .tms-thumbs{
      display:flex;
      flex-direction:column;
      gap:10px;
    }

    .tms-thumb{
      border:2px solid transparent;
      border-radius:12px;
      overflow:hidden;
      padding:0;
      background:#f5f5f5;
      cursor:pointer;
      aspect-ratio:3/4;
    }

    .tms-thumb.active{
      border-color:#111;
    }

    .tms-thumb img{
      width:100%;
      height:100%;
      object-fit:cover;
    }

    .tms-main-photo{
      min-height:620px;
      border-radius:18px;
      overflow:hidden;
      background:#f1f1f1;
    }

    .tms-main-photo img{
      width:100%;
      height:100%;
      min-height:620px;
      object-fit:cover;
    }

    .tms-product-details{
      padding:20px 10px;
      display:flex;
      flex-direction:column;
      justify-content:center;
    }

    .tms-product-badge{
      display:inline-block;
      width:max-content;
      background:#111;
      color:#fff;
      padding:7px 11px;
      border-radius:20px;
      font-size:10px;
      font-weight:800;
      letter-spacing:1px;
      margin-bottom:14px;
    }

    .tms-product-details h2{
      font-size:38px;
      line-height:1.05;
      margin:0 0 12px;
      letter-spacing:-1.5px;
    }

    .tms-category{
      color:#777;
      font-size:14px;
      margin-bottom:17px;
    }

    .tms-price{
      display:flex;
      align-items:center;
      gap:12px;
      margin-bottom:18px;
    }

    .tms-price strong{
      font-size:30px;
    }

    .tms-price del{
      color:#999;
      font-size:18px;
    }

    .tms-discount{
      background:#dff6e8;
      color:#087a38;
      border-radius:20px;
      padding:6px 10px;
      font-size:12px;
      font-weight:800;
    }

    .tms-description{
      color:#666;
      line-height:1.65;
      font-size:14px;
      margin-bottom:20px;
    }

    .tms-label{
      font-size:13px;
      font-weight:800;
      margin-bottom:9px;
    }

    .tms-sizes{
      display:flex;
      flex-wrap:wrap;
      gap:8px;
      margin-bottom:20px;
    }

    .tms-size{
      min-width:48px;
      padding:10px 13px;
      background:#fff;
      color:#111;
      border:1px solid #ddd;
      border-radius:50px;
      cursor:pointer;
      font-weight:700;
    }

    .tms-size.active{
      background:#111;
      color:#fff;
      border-color:#111;
    }

    .tms-qty{
      display:flex;
      align-items:center;
      gap:10px;
      margin-bottom:20px;
    }

    .tms-qty button{
      width:42px;
      height:42px;
      border-radius:50%;
      border:1px solid #ddd;
      background:#fff;
      font-size:20px;
      cursor:pointer;
    }

    .tms-qty span{
      min-width:42px;
      text-align:center;
      font-weight:800;
    }

    .tms-actions{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:10px;
    }

    .tms-add,
    .tms-buy{
      min-height:54px;
      border-radius:13px;
      font-weight:800;
      cursor:pointer;
    }

    .tms-add{
      background:#111;
      color:#fff;
      border:1px solid #111;
    }

    .tms-buy{
      background:#fff;
      color:#111;
      border:1px solid #111;
    }

    .tms-benefits{
      display:grid;
      grid-template-columns:
        repeat(3,1fr);
      gap:10px;
      margin-top:20px;
      border-top:1px solid #eee;
      padding-top:18px;
    }

    .tms-benefit{
      font-size:11px;
      color:#666;
      line-height:1.45;
    }

    .tms-benefit strong{
      display:block;
      color:#111;
      margin-bottom:3px;
    }


    /* ===================================================
       MOBILE
    =================================================== */

    @media(max-width:800px){

      #tmsProductModal{
        padding:10px;
      }

      .tms-product-content{
        grid-template-columns:1fr;
        padding:15px;
      }

      .tms-gallery{
        grid-template-columns:
          70px 1fr;
      }

      .tms-main-photo,
      .tms-main-photo img{
        min-height:430px;
      }

      .tms-product-details h2{
        font-size:29px;
      }

    }

    @media(max-width:520px){

      .tms-thumbs{
        gap:6px;
      }

      .tms-product-content{
        gap:10px;
      }

      .tms-benefits{
        grid-template-columns:1fr;
      }

      .tms-actions{
        grid-template-columns:1fr;
      }

    }

  `;

  document.head.appendChild(style);


  /* =====================================================
     MODAL HTML
  ===================================================== */

  const modal =
    document.createElement("div");

  modal.id =
    "tmsProductModal";

  modal.innerHTML = `

    <div
      class="tms-product-window"
    >

      <button
        class="tms-product-close"
        id="tmsProductClose"
      >
        ×
      </button>


      <div
        class="tms-product-content"
      >

        <div
          class="tms-gallery"
        >

          <div
            class="tms-thumbs"
            id="tmsThumbs"
          ></div>


          <div
            class="tms-main-photo"
          >

            <img
              id="tmsMainProductImage"
              src=""
              alt=""
            >

          </div>

        </div>


        <div
          class="tms-product-details"
        >

          <span
            class="tms-product-badge"
            id="tmsProductBadge"
          >
            TMSJEANS
          </span>


          <h2
            id="tmsProductName"
          ></h2>


          <div
            class="tms-category"
            id="tmsProductCategory"
          ></div>


          <div
            class="tms-price"
          >

            <strong
              id="tmsProductPrice"
            ></strong>

            <del
              id="tmsProductOldPrice"
            ></del>

            <span
              class="tms-discount"
              id="tmsProductDiscount"
            ></span>

          </div>


          <p
            class="tms-description"
          >
            Premium TMSJEANS denim designed
            for everyday comfort and modern style.
            Explore the product from multiple angles
            before adding it to your bag.
          </p>


          <div
            class="tms-label"
          >
            Select Size
          </div>


          <div
            class="tms-sizes"
            id="tmsSizes"
          >

            <button class="tms-size">
              28
            </button>

            <button class="tms-size">
              30
            </button>

            <button class="tms-size active">
              32
            </button>

            <button class="tms-size">
              34
            </button>

            <button class="tms-size">
              36
            </button>

            <button class="tms-size">
              38
            </button>

          </div>


          <div
            class="tms-label"
          >
            Quantity
          </div>


          <div
            class="tms-qty"
          >

            <button
              id="tmsQtyMinus"
            >
              −
            </button>

            <span
              id="tmsQtyValue"
            >
              1
            </span>

            <button
              id="tmsQtyPlus"
            >
              +
            </button>

          </div>


          <div
            class="tms-actions"
          >

            <button
              class="tms-add"
              id="tmsModalAdd"
            >
              🛒 Add to Bag
            </button>

            <button
              class="tms-buy"
              id="tmsModalBuy"
            >
              ⚡ Buy Now
            </button>

          </div>


          <div
            class="tms-benefits"
          >

            <div
              class="tms-benefit"
            >
              <strong>
                🚚 Free Delivery
              </strong>
              On eligible orders
            </div>


            <div
              class="tms-benefit"
            >
              <strong>
                ↩️ 7-Day Returns
              </strong>
              Easy exchange support
            </div>


            <div
              class="tms-benefit"
            >
              <strong>
                🔒 Secure Checkout
              </strong>
              Safe shopping experience
            </div>

          </div>

        </div>

      </div>

    </div>

  `;

  document.body.appendChild(modal);


  /* =====================================================
     STATE
  ===================================================== */

  let currentProduct = null;

  let currentGallery = [];

  let currentQty = 1;


  /* =====================================================
     OPEN MODAL
  ===================================================== */

  function openProductModal(product){

    if(!product)
      return;


    currentProduct =
      product;

    currentQty =
      1;


    currentGallery =
      buildGallery(
        product
      );


    const badge =
      product.tag ||
      "TMSJEANS";


    document
      .getElementById(
        "tmsProductBadge"
      )
      .textContent =
      badge;


    document
      .getElementById(
        "tmsProductName"
      )
      .textContent =
      product.name;


    document
      .getElementById(
        "tmsProductCategory"
      )
      .textContent =
      product.category;


    document
      .getElementById(
        "tmsProductPrice"
      )
      .textContent =
      money(product.price);


    const oldPrice =
      document
        .getElementById(
          "tmsProductOldPrice"
        );


    const discount =
      document
        .getElementById(
          "tmsProductDiscount"
        );


    if(product.oldPrice){

      oldPrice.textContent =
        money(product.oldPrice);


      const percent =
        Math.round(
          (
            1 -
            product.price /
            product.oldPrice
          ) * 100
        );


      discount.textContent =
        percent +
        "% OFF";

    }

    else{

      oldPrice.textContent =
        "";

      discount.textContent =
        "";

    }


    document
      .getElementById(
        "tmsQtyValue"
      )
      .textContent =
      currentQty;


    renderGallery();


    modal
      .classList
      .add("show");


    document.body.style.overflow =
      "hidden";

  }


  /* =====================================================
     CLOSE
  ===================================================== */

  function closeProductModal(){

    modal
      .classList
      .remove("show");


    document.body.style.overflow =
      "";

  }


  /* =====================================================
     GALLERY
  ===================================================== */

  function buildGallery(product){

    const result = [];

    const main =
      product.image;


    if(main)
      result.push(main);


    const start =
      Math.abs(
        Number(product.id || 1)
      ) % galleryImages.length;


    for(
      let i = 0;
      i < galleryImages.length &&
      result.length < 3;
      i++
    ){

      const image =
        galleryImages[
          (start + i) %
          galleryImages.length
        ];


      if(
        !result.includes(image)
      ){

        result.push(image);

      }

    }


    return result;

  }


  function renderGallery(){

    const thumbs =
      document
        .getElementById(
          "tmsThumbs"
        );


    const main =
      document
        .getElementById(
          "tmsMainProductImage"
        );


    thumbs.innerHTML =
      currentGallery
        .map(
          (
            image,
            index
          ) => `

          <button
            class="
              tms-thumb
              ${
                index === 0
                  ? "active"
                  : ""
              }
            "
            data-index="${index}"
          >

            <img
              src="${image}"
              alt="Product view ${index + 1}"
            >

          </button>

        `
        )
        .join("");


    main.src =
      currentGallery[0];


    main.alt =
      currentProduct
        ? currentProduct.name
        : "";


    thumbs
      .querySelectorAll(
        ".tms-thumb"
      )
      .forEach(
        thumb => {

          thumb.onclick =
            () => {

              const index =
                Number(
                  thumb.dataset
                    .index
                );


              main.src =
                currentGallery[
                  index
                ];


              thumbs
                .querySelectorAll(
                  ".tms-thumb"
                )
                .forEach(
                  item =>
                    item.classList
                      .remove(
                        "active"
                      )
                );


              thumb.classList
                .add(
                  "active"
                );

            };

        }
      );

  }


  /* =====================================================
     PRODUCT CARD CLICK
  ===================================================== */

  const productGrid =
    document.querySelector(
      "#productGrid"
    );


  if(productGrid){

    productGrid.addEventListener(
      "click",
      event => {

        if(
          event.target.closest(
            ".quick-add"
          )
        ){

          return;

        }


        const card =
          event.target.closest(
            ".product-card"
          );


        if(!card)
          return;


        const nameElement =
          card.querySelector(
            "h3"
          );


        if(!nameElement)
          return;


        const name =
          nameElement
            .textContent
            .trim();


        const product =
          products.find(
            item =>
              item.name ===
              name
          );


        if(product){

          openProductModal(
            product
          );

        }

      }
    );

  }


  /* =====================================================
     MODAL BUTTONS
  ===================================================== */

  document
    .getElementById(
      "tmsProductClose"
    )
    .onclick =
    closeProductModal;


  modal.addEventListener(
    "click",
    event => {

      if(
        event.target ===
        modal
      ){

        closeProductModal();

      }

    }
  );


  /* =====================================================
     QUANTITY
  ===================================================== */

  document
    .getElementById(
      "tmsQtyMinus"
    )
    .onclick =
    () => {

      if(
        currentQty > 1
      ){

        currentQty--;

      }


      document
        .getElementById(
          "tmsQtyValue"
        )
        .textContent =
        currentQty;

    };


  document
    .getElementById(
      "tmsQtyPlus"
    )
    .onclick =
    () => {

      if(
        currentQty < 10
      ){

        currentQty++;

      }


      document
        .getElementById(
          "tmsQtyValue"
        )
        .textContent =
        currentQty;

    };


  /* =====================================================
     SIZE
  ===================================================== */

  document
    .querySelectorAll(
      ".tms-size"
    )
    .forEach(
      button => {

        button.onclick =
          () => {

            document
              .querySelectorAll(
                ".tms-size"
              )
              .forEach(
                item =>
                  item.classList
                    .remove(
                      "active"
                    )
              );


            button.classList
              .add(
                "active"
              );

          };

      }
    );


  /* =====================================================
     ADD TO BAG
  ===================================================== */

  document
    .getElementById(
      "tmsModalAdd"
    )
    .onclick =
    () => {

      if(!currentProduct)
        return;


      for(
        let i = 0;
        i < currentQty;
        i++
      ){

        addToCart(
          currentProduct.id
        );

      }


      closeProductModal();

    };


  /* =====================================================
     BUY NOW
  ===================================================== */

  document
    .getElementById(
      "tmsModalBuy"
    )
    .onclick =
    () => {

      if(!currentProduct)
        return;


      for(
        let i = 0;
        i < currentQty;
        i++
      ){

        addToCart(
          currentProduct.id
        );

      }


      closeProductModal();


      setTimeout(
        () => {

          if(
            typeof openCheckout ===
            "function"
          ){

            openCheckout();

          }

        },
        200
      );

    };


  /* =====================================================
     FIX BROKEN PRODUCT IMAGES
  ===================================================== */

  document.addEventListener(
    "error",
    event => {

      const image =
        event.target;


      if(
        image &&
        image.tagName ===
        "IMG"
      ){

        if(
          image.dataset
            .fallbackApplied
        ){

          return;

        }


        image.dataset
          .fallbackApplied =
          "1";


        image.src =
          galleryImages[
            0
          ];

      }

    },
    true
  );


  /* =====================================================
     KEYBOARD
  ===================================================== */

  document.addEventListener(
    "keydown",
    event => {

      if(
        event.key ===
        "Escape"
      ){

        closeProductModal();

      }

    }
  );

})();
