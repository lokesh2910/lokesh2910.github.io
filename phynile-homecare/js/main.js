// Product Data with correct pricing from the table
const products = [
    // Phynile Air Fresheners - 1L
    {
        id: 1,
        name: "Phynile Lemon Air Freshener",
        category: "phynile",
        mrp: 90,
        price: 50,
        wholesalePrice: 40,
        packSize: "1L",
        image: "images/phynile_lemon_1l.png",
        description: "Citrus lemon freshness"
    },
    {
        id: 2,
        name: "Phynile Lavender Air Freshener",
        category: "phynile",
        mrp: 90,
        price: 50,
        wholesalePrice: 40,
        packSize: "1L",
        image: "images/phynile_lavender_1l.png",
        description: "Long-lasting lavender fragrance"
    },
    {
        id: 3,
        name: "Phynile Sandal Air Freshener",
        category: "phynile",
        mrp: 90,
        price: 50,
        wholesalePrice: 40,
        packSize: "1L",
        image: "images/phynile_sandal_5l.png", // Using 5L image as placeholder
        description: "Premium sandalwood fragrance"
    },
    {
        id: 4,
        name: "Phynile Mogara Air Freshener",
        category: "phynile",
        mrp: 90,
        price: 50,
        wholesalePrice: 40,
        packSize: "1L",
        image: "images/phynile_mogara_1l.png",
        description: "Traditional mogra fragrance"
    },
    {
        id: 5,
        name: "Phynile Rose Air Freshener",
        category: "phynile",
        mrp: 90,
        price: 50,
        wholesalePrice: 40,
        packSize: "1L",
        image: "images/phynile_rose_1l.png",
        description: "Fresh rose fragrance"
    },
    // Phynile Air Fresheners - 5L
    {
        id: 6,
        name: "Phynile Lemon Air Freshener",
        category: "phynile",
        mrp: 365,
        price: 200,
        wholesalePrice: 180,
        packSize: "5L",
        image: "images/phynile_lemon_5l.png",
        description: "Citrus lemon freshness"
    },
    {
        id: 7,
        name: "Phynile Lavender Air Freshener",
        category: "phynile",
        mrp: 365,
        price: 200,
        wholesalePrice: 180,
        packSize: "5L",
        image: "images/phynile_lavender_5l.png",
        description: "Long-lasting lavender fragrance"
    },
    {
        id: 8,
        name: "Phynile Sandal Air Freshener",
        category: "phynile",
        mrp: 365,
        price: 200,
        wholesalePrice: 180,
        packSize: "5L",
        image: "images/phynile_sandal_5l.png",
        description: "Premium sandalwood fragrance"
    },
    {
        id: 9,
        name: "Phynile Mogara Air Freshener",
        category: "phynile",
        mrp: 365,
        price: 200,
        wholesalePrice: 180,
        packSize: "5L",
        image: "images/phynile_mogara_5l.png",
        description: "Traditional mogra fragrance"
    },
    {
        id: 10,
        name: "Phynile Rose Air Freshener",
        category: "phynile",
        mrp: 365,
        price: 200,
        wholesalePrice: 180,
        packSize: "5L",
        image: "images/phynile_rose_5l.png",
        description: "Fresh rose fragrance"
    },
    // Sunny Products
    {
        id: 11,
        name: "Sunny Floor Cleaner",
        category: "sunny",
        mrp: 65,
        price: 66,
        wholesalePrice: 60,
        packSize: "200ml",
        image: "images/sunny_200ml.png",
        description: "Effective floor cleaner"
    },
    {
        id: 12,
        name: "Sunny Floor Cleaner",
        category: "sunny",
        mrp: 150,
        price: 162,
        wholesalePrice: 145,
        packSize: "500ml",
        image: "images/sunny_500ml.png",
        description: "Effective floor cleaner"
    },
    {
        id: 13,
        name: "Sunny Floor Cleaner",
        category: "sunny",
        mrp: 275,
        price: 320,
        wholesalePrice: 290,
        packSize: "1L",
        image: "images/sunny_1l.png",
        description: "Effective floor cleaner"
    },
    {
        id: 14,
        name: "Sunny Floor Cleaner",
        category: "sunny",
        mrp: 1200,
        price: 1580,
        wholesalePrice: 1420,
        packSize: "5L",
        image: "images/sunny_1l.png", // Using 1L image as fallback
        description: "Economical floor cleaner"
    },
    // Acid Cleaners
    {
        id: 15,
        name: "Acid Cleaner",
        category: "bathroom",
        mrp: 70,
        price: 40,
        wholesalePrice: 35,
        packSize: "1L",
        image: "images/Bathroom_Cleaner_500ml.png", // Using bathroom cleaner image
        description: "Powerful acid cleaner"
    },
    {
        id: 16,
        name: "Acid Cleaner",
        category: "bathroom",
        mrp: 350,
        price: 140,
        wholesalePrice: 125,
        packSize: "5L",
        image: "images/Bathroom_Cleaner_500ml.png", // Using bathroom cleaner image
        description: "Economical acid cleaner"
    },
    // Dish Wash Products
    {
        id: 17,
        name: "Dish Wash Pouch",
        category: "dish",
        mrp: 80,
        price: 76,
        wholesalePrice: 68,
        packSize: "1L",
        image: "https://via.placeholder.com/300x200?text=Dish+Wash+1L",
        description: "Dish wash liquid pouch"
    },
    {
        id: 18,
        name: "Dish Wash Pouch",
        category: "dish",
        mrp: 350,
        price: 240,
        wholesalePrice: 220,
        packSize: "5L",
        image: "https://via.placeholder.com/300x200?text=Dish+Wash+5L",
        description: "Economical dish wash pouch"
    },
    {
        id: 19,
        name: "Dish Wash Bottle",
        category: "dish",
        mrp: 98,
        price: 84,
        wholesalePrice: 75,
        packSize: "500ml",
        image: "https://via.placeholder.com/300x200?text=Dish+Wash+Bottle",
        description: "Dish wash in bottle"
    },
    // Toilet Cleaners
    {
        id: 20,
        name: "Toilet Cleaner Harpic",
        category: "toilet",
        mrp: 45,
        price: 56,
        wholesalePrice: 50,
        packSize: "250ml",
        image: "images/toilet_cleaner_harpic_250ml.png",
        description: "Powerful toilet cleaner"
    },
    {
        id: 21,
        name: "Toilet Cleaner Harpic",
        category: "toilet",
        mrp: 88,
        price: 70,
        wholesalePrice: 63,
        packSize: "500ml",
        image: "images/toilet_cleaner_harpic_500ml.png",
        description: "Powerful toilet cleaner"
    },
    {
        id: 22,
        name: "Toilet Cleaner Harpic",
        category: "toilet",
        mrp: 700,
        price: 320,
        wholesalePrice: 290,
        packSize: "5L",
        image: "images/toilet_cleaner_harpic_5l.png",
        description: "Economical toilet cleaner"
    },
    // Hand Wash Products
    {
        id: 23,
        name: "Hand Wash Rose",
        category: "hand",
        mrp: 105,
        price: 90,
        wholesalePrice: 81,
        packSize: "500ml",
        image: "images/Hand_Wash_Products.png",
        description: "Rose fragrance hand wash"
    },
    {
        id: 24,
        name: "Hand Wash Neem",
        category: "hand",
        mrp: 105,
        price: 90,
        wholesalePrice: 81,
        packSize: "500ml",
        image: "images/Hand_Wash_Products_1.png",
        description: "Neem antibacterial hand wash"
    },
    {
        id: 25,
        name: "Hand Wash Lemon",
        category: "hand",
        mrp: 105,
        price: 90,
        wholesalePrice: 81,
        packSize: "500ml",
        image: "images/Hand_Wash_Products.png", // Using same image
        description: "Lemon fresh hand wash"
    },
    {
        id: 26,
        name: "Hand Wash Rose",
        category: "hand",
        mrp: 200,
        price: 150,
        wholesalePrice: 135,
        packSize: "1L",
        image: "images/Hand_Wash_Products.png", // Using same image
        description: "Rose fragrance hand wash"
    },
    {
        id: 27,
        name: "Hand Wash Neem",
        category: "hand",
        mrp: 200,
        price: 150,
        wholesalePrice: 135,
        packSize: "1L",
        image: "images/Hand_Wash_Products_1.png",
        description: "Neem antibacterial hand wash"
    },
    {
        id: 28,
        name: "Hand Wash Lemon",
        category: "hand",
        mrp: 200,
        price: 150,
        wholesalePrice: 135,
        packSize: "1L",
        image: "images/Hand_Wash_Products.png", // Using same image
        description: "Lemon fresh hand wash"
    },
    {
        id: 29,
        name: "Hand Wash",
        category: "hand",
        mrp: 700,
        price: 440,
        wholesalePrice: 400,
        packSize: "5L",
        image: "images/Hand_Wash_Products.png", // Using same image
        description: "Economical hand wash"
    },
    {
        id: 30,
        name: "Hand Wash Refill",
        category: "hand",
        mrp: 0, // Not specified in table
        price: 84,
        wholesalePrice: 75,
        packSize: "500ml",
        image: "images/Hand_Wash_Products_1.png",
        description: "Hand wash refill pack"
    },
    // Other Products
    {
        id: 31,
        name: "Kolin Cleaner",
        category: "other",
        mrp: 88,
        price: 90,
        wholesalePrice: 81,
        packSize: "500ml",
        image: "https://via.placeholder.com/300x200?text=Kolin+Cleaner",
        description: "Kolin multipurpose cleaner"
    },
    {
        id: 32,
        name: "Drainx Unblocker",
        category: "other",
        mrp: 30,
        price: 24,
        wholesalePrice: 22,
        packSize: "1 Unit",
        image: "https://via.placeholder.com/300x200?text=Drainx",
        description: "Drain unblocking solution"
    },
    {
        id: 33,
        name: "Bhaya Powder",
        category: "other",
        mrp: 30,
        price: 24,
        wholesalePrice: 22,
        packSize: "200g",
        image: "https://via.placeholder.com/300x200?text=Bhaya+Powder",
        description: "Cleaning powder"
    },
    {
        id: 34,
        name: "Dambar Golya",
        category: "other",
        mrp: 50,
        price: 40,
        wholesalePrice: 36,
        packSize: "100g",
        image: "https://via.placeholder.com/300x200?text=Dambar+Golya",
        description: "Cleaning balls"
    }
];

// Bulk order products (same products but with different display)
const bulkProducts = [...products];

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const WHOLESALE_THRESHOLD = 7000;

// DOM Elements
const productsContainer = document.getElementById('products-container');
const categoryDropdownBtn = document.getElementById('category-dropdown-btn');
const categoryDropdownContent = document.getElementById('category-dropdown-content');
const categoryOptions = document.querySelectorAll('.category-option');
const bulkCategoryFilter = document.getElementById('bulk-category-filter');
const bulkTableBody = document.getElementById('bulk-table-body');
const floatingCartBtn = document.getElementById('floating-cart-btn');
const floatingCartCount = document.getElementById('floating-cart-count');
const cartModal = document.getElementById('cart-modal');
const closeCartBtn = document.getElementById('close-cart');
const cartBody = document.getElementById('cart-body');
const cartSummary = document.getElementById('cart-summary');
const continueShoppingBtn = document.getElementById('continue-shopping');
const checkoutBtn = document.getElementById('checkout-btn');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('nav');
const cartNotification = document.getElementById('cart-notification');
const contactForm = document.getElementById('contact-form');

// WhatsApp phone number (replace with your actual number)
const WHATSAPP_NUMBER = "9404361842"; // Replace with your WhatsApp number

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Load products
    renderProducts('all');
    renderBulkTable('all');
    
    // Load cart count
    updateCartCount();
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup mobile menu
    setupMobileMenu();
    
    // Setup category filter links
    setupCategoryLinks();
    
    // Update category dropdown options
    updateCategoryOptions();
});

// Update Category Options to match new categories
function updateCategoryOptions() {
    const categoryDropdownContent = document.getElementById('category-dropdown-content');
    categoryDropdownContent.innerHTML = `
        <div class="category-option active" data-category="all">All Products</div>
        <div class="category-option" data-category="phynile">Phynile Air Fresheners</div>
        <div class="category-option" data-category="sunny">Sunny Products</div>
        <div class="category-option" data-category="toilet">Toilet Cleaners</div>
        <div class="category-option" data-category="hand">Hand Wash</div>
        <div class="category-option" data-category="dish">Dish Wash</div>
        <div class="category-option" data-category="bathroom">Bathroom Cleaners</div>
        <div class="category-option" data-category="other">Other Products</div>
    `;
    
    // Reattach event listeners to new options
    document.querySelectorAll('.category-option').forEach(option => {
        option.addEventListener('click', handleCategorySelect);
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Category dropdown
    categoryDropdownBtn.addEventListener('click', toggleCategoryDropdown);
    
    // Close category dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!categoryDropdownBtn.contains(e.target) && !categoryDropdownContent.contains(e.target)) {
            categoryDropdownContent.classList.remove('active');
            categoryDropdownBtn.querySelector('i').className = 'fas fa-chevron-down';
        }
    });
    
    // Cart functionality
    floatingCartBtn.addEventListener('click', openCartModal);
    closeCartBtn.addEventListener('click', closeCartModal);
    continueShoppingBtn.addEventListener('click', closeCartModal);
    
    // Checkout button
    checkoutBtn.addEventListener('click', handleCheckout);
    
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    // Close cart modal when clicking outside
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            closeCartModal();
        }
    });
}

// Setup Mobile Menu
function setupMobileMenu() {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuBtn.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// Setup Category Links in Footer
function setupCategoryLinks() {
    document.querySelectorAll('[data-category]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            
            // Update dropdown
            updateCategoryDropdown(category);
            
            // Scroll to products section
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
            
            // Filter products
            renderProducts(category);
            
            // Filter bulk table
            renderBulkTable(category);
        });
    });
}

// Category Dropdown Functions
function toggleCategoryDropdown() {
    categoryDropdownContent.classList.toggle('active');
    const icon = categoryDropdownBtn.querySelector('i');
    icon.className = categoryDropdownContent.classList.contains('active') 
        ? 'fas fa-chevron-up' 
        : 'fas fa-chevron-down';
}

function handleCategorySelect(e) {
    const selectedCategory = e.target.getAttribute('data-category');
    
    // Update active state
    document.querySelectorAll('.category-option').forEach(option => {
        option.classList.remove('active');
    });
    e.target.classList.add('active');
    
    // Update dropdown button text
    categoryDropdownBtn.querySelector('span').textContent = e.target.textContent;
    
    // Close dropdown
    categoryDropdownContent.classList.remove('active');
    categoryDropdownBtn.querySelector('i').className = 'fas fa-chevron-down';
    
    // Render products for selected category
    renderProducts(selectedCategory);
    
    // Render bulk table for selected category
    renderBulkTable(selectedCategory);
}

function updateCategoryDropdown(category) {
    // Update dropdown button text and active option
    let categoryText = 'All Products';
    if (category !== 'all') {
        const option = document.querySelector(`.category-option[data-category="${category}"]`);
        if (option) {
            categoryText = option.textContent;
        }
    }
    
    categoryDropdownBtn.querySelector('span').textContent = categoryText;
    
    // Update active state
    document.querySelectorAll('.category-option').forEach(option => {
        option.classList.remove('active');
        if (option.dataset.category === category) {
            option.classList.add('active');
        }
    });
}

// Render Products
function renderProducts(category) {
    productsContainer.innerHTML = '';
    
    // Filter products by category
    let filteredProducts = products;
    if (category !== 'all') {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    // Render each product
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const discount = product.mrp > 0 ? Math.round(((product.mrp - product.price) / product.mrp) * 100) : 0;
    const cartItem = cart.find(item => item.id === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;
    
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x200?text=Product+Image'">
            ${discount > 0 ? `<div class="discount-badge">Save ${discount}%</div>` : ''}
            ${product.mrp > 0 && product.price > product.mrp ? `<div class="discount-badge" style="background-color: #2196F3;">Premium</div>` : ''}
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <div class="product-meta">
                <span>${product.packSize}</span>
                <span>${product.description}</span>
            </div>
            <div class="product-price-container">
                ${product.mrp > 0 ? `
                <div class="price-row">
                    <span class="price-label">MRP:</span>
                    <span class="mrp-price">₹${product.mrp}</span>
                </div>
                ` : ''}
                <div class="price-row">
                    <span class="price-label">Our Price:</span>
                    <span class="current-price">₹${product.price}</span>
                </div>
            </div>
            <div class="product-actions">
                <div class="quantity-controls" data-product-id="${product.id}">
                    <button class="qty-btn minus-btn" ${quantity === 0 ? 'disabled' : ''}>-</button>
                    <span class="qty-value">${quantity}</span>
                    <button class="qty-btn plus-btn">+</button>
                </div>
                <button class="add-to-cart ${quantity > 0 ? 'in-cart' : ''}" data-product-id="${product.id}">
                    ${quantity > 0 ? '<i class="fas fa-check"></i> In Cart' : '<i class="fas fa-cart-plus"></i> Add to Cart'}
                </button>
                <div class="cart-status" id="status-${product.id}"></div>
            </div>
        </div>
    `;
    
    // Add event listeners to the card's buttons
    const minusBtn = card.querySelector('.minus-btn');
    const plusBtn = card.querySelector('.plus-btn');
    const addToCartBtn = card.querySelector('.add-to-cart');
    const quantityControls = card.querySelector('.quantity-controls');
    
    minusBtn.addEventListener('click', () => updateProductQuantity(product.id, -1));
    plusBtn.addEventListener('click', () => updateProductQuantity(product.id, 1));
    addToCartBtn.addEventListener('click', () => {
        if (quantity === 0) {
            updateProductQuantity(product.id, 1);
        }
    });
    
    // Add click event to whole quantity controls area
    quantityControls.addEventListener('click', (e) => {
        if (e.target.classList.contains('quantity-controls')) {
            updateProductQuantity(product.id, 1);
        }
    });
    
    return card;
}

// Render Bulk Table
function renderBulkTable(category) {
    bulkTableBody.innerHTML = '';
    
    // Filter products by category
    let filteredProducts = bulkProducts;
    if (category !== 'all') {
        filteredProducts = bulkProducts.filter(product => product.category === category);
    }
    
    // Group products by category for the bulk table
    const categories = [...new Set(filteredProducts.map(product => product.category))];
    
    categories.forEach(cat => {
        // Add category header
        const categoryHeader = document.createElement('tr');
        categoryHeader.className = 'category-section';
        categoryHeader.innerHTML = `
            <td colspan="6" class="category-header">
                ${getCategoryName(cat)}
            </td>
        `;
        bulkTableBody.appendChild(categoryHeader);
        
        // Add products for this category
        const categoryProducts = filteredProducts.filter(product => product.category === cat);
        categoryProducts.forEach(product => {
            const row = createBulkTableRow(product);
            bulkTableBody.appendChild(row);
        });
    });
    
    // Update bulk category filter buttons
    updateBulkCategoryFilter();
}

// Create Bulk Table Row
function createBulkTableRow(product) {
    const row = document.createElement('tr');
    
    row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.packSize}</td>
        <td class="price-cell">${product.mrp > 0 ? `₹${product.mrp}` : 'N/A'}</td>
        <td class="price-cell">₹${product.price}</td>
        <td class="price-cell wholesale-price">₹${product.wholesalePrice}</td>
        <td>
            <div class="bulk-table-actions">
                <input type="number" class="bulk-qty-input" min="0" value="0" data-product-id="${product.id}">
                <button class="btn" data-product-id="${product.id}">Add</button>
            </div>
        </td>
    `;
    
    // Add event listeners to bulk table row
    const addBtn = row.querySelector('.btn');
    const qtyInput = row.querySelector('.bulk-qty-input');
    
    addBtn.addEventListener('click', () => {
        const quantity = parseInt(qtyInput.value) || 0;
        if (quantity > 0) {
            updateProductQuantity(product.id, quantity);
            qtyInput.value = 0;
        }
    });
    
    return row;
}

// Update Bulk Category Filter
function updateBulkCategoryFilter() {
    // Get unique categories from bulk products
    const categories = ['all', ...new Set(bulkProducts.map(product => product.category))];
    
    bulkCategoryFilter.innerHTML = '';
    
    categories.forEach(cat => {
        const button = document.createElement('button');
        button.className = 'bulk-category-btn';
        button.textContent = getCategoryName(cat);
        button.dataset.category = cat;
        
        if (cat === 'all') {
            button.classList.add('active');
        }
        
        button.addEventListener('click', () => {
            // Update active state
            document.querySelectorAll('.bulk-category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            
            // Render bulk table for selected category
            renderBulkTable(cat);
            
            // Also update products grid category
            updateCategoryDropdown(cat);
            renderProducts(cat);
            
            // Scroll to bulk section
            document.getElementById('bulk').scrollIntoView({ behavior: 'smooth' });
        });
        
        bulkCategoryFilter.appendChild(button);
    });
}

// Helper function to get category display name
function getCategoryName(category) {
    const categoryNames = {
        'all': 'All Products',
        'phynile': 'Phynile Air Fresheners',
        'sunny': 'Sunny Products',
        'toilet': 'Toilet Cleaners',
        'hand': 'Hand Wash',
        'dish': 'Dish Wash',
        'bathroom': 'Bathroom Cleaners',
        'other': 'Other Products'
    };
    return categoryNames[category] || category;
}

// Cart Functions
function updateProductQuantity(productId, change) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Find existing cart item
    const cartItemIndex = cart.findIndex(item => item.id === productId);
    
    if (cartItemIndex > -1) {
        // Update existing item
        cart[cartItemIndex].quantity += change;
        
        // Remove item if quantity is 0 or less
        if (cart[cartItemIndex].quantity <= 0) {
            cart.splice(cartItemIndex, 1);
            showCartNotification(`${product.name} removed from cart`);
        } else {
            showCartNotification(`${product.name} quantity updated to ${cart[cartItemIndex].quantity}`);
        }
    } else if (change > 0) {
        // Add new item
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            wholesalePrice: product.wholesalePrice,
            packSize: product.packSize,
            image: product.image,
            quantity: change
        });
        showCartNotification(`${product.name} added to cart`);
    }
    
    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update UI
    updateCartCount();
    renderProducts(document.querySelector('.category-option.active').dataset.category);
    
    // Update cart modal if open
    if (cartModal.style.display === 'block') {
        renderCart();
    }
    
    // Show save animation if wholesale threshold is reached
    const total = calculateCartTotal();
    if (total >= WHOLESALE_THRESHOLD) {
        showWholesaleAppliedAnimation();
    }
}

// Update Cart Count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    floatingCartCount.textContent = totalItems;
    
    // Add animation when cart count changes
    if (totalItems > 0) {
        floatingCartCount.style.animation = 'none';
        setTimeout(() => {
            floatingCartCount.style.animation = 'pulse 0.5s ease-in-out';
        }, 10);
    }
}

// Open Cart Modal
function openCartModal() {
    cartModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    renderCart();
}

// Close Cart Modal
function closeCartModal() {
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Render Cart
function renderCart() {
    if (cart.length === 0) {
        cartBody.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products to your cart to get started!</p>
            </div>
        `;
        
        cartSummary.innerHTML = `
            <div>
                <h3>Cart Summary</h3>
                <p>Add items to see your total</p>
            </div>
            <div class="cart-total">₹0</div>
        `;
        
        return;
    }
    
    // Calculate totals
    const subtotal = calculateCartSubtotal();
    const wholesaleApplied = subtotal >= WHOLESALE_THRESHOLD;
    const total = calculateCartTotal();
    const savings = calculateCartSavings();
    
    // Render cart items
    cartBody.innerHTML = `
        <div class="cart-items">
            ${cart.map(item => createCartItemHTML(item)).join('')}
        </div>
    `;
    
    // Add event listeners to cart item buttons
    document.querySelectorAll('.cart-item').forEach(item => {
        const productId = parseInt(item.dataset.productId);
        const minusBtn = item.querySelector('.minus-btn');
        const plusBtn = item.querySelector('.plus-btn');
        const removeBtn = item.querySelector('.remove-item');
        
        minusBtn.addEventListener('click', () => updateProductQuantity(productId, -1));
        plusBtn.addEventListener('click', () => updateProductQuantity(productId, 1));
        removeBtn.addEventListener('click', () => {
            const cartItem = cart.find(item => item.id === productId);
            if (cartItem) {
                updateProductQuantity(productId, -cartItem.quantity);
            }
        });
    });
    
    // Render cart summary
    cartSummary.innerHTML = `
        <div>
            <h3>Cart Summary</h3>
            ${savings > 0 ? `<p>You save: ₹${savings}</p>` : ''}
            ${wholesaleApplied ? 
                `<div class="wholesale-applied">
                    <i class="fas fa-check-circle"></i> Wholesale rates applied!
                </div>` 
                : ''}
        </div>
        <div class="cart-total">₹${total}</div>
    `;
    
    // Add animation to total if wholesale was just applied
    if (wholesaleApplied) {
        const totalElement = cartSummary.querySelector('.cart-total');
        totalElement.style.animation = 'priceUpdate 0.5s ease-in-out';
        setTimeout(() => {
            totalElement.style.animation = '';
        }, 500);
    }
}

// Create Cart Item HTML
function createCartItemHTML(item) {
    const product = products.find(p => p.id === item.id);
    const pricePerItem = calculateItemPrice(item);
    const total = pricePerItem * item.quantity;
    
    return `
        <div class="cart-item" data-product-id="${item.id}">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/100x100?text=Product'">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${pricePerItem} each</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus-btn">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn plus-btn">+</button>
                </div>
            </div>
            <div class="cart-item-total">₹${total}</div>
            <button class="remove-item" title="Remove item">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
}

// Calculate Cart Totals
function calculateCartSubtotal() {
    return cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + (product.price * item.quantity);
    }, 0);
}

function calculateCartTotal() {
    const subtotal = calculateCartSubtotal();
    const wholesaleApplied = subtotal >= WHOLESALE_THRESHOLD;
    
    if (wholesaleApplied) {
        return cart.reduce((sum, item) => {
            const product = products.find(p => p.id === item.id);
            return sum + (product.wholesalePrice * item.quantity);
        }, 0);
    }
    
    return subtotal;
}

function calculateCartSavings() {
    const mrpTotal = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + (product.mrp * item.quantity);
    }, 0);
    
    const finalTotal = calculateCartTotal();
    
    return mrpTotal - finalTotal;
}

function calculateItemPrice(item) {
    const subtotal = calculateCartSubtotal();
    const product = products.find(p => p.id === item.id);
    
    if (subtotal >= WHOLESALE_THRESHOLD) {
        return product.wholesalePrice;
    }
    
    return product.price;
}

// Show Cart Notification
function showCartNotification(message) {
    cartNotification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    cartNotification.style.display = 'flex';
    cartNotification.style.animation = 'slideInRight 0.3s ease-out';
    
    setTimeout(() => {
        cartNotification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            cartNotification.style.display = 'none';
        }, 300);
    }, 3000);
}

// Show Wholesale Applied Animation
function showWholesaleAppliedAnimation() {
    // Create animation container
    const animationContainer = document.createElement('div');
    animationContainer.className = 'save-animation-container';
    animationContainer.id = 'wholesale-animation';
    
    // Create wipe animation
    const wipe = document.createElement('div');
    wipe.className = 'wipe-animation';
    
    // Create save message
    const saveMessage = document.createElement('div');
    saveMessage.className = 'save-message';
    saveMessage.innerHTML = '<i class="fas fa-trophy"></i> Wholesale Applied!';
    
    // Add to container
    animationContainer.appendChild(wipe);
    animationContainer.appendChild(saveMessage);
    
    // Add to body
    document.body.appendChild(animationContainer);
    
    // Animate wipe
    wipe.style.animation = 'wipeIn 1s ease-in-out';
    
    // Animate message
    saveMessage.style.animation = 'saveMessageIn 2s ease-in-out';
    
    // Remove after animation
    setTimeout(() => {
        animationContainer.remove();
    }, 2000);
}

// Generate WhatsApp Message
function generateWhatsAppMessage() {
    let message = "*📦 Order Details - Phynile HomeCare*\n\n";
    message += "*Order Summary:*\n";
    
    cart.forEach(item => {
        const pricePerItem = calculateItemPrice(item);
        const total = pricePerItem * item.quantity;
        message += `• ${item.name} (${item.packSize}) - ${item.quantity} x ₹${pricePerItem} = ₹${total}\n`;
    });
    
    const totalAmount = calculateCartTotal();
    const wholesaleApplied = calculateCartSubtotal() >= WHOLESALE_THRESHOLD;
    
    message += `\n*Subtotal:* ₹${calculateCartSubtotal()}`;
    if (wholesaleApplied) {
        message += `\n*Wholesale Discount Applied!*`;
        message += `\n*Final Total:* ₹${totalAmount}`;
    } else {
        message += `\n*Final Total:* ₹${totalAmount}`;
    }
    
    message += `\n\n*Customer Details:*\n`;
    message += `Name: \n`;
    message += `Phone: \n`;
    message += `Address: \n\n`;
    message += `Please provide your details to confirm the order.`;
    
    return encodeURIComponent(message);
}

// Handle Checkout - Open WhatsApp
function handleCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = calculateCartTotal();
    const wholesaleApplied = calculateCartSubtotal() >= WHOLESALE_THRESHOLD;
    
    // Ask for confirmation before sending to WhatsApp
    let confirmMessage = `Proceed to WhatsApp to complete your order?\n\n`;
    cart.forEach(item => {
        const pricePerItem = calculateItemPrice(item);
        const itemTotal = pricePerItem * item.quantity;
        confirmMessage += `${item.name} (${item.packSize}) x ${item.quantity}: ₹${itemTotal}\n`;
    });
    
    confirmMessage += `\nTotal: ₹${total}`;
    if (wholesaleApplied) {
        confirmMessage += ` (Wholesale rates applied)`;
    }
    
    if (confirm(confirmMessage)) {
        // Generate WhatsApp message
        const message = generateWhatsAppMessage();
        
        // WhatsApp API URL
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');
        
        // Optionally clear cart after sending to WhatsApp
        // cart = [];
        // localStorage.setItem('cart', JSON.stringify(cart));
        // updateCartCount();
        // renderCart();
        // closeCartModal();
    }
}

// Handle Contact Form Submission
function handleContactSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    // In a real application, this would send data to a server
    // For now, we'll show a confirmation message
    alert(`Thank you, ${name}! Your message has been received. We will contact you at ${email} or ${phone} within 24 hours.`);
    
    // Reset form
    e.target.reset();
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip for category links that have their own handlers
        if (this.hasAttribute('data-category')) return;
        
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add WhatsApp order button functionality
function addWhatsAppOrderButton() {
    // Check if we're on mobile for direct WhatsApp
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    // Update footer WhatsApp link to send order template
    const whatsappLinks = document.querySelectorAll('a[href*="whatsapp"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (cart.length > 0) {
                e.preventDefault();
                const message = generateWhatsAppMessage();
                const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
                window.open(whatsappUrl, '_blank');
            }
        });
    });
}

// Initialize WhatsApp button on load
document.addEventListener('DOMContentLoaded', addWhatsAppOrderButton);
