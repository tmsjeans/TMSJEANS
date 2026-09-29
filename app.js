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
