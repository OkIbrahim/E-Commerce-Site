"use strict";

// Products Array Containing Each Product Object. Array is also my persistent cart state.
const products = [
  {
    id: 1,
    name: "Godzilla Shirt",
    category: "shirts",
    price: 15.99,
    image: "./images/T-Shirt_1 (1).jpg",
  },
  {
    id: 2,
    name: "Plain Shirt",
    category: "shirts",
    price: 14.99,
    image: "./images/T-Shirt_2 (1).jpg",
  },
  {
    id: 3,
    name: "Thriller Shirt",
    category: "shirts",
    price: 16.99,
    image: "./images/T-Shirt_3 (1).jpg",
  },
  {
    id: 4,
    name: "Rando Shirt",
    category: "shirts",
    price: 13.99,
    image: "./images/T-Shirt_4 (1).jpg",
  },
  {
    id: 5,
    name: "Trepada Shirt",
    category: "shirts",
    price: 18.99,
    image: "./images/T-Shirt_5 (1).jpg",
  },
  {
    id: 6,
    name: "Jonzing Shirt",
    category: "shirts",
    price: 14.99,
    image: "./images/T-Shirt_6 (1).jpg",
  },
  {
    id: 7,
    name: "Sparky Shirt",
    category: "shirts",
    price: 21.99,
    image: "./images/T-Shirt_7 (1).jpg",
  },
  {
    id: 8,
    name: "Glaze Shirt",
    category: "shirts",
    price: 16.99,
    image: "./images/T-Shirt_8 (1).jpg",
  },
  {
    id: 9,
    name: "Godzilla Jean",
    category: "jeans",
    price: 22.49,
    image: "./images/Jeans_1 (1).jpg",
  },
  {
    id: 10,
    name: "Plain Jean",
    category: "jeans",
    price: 20.49,
    image: "./images/Jeans_2 (1).jpg",
  },
  {
    id: 11,
    name: "Thriller Jean",
    category: "jeans",
    price: 26.49,
    image: "./images/Jeans_3 (1).jpg",
  },
  {
    id: 12,
    name: "Rando Jean",
    category: "jeans",
    price: 24.49,
    image: "./images/Jeans_4 (1).jpg",
  },
  {
    id: 13,
    name: "Trepada Jean",
    category: "jeans",
    price: 28.49,
    image: "./images/Jeans_5 (1).jpg",
  },
  {
    id: 14,
    name: "Jonzing Jean",
    category: "jeans",
    price: 26.49,
    image: "./images/Jeans_6 (1).jpg",
  },
  {
    id: 15,
    name: "Sparky Jean",
    category: "jeans",
    price: 25.49,
    image: "./images/Jeans_7 (1).jpg",
  },
  {
    id: 16,
    name: "Glaze Jean",
    category: "jeans",
    price: 27.49,
    image: "./images/Jeans_8 (1).jpg",
  },
  {
    id: 17,
    name: "Godzilla Jacket",
    category: "jackets",
    price: 31.49,
    image: "./images/Jacket_1 (1).jpg",
  },
  {
    id: 18,
    name: "Plain Jacket",
    category: "jackets",
    price: 33.49,
    image: "./images/Jacket_2 (1).jpg",
  },
  {
    id: 19,
    name: "Thriller Jacket",
    category: "jackets",
    price: 35.49,
    image: "./images/Jacket_3 (1).jpg",
  },
  {
    id: 20,
    name: "Rando Jacket",
    category: "jackets",
    price: 37.49,
    image: "./images/Jacket_4 (1).jpg",
  },
  {
    id: 21,
    name: "Trepada Jacket",
    category: "jackets",
    price: 32.49,
    image: "./images/Jacket_5 (1).jpg",
  },
  {
    id: 22,
    name: "Jonzing Jacket",
    category: "jackets",
    price: 34.49,
    image: "./images/Jacket_6 (1).jpg",
  },
  {
    id: 23,
    name: "Sparky Jacket",
    category: "jackets",
    price: 36.49,
    image: "./images/Jacket_7 (1).jpg",
  },
  {
    id: 24,
    name: "Glaze Jacket",
    category: "jackets",
    price: 38.49,
    image: "./images/Jacket_8 (1).jpg",
  },
  {
    id: 25,
    name: "Godzilla Shoe",
    category: "shoes",
    price: 43.99,
    image: "./images/Shoe_1 (1).jpg",
  },
  {
    id: 26,
    name: "Plain Shoe",
    category: "shoes",
    price: 44.99,
    image: "./images/Shoe_2 (1).jpg",
  },
  {
    id: 27,
    name: "Thriller Shoe",
    category: "shoes",
    price: 45.99,
    image: "./images/Shoe_3 (1).jpg",
  },
  {
    id: 28,
    name: "Rando Shoe",
    category: "shoes",
    price: 46.99,
    image: "./images/Shoe_4 (1).jpg",
  },
  {
    id: 29,
    name: "Trepada Shoe",
    category: "shoes",
    price: 47.99,
    image: "./images/Shoe_5 (1).jpg",
  },
  {
    id: 30,
    name: "Jonzing Shoe",
    category: "shoes",
    price: 48.99,
    image: "./images/Shoe_6 (1).jpg",
  },
  {
    id: 31,
    name: "Sparky Shoe",
    category: "shoes",
    price: 49.99,
    image: "./images/Shoe_7 (1).jpg",
  },
  {
    id: 32,
    name: "Glaze Shoe",
    category: "shoes",
    price: 50.99,
    image: "./images/Shoe_8 (1).jpg",
  },
];

// Initialize the cart
let cart = []; // Stores cart items, e.g., { id, name, price, image, category }

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// function loadCart() {
//   try {
//     const savedCart = localStorage.getItem("cart");

//     if (savedCart) {
//       cart = JSON.parse(savedCart);
//     }
//   } catch (error) {
//     console.error("Failed to load cart:", error);

//     cart = []; // Reset cart to empty if there's an error
//     localStorage.removeItem("cart"); // Clear corrupted data
//   }

//   updateCartUI();
// }

function loadCart() {
  try {
    const savedCart = localStorage.getItem("cart");

    if (!savedCart) {
      cart = [];
    } else {
      const parsedCart = JSON.parse(savedCart);

      if (!Array.isArray(parsedCart)) {
        throw new Error("Saved cart must be an array!");
      }

      const isValidCart = parsedCart.every((item) => {
        return (
          item &&
          Number.isInteger(item.id) &&
          products.some((product) => product.id === item.id) &&
          typeof item.price === "number" &&
          Number.isFinite(item.price) &&
          item.price >= 0 &&
          Number.isInteger(item.quantity) &&
          item.quantity > 0
        );
      });

      if (!isValidCart) {
        throw new Error("Saved cart contains invalid items");
      }

      // Restore product information from the original products array
      cart = parsedCart.map((item) => {
        const product = products.find((product) => product.id === item.id);

        return { ...product, quantity: item.quantity };
      });
    }
  } catch (error) {
    console.error("Failed to load cart:", error);
    cart = [];
    localStorage.removeItem("cart");
  }

  updateCartUI();
}

// DOM Elements
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const navOverlay = document.querySelector(".nav-overlay");
const navBar = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const searchInput = document.getElementById("product-search");
const categoryFilter = document.getElementById("category-filter");
const sortSelect = document.getElementById("sort-products");
const productsGrid = document.getElementById("products-grid");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartTotalPrice = document.getElementById("cart-total-price");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const openCartBtn = document.getElementById("open-cart-btn");
const closeCartBtn = document.getElementById("close-cart-btn");
const cartcountElement = document.getElementById("cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
const cartToast = document.getElementById("cart-toast");
const toastMessage = document.getElementById("toast-message");

let toastTimeout;

// Show Cart Toast
function showCartToast(productName) {
  // Set the notification message
  toastMessage.textContent = `${productName} has been added to your cart successfully!`;

  // Display the notification
  cartToast.classList.add("show");

  // Reset the previous timer
  clearTimeout(toastTimeout);

  // Hide the notification after 1 second
  toastTimeout = setTimeout(() => {
    cartToast.classList.remove("show");
  }, 1000);
}

// Mobile Navigation
function openNav() {
  navOverlay.classList.add("active");
  navBar.classList.add("active");
document.body.classList.add("nav-open");
closeCart();
}

function closeNav() {
  navOverlay.classList.remove("active");
  navBar.classList.remove("active");
  document.body.classList.remove("nav-open");
}

// Open navigation
menuBtn.addEventListener("click", openNav);

// Close navigation using the close button
closeBtn.addEventListener("click", closeNav);

// Close navigation by clicking the overlay
navOverlay.addEventListener("click", closeNav);

// Close navigation when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});

const desktopView = window.matchMedia("(min-width: 59.5em)");

desktopView.addEventListener("change", (e) => {
  if (e.matches) closeNav();
});

// --- PANEL DRAWER TOGGLE LOGIC ---
function openCart() {
  cartDrawer.classList.add("active");
  cartOverlay.classList.add("active");
}

function closeCart() {
  cartDrawer.classList.remove("active");
  cartOverlay.classList.remove("active");
}

// Event Listeners for Open / Close Interaction
openCartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart); // Closes when clicking background backdrop

// Centralized Pipeline Function
function updateProducts() {
  // Read current states
  const searchValue = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  const selectedSort = sortSelect.value;

  // STEP A: Filter by Category AND Search term simultaneously
  let workingArray = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchValue);
    return matchesCategory && matchesSearch;
  });

  // STEP B: Sort the filtered list
  if (selectedSort === "price-low") {
    workingArray.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "price-high") {
    workingArray.sort((a, b) => b.price - a.price);
  } else if (selectedSort === "name-asc") {
    workingArray.sort((a, b) => a.name.localeCompare(b.name));
  }

  // STEP C: Render HTML
  renderProducts(workingArray);
}

// Render UI Function
function renderProducts(products) {
  if (products.length === 0) {
    productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; font-size: 2rem; color: blueviolet;">No products found.</p>`;
    return;
  }

  productsGrid.innerHTML = products
    .map(
      (product) => `
    <div class="product-card">
      <h2>${product.name}</h2>
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <h3>$${product.price}</h3>
      <button data-id="${product.id}" class="add-to-cart-btn" id="add-to-cart-btn">Add to cart</button>
    </div>`,
    )
    .join("");
}

function addToCart(productId) {
  // Find the product by ID
  const product = products.find((prod) => prod.id === Number(productId));
  if (!product) return;

  // Check if item is already in the cart
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  updateCartUI();

  // Show success feedback
  showCartToast(product.name);
}

// Using Event Delegation to handle clicks on dynamically created addToCart buttons
productsGrid.addEventListener("click", (e) => {
  const button = e.target.closest(".add-to-cart-btn");

  if (!button) return;

  const id = button.dataset.id;
  addToCart(id);
});

function calculateCartTotals() {
  let totalPrice = 0;
  let totalItemsCount = 0;

  cart.forEach((item) => {
    // Calculate totals for each cart item
    totalPrice += item.price * item.quantity;
    totalItemsCount += item.quantity;
  });

  // Update the total price and cart badge
  cartTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;
  cartcountElement.textContent = totalItemsCount;
}

function updateCartUI() {
  // Clear the previous cart display
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p class="empty-message">Your cart is empty.</p>`;
  } else {
    cart.forEach((item) => {
      // Create the cart item element
      const itemElement = document.createElement("div");
      itemElement.classList.add("cart-item");

      itemElement.innerHTML = `
        <div class="item-details">
          <h4>${item.name}</h4>
          <p>$${item.price.toFixed(2)} × ${item.quantity}</p>
          <p>Subtotal: $${(item.price * item.quantity).toFixed(2)}</p>
        </div>

        <div class="cart-item-controls">
          <button
            class="quantity-btn decrease-btn"
            data-id="${item.id}"
            aria-label="Decrease ${item.name} quantity"
          >
            −
          </button>

          <span class="item-quantity">${item.quantity}</span>

          <button
            class="quantity-btn increase-btn"
            data-id="${item.id}"
            aria-label="Increase ${item.name} quantity"
            >+</button>
        </div>

        <button
            class="remove-item-btn"
            data-id="${item.id}"
            aria-label="Remove ${item.name} from cart"
        >
            <i class="fa-solid fa-trash"></i>
        </button>
      `;

      // Add the item to the cart container
      cartItemsContainer.appendChild(itemElement);
    });
  }

  // Update the total price and cart badge
  calculateCartTotals();
}

cartItemsContainer.addEventListener("click", (e) => {
  const button = e.target.closest("button");

  if (!button) return;

  const id = Number(button.dataset.id);

  // Increase quantity
  if (button.classList.contains("increase-btn")) {
    const item = cart.find((item) => item.id === id);

    if (item) item.quantity += 1;
  }

  // Decrease quantity
  if (button.classList.contains("decrease-btn")) {
    const item = cart.find((item) => item.id === id);

    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        // Remove item when quantity reaches zero
        cart = cart.filter((item) => item.id !== id);
      }
    }
  }

  // Remove item completely
  if (button.classList.contains("remove-item-btn")) {
    cart = cart.filter((item) => item.id !== id);
  }

  saveCart();
  // Refresh the cart display
  updateCartUI();
});

document.querySelectorAll("[data-category]").forEach((link) => {
  link.addEventListener("click", () => {
    categoryFilter.value = link.dataset.category;
    updateProducts();
  });
});

// Event Listeners
searchInput.addEventListener("input", updateProducts);
categoryFilter.addEventListener("change", updateProducts);
sortSelect.addEventListener("change", updateProducts);

// Initial Load
document.addEventListener("DOMContentLoaded", () => {
  updateProducts();
  loadCart();

  // Display the current year in the footer
  document.getElementById("footer-year").textContent = new Date().getFullYear();
});

// SELECT ORDER CONFIRMATION ELEMENTS
const orderOverlay = document.getElementById("order-overlay");
const closeOrderPopup = document.getElementById("close-order-popup");
const continueShoppingBtn = document.getElementById("continue-shopping-btn");

// OPEN ORDER CONFIRMATION POPUP
function showOrderConfirmation() {
  // Do not confirm an empty cart
  if (cart.length === 0) {
    alert("Your cart is empty. Please add a product first.");
    return;
  }

  closeCart(); // Close the cart drawer if it's open

  // Show the popup
  orderOverlay.classList.add("show");
  document.body.classList.add("order-popup-open");

  // Clear the cart for this demo
  cart = [];
  saveCart();
  updateCartUI();
}

// CLOSE ORDER CONFIRMATION POPUP
function hideOrderConfirmation() {
  orderOverlay.classList.remove("show");
  document.body.classList.remove("order-popup-open");
  closeCart(); // Close the cart drawer if it's open
}

// Close with the X button
closeOrderPopup.addEventListener("click", hideOrderConfirmation);

// Close with Continue Shopping
continueShoppingBtn.addEventListener("click", () => {
  hideOrderConfirmation();

  // Optional: scroll back to the products section
  document.getElementById("products")?.scrollIntoView({
    behavior: "smooth",
  });
});

// Close when the user clicks the overlay itself
orderOverlay.addEventListener("click", (e) => {
  if (e.target === orderOverlay) {
    hideOrderConfirmation();
  }
});

// Close with the Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && orderOverlay.classList.contains("show")) {
    hideOrderConfirmation();
  }
});

// Checkout Button Functionality
const checkoutBtn = document.getElementById("checkout-btn");

checkoutBtn.addEventListener("click", showOrderConfirmation);
