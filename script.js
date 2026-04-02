// ============================================
// Elly Smart Gadgets — Main Script
// ============================================

// ============================================
// Product Catalog Data
// ============================================
const PRODUCTS = {
    earbuds: {
        id: 'earbuds',
        name: 'Elly Pro Earbuds',
        category: 'Audio',
        price: 50000,
        oldPrice: 65000,
        image: 'images/earbuds.jpg',
        badge: 'Popular',
        badgeClass: 'teal',
        rating: 4.5,
        reviews: 128,
        inStock: true,
        shortDesc: 'Premium wireless earbuds with active noise cancellation, rich bass, and all-day comfort. Perfect for music lovers and remote workers.',
        description: `
            <p>The Elly Pro Earbuds deliver an unmatched listening experience with advanced audio engineering. Featuring 10mm dynamic drivers, they produce deep, powerful bass and crystal-clear highs that reveal every detail in your music.</p>
            <p>Active Noise Cancellation (ANC) blocks out ambient sound so you can focus on what matters. The ergonomic semi-in-ear design ensures a comfortable, secure fit for hours of wear.</p>
            <ul>
                <li>Active Noise Cancellation (ANC) technology</li>
                <li>20-hour total battery life (6hr earbuds + 14hr case)</li>
                <li>Fast charge: 15 min = 2 hours playback</li>
                <li>IPX4 sweat and water resistant</li>
                <li>Touch controls on each earbud</li>
                <li>Compatible with iOS and Android</li>
            </ul>
        `,
        specs: [
            ['Driver Size', '10mm Dynamic'],
            ['Frequency Response', '20Hz – 20kHz'],
            ['Connectivity', 'Bluetooth 5.0'],
            ['Battery (Earbuds)', '6 hours'],
            ['Battery (Case)', '14 hours'],
            ['Charging', 'USB-C, Fast Charge'],
            ['Water Resistance', 'IPX4'],
            ['Weight', '5g per earbud'],
            ['Warranty', '6 Months'],
        ],
        reviews_data: [
            { name: 'Joel K.', rating: 5, date: 'March 2026', comment: 'Incredible sound quality for the price. The noise cancellation works really well in noisy environments. Battery life is solid.' },
            { name: 'Elias k.', rating: 4, date: 'February 2026', comment: 'Very comfortable to wear for long periods. Sound is excellent. Would love slightly stronger bass.' },
            { name: 'Daphine K.', rating: 5, date: 'January 2026', comment: 'Best earbuds I\'ve used at this price point. The touch controls are very responsive.' },
        ],
        related: ['watch', 'powerbank', 'phone'],
    },
    watch: {
        id: 'watch',
        name: 'Elly Ultra Watch',
        category: 'Wearables',
        price: 35000,
        oldPrice: null,
        image: 'images/watch.jpg',
        badge: 'Best Seller',
        badgeClass: 'gold',
        rating: 5.0,
        reviews: 214,
        inStock: true,
        shortDesc: 'Smart fitness tracker with heart rate monitoring, GPS, sleep analysis, and a brilliant always-on display. 7-day battery life.',
        description: `
            <p>The Elly Ultra Watch is your complete health and fitness companion. With a crisp 1.4" AMOLED always-on display, it tracks your activity, health metrics, and keeps you connected throughout the day.</p>
            <p>Built-in GPS accurately maps your routes, while the 24/7 heart rate sensor, SpO2 blood oxygen monitor, and sleep tracker give you deep insights into your health.</p>
            <ul>
                <li>1.4" AMOLED always-on display</li>
                <li>Built-in GPS + GLONASS</li>
                <li>24/7 heart rate & SpO2 monitoring</li>
                <li>Advanced sleep tracking with REM analysis</li>
                <li>100+ workout modes</li>
                <li>5ATM water resistance (50m)</li>
                <li>Smart notifications: calls, messages, apps</li>
            </ul>
        `,
        specs: [
            ['Display', '1.4" AMOLED 454×454px'],
            ['Battery Life', '7 days typical'],
            ['GPS', 'Built-in GPS + GLONASS'],
            ['Heart Rate', '24/7 optical sensor'],
            ['Water Resistance', '5ATM (50m)'],
            ['Connectivity', 'Bluetooth 5.2'],
            ['Compatibility', 'Android 6.0+ / iOS 12+'],
            ['Charging', 'Magnetic USB'],
            ['Warranty', '6 Months'],
        ],
        reviews_data: [
            { name: 'Ahmed R.', rating: 5, date: 'March 2026', comment: 'The GPS accuracy is impressive. Sleep tracking is detailed and the battery genuinely lasts 7 days with normal use.' },
            { name: 'Grace N.', rating: 5, date: 'February 2026', comment: 'Beautiful display and very accurate health tracking. Notifications work seamlessly with my phone.' },
            { name: 'Patrick L.', rating: 5, date: 'January 2026', comment: 'Bought this as a gift and the recipient loved it. Great build quality and the strap is very comfortable.' },
        ],
        related: ['earbuds', 'phone', 'powerbank'],
    },
    camera: {
        id: 'camera',
        name: 'Elly Smart Camera',
        category: 'Security',
        price: 950000,
        oldPrice: 1,020000,
        image: 'images/camera.jpg',
        badge: null,
        badgeClass: null,
        rating: 4.5,
        reviews: 87,
        inStock: true,
        shortDesc: 'Professional 1080p HD security camera with colour night vision, AI motion detection, 2-way audio, and cloud storage.',
        description: `
            <p>The Elly Smart Camera brings professional-grade security to your home or business. With 1080p Full HD video, you'll capture every detail clearly, day or night.</p>
            <p>Colour night vision using ambient light delivers vivid footage even in low-light conditions. AI-powered motion detection distinguishes between people, vehicles, and animals to reduce false alerts.</p>
            <ul>
                <li>1080p Full HD video, 130° wide angle</li>
                <li>Colour night vision (up to 10m)</li>
                <li>AI motion detection with smart alerts</li>
                <li>2-way audio (built-in mic + speaker)</li>
                <li>Free cloud storage + microSD support (up to 128GB)</li>
                <li>Works with Alexa & Google Home</li>
                <li>IP67 weatherproof rating</li>
            </ul>
        `,
        specs: [
            ['Resolution', '1080p Full HD'],
            ['Field of View', '130° wide angle'],
            ['Night Vision', 'Colour, up to 10m'],
            ['Motion Detection', 'AI (person/vehicle/animal)'],
            ['Audio', '2-Way (mic + speaker)'],
            ['Connectivity', '2.4GHz WiFi'],
            ['Storage', 'Cloud + microSD (up to 128GB)'],
            ['Weather Rating', 'IP67'],
            ['Warranty', '6 Months'],
        ],
        reviews_data: [
            { name: 'Fatima A.', rating: 5, date: 'March 2026', comment: 'Night vision is excellent — better than cameras twice the price. The motion alerts are accurate and I rarely get false notifications.' },
            { name: 'Brian M.', rating: 4, date: 'February 2026', comment: 'Easy to set up and the app is intuitive. Video quality is very clear. Would like wider night vision range.' },
            { name: 'Lydia T.', rating: 4, date: 'January 2026', comment: 'Two-way audio is great for talking to visitors. Solid build quality — feels very weatherproof.' },
        ],
        related: ['laptop', 'phone', 'earbuds'],
    },
    laptop: {
        id: 'laptop',
        name: 'Elly Laptop',
        category: 'Computing',
        price: 500000,
        oldPrice: null,
        image: 'images/laptop.jpg',
        badge: 'Top Pick',
        badgeClass: 'gold',
        rating: 4.9,
        reviews: 63,
        inStock: true,
        shortDesc: 'Slim, powerful laptop with Intel Core i5, 8GB RAM, and 256GB SSD. Fast, light, and built for work, study, and entertainment.',
        description: `
            <p>The Elly Laptop delivers real productivity in a sleek, portable package. Powered by the Intel Core i5 processor and paired with 8GB DDR4 RAM, it handles multitasking, office work, browsing, and media effortlessly.</p>
            <p>The 256GB SSD ensures fast boot times (under 15 seconds) and snappy application launches. A 14" Full HD IPS display with anti-glare coating makes it comfortable to use for hours.</p>
            <ul>
                <li>Intel Core i5 (10th Gen) processor</li>
                <li>8GB DDR4 RAM (expandable to 16GB)</li>
                <li>256GB M.2 NVMe SSD</li>
                <li>14" Full HD IPS anti-glare display</li>
                <li>Up to 8 hours battery life</li>
                <li>USB-C, USB 3.0, HDMI, SD card</li>
                <li>Backlit keyboard, fingerprint reader</li>
            </ul>
        `,
        specs: [
            ['Processor', 'Intel Core i5 (10th Gen)'],
            ['RAM', '8GB DDR4 (expandable)'],
            ['Storage', '256GB M.2 NVMe SSD'],
            ['Display', '14" FHD IPS Anti-glare'],
            ['Graphics', 'Intel UHD 620'],
            ['Battery', 'Up to 8 hours'],
            ['Weight', '1.5kg'],
            ['OS', 'Windows 11 Home'],
            ['Warranty', '6 Months'],
        ],
        reviews_data: [
            { name: 'Emmanuel K.', rating: 5, date: 'March 2026', comment: 'Incredibly fast for the price. Booted up Windows in about 12 seconds. The display is bright and sharp — perfect for design work.' },
            { name: 'Priscilla W.', rating: 5, date: 'February 2026', comment: 'Very lightweight and the battery lasts all day at university. The keyboard is comfortable to type on for long periods.' },
            { name: 'Moses B.', rating: 5, date: 'January 2026', comment: 'Set this up for my business and it handles everything — spreadsheets, video calls, browsing — without any slowdown.' },
        ],
        related: ['camera', 'earbuds', 'powerbank'],
    },
    phone: {
        id: 'phone',
        name: 'Elly Smart Phone',
        category: 'Mobile',
        price: 250000,
        oldPrice: 299000,
        image: 'images/phone.jpg',
        badge: null,
        badgeClass: null,
        rating: 4.8,
        reviews: 176,
        inStock: true,
        shortDesc: '48MP triple camera system, 5000mAh battery with fast charge, and a stunning 6.5" FHD+ display. All-day power, pro-level photography.',
        description: `
            <p>The Elly Smart Phone packs a professional photography experience and marathon battery life into an elegant design. The 48MP main sensor captures detailed, vibrant images in any lighting condition.</p>
            <p>Powered by a high-performance octa-core processor with 6GB RAM, it handles gaming, video editing, and multitasking without breaking a sweat. The 5000mAh battery charges from 0 to 100% in just 55 minutes with the included 33W fast charger.</p>
            <ul>
                <li>6.5" FHD+ 90Hz AMOLED display</li>
                <li>48MP main + 8MP ultrawide + 5MP macro triple camera</li>
                <li>32MP front selfie camera</li>
                <li>5000mAh battery + 33W fast charge</li>
                <li>Octa-core processor, 6GB RAM, 128GB storage</li>
                <li>5G ready, Dual SIM</li>
                <li>Side fingerprint sensor + Face unlock</li>
            </ul>
        `,
        specs: [
            ['Display', '6.5" FHD+ 90Hz AMOLED'],
            ['Processor', 'Octa-core 2.4GHz'],
            ['RAM / Storage', '6GB / 128GB (expandable)'],
            ['Main Camera', '48MP + 8MP + 5MP'],
            ['Front Camera', '32MP'],
            ['Battery', '5000mAh, 33W fast charge'],
            ['Network', '5G / 4G LTE, Dual SIM'],
            ['OS', 'Android 14'],
            ['Warranty', '6 Months'],
        ],
        reviews_data: [
            { name: 'Rachael T.', rating: 5, date: 'March 2026', comment: 'The camera is absolutely stunning. Night mode photos are incredible. Battery lasts me nearly two full days with normal use.' },
            { name: 'Daniel O.', rating: 5, date: 'February 2026', comment: 'The 90Hz screen makes everything so smooth. Fast charger is a game changer — fully charged before I even finish breakfast.' },
            { name: 'Winnie A.', rating: 4, date: 'January 2026', comment: 'Great phone overall. Camera and battery are standout features. Slightly heavy but build quality feels premium.' },
        ],
        related: ['watch', 'earbuds', 'powerbank'],
    },
    powerbank: {
        id: 'powerbank',
        name: 'Elly Power Bank',
        category: 'Accessories',
        price: 45000,
        oldPrice: 55000,
        image: 'images/powerbank.jpg',
        badge: 'New',
        badgeClass: 'teal',
        rating: 4.5,
        reviews: 92,
        inStock: true,
        shortDesc: '20,000mAh slim power bank with 22.5W fast charging, dual USB-A, USB-C in/out, and LED battery indicator.',
        description: `
            <p>The Elly Power Bank keeps all your devices topped up on the go. With a massive 20,000mAh capacity, it can charge a typical smartphone up to 4–5 times before needing a recharge itself.</p>
            <p>The 22.5W fast charging output gets compatible devices to 50% in just 30 minutes. Despite the large capacity, it's designed with a slim profile that fits easily in a bag or pocket.</p>
            <ul>
                <li>20,000mAh high-density lithium battery</li>
                <li>22.5W fast charging output</li>
                <li>USB-C input/output (18W)</li>
                <li>Dual USB-A output (total 22.5W)</li>
                <li>Charge 2 devices simultaneously</li>
                <li>LED battery level indicator (4 LEDs)</li>
                <li>Short circuit and overcharge protection</li>
                <li>Compatible with all smartphones and tablets</li>
            </ul>
        `,
        specs: [
            ['Capacity', '20,000mAh'],
            ['Max Output', '22.5W'],
            ['USB-A Ports', '2 × USB-A (22.5W total)'],
            ['USB-C Port', '1 × USB-C (18W in/out)'],
            ['Input', 'USB-C 18W'],
            ['Recharge Time', '~6 hours (USB-C 18W)'],
            ['Weight', '345g'],
            ['Dimensions', '163 × 76 × 15mm'],
            ['Warranty', '6 Months'],
        ],
        reviews_data: [
            { name: 'Kevin N.', rating: 5, date: 'March 2026', comment: 'Charged my phone 4 times on a 3-day trip. Very slim for 20,000mAh. The fast charging is noticeably quick.' },
            { name: 'Ruth M.', rating: 4, date: 'February 2026', comment: 'Great capacity and slim design. Charges two devices at once without issue. LED indicator is accurate.' },
            { name: 'Joseph A.', rating: 5, date: 'January 2026', comment: 'Best power bank I\'ve owned. Build quality is solid and it charged my laptop in a pinch via USB-C.' },
        ],
        related: ['phone', 'earbuds', 'watch'],
    },
};

// ============================================
// Cart Storage
// ============================================
let cart = JSON.parse(localStorage.getItem('ellyCart')) || [];

// ============================================
// Update Cart Count
// ============================================
function updateCartCount() {
    const elements = document.querySelectorAll('.cart-count');
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    elements.forEach(el => {
        el.textContent = total;
        el.style.display = total === 0 ? 'none' : 'flex';
    });
}

// ============================================
// Add to Cart
// ============================================
function addToCart(id, name, price, image) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }
    localStorage.setItem('ellyCart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`<strong>${name}</strong> added to cart!`);
}

// ============================================
// Remove from Cart
// ============================================
function removeFromCart(id) {
    const item = cart.find(i => i.id === id);
    if (item) {
        cart = cart.filter(i => i.id !== id);
        localStorage.setItem('ellyCart', JSON.stringify(cart));
        updateCartCount();
        if (window.location.pathname.includes('cart.html')) displayCart();
        showNotification(`${item.name} removed`, 'info');
    }
}

// ============================================
// Update Quantity
// ============================================
function updateQuantity(id, qty) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    if (qty <= 0) {
        removeFromCart(id);
    } else {
        item.quantity = qty;
        localStorage.setItem('ellyCart', JSON.stringify(cart));
        updateCartCount();
        if (window.location.pathname.includes('cart.html')) displayCart();
    }
}

// ============================================
// Display Cart
// ============================================
function displayCart() {
    const container       = document.getElementById('cartItems');
    const mobileContainer = document.getElementById('cartItemsMobile');
    const subtotalEl      = document.getElementById('subtotal');
    const totalEl         = document.getElementById('total');
    const shippingEl      = document.getElementById('shipping');

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <tr><td colspan="6" class="text-center py-5">
                <i class="fas fa-shopping-cart fa-3x mb-3 d-block" style="color:#dde2e8;"></i>
                <p class="text-muted mb-3">Your cart is empty</p>
                <a href="products.html" class="btn btn-gold">Shop Now</a>
            </td></tr>`;
        if (mobileContainer) mobileContainer.innerHTML = '';
        if (subtotalEl)  subtotalEl.textContent = 'USh 0';
        if (totalEl)     totalEl.textContent    = 'USh 0';
        if (shippingEl)  shippingEl.textContent = '—';
        return;
    }

    let subtotal = 0;
    let tableHtml  = '';
    let mobileHtml = '';

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        const fallback = `https://placehold.co/52x52/0a2b3e/e6b91e?text=${encodeURIComponent(item.name.charAt(0))}`;

        tableHtml += `
            <tr>
                <td><img src="${item.image}" alt="${item.name}" style="width:52px;height:52px;object-fit:cover;border-radius:8px;" onerror="this.src='${fallback}'"></td>
                <td><strong>${item.name}</strong></td>
                <td>USh ${item.price.toLocaleString()}</td>
                <td><input type="number" class="cart-quantity" value="${item.quantity}" min="1" onchange="updateQuantity('${item.id}', parseInt(this.value))"></td>
                <td>USh ${itemTotal.toLocaleString()}</td>
                <td><button class="btn btn-sm btn-outline-danger" onclick="removeFromCart('${item.id}')"><i class="fas fa-trash"></i></button></td>
            </tr>`;

        mobileHtml += `
            <div class="cart-item-card">
                <img src="${item.image}" alt="${item.name}" style="width:64px;height:64px;object-fit:cover;border-radius:10px;flex-shrink:0;" onerror="this.src='${fallback}'">
                <div style="flex:1;min-width:0;">
                    <div style="font-weight:700;font-size:0.9rem;color:var(--primary-dark);">${item.name}</div>
                    <div class="price" style="font-size:0.95rem;">USh ${item.price.toLocaleString()}</div>
                    <div style="display:flex;align-items:center;gap:0.5rem;margin-top:0.4rem;flex-wrap:wrap;">
                        <input type="number" class="cart-quantity" value="${item.quantity}" min="1" onchange="updateQuantity('${item.id}', parseInt(this.value))" style="width:56px;">
                        <span style="font-size:0.78rem;color:#aaa;">= USh ${itemTotal.toLocaleString()}</span>
                    </div>
                </div>
                <button class="btn btn-sm btn-outline-danger flex-shrink-0" onclick="removeFromCart('${item.id}')"><i class="fas fa-trash"></i></button>
            </div>`;
    });

    container.innerHTML = tableHtml;
    if (mobileContainer) mobileContainer.innerHTML = mobileHtml;

    const shipping = subtotal > 350000 ? 0 : 15000;
    const total    = subtotal + shipping;

    if (subtotalEl)  subtotalEl.textContent = `USh ${subtotal.toLocaleString()}`;
    if (totalEl)     totalEl.textContent    = `USh ${total.toLocaleString()}`;
    if (shippingEl)  shippingEl.textContent = shipping === 0 ? '🎉 FREE' : `USh ${shipping.toLocaleString()}`;
}

// ============================================
// Notification Toast
// ============================================
function showNotification(message, type = 'success') {
    const colors = { success: '#1e6f5c', info: '#0a2b3e', error: '#e74c3c' };
    const icons  = { success: 'check-circle', info: 'info-circle', error: 'times-circle' };

    const notif = document.createElement('div');
    notif.style.cssText = `
        position:fixed; top:80px; right:16px; max-width:300px; width:calc(100% - 32px);
        background:${colors[type]}; color:#fff; padding:12px 16px; border-radius:10px;
        z-index:9999; box-shadow:0 4px 20px rgba(0,0,0,0.2);
        display:flex; align-items:center; gap:10px;
        font-size:0.88rem; line-height:1.4; animation:slideInNotif 0.3s ease;
    `;
    notif.innerHTML = `<i class="fas fa-${icons[type]}" style="flex-shrink:0;font-size:1rem;"></i><span>${message}</span>`;
    document.body.appendChild(notif);

    setTimeout(() => {
        notif.style.transition = 'opacity 0.3s, transform 0.3s';
        notif.style.opacity = '0';
        notif.style.transform = 'translateX(20px)';
        setTimeout(() => notif.remove(), 300);
    }, 2800);
}

// ============================================
// Search Products
// ============================================
function searchProducts() {
    const input = document.getElementById('searchInput');
    if (!input) return;

    const term = input.value.toLowerCase().trim();
    const items = document.querySelectorAll('.product-item');
    const noResults = document.getElementById('noResults');
    let found = false;

    items.forEach(p => {
        const title = p.querySelector('.card-title')?.textContent.toLowerCase() || '';
        const desc  = p.querySelector('.card-text')?.textContent.toLowerCase() || '';
        const match = title.includes(term) || desc.includes(term) || term === '';
        p.style.display = match ? '' : 'none';
        if (match) found = true;
    });

    if (noResults) noResults.style.display = found ? 'none' : 'block';
}

// ============================================
// Checkout
// ============================================
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'info');
        return;
    }
    showNotification('Order placed! We will contact you soon. 🎉', 'success');
    cart = [];
    localStorage.setItem('ellyCart', JSON.stringify(cart));
    updateCartCount();
    if (window.location.pathname.includes('cart.html')) displayCart();
}

// ============================================
// Clear Cart
// ============================================
function clearCart() {
    if (cart.length === 0) return;
    cart = [];
    localStorage.setItem('ellyCart', JSON.stringify(cart));
    updateCartCount();
    if (window.location.pathname.includes('cart.html')) displayCart();
    showNotification('Cart cleared', 'info');
}

// ============================================
// Product Detail Page Renderer
// ============================================
function renderProductDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const product = PRODUCTS[id];

    if (!product) {
        document.getElementById('pd-content').innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-exclamation-triangle fa-3x mb-3" style="color:#e6b91e;"></i>
                <h3>Product not found</h3>
                <p class="text-muted">This product does not exist or may have been removed.</p>
                <a href="products.html" class="btn btn-gold mt-2">Browse All Products</a>
            </div>`;
        return;
    }

    // Update page title & breadcrumb
    document.title = `${product.name} — Elly Smart Gadgets`;
    const bcProduct = document.getElementById('bc-product');
    if (bcProduct) bcProduct.textContent = product.name;

    // Hero breadcrumb
    const heroTitle = document.getElementById('pd-hero-title');
    if (heroTitle) heroTitle.textContent = product.name;

    // Stars HTML
    function starsHtml(rating) {
        let html = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) html += '<i class="fas fa-star"></i>';
            else if (i - rating < 1)    html += '<i class="fas fa-star-half-alt"></i>';
            else                         html += '<i class="far fa-star"></i>';
        }
        return html;
    }

    const badgeHtml = product.badge
        ? `<span class="pd-badge ${product.badgeClass}">${product.badge}</span>`
        : '';

    const oldPriceHtml = product.oldPrice
        ? `<span class="pd-price-old">USh ${product.oldPrice.toLocaleString()}</span>`
        : '';

    // Build related products
    const relatedHtml = product.related.map(rid => {
        const r = PRODUCTS[rid];
        if (!r) return '';
        return `
            <div class="col-6 col-md-4">
                <div class="product-card">
                    <div class="product-img-wrap">
                        <img src="${r.image}" class="product-img" alt="${r.name}" onerror="this.src='https://placehold.co/300x210/0a2b3e/e6b91e?text=${encodeURIComponent(r.name)}'">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${r.name}</h5>
                        <div class="rating">${starsHtml(r.rating)}</div>
                        <div class="d-flex justify-content-between align-items-center mt-2">
                            <div class="price">USh ${r.price.toLocaleString()}</div>
                            <a href="product-detail.html?id=${r.id}" class="btn btn-teal" style="font-size:0.78rem;padding:5px 12px;">Details</a>
                        </div>
                    </div>
                </div>
            </div>`;
    }).join('');

    // Build reviews
    const reviewsHtml = product.reviews_data.map(rev => `
        <div class="review-card mb-3">
            <div class="d-flex align-items-start gap-3">
                <div class="review-avatar">${rev.name.charAt(0)}</div>
                <div class="flex-grow-1">
                    <div class="d-flex justify-content-between align-items-center flex-wrap gap-1 mb-1">
                        <strong style="font-size:0.92rem;">${rev.name}</strong>
                        <small class="text-muted">${rev.date}</small>
                    </div>
                    <div class="review-rating mb-1">${starsHtml(rev.rating)}</div>
                    <p class="mb-0" style="font-size:0.88rem;color:#555;">${rev.comment}</p>
                </div>
            </div>
        </div>`).join('');

    // Build specs rows
    const specsRows = product.specs.map(([label, value]) =>
        `<tr><td><strong>${label}</strong></td><td>${value}</td></tr>`
    ).join('');

    // Inject full content
    document.getElementById('pd-content').innerHTML = `
        <div class="row g-4 g-lg-5">
            <!-- Image gallery -->
            <div class="col-lg-5">
                <div class="pd-gallery">
                    <div class="pd-main-img-wrap">
                        <img id="pd-main-img" src="${product.image}" alt="${product.name}" class="pd-main-img"
                             onerror="this.src='https://placehold.co/500x500/0a2b3e/e6b91e?text=${encodeURIComponent(product.name)}'">
                    </div>
                    <div class="pd-thumbs">
                        <img src="${product.image}" class="pd-thumb active" alt="${product.name}" onclick="setMainImg(this)">
                        <img src="${product.image}" class="pd-thumb" alt="View 2" onclick="setMainImg(this)" style="filter:brightness(0.9);">
                        <img src="${product.image}" class="pd-thumb" alt="View 3" onclick="setMainImg(this)" style="filter:saturate(1.3);">
                    </div>
                </div>
            </div>

            <!-- Info panel -->
            <div class="col-lg-7">
                <div class="pd-info">
                    <div class="pd-category">${product.category}</div>
                    <h1 class="pd-title">${product.name}</h1>

                    <div class="pd-rating">
                        <span class="stars">${starsHtml(product.rating)}</span>
                        <strong>${product.rating}</strong>
                        <span class="count">(${product.reviews} reviews)</span>
                    </div>

                    <div class="pd-price-wrap">
                        <div class="pd-price">USh ${product.price.toLocaleString()}</div>
                        ${oldPriceHtml}
                        ${product.oldPrice ? `<span class="badge bg-danger" style="font-size:0.72rem;">Save USh ${(product.oldPrice - product.price).toLocaleString()}</span>` : ''}
                    </div>

                    <div class="pd-badge-wrap">
                        ${badgeHtml}
                        <span class="pd-badge green"><i class="fas fa-check me-1"></i>${product.inStock ? 'In Stock' : 'Out of Stock'}</span>
                        <span class="pd-badge teal"><i class="fas fa-shield-alt me-1"></i>6-Month Warranty</span>
                    </div>

                    <p class="pd-short-desc">${product.shortDesc}</p>

                    <!-- Quantity + CTA (desktop) -->
                    <div class="pd-desktop-cta">
                        <div class="qty-wrap">
                            <span class="qty-label">Quantity:</span>
                            <div class="qty-stepper">
                                <button class="qty-btn" onclick="qtyChange(-1)" aria-label="Decrease"><i class="fas fa-minus"></i></button>
                                <input type="number" class="qty-input" id="pd-qty" value="1" min="1" max="99">
                                <button class="qty-btn" onclick="qtyChange(1)" aria-label="Increase"><i class="fas fa-plus"></i></button>
                            </div>
                        </div>

                        <div class="pd-cta">
                            <button class="btn btn-gold btn-lg" onclick="pdAddToCart()">
                                <i class="fas fa-cart-plus"></i> Add to Cart
                            </button>
                            <a href="products.html" class="btn btn-outline-teal btn-lg">
                                <i class="fas fa-arrow-left"></i> Back
                            </a>
                        </div>
                    </div>

                    <!-- Delivery perks -->
                    <div class="pd-perks">
                        <div class="pd-perk"><i class="fas fa-truck"></i> Free delivery over USh 350k</div>
                        <div class="pd-perk"><i class="fas fa-shield-alt"></i> 6-month warranty</div>
                        <div class="pd-perk"><i class="fas fa-undo-alt"></i> 14-day returns</div>
                        <div class="pd-perk"><i class="fas fa-headset"></i> 24/7 support</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tabs -->
        <div class="mt-5">
            <ul class="nav pd-tabs" id="pdTabs">
                <li class="nav-item"><button class="nav-link active" data-bs-toggle="tab" data-bs-target="#tab-desc">Description</button></li>
                <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-specs">Specifications</button></li>
                <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-reviews">Reviews (${product.reviews_data.length})</button></li>
            </ul>
            <div class="tab-content pd-tab-content">
                <div class="tab-pane fade show active" id="tab-desc">
                    <div style="max-width:680px;font-size:0.95rem;line-height:1.8;color:#444;">
                        ${product.description}
                    </div>
                </div>
                <div class="tab-pane fade" id="tab-specs">
                    <div class="table-responsive" style="max-width:600px;">
                        <table class="table specs-table">
                            <thead><tr><th>Specification</th><th>Detail</th></tr></thead>
                            <tbody>${specsRows}</tbody>
                        </table>
                    </div>
                </div>
                <div class="tab-pane fade" id="tab-reviews">
                    <div style="max-width:640px;">
                        <div class="d-flex align-items-center gap-3 mb-4 p-3 rounded-3" style="background:var(--light-bg);">
                            <div style="text-align:center;">
                                <div style="font-size:3rem;font-weight:800;color:var(--primary-dark);line-height:1;">${product.rating}</div>
                                <div class="review-rating">${starsHtml(product.rating)}</div>
                                <small class="text-muted">${product.reviews} reviews</small>
                            </div>
                        </div>
                        ${reviewsHtml}
                    </div>
                </div>
            </div>
        </div>

        <!-- Related Products -->
        <div class="mt-5">
            <h3 class="page-title">You Might Also Like</h3>
            <div class="row g-3">${relatedHtml}</div>
        </div>`;

    // Store product id for cart button
    document.getElementById('pd-content').dataset.productId = product.id;

    // Sticky CTA inject
    const stickyCta = document.getElementById('sticky-cta');
    if (stickyCta) {
        stickyCta.innerHTML = `
            <div class="d-flex align-items-center gap-2 flex-grow-1">
                <img src="${product.image}" alt="${product.name}" style="width:44px;height:44px;object-fit:cover;border-radius:8px;">
                <div>
                    <div style="font-size:0.8rem;color:var(--muted-text);line-height:1;">${product.name}</div>
                    <div class="price" style="font-size:1rem;">USh ${product.price.toLocaleString()}</div>
                </div>
            </div>
            <button class="btn btn-gold" onclick="pdAddToCart()" style="flex-shrink:0;">
                <i class="fas fa-cart-plus me-1"></i>Add to Cart
            </button>`;
    }
}

// Quantity stepper helper
function qtyChange(delta) {
    const input = document.getElementById('pd-qty');
    if (!input) return;
    const val = Math.max(1, Math.min(99, parseInt(input.value || 1) + delta));
    input.value = val;
}

// Add to cart from product detail
function pdAddToCart() {
    const pdContent = document.getElementById('pd-content');
    if (!pdContent) return;
    const id = pdContent.dataset.productId;
    const product = PRODUCTS[id];
    if (!product) return;
    const qty = parseInt(document.getElementById('pd-qty')?.value || 1);
    for (let i = 0; i < qty; i++) addToCart(product.id, product.name, product.price, product.image);
    if (qty > 1) {
        // addToCart already shows 1 notification per call, show summary instead
    }
}

// Thumbnail switcher
function setMainImg(thumb) {
    const mainImg = document.getElementById('pd-main-img');
    if (!mainImg) return;
    mainImg.src = thumb.src;
    document.querySelectorAll('.pd-thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
}

// ============================================
// Back to Top
// ============================================
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ============================================
// DOMContentLoaded Init
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Inject animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInNotif {
            from { opacity: 0; transform: translateX(20px); }
            to   { opacity: 1; transform: translateX(0); }
        }`;
    document.head.appendChild(style);

    updateCartCount();

    // Search on keyup
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.addEventListener('keyup', searchProducts);

    // Cart page
    if (window.location.pathname.includes('cart.html')) displayCart();

    // Checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) checkoutBtn.addEventListener('click', checkout);

    // Product detail page
    if (window.location.pathname.includes('product-detail.html')) renderProductDetail();

    // Back to top
    initBackToTop();
});

// Global exports
window.addToCart      = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.searchProducts = searchProducts;
window.clearCart      = clearCart;
window.checkout       = checkout;
window.qtyChange      = qtyChange;
window.pdAddToCart    = pdAddToCart;
window.setMainImg     = setMainImg;
