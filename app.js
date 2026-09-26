/* =========================================================
   TMSJEANS - COMPLETE APP.JS
   Products + Cart + Search + Checkout
   Customer Support + Email Login + Firebase Orders
========================================================= */

/* =========================
   FIREBASE CONFIG
========================= */

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAxYqY7V2_h5FBCa4Cm9xX5pABu-oAUzg4",
  authDomain: "tmsjeans.firebaseapp.com",
  projectId: "tmsjeans",
  storageBucket: "tmsjeans.firebasestorage.app",
  messagingSenderId: "155013489437",
  appId: "1:155013489437:web:d1f91792dd8ebba29cf7f4",
  databaseURL: "https://tmsjeans-default-rtdb.firebaseio.com"
};


/* =========================
   PRODUCTS
========================= */

const products = [

  {
    id: 1,
    name: "Classic Black Denim",
    category: "Jeans",
    price: 699,
    oldPrice: 999,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=85",
    tag: "BESTSELLER"
  },

  {
    id: 2,
    name: "Washed Blue Straight Fit",
    category: "Jeans",
    price: 749,
    oldPrice: 1099,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=85",
    tag: "NEW"
  },

  {
    id: 3,
    name: "Oversized Essential Tee",
    category: "T-Shirts",
    price: 399,
    oldPrice: 599,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85",
    tag: "POPULAR"
  },

  {
    id: 4,
    name: "Premium White Tee",
    category: "T-Shirts",
    price: 449,
    oldPrice: 649,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f37f4c7f?auto=format&fit=crop&w=800&q=85",
    tag: ""
  },

  {
    id: 5,
    name: "Relaxed Fit Overshirt",
    category: "Shirts",
    price: 799,
    oldPrice: 1199,
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=85",
    tag: "NEW"
  },

  {
    id: 6,
    name: "Utility Black Shirt",
    category: "Shirts",
    price: 899,
    oldPrice: 1299,
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=85",
    tag: ""
  },

  {
    id: 7,
    name: "Vintage Grey Denim",
    category: "Jeans",
    price: 799,
    oldPrice: 1199,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85",
    tag: "LIMITED"
  },

  {
    id: 8,
    name: "Heavyweight Black Tee",
    category: "T-Shirts",
    price: 499,
    oldPrice: 699,
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=85",
    tag: ""
  }

];


/* =========================
   GLOBAL STATE
========================= */

let cart =
  JSON.parse(
    localStorage.getItem("tms_cart") || "[]"
  );

let currentFilter = "All";

let auth = null;
let db = null;

let firebaseLoaded = false;

const $ = selector =>
  document.querySelector(selector);

const money = value =>
  "₹" +
  Number(value || 0).toLocaleString("en-IN");


/* =========================================================
   FIREBASE LOAD
========================================================= */

function loadScript(src) {

  return new Promise(
    (resolve, reject) => {

      if (
        document.querySelector(
          `script[src="${src}"]`
        )
      ) {

        resolve();
        return;

      }

      const script =
        document.createElement("script");

      script.src = src;
      script.async = true;

      script.onload = resolve;
      script.onerror = reject;

      document.head.appendChild(script);

    }
  );

}


async function initFirebase() {

  try {

    await loadScript(
      "https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js"
    );

    await loadScript(
      "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth-compat.js"
    );

    await loadScript(
      "https://www.gstatic.com/firebasejs/12.19.0/firebase-database-compat.js"
    );


    if (
      !firebase.apps.length
    ) {

      firebase.initializeApp(
        FIREBASE_CONFIG
      );

    }


    auth =
      firebase.auth();

    db =
      firebase.database();

    firebaseLoaded = true;


    auth.onAuthStateChanged(
      user => {

        updateAccountButton();

        updateAccountScreen();

      }
    );


    console.log(
      "Firebase connected"
    );

  }

  catch (error) {

    console.error(
      "Firebase error:",
      error
    );

  }

}


const firebaseReady =
  initFirebase();


/* =========================================================
   PRODUCTS
========================================================= */

function renderProducts(
  filter = currentFilter,
  query = ""
) {

  const q =
    query
      .toLowerCase()
      .trim();


  const list =
    products.filter(
      product => {

        const categoryMatch =
          filter === "All" ||
          product.category === filter;


        const searchMatch =
          !q ||
          product.name
            .toLowerCase()
            .includes(q) ||
          product.category
            .toLowerCase()
            .includes(q);


        return (
          categoryMatch &&
          searchMatch
        );

      }
    );


  const grid =
    $("#productGrid");

  if (!grid)
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
                  onclick="addToCart(${product.id})"
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

                <p
                  class="price"
                >

                  ${money(product.price)}

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
   CART
========================================================= */

function saveCart() {

  localStorage.setItem(
    "tms_cart",
    JSON.stringify(cart)
  );

  renderCart();

}


function addToCart(id) {

  const existing =
    cart.find(
      item =>
        item.id === id
    );


  if (existing) {

    existing.qty++;

  }

  else {

    cart.push({
      id: id,
      qty: 1
    });

  }


  saveCart();

  openCart();

  toast(
    "Added to your bag"
  );

}


function changeQty(
  id,
  amount
) {

  const item =
    cart.find(
      product =>
        product.id === id
    );


  if (!item)
    return;


  item.qty += amount;


  if (
    item.qty <= 0
  ) {

    cart =
      cart.filter(
        product =>
          product.id !== id
      );

  }


  saveCart();

}


function renderCart() {

  const count =
    cart.reduce(
      (sum, item) =>
        sum + item.qty,
      0
    );


  if ($("#cartCount")) {

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


  if ($("#cartItems")) {

    $("#cartItems")
      .innerHTML =

      items
        .map(
          item =>
            `

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
      (sum, item) =>
        sum +
        item.product.price *
        item.qty,
      0
    );


  if ($("#cartTotal")) {

    $("#cartTotal")
      .textContent =
      money(total);

  }


  if ($("#cartEmpty")) {

    $("#cartEmpty")
      .style.display =
      items.length
        ? "none"
        : "block";

  }


  if ($("#cartFooter")) {

    $("#cartFooter")
      .style.display =
      items.length
        ? "block"
        : "none";

  }

}


function openCart() {

  if ($("#cartDrawer")) {

    $("#cartDrawer")
      .classList
      .add("open");

  }

  if ($("#overlay")) {

    $("#overlay")
      .classList
      .add("show");

  }

}


function closeCart() {

  if ($("#cartDrawer")) {

    $("#cartDrawer")
      .classList
      .remove("open");

  }

  if ($("#overlay")) {

    $("#overlay")
      .classList
      .remove("show");

  }

}


/* =========================================================
   CHECKOUT
========================================================= */

function openCheckout() {

  if (
    !cart.length
  ) {

    toast(
      "Your bag is empty"
    );

    return;

  }


  if (
    firebaseLoaded &&
    !auth.currentUser
  ) {

    openAccount();

    setAccountMessage(
      "Please login before placing an order."
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


  if ($("#checkoutSummary")) {

    $("#checkoutSummary")
      .innerHTML =

      items
        .map(
          item =>
            `

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
      (sum, item) =>
        sum +
        item.product.price *
        item.qty,
      0
    );


  if ($("#checkoutTotal")) {

    $("#checkoutTotal")
      .textContent =
      money(total);

  }


  if ($("#checkoutModal")) {

    $("#checkoutModal")
      .classList
      .add("show");

  }

}


function closeCheckout() {

  if ($("#checkoutModal")) {

    $("#checkoutModal")
      .classList
      .remove("show");

  }

}


/* =========================================================
   ORDER CREATION
========================================================= */

async function submitOrder(
  event
) {

  event.preventDefault();


  if (
    !cart.length
  ) {

    toast(
      "Your bag is empty"
    );

    return;

  }


  await firebaseReady;


  if (
    !auth ||
    !auth.currentUser
  ) {

    openAccount();

    setAccountMessage(
      "Please login to place your order."
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
      (sum, item) =>
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
        form.get("name") || "",

      phone:
        form.get("phone") || "",

      email:
        auth.currentUser.email || "",

      address:
        form.get("address") || "",

      city:
        form.get("city") || "",

      pin:
        form.get("pin") || ""

    },

    payment:
      form.get("payment") || "",

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


  try {

    await db
      .ref(
        "orders/" +
        auth.currentUser.uid +
        "/" +
        orderId
      )
      .set(order);


    /* Backup in browser */

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

  catch (error) {

    console.error(
      "ORDER ERROR:",
      error
    );


    toast(
      "Order could not be saved. Please check Firebase Database Rules."
    );

  }

}


/* =========================================================
   SEARCH
========================================================= */

function renderSearch(
  query
) {

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
        6
      );


  if ($("#searchResults")) {

    $("#searchResults")
      .innerHTML =

      list
        .map(
          product =>
            `

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

function toast(text) {

  const box =
    $("#toast");

  if (!box)
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
   CUSTOMER SUPPORT
========================================================= */

const supportMessage =
  "👨‍💼 TMSJEANS Customer Support is automated. Please tell us your problem and we will guide you.";


function openChat() {

  if ($("#chatbox")) {

    $("#chatbox")
      .classList
      .add("open");

  }

  if ($("#chatInput")) {

    $("#chatInput")
      .focus();

  }

}


function closeChat() {

  if ($("#chatbox")) {

    $("#chatbox")
      .classList
      .remove("open");

  }

}


function addChatMessage(
  text,
  type = "bot"
) {

  if (!$("#chatMessages"))
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
) {

  const message =
    text
      .toLowerCase()
      .trim();


  if (

    message.includes(
      "support"
    )

    ||

    message.includes(
      "customer support"
    )

    ||

    message.includes(
      "customer care"
    )

    ||

    message.includes(
      "agent"
    )

    ||

    message.includes(
      "team"
    )

  ) {

    return supportMessage;

  }


  return (
    "Thanks for contacting TMSJEANS Customer Support. Please tell us your problem and we will guide you."
  );

}


/* =========================================================
   ACCOUNT UI
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
    0 8px 25px rgba(0,0,0,.20);

}

#tmsAccountModal{

  position:fixed;
  inset:0;

  display:none;
  align-items:center;
  justify-content:center;

  z-index:100000;

  background:
    rgba(0,0,0,.60);

  padding:20px;

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

  border-radius:20px;

  padding:24px;

  box-shadow:
    0 20px 70px rgba(0,0,0,.30);

}

.tms-account-head{

  display:flex;
  justify-content:space-between;
  align-items:center;

  margin-bottom:15px;

}

.tms-account-head h2{

  margin:0;
  font-size:21px;

}

.tms-account-close{

  border:0;
  background:transparent;

  font-size:26px;
  cursor:pointer;

}

.tms-account-box input{

  width:100%;
  box-sizing:border-box;

  border:1px solid #ddd;

  border-radius:10px;

  padding:13px;

  margin:6px 0;

  font-size:14px;

  outline:none;

}

.tms-main-btn{

  width:100%;

  border:0;
  border-radius:10px;

  padding:13px;

  margin-top:9px;

  background:#111;
  color:#fff;

  font-weight:700;

  cursor:pointer;

}

.tms-light-btn{

  width:100%;

  border:1px solid #ddd;
  border-radius:10px;

  padding:12px;

  margin-top:8px;

  background:#fff;

  color:#111;

  font-weight:700;

  cursor:pointer;

}

.tms-account-message{

  min-height:20px;

  margin-top:10px;

  font-size:13px;

}

.tms-order{

  border:1px solid #e5e5e5;

  border-radius:12px;

  padding:12px;

  margin-top:10px;

}

.tms-order-id{

  font-weight:800;

}

.tms-order-small{

  color:#777;

  font-size:12px;

  margin-top:5px;

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
          class="tms-account-close"
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
          Login or create your
          TMSJEANS customer account.
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
          class="tms-account-message"
        ></div>

      </div>


      <div
        id="tmsLoggedArea"
        style="display:none"
      >

        <p
          id="tmsLoggedEmail"
          style="
          color:#555;
          font-size:14px;
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

function openAccount() {

  $("#tmsAccountModal")
    .classList
    .add("show");

  updateAccountScreen();

}


function closeAccount() {

  $("#tmsAccountModal")
    .classList
    .remove("show");

}


function setAccountMessage(
  message,
  error = false
) {

  const box =
    $("#tmsAccountMessage");


  if (!box)
    return;


  box.textContent =
    message;


  box.style.color =
    error
      ? "#b00020"
      : "#444";

}


function updateAccountButton() {

  const button =
    $("#tmsAccountButton");


  if (!button)
    return;


  const user =
    auth &&
    auth.currentUser;


  button.textContent =
    user
      ? "👤 My Account"
      : "👤 Login";

}


function updateAccountScreen() {

  if (!firebaseLoaded)
    return;


  const user =
    auth.currentUser;


  const loginArea =
    $("#tmsLoginArea");


  const loggedArea =
    $("#tmsLoggedArea");


  if (!loginArea ||
      !loggedArea)
    return;


  if (user) {

    loginArea.style.display =
      "none";

    loggedArea.style.display =
      "block";


    $("#tmsLoggedEmail")
      .textContent =
      "Logged in as " +
      user.email;

  }

  else {

    loginArea.style.display =
      "block";

    loggedArea.style.display =
      "none";

  }

}


/* =========================================================
   CREATE ACCOUNT
========================================================= */

async function createCustomerAccount() {

  await firebaseReady;


  const email =
    $("#tmsEmail")
      .value
      .trim();


  const password =
    $("#tmsPassword")
      .value;


  if (!email ||
      !password) {

    setAccountMessage(
      "Please enter email and password.",
      true
    );

    return;

  }


  if (
    password.length < 6
  ) {

    setAccountMessage(
      "Password must be at least 6 characters.",
      true
    );

    return;

  }


  try {

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


    setAccountMessage(
      "✅ Account created successfully."
    );


    updateAccountScreen();

    toast(
      "Account created"
    );

  }

  catch (error) {

    console.error(
      error
    );


    if (
      error.code ===
      "auth/email-already-in-use"
    ) {

      setAccountMessage(
        "This email is already registered. Please login.",
        true
      );

    }

    else {

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

async function loginCustomer() {

  await firebaseReady;


  const email =
    $("#tmsEmail")
      .value
      .trim();


  const password =
    $("#tmsPassword")
      .value;


  if (!email ||
      !password) {

    setAccountMessage(
      "Please enter email and password.",
      true
    );

    return;

  }


  try {

    await auth
      .signInWithEmailAndPassword(
        email,
        password
      );


    setAccountMessage(
      "✅ Login successful."
    );


    updateAccountScreen();

    loadMyOrders();

    toast(
      "Login successful"
    );

  }

  catch (error) {

    console.error(
      error
    );


    setAccountMessage(
      "Login failed. Please check your email and password.",
      true
    );

  }

}


/* =========================================================
   PASSWORD RESET
========================================================= */

async function forgotPassword() {

  await firebaseReady;


  const email =
    $("#tmsEmail")
      .value
      .trim();


  if (!email) {

    setAccountMessage(
      "Enter your email address first.",
      true
    );

    return;

  }


  try {

    await auth
      .sendPasswordResetEmail(
        email
      );


    setAccountMessage(
      "Password reset email sent."
    );

  }

  catch (error) {

    console.error(
      error
    );


    setAccountMessage(
      "Could not send password reset email.",
      true
    );

  }

}


/* =========================================================
   LOGOUT
========================================================= */

async function logoutCustomer() {

  await firebaseReady;


  try {

    await auth.signOut();

    updateAccountScreen();

    toast(
      "Logged out"
    );

  }

  catch (error) {

    console.error(
      error
    );

  }

}


/* =========================================================
   MY ORDERS
========================================================= */

async function loadMyOrders() {

  await firebaseReady;


  if (
    !auth.currentUser
  )
    return;


  const box =
    $("#tmsMyOrders");


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


  try {

    const snapshot =
      await db
        .ref(
          "orders/" +
          auth.currentUser.uid
        )
        .once("value");


    const data =
      snapshot.val() ||
      {};


    const orders =
      Object
        .values(data)
        .sort(
          (a, b) =>
            new Date(
              b.createdAt
            ) -
            new Date(
              a.createdAt
            )
        );


    if (!orders.length) {

      box.innerHTML =
        `
          <p
            style="
            color:#777;
            font-size:14px;
            margin-top:15px;
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
              class="tms-order"
            >

              <div
                class="tms-order-id"
              >
                📦 ${order.id}
              </div>

              <div
                class="tms-order-small"
              >
                Total:
                ${money(order.total)}
              </div>

              <div
                class="tms-order-small"
              >
                Status:
                ${order.status || "New"}
              </div>

            </div>

            `
        )
        .join("");

  }

  catch (error) {

    console.error(
      error
    );


    box.innerHTML =
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
   EVENT LISTENERS
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    /* CART */

    if ($("#cartBtn"))
      $("#cartBtn")
        .onclick =
        openCart;


    if ($("#closeCart"))
      $("#closeCart")
        .onclick =
        closeCart;


    if ($("#overlay"))
      $("#overlay")
        .onclick =
        closeCart;


    if ($("#checkoutBtn"))
      $("#checkoutBtn")
        .onclick =
        openCheckout;


    if ($("#closeCheckout"))
      $("#closeCheckout")
        .onclick =
        closeCheckout;


    if ($("#emptyShop"))
      $("#emptyShop")
        .onclick =
        closeCart;


    /* CHECKOUT */

    if ($("#orderForm")) {

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
                .add("active");


              currentFilter =
                button.dataset
                  .filter;


              renderProducts();

            };

        }
      );


    /* COLLECTION */

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
                    button.classList.toggle(
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

    if ($("#searchBtn")) {

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


    if ($("#closeSearch")) {

      $("#closeSearch")
        .onclick =
        () => {

          $("#searchModal")
            .classList
            .remove("show");

        };

    }


    if ($("#searchInput")) {

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

    if (
      $("#newsletterForm")
    ) {

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


    /* SUPPORT */

    if ($("#chatFab"))
      $("#chatFab")
        .onclick =
        openChat;


    if ($("#closeChat"))
      $("#closeChat")
        .onclick =
        closeChat;


    if ($("#chatFooterLink"))
      $("#chatFooterLink")
        .onclick =
        event => {

          event.preventDefault();

          openChat();

        };


    if ($("#chatForm")) {

      $("#chatForm")
        .addEventListener(
          "submit",
          event => {

            event.preventDefault();


            const input =
              $("#chatInput");


            const text =
              input.value.trim();


            if (!text)
              return;


            addChatMessage(
              text,
              "user"
            );


            input.value =
              "";


            setTimeout(
              () =>
                addChatMessage(
                  replyTo(text)
                ),
              300
            );

          }
        );

    }


    /* QUICK CHAT */

    document
      .querySelectorAll(
        ".quick-replies button"
      )
      .forEach(
        button => {

          button.onclick =
            () => {

              const label =
                button.textContent
                  .trim();


              addChatMessage(
                label,
                "user"
              );


              setTimeout(
                () =>
                  addChatMessage(
                    replyTo(
                      button.dataset
                        .chat ||
                      label
                    )
                  ),
                300
              );

            };

        }
      );


    /* ACCOUNT */

    if (
      $("#tmsAccountButton")
    ) {

      $("#tmsAccountButton")
        .onclick =
        openAccount;

    }


    if (
      $("#tmsAccountClose")
    ) {

      $("#tmsAccountClose")
        .onclick =
        closeAccount;

    }


    if (
      $("#tmsAccountModal")
    ) {

      $("#tmsAccountModal")
        .addEventListener(
          "click",
          event => {

            if (
              event.target.id ===
              "tmsAccountModal"
            ) {

              closeAccount();

            }

          }
        );

    }


    if (
      $("#tmsLoginBtn")
    ) {

      $("#tmsLoginBtn")
        .onclick =
        loginCustomer;

    }


    if (
      $("#tmsCreateBtn")
    ) {

      $("#tmsCreateBtn")
        .onclick =
        createCustomerAccount;

    }


    if (
      $("#tmsForgotBtn")
    ) {

      $("#tmsForgotBtn")
        .onclick =
        forgotPassword;

    }


    if (
      $("#tmsOrdersBtn")
    ) {

      $("#tmsOrdersBtn")
        .onclick =
        loadMyOrders;

    }


    if (
      $("#tmsLogoutBtn")
    ) {

      $("#tmsLogoutBtn")
        .onclick =
        logoutCustomer;

    }


    /* INITIAL */

    renderProducts();

    renderCart();

    updateAccountButton();

  }
);
