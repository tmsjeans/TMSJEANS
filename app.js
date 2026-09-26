const products = [

  {
    id:1,
    name:"Classic Black Denim",
    category:"Jeans",
    price:699,
    oldPrice:999,
    image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=85",
    tag:"BESTSELLER"
  },

  {
    id:2,
    name:"Washed Blue Straight Fit",
    category:"Jeans",
    price:749,
    oldPrice:1099,
    image:"https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=85",
    tag:"NEW"
  },

  {
    id:3,
    name:"Oversized Essential Tee",
    category:"T-Shirts",
    price:399,
    oldPrice:599,
    image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85",
    tag:"POPULAR"
  },

  {
    id:4,
    name:"Premium White Tee",
    category:"T-Shirts",
    price:449,
    oldPrice:649,
    image:"https://images.unsplash.com/photo-1583743814966-8936f37f4c7f?auto=format&fit=crop&w=800&q=85",
    tag:""
  },

  {
    id:5,
    name:"Relaxed Fit Overshirt",
    category:"Shirts",
    price:799,
    oldPrice:1199,
    image:"https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=85",
    tag:"NEW"
  },

  {
    id:6,
    name:"Utility Black Shirt",
    category:"Shirts",
    price:899,
    oldPrice:1299,
    image:"https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=85",
    tag:""
  },

  {
    id:7,
    name:"Vintage Grey Denim",
    category:"Jeans",
    price:799,
    oldPrice:1199,
    image:"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85",
    tag:"LIMITED"
  },

  {
    id:8,
    name:"Heavyweight Black Tee",
    category:"T-Shirts",
    price:499,
    oldPrice:699,
    image:"https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=85",
    tag:""
  }

];


let cart =
  JSON.parse(
    localStorage.getItem("tms_cart") || "[]"
  );

let currentFilter = "All";


const $ = selector =>
  document.querySelector(selector);


const money = number =>
  "₹" + number.toLocaleString("en-IN");



/* =========================
   CART STORAGE
========================= */

function saveCart(){

  localStorage.setItem(
    "tms_cart",
    JSON.stringify(cart)
  );

  renderCart();

}



/* =========================
   PRODUCTS
========================= */

function renderProducts(
  filter = currentFilter,
  query = ""
){

  const q =
    query.toLowerCase().trim();


  const list =
    products.filter(product =>

      (
        filter === "All" ||
        product.category === filter
      )

      &&

      (
        !q ||
        product.name
          .toLowerCase()
          .includes(q)

        ||

        product.category
          .toLowerCase()
          .includes(q)
      )

    );


  $("#productGrid").innerHTML =

    list.map(product => `

      <article class="product-card">

        <div class="product-image">

          ${
            product.tag
              ?
              `<span class="tag">
                ${product.tag}
              </span>`
              :
              ""
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


        <div class="product-info">

          <h3>
            ${product.name}
          </h3>

          <p>
            ${product.category}
          </p>

          <p class="price">

            ${money(product.price)}

            ${
              product.oldPrice
                ?
                `<del>
                  ${money(product.oldPrice)}
                </del>`
                :
                ""
            }

          </p>

        </div>

      </article>

    `).join("")

    ||

    `<p>No products found.</p>`;

}



/* =========================
   ADD TO CART
========================= */

function addToCart(id){

  const item =
    cart.find(
      product => product.id === id
    );


  if(item){

    item.qty++;

  }else{

    cart.push({
      id:id,
      qty:1
    });

  }


  saveCart();

  openCart();

  toast(
    "Added to your bag"
  );

}



/* =========================
   CHANGE QUANTITY
========================= */

function changeQty(
  id,
  delta
){

  const item =
    cart.find(
      product => product.id === id
    );


  if(!item) return;


  item.qty += delta;


  if(item.qty <= 0){

    cart =
      cart.filter(
        product => product.id !== id
      );

  }


  saveCart();

}



/* =========================
   RENDER CART
========================= */

function renderCart(){

  const count =
    cart.reduce(
      (total,item) =>
        total + item.qty,
      0
    );


  $("#cartCount")
    .textContent = count;


  const items =
    cart
      .map(item => ({
        ...item,
        p:
          products.find(
            product =>
              product.id === item.id
          )
      }))
      .filter(item => item.p);


  $("#cartItems").innerHTML =

    items.map(item => `

      <div class="cart-row">

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


          <div class="qty">

            <button
              onclick="changeQty(${item.id},-1)"
            >
              −
            </button>

            <span>
              ${item.qty}
            </span>

            <button
              onclick="changeQty(${item.id},1)"
            >
              +
            </button>

          </div>

        </div>


        <button
          class="remove"
          onclick="changeQty(${item.id},-${item.qty})"
        >
          ×
        </button>

      </div>

    `).join("");


  const total =
    items.reduce(
      (sum,item) =>
        sum +
        item.p.price *
        item.qty,
      0
    );


  $("#cartTotal")
    .textContent = money(total);


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

}



/* =========================
   CART OPEN / CLOSE
========================= */

function openCart(){

  $("#cartDrawer")
    .classList.add("open");

  $("#overlay")
    .classList.add("show");

}


function closeCart(){

  $("#cartDrawer")
    .classList.remove("open");

  $("#overlay")
    .classList.remove("show");

}



/* =========================
   CHECKOUT
========================= */

function openCheckout(){

  if(!cart.length){

    toast(
      "Your bag is empty"
    );

    return;

  }


  closeCart();


  const items =
    cart.map(item => ({
      ...item,
      p:
        products.find(
          product =>
            product.id === item.id
        )
    }));


  $("#checkoutSummary").innerHTML =

    items.map(item => `

      <div class="summary-item">

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

    `).join("");


  const total =
    items.reduce(
      (sum,item) =>
        sum +
        item.p.price *
        item.qty,
      0
    );


  $("#checkoutTotal")
    .textContent =
      money(total);


  $("#checkoutModal")
    .classList.add("show");

}


function closeCheckout(){

  $("#checkoutModal")
    .classList.remove("show");

}



/* =========================
   PLACE ORDER
========================= */

function submitOrder(event){

  event.preventDefault();


  if(!cart.length){

    toast(
      "Your bag is empty"
    );

    return;

  }


  const form =
    new FormData(
      event.target
    );


  const items =
    cart.map(item => ({
      ...item,
      p:
        products.find(
          product =>
            product.id === item.id
        )
    }));


  const total =
    items.reduce(
      (sum,item) =>
        sum +
        item.p.price *
        item.qty,
      0
    );


  const order = {

    id:
      "TMS-" +
      Date.now()
        .toString()
        .slice(-8),

    customer:{

      name:
        form.get("name"),

      phone:
        form.get("phone"),

      address:
        form.get("address"),

      city:
        form.get("city"),

      pin:
        form.get("pin")

    },

    payment:
      form.get("payment"),


    items:
      items.map(item => ({

        name:
          item.p.name,

        qty:
          item.qty,

        price:
          item.p.price

      })),


    total:total,

    createdAt:
      new Date().toISOString(),

    status:
      "New"

  };


  const orders =
    JSON.parse(
      localStorage.getItem(
        "tms_orders"
      ) || "[]"
    );


  orders.unshift(order);


  localStorage.setItem(
    "tms_orders",
    JSON.stringify(orders)
  );


  localStorage.removeItem(
    "tms_cart"
  );


  cart = [];


  renderCart();


  closeCheckout();


  event.target.reset();


  toast(
    "Order request " +
    order.id +
    " submitted"
  );


  setTimeout(
    () =>
      openChatWithOrder(
        order.id
      ),
    700
  );

}



/* =========================
   TOAST
========================= */

function toast(text){

  const toastBox =
    $("#toast");


  toastBox.textContent =
    text;


  toastBox.classList.add(
    "show"
  );


  setTimeout(
    () =>
      toastBox.classList.remove(
        "show"
      ),
    2500
  );

}



/* =========================
   BUTTON EVENTS
========================= */

$("#cartBtn")
  .onclick = openCart;


$("#closeCart")
  .onclick = closeCart;


$("#overlay")
  .onclick = closeCart;


$("#checkoutBtn")
  .onclick = openCheckout;


$("#closeCheckout")
  .onclick = closeCheckout;


$("#orderForm")
  .addEventListener(
    "submit",
    submitOrder
  );


$("#emptyShop")
  .onclick = closeCart;



/* =========================
   CATEGORY FILTER
========================= */

document
  .querySelectorAll(
    "#filters button"
  )
  .forEach(button => {

    button.onclick = () => {

      document
        .querySelectorAll(
          "#filters button"
        )
        .forEach(
          item =>
            item.classList.remove(
              "active"
            )
        );


      button.classList.add(
        "active"
      );


      currentFilter =
        button.dataset.filter;


      renderProducts();

    };

  });



/* =========================
   COLLECTION FILTER
========================= */

document
  .querySelectorAll(
    ".collection-card"
  )
  .forEach(card => {

    card.onclick = () => {

      currentFilter =
        card.dataset.filter;


      document
        .querySelectorAll(
          "#filters button"
        )
        .forEach(
          button =>
            button.classList.toggle(
              "active",
              button.dataset.filter ===
                currentFilter
            )
        );


      setTimeout(
        () =>
          renderProducts(),
        0
      );

    };

  });



/* =========================
   SEARCH
========================= */

$("#searchBtn")
  .onclick = () => {

    $("#searchModal")
      .classList.add(
        "show"
      );

    $("#searchInput")
      .focus();

    renderSearch("");

  };


$("#closeSearch")
  .onclick = () => {

    $("#searchModal")
      .classList.remove(
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


function renderSearch(query){

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
      .slice(0,6);


  $("#searchResults")
    .innerHTML =

      list.map(
        product => `

          <div class="search-result">

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
      ).join("");

}



/* =========================
   NEWSLETTER
========================= */

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



/* =========================
   CHATBOX
========================= */

const chatReplies = {

  size:
    "For the best fit, open a product and choose your usual waist/chest size. If you are between two sizes, message us with your height, weight and usual size.",

  delivery:
    "Standard delivery usually takes 3–7 business days depending on your PIN code. Shipping details can be connected to your courier service later.",

  return:
    "We support size exchange/returns according to the store policy. Add your exact policy on the Returns & Exchange page before launch.",

  order:
    "Sure! If you have already placed an order, send your order ID here and our team can check it."

};


function openChat(){

  $("#chatbox")
    .classList.add(
      "open"
    );

  $("#chatInput")
    .focus();

}


function closeChat(){

  $("#chatbox")
    .classList.remove(
      "open"
    );

}


function addChatMessage(
  text,
  type = "bot"
){

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


function replyTo(text){

  const message =
    text.toLowerCase();


  if(
    message.includes("size")
  ){

    return chatReplies.size;

  }


  if(
    message.includes("delivery") ||
    message.includes("ship")
  ){

    return chatReplies.delivery;

  }


  if(
    message.includes("return") ||
    message.includes("exchange")
  ){

    return chatReplies.return;

  }


  if(
    message.includes("order")
  ){

    return chatReplies.order;

  }


  return "Thanks for your message! Our store team can help with product, size, delivery and order questions. For a real-time human chat, connect this box to a service such as Tawk.to, Crisp or your own backend.";

}


function openChatWithOrder(
  orderId
){

  openChat();


  addChatMessage(
    "Your order request " +
    orderId +
    " has been saved on this device. A store backend/email connection is needed to send it to your team automatically."
  );

}



/* CHAT EVENTS */

$("#chatFab")
  .onclick = openChat;


$("#closeChat")
  .onclick = closeChat;


$("#chatFooterLink")
  .onclick = event => {

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


      if(!text)
        return;


      addChatMessage(
        text,
        "user"
      );


      input.value = "";


      setTimeout(
        () =>
          addChatMessage(
            replyTo(text)
          ),
        350
      );

    }
  );



/* QUICK REPLIES */

document
  .querySelectorAll(
    ".quick-replies button"
  )
  .forEach(button => {

    button.onclick = () => {

      const label =
        button.textContent;


      addChatMessage(
        label,
        "user"
      );


      setTimeout(
        () =>
          addChatMessage(
            chatReplies[
              button.dataset.chat
            ]
          ),
        350
      );

    };

  });



/* INITIAL LOAD */

renderProducts();

renderCart();
