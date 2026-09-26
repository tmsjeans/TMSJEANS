/* =====================================================
   TMSJEANS - COMPLETE app.js
   Cart + Search + Checkout + Customer Support
   Firebase Phone OTP + Customer Account + Online Orders
===================================================== */

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAxYqY7V2_h5FBCa4Cm9xX5pABu-oAUzg4",
  authDomain: "tmsjeans.firebaseapp.com",
  projectId: "tmsjeans",
  storageBucket: "tmsjeans.firebasestorage.app",
  messagingSenderId: "155013489437",
  appId: "1:155013489437:web:d1f91792dd8ebba29cf7f4",
  databaseURL: "https://tmsjeans-default-rtdb.firebaseio.com"
};

const products = [
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
  }
];

let cart = JSON.parse(
  localStorage.getItem("tms_cart") || "[]"
);

let currentFilter = "All";

let firebaseReady = null;
let auth = null;
let db = null;
let confirmationResult = null;
let recaptchaVerifier = null;
let pendingCheckout = false;

const $ = selector =>
  document.querySelector(selector);

const money = number =>
  "₹" +
  Number(number || 0).toLocaleString("en-IN");


/* =====================================================
   FIREBASE
===================================================== */

function loadScript(src) {

  return new Promise((resolve, reject) => {

    const oldScript =
      document.querySelector(
        `script[src="${src}"]`
      );

    if (oldScript) {

      if (window.firebase) {
        resolve();
        return;
      }

      oldScript.addEventListener(
        "load",
        resolve,
        { once: true }
      );

      oldScript.addEventListener(
        "error",
        reject,
        { once: true }
      );

      return;
    }

    const script =
      document.createElement("script");

    script.src = src;
    script.async = true;

    script.onload = resolve;

    script.onerror = () =>
      reject(
        new Error(
          "Firebase SDK failed to load."
        )
      );

    document.head.appendChild(script);

  });

}


async function initFirebase() {

  await Promise.all([

    loadScript(
      "https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js"
    ),

    loadScript(
      "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth-compat.js"
    ),

    loadScript(
      "https://www.gstatic.com/firebasejs/12.19.0/firebase-database-compat.js"
    )

  ]);

  if (!firebase.apps.length) {

    firebase.initializeApp(
      FIREBASE_CONFIG
    );

  }

  auth = firebase.auth();

  db = firebase.database();


  auth.onAuthStateChanged(
    async user => {

      updateAccountButton(user);

      renderAccountState();


      if (user) {

        try {

          await db
            .ref("users/" + user.uid)
            .update({

              phone:
                user.phoneNumber || "",

              lastLoginAt:
                firebase.database
                  .ServerValue
                  .TIMESTAMP

            });

        } catch (error) {

          console.error(
            "User profile error:",
            error
          );

        }


        if (pendingCheckout) {

          pendingCheckout = false;

          setTimeout(
            () => openCheckout(),
            300
          );

        }

      }

    }
  );

}


firebaseReady =
  initFirebase()
    .catch(error => {

      console.error(
        "Firebase initialization error:",
        error
      );

    });


/* =====================================================
   CUSTOMER ACCOUNT UI
===================================================== */

const accountStyle =
  document.createElement("style");

accountStyle.textContent = `

#tmsAccountButton{

  position:fixed;

  left:20px;

  bottom:20px;

  z-index:99998;

  border:0;

  border-radius:999px;

  padding:12px 16px;

  background:#111;

  color:#fff;

  font-weight:700;

  cursor:pointer;

  box-shadow:
  0 8px 25px rgba(0,0,0,.22);

}


#tmsAccountModal{

  position:fixed;

  inset:0;

  z-index:100000;

  display:none;

  align-items:center;

  justify-content:center;

  background:
  rgba(0,0,0,.58);

  padding:20px;

}


#tmsAccountModal.show{

  display:flex;

}


.tms-account-card{

  width:420px;

  max-width:100%;

  max-height:90vh;

  overflow:auto;

  background:#fff;

  border-radius:20px;

  padding:24px;

  box-shadow:
  0 20px 70px rgba(0,0,0,.3);

}


.tms-account-head{

  display:flex;

  justify-content:space-between;

  align-items:center;

  margin-bottom:16px;

}


.tms-account-head h3{

  margin:0;

  font-size:20px;

}


#tmsAccountClose{

  border:0;

  background:transparent;

  font-size:26px;

  cursor:pointer;

}


.tms-account-card label{

  display:block;

  font-size:13px;

  font-weight:700;

  margin:
  12px 0 6px;

}


.tms-account-card input{

  width:100%;

  box-sizing:border-box;

  padding:12px 13px;

  border:1px solid #ddd;

  border-radius:10px;

  outline:none;

}


.tms-btn{

  width:100%;

  border:0;

  border-radius:10px;

  padding:12px;

  margin-top:12px;

  background:#111;

  color:#fff;

  font-weight:700;

  cursor:pointer;

}


.tms-secondary{

  border:
  1px solid #ddd;

  background:#fff;

  color:#111;

  padding:
  10px 12px;

  border-radius:10px;

  cursor:pointer;

}


#tmsOtpSection{

  display:none;

}


#tmsLoggedInView{

  display:none;

}


#tmsAccountStatus{

  margin-top:10px;

  min-height:20px;

  font-size:13px;

}


.tms-order-card{

  border:
  1px solid #e8e8e8;

  border-radius:12px;

  padding:12px;

  margin-top:10px;

}


.tms-order-card strong{

  display:block;

  margin-bottom:4px;

}


@media(max-width:480px){

  #tmsAccountButton{

    left:12px;

    bottom:12px;

  }

}

`;

document.head.appendChild(
  accountStyle
);


document.body.insertAdjacentHTML(
  "beforeend",
  `

<button id="tmsAccountButton">
  👤 Login
</button>


<div id="tmsAccountModal">

  <div class="tms-account-card">

    <div class="tms-account-head">

      <h3>
        TMSJEANS Account
      </h3>

      <button
        id="tmsAccountClose"
      >
        ×
      </button>

    </div>


    <div id="tmsLoginView">

      <p
        style="
        margin-top:0;
        color:#666;
        font-size:14px;
        "
      >
        Login with your mobile
        number using OTP.
      </p>


      <label>
        Mobile Number
      </label>


      <input
        id="tmsPhone"
        type="tel"
        inputmode="numeric"
        maxlength="10"
        placeholder="10-digit mobile number"
      >


      <div id="tmsRecaptcha"></div>


      <button
        id="tmsSendOtp"
        class="tms-btn"
      >
        Send OTP
      </button>


      <div id="tmsOtpSection">

        <label>
          OTP
        </label>


        <input
          id="tmsOtp"
          type="tel"
          inputmode="numeric"
          maxlength="6"
          placeholder="Enter 6-digit OTP"
        >


        <button
          id="tmsVerifyOtp"
          class="tms-btn"
        >
          Verify OTP & Login
        </button>

      </div>


      <div id="tmsAccountStatus"></div>

    </div>


    <div id="tmsLoggedInView">

      <p
        id="tmsLoggedPhone"
        style="margin-top:0"
      ></p>


      <button
        id="tmsMyOrdersBtn"
        class="tms-btn"
      >
        📦 My Orders
      </button>


      <div id="tmsOrders"></div>


      <button
        id="tmsLogout"
        class="tms-secondary"
        style="margin-top:12px"
      >
        Logout
      </button>

    </div>

  </div>

</div>

`
);


/* =====================================================
   ACCOUNT FUNCTIONS
===================================================== */

function setAccountStatus(
  text,
  error = false
) {

  const el =
    $("#tmsAccountStatus");

  if (!el) return;

  el.textContent = text;

  el.style.color =
    error
      ? "#b00020"
      : "#444";

}


function updateAccountButton(user) {

  const button =
    $("#tmsAccountButton");

  if (!button) return;

  button.textContent =
    user
      ? "👤 My Account"
      : "👤 Login";

}


function renderAccountState() {

  const user =
    auth
      ? auth.currentUser
      : null;

  const login =
    $("#tmsLoginView");

  const logged =
    $("#tmsLoggedInView");

  if (!login || !logged)
    return;

  login.style.display =
    user
      ? "none"
      : "block";

  logged.style.display =
    user
      ? "block"
      : "none";


  if (user) {

    $("#tmsLoggedPhone")
      .textContent =
      "Logged in as " +
      (
        user.phoneNumber ||
        "customer"
      );

  }

}


function openAccount() {

  $("#tmsAccountModal")
    .classList
    .add("show");

  renderAccountState();

  firebaseReady
    .then(
      () =>
        setupRecaptcha()
    )
    .catch(
      error =>
        console.error(error)
    );

}


function closeAccount() {

  $("#tmsAccountModal")
    .classList
    .remove("show");

}


async function setupRecaptcha() {

  await firebaseReady;

  if (
    !auth ||
    recaptchaVerifier
  ) {

    return;

  }


  recaptchaVerifier =
    new firebase.auth
      .RecaptchaVerifier(
        "tmsRecaptcha",
        {
          size:
            "normal"
        }
      );


  await recaptchaVerifier.render();

}


async function sendOtp() {

  try {

    await firebaseReady;


    const digits =
      $("#tmsPhone")
        .value
        .replace(/\D/g, "");


    if (
      !/^\d{10}$/.test(
        digits
      )
    ) {

      setAccountStatus(
        "Enter a valid 10-digit Indian mobile number.",
        true
      );

      return;

    }


    await setupRecaptcha();


    setAccountStatus(
      "Sending OTP..."
    );


    confirmationResult =
      await auth
        .signInWithPhoneNumber(
          "+91" + digits,
          recaptchaVerifier
        );


    $("#tmsOtpSection")
      .style
      .display =
      "block";


    setAccountStatus(
      "OTP sent. Enter the 6-digit code received by SMS."
    );

  }

  catch (error) {

    console.error(
      "OTP error:",
      error
    );


    try {

      if (
        recaptchaVerifier
      ) {

        recaptchaVerifier
          .clear();

      }

    }

    catch (e) {}


    recaptchaVerifier =
      null;


    $("#tmsRecaptcha")
      .innerHTML =
      "";


    setAccountStatus(
      "OTP could not be sent. Check Firebase Phone Auth, reCAPTCHA and your number.",
      true
    );

  }

}


async function verifyOtp() {

  try {

    await firebaseReady;


    if (
      !confirmationResult
    ) {

      setAccountStatus(
        "Please request an OTP first.",
        true
      );

      return;

    }


    const code =
      $("#tmsOtp")
        .value
        .trim();


    if (
      !/^\d{6}$/.test(
        code
      )
    ) {

      setAccountStatus(
        "Enter the 6-digit OTP.",
        true
      );

      return;

    }


    setAccountStatus(
      "Verifying OTP..."
    );


    await confirmationResult
      .confirm(code);


    confirmationResult =
      null;


    $("#tmsOtp")
      .value =
      "";


    $("#tmsOtpSection")
      .style
      .display =
      "none";


    setAccountStatus(
      "Login successful."
    );


    renderAccountState();

    loadOrders();

  }

  catch (error) {

    console.error(
      "OTP verification error:",
      error
    );


    setAccountStatus(
      "Incorrect or expired OTP. Please try again.",
      true
    );

  }

}


/* =====================================================
   LOAD CUSTOMER ORDERS
===================================================== */

async function loadOrders() {

  try {

    await firebaseReady;


    const user =
      auth.currentUser;


    if (!user)
      return;


    const snapshot =
      await db
        .ref(
          "orders/" +
          user.uid
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


    const box =
      $("#tmsOrders");


    if (!orders.length) {

      box.innerHTML =
        `
        <p
          style="
          color:#666;
          font-size:14px
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
              class="tms-order-card"
            >

              <strong>
                📦 ${order.id}
              </strong>

              <span
                style="
                font-size:13px
                "
              >
                Total:
                ${money(order.total)}
              </span>

              <br>

              <span
                style="
                font-size:12px;
                color:#777
                "
              >
                Status:
                ${order.status || "New"}
              </span>

            </div>

            `
        )
        .join("");

  }

  catch (error) {

    console.error(
      "Order loading error:",
      error
    );


    $("#tmsOrders")
      .innerHTML =
      `
      <p
        style="
        color:#b00020;
        font-size:14px
        "
      >
        Could not load orders.
      </p>
      `;

  }

}


/* =====================================================
   CART
===================================================== */

function saveCart() {

  localStorage.setItem(
    "tms_cart",
    JSON.stringify(cart)
  );

  renderCart();

}


function addToCart(id) {

  const item =
    cart.find(
      x =>
        x.id === id
    );


  if (item) {

    item.qty++;

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
  delta
) {

  const item =
    cart.find(
      x =>
        x.id === id
    );


  if (!item)
    return;


  item.qty += delta;


  if (
    item.qty <= 0
  ) {

    cart =
      cart.filter(
        x =>
          x.id !== id
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


  $("#cartCount")
    .textContent =
    count;


  const items =
    cart
      .map(
        item => ({
          ...item,

          p:
            products.find(
              p =>
                p.id ===
                item.id
            )
        })
      )
      .filter(
        item =>
          item.p
      );


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
              src="${item.p.image}"
              alt="${item.p.name}"
            >

            <div>

              <h4>
                ${item.p.name}
              </h4>

              <p>
                ${money(item.p.price)}
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


  const total =
    items.reduce(
      (sum, item) =>
        sum +
        item.p.price *
        item.qty,
      0
    );


  $("#cartTotal")
    .textContent =
    money(total);


  $("#cartEmpty")
    .style
    .display =
    items.length
      ? "none"
      : "block";


  $("#cartFooter")
    .style
    .display =
    items.length
      ? "block"
      : "none";

}


function openCart() {

  $("#cartDrawer")
    .classList
    .add("open");

  $("#overlay")
    .classList
    .add("show");

}


function closeCart() {

  $("#cartDrawer")
    .classList
    .remove("open");

  $("#overlay")
    .classList
    .remove("show");

}


/* =====================================================
   PRODUCT RENDER
===================================================== */

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

        const filterOK =
          filter === "All" ||
          product.category ===
          filter;


        const searchOK =
          !q ||
          product.name
            .toLowerCase()
            .includes(q) ||
          product.category
            .toLowerCase()
            .includes(q);


        return (
          filterOK &&
          searchOK
        );

      }
    );


  $("#productGrid")
    .innerHTML =

    list
      .map(
        product =>
          `

          <article
            class="product-card"
          >

            <div
              class="product-image"
            >

              ${
                product.tag
                  ? `
                    <span
                      class="tag"
                    >
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

    ||
    "<p>No products found.</p>";

}


/* =====================================================
   CHECKOUT
===================================================== */

function openCheckout() {

  if (!cart.length) {

    toast(
      "Your bag is empty"
    );

    return;

  }


  closeCart();


  const items =
    cart.map(
      item => ({

        ...item,

        p:
          products.find(
            p =>
              p.id ===
              item.id
          )

      })
    );


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
              ${item.p.name}
              ×
              ${item.qty}
            </span>

            <b>
              ${money(
                item.p.price *
                item.qty
              )}
            </b>

          </div>

          `
      )
      .join("");


  const total =
    items.reduce(
      (sum, item) =>
        sum +
        item.p.price *
        item.qty,
      0
    );


  $("#checkoutTotal")
    .textContent =
    money(total);


  $("#checkoutModal")
    .classList
    .add("show");

}


function closeCheckout() {

  $("#checkoutModal")
    .classList
    .remove("show");

}


/* =====================================================
   PLACE ORDER
===================================================== */

async function submitOrder(
  event
) {

  event.preventDefault();


  if (!cart.length) {

    toast(
      "Your bag is empty"
    );

    return;

  }


  try {

    await firebaseReady;

  }

  catch (error) {

    toast(
      "Login service unavailable"
    );

    return;

  }


  const user =
    auth.currentUser;


  if (!user) {

    pendingCheckout =
      true;

    closeCheckout();

    openAccount();

    setAccountStatus(
      "Please login with your mobile number before placing the order."
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

        p:
          products.find(
            p =>
              p.id ===
              item.id
          )

      })
    );


  const total =
    items.reduce(
      (sum, item) =>
        sum +
        item.p.price *
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
      user.uid,

    customer: {

      name:
        form.get("name"),

      phone:
        user.phoneNumber ||
        form.get("phone"),

      address:
        form.get(
          "address"
        ),

      city:
        form.get(
          "city"
        ),

      pin:
        form.get(
          "pin"
        )

    },


    payment:
      form.get(
        "payment"
      ),


    items:
      items.map(
        item => ({

          name:
            item.p.name,

          qty:
            item.qty,

          price:
            item.p.price

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
        user.uid +
        "/" +
        orderId
      )
      .set(order);

  }

  catch (error) {

    console.error(
      "Order save error:",
      error
    );

    toast(
      "Order could not be saved. Check Firebase Database Rules."
    );

    return;

  }


  const localOrders =
    JSON.parse(
      localStorage.getItem(
        "tms_orders"
      ) || "[]"
    );


  localOrders.unshift(
    order
  );


  localStorage.setItem(
    "tms_orders",
    JSON.stringify(
      localOrders
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

      loadOrders();

    },
    500
  );

}


/* =====================================================
   SEARCH
===================================================== */

function renderSearch(
  query
) {

  const q =
    query
      .toLowerCase();


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


/* =====================================================
   CUSTOMER SUPPORT
===================================================== */

const supportReply =
  "👨‍💼 TMSJEANS Customer Support is automated. Please tell us your problem and we will guide you.";


function openChat() {

  $("#chatbox")
    .classList
    .add("open");

  $("#chatInput")
    .focus();

}


function closeChat() {

  $("#chatbox")
    .classList
    .remove("open");

}


function addChatMessage(
  text,
  type = "bot"
) {

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


function replyTo(text) {

  const message =
    text
      .toLowerCase()
      .trim();


  if (

    message.includes(
      "customer support"
    )

    ||

    message.includes(
      "support"
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

    return supportReply;

  }


  if (

    message.includes(
      "size"
    )

    ||

    message.includes(
      "fit"
    )

  ) {

    return (
      "👕 Please tell us your usual size, height and weight and we can guide you."
    );

  }


  if (

    message.includes(
      "delivery"
    )

    ||

    message.includes(
      "ship"
    )

  ) {

    return (
      "🚚 Standard delivery usually takes 3–7 business days depending on your PIN code."
    );

  }


  if (

    message.includes(
      "return"
    )

    ||

    message.includes(
      "exchange"
    )

  ) {

    return (
      "↩️ For return or exchange help, please keep your Order ID ready."
    );

  }


  if (
    message.includes(
      "order"
    )
  ) {

    return (
      "📦 Please send your TMSJEANS Order ID, for example TMS-12345678."
    );

  }


  return (
    "Thanks for contacting TMSJEANS Customer Support. Please tell us your problem and we will guide you."
  );

}


/* =====================================================
   TOAST
===================================================== */

function toast(text) {

  const toastBox =
    $("#toast");


  if (!toastBox)
    return;


  toastBox.textContent =
    text;


  toastBox.classList.add(
    "show"
  );


  setTimeout(
    () => {

      toastBox.classList.remove(
        "show"
      );

    },
    2500
  );

}


/* =====================================================
   BUTTON EVENTS
===================================================== */

$("#cartBtn").onclick =
  openCart;


$("#closeCart").onclick =
  closeCart;


$("#overlay").onclick =
  closeCart;


$("#checkoutBtn").onclick =
  openCheckout;


$("#closeCheckout").onclick =
  closeCheckout;


$("#orderForm")
  .addEventListener(
    "submit",
    submitOrder
  );


$("#emptyShop").onclick =
  closeCart;


/* SEARCH */

$("#searchBtn").onclick =
  () => {

    $("#searchModal")
      .classList
      .add("show");

    $("#searchInput")
      .focus();

    renderSearch("");

  };


$("#closeSearch").onclick =
  () => {

    $("#searchModal")
      .classList
      .remove(
        "show"
      );

  };


$("#searchInput")
  .addEventListener(
    "input",
    event =>
      renderSearch(
        event.target.value
      )
  );


/* NEWSLETTER */

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


/* SUPPORT CHAT */

$("#chatFab").onclick =
  openChat;


$("#closeChat").onclick =
  closeChat;


$("#chatFooterLink").onclick =
  event => {

    event.preventDefault();

    openChat();

  };


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
        () => {

          addChatMessage(
            replyTo(text)
          );

        },
        350
      );

    }
  );


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
              b =>
                b.classList
                  .remove(
                    "active"
                  )
            );


          button.classList.add(
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
              button => {

                button.classList.toggle(
                  "active",
                  button.dataset
                    .filter ===
                  currentFilter
                );

              }
            );


          renderProducts();

        };

    }
  );


/* CUSTOMER ACCOUNT */

$("#tmsAccountButton")
  .onclick =
  openAccount;


$("#tmsAccountClose")
  .onclick =
  closeAccount;


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


$("#tmsSendOtp")
  .onclick =
  sendOtp;


$("#tmsVerifyOtp")
  .onclick =
  verifyOtp;


$("#tmsMyOrdersBtn")
  .onclick =
  loadOrders;


$("#tmsLogout")
  .onclick =
  async () => {

    try {

      await auth.signOut();

      $("#tmsOrders")
        .innerHTML =
        "";

      toast(
        "Logged out"
      );

    }

    catch (error) {

      console.error(
        "Logout error:",
        error
      );

    }

  };


/* =====================================================
   INITIAL LOAD
===================================================== */

renderProducts();

renderCart();
/* =====================================================
   TMSJEANS EMAIL LOGIN
   REPLACES PHONE OTP LOGIN UI
===================================================== */

setTimeout(() => {

  const accountModal =
    document.querySelector("#tmsAccountModal");

  const accountButton =
    document.querySelector("#tmsAccountButton");

  if (!accountModal || !accountButton) {
    return;
  }

  /* Replace old phone-login box */

  const card =
    accountModal.querySelector(
      ".tms-account-card"
    );

  if (!card) return;

  card.innerHTML = `

    <div class="tms-account-head">

      <h3>TMSJEANS Account</h3>

      <button
        id="emailAccountClose"
        type="button"
        style="
          border:0;
          background:transparent;
          font-size:26px;
          cursor:pointer;
        "
      >
        ×
      </button>

    </div>


    <!-- LOGIN -->

    <div id="emailLoginView">

      <p style="
        margin-top:0;
        color:#666;
        font-size:14px;
      ">
        Login to your TMSJEANS account.
      </p>

      <input
        id="customerEmail"
        type="email"
        placeholder="Email address"
        autocomplete="email"
        style="
          width:100%;
          box-sizing:border-box;
          padding:13px;
          border:1px solid #ddd;
          border-radius:10px;
          margin:7px 0;
        "
      >

      <input
        id="customerPassword"
        type="password"
        placeholder="Password"
        autocomplete="current-password"
        style="
          width:100%;
          box-sizing:border-box;
          padding:13px;
          border:1px solid #ddd;
          border-radius:10px;
          margin:7px 0;
        "
      >

      <button
        id="customerLogin"
        type="button"
        style="
          width:100%;
          border:0;
          border-radius:10px;
          padding:13px;
          margin-top:10px;
          background:#111;
          color:#fff;
          font-weight:700;
          cursor:pointer;
        "
      >
        Login
      </button>

      <button
        id="customerCreate"
        type="button"
        style="
          width:100%;
          border:1px solid #ddd;
          border-radius:10px;
          padding:12px;
          margin-top:8px;
          background:#fff;
          color:#111;
          font-weight:700;
          cursor:pointer;
        "
      >
        Create Account
      </button>

      <button
        id="customerForgot"
        type="button"
        style="
          width:100%;
          border:0;
          background:transparent;
          padding:10px;
          margin-top:5px;
          color:#555;
          cursor:pointer;
        "
      >
        Forgot Password?
      </button>

      <div
        id="emailAuthMessage"
        style="
          margin-top:10px;
          font-size:13px;
        "
      ></div>

    </div>


    <!-- LOGGED IN -->

    <div
      id="emailLoggedInView"
      style="display:none;"
    >

      <p
        id="emailLoggedUser"
        style="
          margin-top:0;
          color:#555;
        "
      ></p>

      <button
        id="emailMyOrders"
        type="button"
        style="
          width:100%;
          border:0;
          border-radius:10px;
          padding:13px;
          background:#111;
          color:#fff;
          font-weight:700;
          cursor:pointer;
        "
      >
        📦 My Orders
      </button>

      <div id="emailOrders"></div>

      <button
        id="emailLogout"
        type="button"
        style="
          width:100%;
          border:1px solid #ddd;
          border-radius:10px;
          padding:12px;
          margin-top:12px;
          background:#fff;
          cursor:pointer;
        "
      >
        Logout
      </button>

    </div>

  `;


  /* CLOSE */

  document
    .querySelector("#emailAccountClose")
    .onclick = () => {

      accountModal
        .classList
        .remove("show");

    };


  /* ACCOUNT OPEN */

  accountButton.onclick = () => {

    accountModal
      .classList
      .add("show");

    updateEmailAccountUI();

  };


  /* LOGIN */

  document
    .querySelector("#customerLogin")
    .onclick = async () => {

      const email =
        document
          .querySelector(
            "#customerEmail"
          )
          .value
          .trim();

      const password =
        document
          .querySelector(
            "#customerPassword"
          )
          .value;

      const message =
        document
          .querySelector(
            "#emailAuthMessage"
          );


      if (!email || !password) {

        message.textContent =
          "Please enter email and password.";

        message.style.color =
          "#b00020";

        return;

      }


      try {

        await firebaseReady;

        await auth
          .signInWithEmailAndPassword(
            email,
            password
          );


        message.textContent =
          "Login successful.";

        message.style.color =
          "#16803c";


        updateEmailAccountUI();


        loadEmailOrders();

      }

      catch (error) {

        console.error(error);

        message.textContent =
          "Login failed. Check your email and password.";

        message.style.color =
          "#b00020";

      }

    };


  /* CREATE ACCOUNT */

  document
    .querySelector("#customerCreate")
    .onclick = async () => {

      const email =
        document
          .querySelector(
            "#customerEmail"
          )
          .value
          .trim();

      const password =
        document
          .querySelector(
            "#customerPassword"
          )
          .value;

      const message =
        document
          .querySelector(
            "#emailAuthMessage"
          );


      if (!email || !password) {

        message.textContent =
          "Enter email and password first.";

        message.style.color =
          "#b00020";

        return;

      }


      if (password.length < 6) {

        message.textContent =
          "Password must contain at least 6 characters.";

        message.style.color =
          "#b00020";

        return;

      }


      try {

        await firebaseReady;


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


        message.textContent =
          "✅ Account created successfully.";

        message.style.color =
          "#16803c";


        updateEmailAccountUI();

      }

      catch (error) {

        console.error(error);

        if (
          error.code ===
          "auth/email-already-in-use"
        ) {

          message.textContent =
            "This email is already registered. Please login.";

        }

        else {

          message.textContent =
            error.message ||
            "Could not create account.";

        }

        message.style.color =
          "#b00020";

      }

    };


  /* FORGOT PASSWORD */

  document
    .querySelector("#customerForgot")
    .onclick = async () => {

      const email =
        document
          .querySelector(
            "#customerEmail"
          )
          .value
          .trim();

      const message =
        document
          .querySelector(
            "#emailAuthMessage"
          );


      if (!email) {

        message.textContent =
          "Enter your email address first.";

        message.style.color =
          "#b00020";

        return;

      }


      try {

        await firebaseReady;

        await auth
          .sendPasswordResetEmail(
            email
          );


        message.textContent =
          "Password reset email sent.";

        message.style.color =
          "#16803c";

      }

      catch (error) {

        console.error(error);

        message.textContent =
          "Could not send reset email.";

        message.style.color =
          "#b00020";

      }

    };


  /* LOGOUT */

  document
    .querySelector("#emailLogout")
    .onclick = async () => {

      await auth.signOut();

      updateEmailAccountUI();

    };


  /* MY ORDERS */

  document
    .querySelector("#emailMyOrders")
    .onclick =
    loadEmailOrders;


  /* UPDATE UI */

  function updateEmailAccountUI() {

    const user =
      auth &&
      auth.currentUser;


    const loginView =
      document.querySelector(
        "#emailLoginView"
      );

    const loggedView =
      document.querySelector(
        "#emailLoggedInView"
      );


    if (!user) {

      loginView.style.display =
        "block";

      loggedView.style.display =
        "none";

      accountButton.textContent =
        "👤 Login";

      return;

    }


    loginView.style.display =
      "none";

    loggedView.style.display =
      "block";


    accountButton.textContent =
      "👤 My Account";


    document
      .querySelector(
        "#emailLoggedUser"
      )
      .textContent =
      "Logged in as " +
      user.email;

  }


  /* LOAD ORDERS */

  async function loadEmailOrders() {

    const user =
      auth &&
      auth.currentUser;


    if (!user) return;


    const box =
      document.querySelector(
        "#emailOrders"
      );


    box.innerHTML =
      "<p style='color:#777'>Loading orders...</p>";


    try {

      const snapshot =
        await db
          .ref(
            "orders/" +
            user.uid
          )
          .once("value");


      const data =
        snapshot.val() ||
        {};


      const orders =
        Object.values(data);


      if (!orders.length) {

        box.innerHTML =
          "<p style='color:#777'>No orders yet.</p>";

        return;

      }


      orders.sort(
        (a, b) =>
          new Date(
            b.createdAt
          ) -
          new Date(
            a.createdAt
          )
      );


      box.innerHTML =
        orders
          .map(
            order =>
              `

              <div
                style="
                  border:1px solid #e5e5e5;
                  border-radius:12px;
                  padding:12px;
                  margin-top:10px;
                "
              >

                <strong>
                  📦 ${order.id}
                </strong>

                <div
                  style="
                    font-size:13px;
                    margin-top:5px;
                  "
                >
                  Total:
                  ₹${Number(
                    order.total || 0
                  ).toLocaleString("en-IN")}
                </div>

                <div
                  style="
                    font-size:12px;
                    color:#777;
                    margin-top:4px;
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

    catch (error) {

      console.error(error);

      box.innerHTML =
        "<p style='color:#b00020'>Could not load orders.</p>";

    }

  }


  /* CHECK LOGIN STATE */

  if (auth) {

    auth.onAuthStateChanged(
      user => {

        updateEmailAccountUI();

      }
    );

  }

  else {

    setTimeout(
      () =>
        updateEmailAccountUI(),
      1000
    );

  }

}, 1000);
