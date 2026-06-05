// ===================================
// LTL Creations - Main Script
// ===================================

// Product Database
const PRODUCTS = [
  {
    id: 1,
    name: 'La nouvelle de Minecraft',
    price: 0.99,
    description: "Une terrible nouvelle dans l'ender",
    image: '../assets/images/1.jpg',
    category: 'Bandes dessinées'
  },
  {
    id: 2,
    name: "Sauteur : L'aventure des bleros",
    price: 0.99,
    description: 'Le premier hors série',
    image: '../assets/images/2.jpg',
    category: 'Bandes dessinées'
  },
  {
    id: 3,
    name: 'Sauteur : tome 2',
    price: 0.99,
    description: 'Le tome 2 des Sauteur',
    image: '../assets/images/3.jpg',
    category: 'Bandes dessinées'
  },
  {
    id: 4,
    name: 'Minecraft : K-Pop V-C Sauteur tome 1',
    price: 0.99,
    description: 'Le premier de tout',
    image: '../assets/images/4.jpg',
    category: 'Bandes dessinées'
  },
  {
    id: 5,
    name: 'La maison de Steve',
    price: 0.99,
    description: 'Tout est dans le titre',
    image: '../assets/images/5.jpg',
    category: 'Bandes dessinées'
  },
  {
    id: 6,
    name: 'Minecraft',
    price: 0.99,
    description: 'Le personne bonusse',
    image: '../assets/images/6.jpg',
    category: 'Bandes dessinées'
  },
  {
    id: 7,
    name: "Minecraft : L'intégrale du tome 2",
    price: 0.99,
    description: "Tome 2 jusqu'au bout",
    image: '../assets/images/7.jpg',
    category: 'Bandes dessinées'
  },
  {
    id: 8,
    name: 'Tome 2 : à suivre',
    price: 0.99,
    description: 'La suite du tome 2',
    image: '../assets/images/8.jpg',
    category: 'Bandes dessinées'
  },  {
    id: 9,
    name: 'Minecraft : tome 3',
    price: 0.99,
    description: 'Tome 3 : Minecraft',
    image: '../assets/images/9.jpg',
    category: 'Bandes dessinées'
  },
  {
    id: 10,
    name: 'Grass Block',
    price: 19.99,
    description: 'Authentic minecraft grass block replica',
    image: '../assets/images/10.jpg',
    category: 'Portable'
  },
  {
    id: 11,
    name: 'Diamond Pickaxe',
    price: 49.99,
    description: 'Legendary crafted diamond pickaxe',
    image: '../assets/images/11.jpg',
    category: 'Portable'
  },
  {
    id: 12,
    name: 'OAK Log',
    price: 14.99,
    description: 'Rustic oak wood log block',
    image: '../assets/images/12.jpg',
    category: 'Portable'
  },
  {
    id: 13,
    name: 'Stone Brick',
    price: 16.99,
    description: 'Durable stone brick collection',
    image: '../assets/images/13.jpg',
    category: 'Portable'
  },
  {
    id: 14,
    name: 'Glowstone Light',
    price: 34.99,
    description: 'Ambient glowstone lamp fixture',
    image: '../assets/images/14.jpg',
    category: 'Portable'
  },
  {
    id: 15,
    name: 'Creeper Head',
    price: 39.99,
    description: 'Collectible creeper head statue',
    image: '../assets/images/15.jpg',
    category: 'Portable'
  },
  {
    id: 16,
    name: 'Nether Portal',
    price: 59.99,
    description: 'LED-lit nether portal sculpture',
    image: '../assets/images/16.jpg',
    category: 'Portable'
  }
];

// ===================================
// Cart Management
// ===================================

class ShoppingCart {
  constructor() {
    this.items = this.loadCart();
  }

  loadCart() {
    const saved = localStorage.getItem('ltl_cart');
    return saved ? JSON.parse(saved) : [];
  }

  saveCart() {
    localStorage.setItem('ltl_cart', JSON.stringify(this.items));
    this.updateCartCount();
  }

  addItem(product, quantity = 1) {
    const existingItem = this.items.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        ...product,
        quantity: quantity
      });
    }
    
    this.saveCart();
    this.showNotification(`${product.name} added to cart!`);
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.saveCart();
  }

  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeItem(productId);
      } else {
        item.quantity = quantity;
      }
      this.saveCart();
    }
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  getItemCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  updateCartCount() {
    const count = this.getItemCount();
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
      if (count > 0) {
        cartCountElement.textContent = count;
        cartCountElement.style.display = 'flex';
      } else {
        cartCountElement.style.display = 'none';
      }
    }
  }

  clear() {
    this.items = [];
    this.saveCart();
  }

  showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      background-color: #5cb85c;
      color: white;
      padding: 16px 24px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 10000;
      font-weight: 500;
      animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}

// Global cart instance
const cart = new ShoppingCart();

// ===================================
// Product Display
// ===================================

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <div class="product-image"><img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 4px;"></div>
    <div class="product-info">
      <h3 class="product-name">${product.name}</h3>
      <p class="product-description">${product.description}</p>
      <div class="product-price">$${product.price.toFixed(2)}</div>
      <div class="product-card-actions">
        <button class="btn-small btn-add" onclick="cart.addItem(${JSON.stringify(product).replace(/"/g, '&quot;')})">
          Add to Cart
        </button>
        <a href="../pages/product-detail.html?id=${product.id}" class="btn-small btn-details">
          Details
        </a>
      </div>
    </div>
  `;
  return card;
}

function displayProducts(products = PRODUCTS, containerId = 'featured-grid') {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = '';
  products.forEach(product => {
    container.appendChild(createProductCard(product));
  });
}

// ===================================
// Navigation Helpers
// ===================================

function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === parseInt(id));
}

// ===================================
// Page-Specific Functions
// ===================================

// Product Detail Page
function initProductDetailPage() {
  const productId = getQueryParam('id');
  if (!productId) {
    window.location.href = '../pages/products.html';
    return;
  }

  const product = getProductById(productId);
  if (!product) {
    window.location.href = '../pages/products.html';
    return;
  }

  // Update page title
  document.title = `${product.name} - LTL Creations`;

  // Display product info
  const container = document.getElementById('product-detail-content');
  if (container) {
    container.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; max-width: 900px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #5cb85c 0%, #48b518 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; height: 400px; overflow: hidden;">
          <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div>
          <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">${product.name}</h1>
          <p style="font-size: 1.125rem; color: #6e6e73; margin-bottom: 2rem; line-height: 1.8;">
            ${product.description}
          </p>
          <div style="font-size: 2rem; font-weight: 700; color: #5cb85c; margin-bottom: 2rem;">
            $${product.price.toFixed(2)}
          </div>
          
          <div style="margin-bottom: 2rem;">
            <label style="display: block; font-weight: 500; margin-bottom: 0.5rem;">Quantity:</label>
            <input type="number" id="quantity-input" min="1" value="1" style="width: 100px; padding: 0.5rem; border: 1px solid #e5e5e7; border-radius: 4px;">
          </div>
          
          <button onclick="addToCartDetail('${product.id}')" style="background-color: #5cb85c; color: white; padding: 1rem 2rem; border: none; border-radius: 4px; font-size: 1rem; font-weight: 500; cursor: pointer; margin-bottom: 1rem; width: 100%;">
            Add to Cart
          </button>
          
          <a href="products.html" style="display: block; padding: 1rem 2rem; border: 1px solid #e5e5e7; border-radius: 4px; text-align: center; text-decoration: none; color: #1d1d1f; transition: all 0.2s;">
            Continue Shopping
          </a>
        </div>
      </div>
    `;
  }
}

function addToCartDetail(productId) {
  const quantity = parseInt(document.getElementById('quantity-input').value) || 1;
  const product = getProductById(productId);
  if (product) {
    cart.addItem(product, quantity);
  }
}

// Cart Page
function initCartPage() {
  const cartContainer = document.getElementById('cart-items');
  const cartSummary = document.getElementById('cart-summary');

  if (!cartContainer) return;

  if (cart.items.length === 0) {
    cartContainer.innerHTML = `
      <div style="text-align: center; padding: 3rem;">
        <p style="font-size: 1.125rem; color: #6e6e73; margin-bottom: 1.5rem;">Your cart is empty</p>
        <a href="products.html" class="btn btn-primary">Continue Shopping</a>
      </div>
    `;
    cartSummary.innerHTML = '';
    return;
  }

  cartContainer.innerHTML = cart.items.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <h3>${item.name}</h3>
        <p style="color: #6e6e73; font-size: 0.875rem;">$${item.price.toFixed(2)} each</p>
      </div>
      <div style="display: flex; align-items: center; gap: 1rem;">
        <input type="number" min="1" value="${item.quantity}" 
          onchange="cart.updateQuantity(${item.id}, this.value); initCartPage();" 
          style="width: 60px; padding: 0.5rem; border: 1px solid #e5e5e7; border-radius: 4px;">
        <div class="cart-item-price" style="min-width: 80px;">$${(item.price * item.quantity).toFixed(2)}</div>
        <button class="remove-btn" onclick="cart.removeItem(${item.id}); initCartPage();">✕</button>
      </div>
    </div>
  `).join('');

  const total = cart.getTotal();
  cartSummary.innerHTML = `
    <div class="cart-summary">
      <div class="summary-row">
        <span>Subtotal:</span>
        <span>$${total.toFixed(2)}</span>
      </div>
      <div class="summary-row">
        <span>Shipping:</span>
        <span>Free</span>
      </div>
      <div class="summary-row">
        <span>Tax:</span>
        <span>$${(total * 0.1).toFixed(2)}</span>
      </div>
      <div class="summary-row summary-total">
        <span>Total:</span>
        <span>$${(total * 1.1).toFixed(2)}</span>
      </div>
      <button onclick="window.location.href='checkout.html'" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">
        Proceed to Checkout
      </button>
      <a href="products.html" class="btn btn-secondary" style="width: 100%; margin-top: 0.5rem; display: block; text-decoration: none;">
        Continue Shopping
      </a>
    </div>
  `;
}

// Checkout Page
function initCheckoutPage() {
  if (cart.items.length === 0) {
    window.location.href = 'products.html';
    return;
  }

  const orderSummary = document.getElementById('order-summary');
  if (orderSummary) {
    const total = cart.getTotal();
    orderSummary.innerHTML = cart.items.map(item => `
      <div class="summary-row">
        <span>${item.name} x${item.quantity}</span>
        <span>$${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    `).join('') + `
      <div class="summary-row summary-total">
        <span>Total:</span>
        <span>$${(total * 1.1).toFixed(2)}</span>
      </div>
    `;
  }
}

function submitCheckout(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;

  if (!name || !email || !address) {
    alert('Please fill in all fields');
    return;
  }

  // Store order
  const order = {
    id: Date.now(),
    customer: { name, email, address },
    items: cart.items,
    total: cart.getTotal() * 1.1,
    date: new Date().toLocaleDateString()
  };

  localStorage.setItem('ltl_last_order', JSON.stringify(order));
  cart.clear();
  
  window.location.href = 'confirmation.html?orderId=' + order.id;
}

function initConfirmationPage() {
  const orderData = localStorage.getItem('ltl_last_order');
  if (!orderData) {
    window.location.href = '../index.html';
    return;
  }

  const order = JSON.parse(orderData);
  const confirmationContent = document.getElementById('confirmation-content');

  if (confirmationContent) {
    confirmationContent.innerHTML = `
      <div style="text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">✓</div>
        <h1>Order Confirmed!</h1>
        <p style="color: #6e6e73; margin: 1rem 0;">Thank you for your purchase</p>
        
        <div style="background: #f5f5f7; padding: 2rem; border-radius: 8px; margin: 2rem 0; text-align: left;">
          <h3>Order Details</h3>
          <p><strong>Order ID:</strong> #${order.id}</p>
          <p><strong>Name:</strong> ${order.customer.name}</p>
          <p><strong>Email:</strong> ${order.customer.email}</p>
          <p><strong>Total:</strong> $${order.total.toFixed(2)}</p>
          
          <h4 style="margin-top: 1.5rem;">Items:</h4>
          <ul style="list-style: none; padding: 0;">
            ${order.items.map(item => `
              <li style="padding: 0.5rem 0; border-bottom: 1px solid #e5e5e7;">
                ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}
              </li>
            `).join('')}
          </ul>
        </div>
        
        <a href="../index.html" class="btn btn-primary">Back to Home</a>
      </div>
    `;
  }

  localStorage.removeItem('ltl_last_order');
}

// ===================================
// Contact Form
// ===================================

function submitContactForm(event) {
  event.preventDefault();
  
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const message = document.getElementById('contact-message').value;

  if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
  }

  // Save contact message to localStorage
  const messages = JSON.parse(localStorage.getItem('ltl_messages') || '[]');
  messages.push({
    name,
    email,
    message,
    date: new Date().toLocaleString()
  });
  localStorage.setItem('ltl_messages', JSON.stringify(messages));

  document.getElementById('contact-form').reset();
  cart.showNotification('Thank you! We received your message.');
}

// ===================================
// Initialization
// ===================================

document.addEventListener('DOMContentLoaded', function() {
  // Update cart count on page load
  cart.updateCartCount();

  // Product filtering on products page
  const filterButtons = document.querySelectorAll('[data-filter]');
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = this.dataset.filter;
      
      // Update active button
      filterButtons.forEach(btn => btn.style.opacity = '0.6');
      this.style.opacity = '1';
      
      // Filter and display products
      if (category === 'all') {
        displayProducts(PRODUCTS);
      } else {
        const filtered = PRODUCTS.filter(p => p.category === category);
        displayProducts(filtered);
      }
    });
  });

  // Add animation styles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(400px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
});
