// Product Data with ALL images and correct selling prices
const products = [
    // Phynile s - 1L
    {
        id: 1,
        name: "Phynile Lemon ",
        category: "phynile",
        mrp: 90,
        price: 50,
        wholesalePrice: 40,
        packSize: "1L",
        image: "Images/phynile_lemon_1l.png",
        description: "Citrus lemon freshness"
    },
    {
        id: 2,
        name: "Phynile Lavender ",
        category: "phynile",
        mrp: 90,
        price: 50,
        wholesalePrice: 40,
        packSize: "1L",
        image: "Images/phynile_lavender_1l.png",
        description: "Long-lasting lavender fragrance"
    },
    {
        id: 3,
        name: "Phynile Sandal ",
        category: "phynile",
        mrp: 90,
        price: 50,
        wholesalePrice: 40,
        packSize: "1L",
        image: "Images/phynile_sandal_1l.png",
        description: "Premium sandalwood fragrance"
    },
    {
        id: 4,
        name: "Phynile Mogara ",
        category: "phynile",
        mrp: 90,
        price: 50,
        wholesalePrice: 40,
        packSize: "1L",
        image: "Images/phynile_mogara_1l.png",
        description: "Traditional mogra fragrance"
    },
    {
        id: 5,
        name: "Phynile Rose ",
        category: "phynile",
        mrp: 90,
        price: 50,
        wholesalePrice: 40,
        packSize: "1L",
        image: "Images/phynile_rose_1l.png",
        description: "Fresh rose fragrance"
    },
    // Phynile s - 5L
    {
        id: 6,
        name: "Phynile Lemon ",
        category: "phynile",
        mrp: 365,
        price: 200,
        wholesalePrice: 180,
        packSize: "5L",
        image: "Images/phynile_lemon_5l.png",
        description: "Citrus lemon freshness"
    },
    {
        id: 7,
        name: "Phynile Lavender ",
        category: "phynile",
        mrp: 365,
        price: 200,
        wholesalePrice: 180,
        packSize: "5L",
        image: "Images/phynile_lavender_5l.png",
        description: "Long-lasting lavender fragrance"
    },
    {
        id: 8,
        name: "Phynile Sandal ",
        category: "phynile",
        mrp: 365,
        price: 200,
        wholesalePrice: 180,
        packSize: "5L",
        image: "Images/phynile_sandal_5l.png",
        description: "Premium sandalwood fragrance"
    },
    {
        id: 9,
        name: "Phynile Mogara ",
        category: "phynile",
        mrp: 365,
        price: 200,
        wholesalePrice: 180,
        packSize: "5L",
        image: "Images/phynile_mogara_5l.png",
        description: "Traditional mogra fragrance"
    },
    {
        id: 10,
        name: "Phynile Rose ",
        category: "phynile",
        mrp: 365,
        price: 200,
        wholesalePrice: 180,
        packSize: "5L",
        image: "Images/phynile_rose_5l.png",
        description: "Fresh rose fragrance"
    },
    
    // Sunny Products - Liquid
    {
        id: 15,
        name: "Sunny Floor Cleaner Liquid",
        category: "sunny",
        mrp: 65,
        price: 60,
        wholesalePrice: 60,
        packSize: "200ml",
        image: "Images/sunny_200ml_liquid.png",
        description: "Effective floor cleaner liquid"
    },
    {
        id: 16,
        name: "Sunny Floor Cleaner Liquid",
        category: "sunny",
        mrp: 150,
        price: 145,
        wholesalePrice: 145,
        packSize: "500ml",
        image: "Images/sunny_500ml_liquid.png",
        description: "Effective floor cleaner liquid"
    },
    {
        id: 17,
        name: "Sunny Floor Cleaner Liquid",
        category: "sunny",
        mrp: 275,
        price: 250,
        wholesalePrice: 250,
        packSize: "1L",
        image: "Images/sunny_1l_Liquid.png",
        description: "Effective floor cleaner liquid"
    },
    {
        id: 18,
        name: "Sunny Floor Cleaner Liquid",
        category: "sunny",
        mrp: 1200,
        price: 1100,
        wholesalePrice: 1100,
        packSize: "5L",
        image: "Images/sunny_5l_Liquid.png",
        description: "Economical floor cleaner liquid"
    },
    // Acid Cleaners
    {
        id: 19,
        name: "Acid Cleaner",
        category: "bathroom",
        mrp: 70,
        price: 40,
        wholesalePrice: 35,
        packSize: "1L",
        image: "Images/acid_1l.png",
        description: "Powerful acid cleaner"
    },
    {
        id: 20,
        name: "Acid Cleaner",
        category: "bathroom",
        mrp: 350,
        price: 140,
        wholesalePrice: 125,
        packSize: "5L",
        image: "Images/acid_5l.png",
        description: "Economical acid cleaner"
    },
    // Dish Wash Products
    {
        id: 21,
        name: "Dish Wash Pouch",
        category: "dish",
        mrp: 80,
        price: 76,
        wholesalePrice: 68,
        packSize: "1L",
        image: "Images/sunny_1l_Liquid.png", // Placeholder
        description: "Dish wash liquid pouch"
    },

    // Other Products
    {
        id: 24,
        name: "Drainx Unblocker",
        category: "other",
        mrp: 30,
        price: 24,
        wholesalePrice: 22,
        packSize: "1 Unit",
        image: "Images/drainx.png",
        description: "Drain unblocking solution"
    },
    {
        id: 25,
        name: "Bhaya Powder",
        category: "other",
        mrp: 30,
        price: 24,
        wholesalePrice: 22,
        packSize: "200g",
        image: "Images/bhaiya_powder.png",
        description: "Cleaning powder"
    },
    {
        id: 26,
        name: "Dambar Golya",
        category: "other",
        mrp: 50,
        price: 40,
        wholesalePrice: 36,
        packSize: "100g",
        image: "Images/dambar_golya.png",
        description: "Cleaning balls"
    },
    {
        id: 27,
        name: "Kolin Cleaner",
        category: "other",
        mrp: 88,
        price: 80,
        wholesalePrice: 81,
        packSize: "500ml",
        image: "Images/kolin.png",
        description: "Kolin multipurpose cleaner"
    },
    // Toilet Cleaners
    {
        id: 28,
        name: "Toilet Cleaner Harpic",
        category: "toilet",
        mrp: 45,
        price: 40,
        wholesalePrice: 40,
        packSize: "250ml",
        image: "Images/toilet_cleaner_harpic_250ml.png",
        description: "Powerful toilet cleaner"
    },
    {
        id: 29,
        name: "Toilet Cleaner Harpic",
        category: "toilet",
        mrp: 88,
        price: 70,
        wholesalePrice: 63,
        packSize: "500ml",
        image: "Images/toilet_cleaner_harpic_500ml.png",
        description: "Powerful toilet cleaner"
    },
    {
        id: 30,
        name: "Toilet Cleaner Harpic",
        category: "toilet",
        mrp: 700,
        price: 320,
        wholesalePrice: 290,
        packSize: "5L",
        image: "Images/toilet_cleaner_harpic_5l.png",
        description: "Economical toilet cleaner"
    },
    // Hand Wash Products
    {
        id: 31,
        name: "Hand Wash Rose",
        category: "hand",
        mrp: 105,
        price: 90,
        wholesalePrice: 81,
        packSize: "500ml",
        image: "Images/Hand_Wash_Products.png",
        description: "Rose fragrance hand wash"
    },
    {
        id: 32,
        name: "Hand Wash Neem",
        category: "hand",
        mrp: 105,
        price: 90,
        wholesalePrice: 81,
        packSize: "500ml",
        image: "Images/Hand_Wash_Products_1.png",
        description: "Neem antibacterial hand wash"
    },
    {
        id: 33,
        name: "Hand Wash Lemon",
        category: "hand",
        mrp: 105,
        price: 90,
        wholesalePrice: 81,
        packSize: "500ml",
        image: "Images/Hand_Wash_Products.png",
        description: "Lemon fresh hand wash"
    },
    {
        id: 34,
        name: "Hand Wash Rose",
        category: "hand",
        mrp: 200,
        price: 150,
        wholesalePrice: 135,
        packSize: "1L",
        image: "Images/Hand_Wash_Products.png",
        description: "Rose fragrance hand wash"
    },
    {
        id: 35,
        name: "Hand Wash Neem",
        category: "hand",
        mrp: 200,
        price: 150,
        wholesalePrice: 135,
        packSize: "1L",
        image: "Images/Hand_Wash_Products_1.png",
        description: "Neem antibacterial hand wash"
    },
    {
        id: 36,
        name: "Hand Wash Lemon",
        category: "hand",
        mrp: 200,
        price: 150,
        wholesalePrice: 135,
        packSize: "1L",
        image: "Images/Hand_Wash_Products.png",
        description: "Lemon fresh hand wash"
    },
    {
        id: 37,
        name: "Hand Wash",
        category: "hand",
        mrp: 700,
        price: 440,
        wholesalePrice: 400,
        packSize: "5L",
        image: "Images/Hand_Wash_Products.png",
        description: "Economical hand wash"
    },
    {
        id: 38,
        name: "Hand Wash Refill",
        category: "hand",
        mrp: 0,
        price: 84,
        wholesalePrice: 75,
        packSize: "500ml",
        image: "Images/Hand_Wash_Products_1.png",
        description: "Hand wash refill pack"
    },
];

// Calculate wholesale prices (10% less than retail)
products.forEach(product => {
    if (product.price > 0 && product.wholesalePrice === undefined) {
        product.wholesalePrice = Math.round(product.price * 0.9);
    }
});

// Bulk order products (same products but with different display)
const bulkProducts = [...products];

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const WHOLESALE_THRESHOLD = 7000;
const WHATSAPP_NUMBER = "919404361842";

// DOM Elements
let productsContainer, categoryDropdownBtn, categoryDropdownContent, categoryOptions;
let bulkCategoryFilter, bulkTableBody, floatingCartBtn, floatingCartCount;
let cartModal, closeCartBtn, cartBody, cartSummary, continueShoppingBtn;
let checkoutBtn, mobileMenuBtn, navMenu, cartNotification, contactForm;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log("Phynile HomeCare - Loading...");
    
    // Initialize DOM elements
    initializeDOMElements();
    
    if (!productsContainer) {
        console.error("ERROR: Main elements not found!");
        return;
    }
    
    console.log(`Loaded ${products.length} products`);
    
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
    
    // Setup category options
    setupCategoryOptions();
    
    console.log("Website loaded successfully!");
    
    // Test image loading
    testImageLoading();
});

// Initialize DOM Elements
function initializeDOMElements() {
    productsContainer = document.getElementById('products-container');
    categoryDropdownBtn = document.getElementById('category-dropdown-btn');
    categoryDropdownContent = document.getElementById('category-dropdown-content');
    categoryOptions = document.querySelectorAll('.category-option');
    bulkCategoryFilter = document.getElementById('bulk-category-filter');
    bulkTableBody = document.getElementById('bulk-table-body');
    floatingCartBtn = document.getElementById('floating-cart-btn');
    floatingCartCount = document.getElementById('floating-cart-count');
    cartModal = document.getElementById('cart-modal');
    closeCartBtn = document.getElementById('close-cart');
    cartBody = document.getElementById('cart-body');
    cartSummary = document.getElementById('cart-summary');
    continueShoppingBtn = document.getElementById('continue-shopping');
    checkoutBtn = document.getElementById('checkout-btn');
    mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    navMenu = document.querySelector('nav');
    cartNotification = document.getElementById('cart-notification');
    contactForm = document.getElementById('contact-form');
}

// Test Image Loading
function testImageLoading() {
    console.log("Testing image loading...");
    let loaded = 0;
    let failed = 0;
    
    products.forEach((product, index) => {
        const img = new Image();
        img.onload = function() {
            loaded++;
            console.log(`✓ ${product.name}: ${product.image}`);
        };
        img.onerror = function() {
            failed++;
            console.error(`✗ ${product.name}: ${product.image}`);
        };
        img.src = product.image;
    });
    
    setTimeout(() => {
        console.log(`Image loading test: ${loaded} loaded, ${failed} failed`);
    }, 2000);
}

// Setup Event Listeners
function setupEventListeners() {
    // Category dropdown
    if (categoryDropdownBtn) {
        categoryDropdownBtn.addEventListener('click', toggleCategoryDropdown);
    }
    
    // Close category dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (categoryDropdownBtn && !categoryDropdownBtn.contains(e.target) && 
            categoryDropdownContent && !categoryDropdownContent.contains(e.target)) {
            closeCategoryDropdown();
        }
    });
    
    // Cart functionality
    if (floatingCartBtn) floatingCartBtn.addEventListener('click', openCartModal);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartModal);
    if (continueShoppingBtn) continueShoppingBtn.addEventListener('click', closeCartModal);
    
    // Checkout button (WhatsApp)
    if (checkoutBtn) checkoutBtn.addEventListener('click', checkoutWithWhatsApp);
    
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactSubmit(e);
        });
    }
    
    // Close cart modal when clicking outside
    if (cartModal) {
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) closeCartModal();
        });
    }
}

// Setup Mobile Menu
function setupMobileMenu() {
    if (!mobileMenuBtn || !navMenu) return;
    
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
            const productsSection = document.getElementById('products');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
            }
            
            // Filter products
            renderProducts(category);
            
            // Filter bulk table
            renderBulkTable(category);
        });
    });
}

// Setup Category Options
function setupCategoryOptions() {
    if (!categoryOptions) return;
    
    categoryOptions.forEach(option => {
        option.addEventListener('click', handleCategorySelect);
    });
}

// Category Dropdown Functions
function toggleCategoryDropdown() {
    if (!categoryDropdownContent) return;
    
    const isActive = categoryDropdownContent.classList.toggle('active');
    const icon = categoryDropdownBtn.querySelector('i');
    if (icon) {
        icon.className = isActive ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
    }
}

function handleCategorySelect(e) {
    const selectedCategory = e.target.getAttribute('data-category');
    
    // Update active state
    document.querySelectorAll('.category-option').forEach(option => {
        option.classList.remove('active');
    });
    e.target.classList.add('active');
    
    // Update dropdown button text
    if (categoryDropdownBtn) {
        const span = categoryDropdownBtn.querySelector('span');
        if (span) span.textContent = e.target.textContent;
    }
    
    // Close dropdown with animation
    closeCategoryDropdown();
    
    // Render products for selected category
    renderProducts(selectedCategory);
    renderBulkTable(selectedCategory);
}

function closeCategoryDropdown() {
    if (!categoryDropdownContent || !categoryDropdownBtn) return;
    
    categoryDropdownContent.classList.remove('active');
    const icon = categoryDropdownBtn.querySelector('i');
    if (icon) {
        icon.className = 'fas fa-chevron-down';
    }
}

function updateCategoryDropdown(category) {
    if (!categoryDropdownBtn) return;
    
    // Update dropdown button text and active option
    let categoryText = 'All Products';
    if (category !== 'all') {
        const option = document.querySelector(`.category-option[data-category="${category}"]`);
        if (option) categoryText = option.textContent;
    }
    
    const span = categoryDropdownBtn.querySelector('span');
    if (span) span.textContent = categoryText;
    
    // Update active state
    document.querySelectorAll('.category-option').forEach(option => {
        option.classList.remove('active');
        if (option.dataset.category === category) option.classList.add('active');
    });
}

// Render Products
function renderProducts(category) {
    if (!productsContainer) return;
    
    productsContainer.innerHTML = '';
    
    // Filter products by category
    let filteredProducts = products;
    if (category !== 'all') {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    // Render each product
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        if (productCard) productsContainer.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    if (!product) return null;
    
    const discount = product.mrp > 0 ? Math.round(((product.mrp - product.price) / product.mrp) * 100) : 0;
    const cartItem = cart.find(item => item.id === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;
    
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" 
                 onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200?text=Product+Image'">
            ${discount > 0 ? `<div class="discount-badge">Save ${discount}%</div>` : ''}
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
            </div>
        </div>
    `;
    
    // Add event listeners
    const minusBtn = card.querySelector('.minus-btn');
    const plusBtn = card.querySelector('.plus-btn');
    const addToCartBtn = card.querySelector('.add-to-cart');
    
    if (minusBtn) minusBtn.addEventListener('click', () => updateProductQuantity(product.id, -1));
    if (plusBtn) plusBtn.addEventListener('click', () => updateProductQuantity(product.id, 1));
    if (addToCartBtn) addToCartBtn.addEventListener('click', () => {
        if (quantity === 0) updateProductQuantity(product.id, 1);
    });
    
    return card;
}

// Render Bulk Table
function renderBulkTable(category) {
    if (!bulkTableBody) return;
    
    bulkTableBody.innerHTML = '';
    
    // Filter products by category
    let filteredProducts = bulkProducts;
    if (category !== 'all') {
        filteredProducts = bulkProducts.filter(product => product.category === category);
    }
    
    // Group products by category
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
            if (row) bulkTableBody.appendChild(row);
        });
    });
    
    // Update bulk category filter buttons
    updateBulkCategoryFilter();
}

// Create Bulk Table Row
function createBulkTableRow(product) {
    if (!product) return null;
    
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
    
    // Add event listeners
    const addBtn = row.querySelector('.btn');
    const qtyInput = row.querySelector('.bulk-qty-input');
    
    if (addBtn && qtyInput) {
        addBtn.addEventListener('click', () => {
            const quantity = parseInt(qtyInput.value) || 0;
            if (quantity > 0) {
                updateProductQuantity(product.id, quantity);
                qtyInput.value = 0;
            }
        });
    }
    
    return row;
}

// Update Bulk Category Filter
function updateBulkCategoryFilter() {
    if (!bulkCategoryFilter) return;
    
    // Get unique categories
    const categories = ['all', ...new Set(bulkProducts.map(product => product.category))];
    
    bulkCategoryFilter.innerHTML = '';
    
    categories.forEach(cat => {
        const button = document.createElement('button');
        button.className = 'bulk-category-btn';
        button.textContent = getCategoryName(cat);
        button.dataset.category = cat;
        
        if (cat === 'all') button.classList.add('active');
        
        button.addEventListener('click', () => {
            // Update active state
            document.querySelectorAll('.bulk-category-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Render bulk table
            renderBulkTable(cat);
            updateCategoryDropdown(cat);
            renderProducts(cat);
            
            // Scroll to bulk section
            const bulkSection = document.getElementById('bulk');
            if (bulkSection) bulkSection.scrollIntoView({ behavior: 'smooth' });
        });
        
        bulkCategoryFilter.appendChild(button);
    });
}

// Helper function to get category display name
function getCategoryName(category) {
    const categoryNames = {
        'all': 'All Products',
        'phynile': 'Phynile s',
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
        const oldQuantity = cart[cartItemIndex].quantity;
        cart[cartItemIndex].quantity += change;
        
        // Remove item if quantity is 0 or less
        if (cart[cartItemIndex].quantity <= 0) {
            cart.splice(cartItemIndex, 1);
            showCartNotification(`${product.name} removed from cart`, 'removed');
        } else {
            if (change > 0) {
                showCartNotification(`${product.name} added to cart`, 'added');
            } else {
                showCartNotification(`${product.name} quantity updated to ${cart[cartItemIndex].quantity}`, 'updated');
            }
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
        showCartNotification(`${product.name} added to cart`, 'added');
    }
    
    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update UI
    updateCartCount();
    
    // Re-render products to update quantity displays
    const activeCategory = document.querySelector('.category-option.active');
    if (activeCategory) renderProducts(activeCategory.dataset.category);
    
    // Update cart modal if open
    if (cartModal && cartModal.style.display === 'block') renderCart();
}

// Update Cart Count
function updateCartCount() {
    if (!floatingCartCount) return;
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    floatingCartCount.textContent = totalItems;
}

// Open Cart Modal
function openCartModal() {
    if (!cartModal) return;
    
    cartModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    renderCart();
}

// Close Cart Modal
function closeCartModal() {
    if (!cartModal) return;
    
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Render Cart
function renderCart() {
    if (!cartBody || !cartSummary) return;
    
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
    const savings = subtotal - total;
    
    // Calculate MRP savings
    const mrpTotal = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + (product.mrp * item.quantity);
    }, 0);
    const mrpSavings = mrpTotal - subtotal;
    
    // Render cart items
    let cartItemsHTML = '<div class="cart-items">';
    
    cart.forEach((item, index) => {
        const product = products.find(p => p.id === item.id);
        if (!product) return;
        
        const pricePerItem = wholesaleApplied ? product.wholesalePrice : product.price;
        const itemTotal = pricePerItem * item.quantity;
        const mrpItemTotal = product.mrp * item.quantity;
        const itemMrpSavings = product.mrp > 0 ? mrpItemTotal - (product.price * item.quantity) : 0;
        
        cartItemsHTML += `
            <div class="cart-item" data-product-id="${item.id}" style="animation-delay: ${index * 0.05}s">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/100x100?text=Product'">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-meta">
                        <div class="cart-item-price">
                            <span class="price-now">₹${pricePerItem}</span>
                            ${product.mrp > 0 ? `<span class="price-mrp">₹${product.mrp}</span>` : ''}
                        </div>
                        ${wholesaleApplied && product.wholesalePrice !== product.price ? 
                            `<div class="wholesale-savings-badge">Wholesale Rate</div>` : ''}
                    </div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus-btn">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn plus-btn">+</button>
                    </div>
                </div>
                <div class="cart-item-total">
                    <div class="item-total-amount">₹${itemTotal}</div>
                    ${itemMrpSavings > 0 ? 
                        `<div class="item-savings">Save ₹${itemMrpSavings}</div>` : ''}
                </div>
                <button class="remove-item" title="Remove item">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    });
    
    cartItemsHTML += '</div>';
    cartBody.innerHTML = cartItemsHTML;
    
    // Add event listeners to cart item buttons
    document.querySelectorAll('.cart-item').forEach(item => {
        const productId = parseInt(item.getAttribute('data-product-id'));
        const minusBtn = item.querySelector('.minus-btn');
        const plusBtn = item.querySelector('.plus-btn');
        const removeBtn = item.querySelector('.remove-item');
        
        if (minusBtn) minusBtn.addEventListener('click', () => updateProductQuantity(productId, -1));
        if (plusBtn) plusBtn.addEventListener('click', () => updateProductQuantity(productId, 1));
        if (removeBtn) removeBtn.addEventListener('click', () => {
            const cartItem = cart.find(item => item.id === productId);
            if (cartItem) updateProductQuantity(productId, -cartItem.quantity);
        });
    });
    
    // Render cart summary with animations
    cartSummary.innerHTML = `
        <div class="cart-summary-details">
            <h3>Cart Summary</h3>
            ${mrpSavings > 0 ? `
                <div class="savings-info mrp-savings animated-fade-in">
                    <i class="fas fa-tag"></i>
                    <span>Saved from MRP: <strong>₹${mrpSavings}</strong></span>
                </div>
            ` : ''}
            ${savings > 0 ? `
                <div class="savings-info wholesale-savings animated-fade-in" style="animation-delay: 0.2s">
                    <i class="fas fa-percentage"></i>
                    <span>Wholesale Discount: <strong>₹${savings}</strong></span>
                </div>
            ` : ''}
            ${wholesaleApplied ? 
                `<div class="wholesale-applied animated-bounce">
                    <i class="fas fa-check-circle"></i> Wholesale rates applied!
                </div>` 
                : subtotal > 0 && WHOLESALE_THRESHOLD - subtotal > 0 ?
                `<div class="wholesale-remaining animated-pulse">
                    <i class="fas fa-bolt"></i>
                    Add ₹${WHOLESALE_THRESHOLD - subtotal} more for wholesale rates!
                </div>`
                : ''}
        </div>
        <div class="cart-total-section">
            <div class="total-label">Total Amount</div>
            <div class="cart-total animated-scale">₹${total}</div>
        </div>
    `;
    
    // Trigger animations
    setTimeout(() => {
        document.querySelectorAll('.animated-fade-in').forEach(el => {
            el.classList.add('visible');
        });
        document.querySelectorAll('.animated-bounce').forEach(el => {
            el.classList.add('visible');
        });
        document.querySelectorAll('.animated-pulse').forEach(el => {
            el.classList.add('visible');
        });
        document.querySelectorAll('.animated-scale').forEach(el => {
            el.classList.add('visible');
        });
        
        // Add animation to cart items
        document.querySelectorAll('.cart-item').forEach(el => {
            el.classList.add('cart-item-enter');
        });
    }, 100);
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

// Show Cart Notification
function showCartNotification(message, type = 'info') {
    if (!cartNotification) return;
    
    // Set icon based on type
    let icon = 'fas fa-info-circle';
    if (type === 'added') icon = 'fas fa-check-circle';
    if (type === 'removed') icon = 'fas fa-trash-alt';
    if (type === 'updated') icon = 'fas fa-sync-alt';
    
    cartNotification.innerHTML = `
        <i class="${icon}"></i>
        <span>${message}</span>
    `;
    
    // Set color based on type
    if (type === 'added') cartNotification.style.backgroundColor = '#4CAF50';
    if (type === 'removed') cartNotification.style.backgroundColor = '#f44336';
    if (type === 'updated') cartNotification.style.backgroundColor = '#2196F3';
    
    cartNotification.style.display = 'flex';
    cartNotification.style.animation = 'slideInRight 0.3s ease-out';
    
    setTimeout(() => {
        cartNotification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            cartNotification.style.display = 'none';
        }, 300);
    }, 3000);
}

// WhatsApp Functions
function generateWhatsAppMessage() {
    const total = calculateCartTotal();
    const subtotal = calculateCartSubtotal();
    const wholesaleApplied = subtotal >= WHOLESALE_THRESHOLD;
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    let message = `🛒 *PHYNILE HOMECARE ORDER*\n\n`;
    message += `📋 *Order Details*\n`;
    message += `Total Items: ${totalItems}\n`;
    message += `Order Value: ₹${total}\n`;
    message += wholesaleApplied ? `✅ Wholesale rates applied (Order > ₹7,000)\n\n` : '\n';
    
    message += `*Items Ordered:*\n`;
    message += `────────────────\n`;
    
    cart.forEach((item, index) => {
        const product = products.find(p => p.id === item.id);
        if (!product) return;
        
        const price = wholesaleApplied ? product.wholesalePrice : product.price;
        const itemTotal = price * item.quantity;
        message += `${index + 1}. ${item.name} (${item.packSize})\n`;
        message += `   Qty: ${item.quantity} × ₹${price} = ₹${itemTotal}\n`;
    });
    
    message += `\n────────────────\n`;
    message += `Subtotal: ₹${subtotal}\n`;
    if (wholesaleApplied) {
        const savings = subtotal - total;
        message += `Wholesale Discount: -₹${savings}\n`;
    }
    message += `*Grand Total: ₹${total}*\n\n`;
    
    message += `👤 *Customer Information*\n`;
    message += `Please provide your details:\n`;
    message += `• Name:\n`;
    message += `• Phone:\n`;
    message += `• Address:\n`;
    message += `• Delivery Date/Time:\n\n`;
    
    message += `🚚 *Delivery Information*\n`;
    message += `Free delivery in Dhayari, Narhe, Ambegaon\n`;
    message += `Other areas: Delivery charges apply\n\n`;
    
    message += `📞 *Contact*\n`;
    message += `Phone: +91 9404361842\n`;
    message += `Thank you for shopping with Phynile HomeCare! 🏡✨`;
    
    return message;
}

function checkoutWithWhatsApp() {
    if (cart.length === 0) {
        showCartNotification('Your cart is empty!');
        return;
    }
    
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
}

// WhatsApp contact function for bulk orders
function contactWhatsAppBulk() {
    const message = `Hello Phynile HomeCare!\n\nI'm interested in wholesale/bulk orders for cleaning products.\n\nPlease provide information about:\n• Wholesale rates for orders above ₹7,000\n• Customized solutions for businesses\n• Delivery options for bulk orders\n\nThank you!`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Handle Contact Form Submission
function handleContactSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const phone = e.target.querySelector('input[type="tel"]').value;
    const message = e.target.querySelector('textarea').value;
    
    // Send via WhatsApp
    const whatsappMessage = `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    e.target.reset();
    showCartNotification('Message sent to WhatsApp!');
}

// Delivery Information Modal
function openDeliveryInfo() {
    const message = `🚚 *PHYNILE HOMECARE DELIVERY INFORMATION*\n\n📍 *Free Delivery Areas:*\n• Dhayari\n• Narhe\n• Ambegaon\n\n🚛 *Other Areas:*\nDelivery charges apply based on distance\n\n⏰ *Delivery Time:*\n• Orders placed before 3 PM: Same day delivery\n• Orders placed after 3 PM: Next day delivery\n• Weekend orders: Monday delivery\n\n📦 *Order Minimum:*\nNo minimum order amount\n\n💳 *Payment Options:*\n• Cash on Delivery\n• UPI Payment\n• Bank Transfer`;
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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

// Make functions globally available
window.contactWhatsAppBulk = contactWhatsAppBulk;
window.checkoutWithWhatsApp = checkoutWithWhatsApp;
window.openDeliveryInfo = openDeliveryInfo;
window.testImageLoading = testImageLoading;
