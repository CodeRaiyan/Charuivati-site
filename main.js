// ========================================================
// 1. DATA
// ========================================================
const menuData = {
    frozen: [
        { id: "b_shami", name: "Beef Shami Kebab", desc: "Aromatic minced beef lentil patties.", options: [{ unit: "1 Piece", price: 50 }, { unit: "Box of 10", price: 500 }] },
        { id: "c_shami", name: "Chicken Shami Kebab", desc: "Spiced chicken blend, ideal for safe snacking.", options: [{ unit: "1 Piece", price: 40 }, { unit: "Box of 10", price: 400 }] },
        { id: "c_cutlet", name: "Chicken Cutlet", desc: "Crispy outer crumb shell with a savory filling.", options: [{ unit: "1 Piece", price: 75 }, { unit: "Box of 10", price: 750 }] },
        { id: "vc_roll", name: "Veg-Chicken Roll", desc: "Packed with fresh vegetables and pulled chicken.", options: [{ unit: "1 Piece", price: 35 }, { unit: "Box of 10", price: 350 }] },
        { id: "c_roll", name: "Chicken Roll", desc: "Classic satisfying homemade savory roll treat.", options: [{ unit: "1 Piece", price: 45 }, { unit: "Box of 10", price: 450 }] },
        { id: "vc_s_roll", name: "Veg-Chicken Spring Roll", desc: "Crispy light skin with a delicious mixed core.", options: [{ unit: "1 Piece", price: 35 }, { unit: "Box of 10", price: 300 }] },
        { id: "b_pitha", name: "Beef Pitha", desc: "Traditional style pastry wrapped flavor pocket.", options: [{ unit: "1 Piece", price: 45 }, { unit: "Box of 10", price: 400 }] },
        { id: "c_pitha", name: "Chicken Pitha", desc: "Light, warmly spiced localized dumpling style pie.", options: [{ unit: "1 Piece", price: 35 }, { unit: "Box of 10", price: 350 }] },
        { id: "r_cutlet", name: "Russian Cutlet", desc: "Rich and creamy shredded continental cutlet treat.", options: [{ unit: "1 Piece", price: 40 }, { unit: "Box of 10", price: 400 }] },
        { id: "hm_pie", name: "Half-Moon Pie", desc: "Savory crescent pockets stuffed with spiced filling.", options: [{ unit: "1 Piece", price: 35 }, { unit: "Box of 10", price: 350 }] },
        { id: "c_donut", name: "Chicken Donut", desc: "Fun-shaped breaded ring snacks, kids love them.", options: [{ unit: "1 Piece", price: 50 }, { unit: "Box of 10", price: 500 }] },
        { id: "c_patty", name: "Chicken Patty", desc: "Golden, juicy comfort packed in every bite!", options: [{ unit: "1 Piece", price: 60 }, { unit: "Box of 10", price: 600 }] },
        { id: "c_popsicle", name: "Chicken Popsicle", desc: "Crispy, juicy, savory bliss on a stick!", options: [{ unit: "1 Piece", price: 35 }, { unit: "Box of 10", price: 350 }] },
        { id: "c_momo", name: "Chicken Momo", desc: "Juicy minced meat wrapped in dough, steamed to perfection.", options: [{ unit: "1 Piece", price: 25 }, { unit: "Box of 10", price: 250 }] }
    ],
    desserts: [
        { id: "caramel_pud", name: "Caramel Pudding", desc: "Silky premium sweet baked dessert.", options: [{ unit: "200g Cup", price: 180 }, { unit: "600g Large", price: 400 }] },
        { id: "coconut_pud", name: "Coconut Pudding", desc: "Refreshing local tropical milky pudding treat.", options: [{ unit: "Small Cup", price: 50 }, { unit: "500g Large", price: 400 }] },
        { id: "pepe_halwa", name: "Peper Halwa", desc: "Sweet, clarified-butter infused green papaya halwa.", options: [{ unit: "1 Piece", price: 40 }, { unit: "Box of 10", price: 400 }] },
        { id: "gajorer_halwa", name: "Gajorer Halwa", desc: "Rich sweet dish prepared with fresh grated carrots.", options: [{ unit: "1 Piece", price: 35 }, { unit: "Box of 10", price: 350 }] },
        { id: "narikel_borfi", name: "Narikeler Borfi", desc: "Chewy sweet coconut milk diamond fudge cuts.", options: [{ unit: "1 Piece", price: 45 }, { unit: "Box of 10", price: 400 }] },
        { id: "booter_halwa", name: "Booter Halwa", desc: "Traditional aromatic split-chana lentil halwa fudge.", options: [{ unit: "1 Piece", price: 35 }, { unit: "Box of 10", price: 350 }] }
    ],
    pitha: [
        { id: "patisapta", name: "Patisapta Pitha", desc: "Crepes with kheer or sweet coconut stuffing.", options: [{ unit: "1 Piece", price: 50 }, { unit: "Box of 10", price: 500 }] },
        { id: "daisy_pitha", name: "Daisy Pitha", desc: "Artistic local designer sweet festival cake treats.", options: [{ unit: "1 Piece", price: 30 }, { unit: "Box of 10", price: 300 }] },
        { id: "rosbori", name: "Rosbori Pitha", desc: "Juicy fried dumpling shells soaked in thick sugar syrup.", options: [{ unit: "1 Piece", price: 30 }, { unit: "Box of 10", price: 300 }] },
        { id: "narikel_puli", name: "Narikel Puli", desc: "Classic crescent dumplings packed with sweet coconut.", options: [{ unit: "1 Piece", price: 35 }, { unit: "Box of 10", price: 350 }] },
        { id: "cupcake", name: "Vanilla Cupcake", desc: "Soft, light frosted individual dessert cakes.", options: [{ unit: "1 Piece", price: 30 }, { unit: "Box of 10", price: 300 }] },
        { id: "choco_brownie", name: "Chocolate Cupcake / Brownie", desc: "Fudgy rich dark chocolate square bars or cupcakes.", options: [{ unit: "1 Piece", price: 35 }, { unit: "Box of 10", price: 350 }] }
    ]
};
const TARGET_WHATSAPP_PHONE = "8801500-000000";
const PROMO_CODES = { "WELCOME10": 10, "CHOLO20": 20, "FROZEN15": 15 };
const globalCartState = {};
let activeDiscountPct = 0;
let activePromoCode = null;
const fallbackBgColors = ["#ff6b6b", "#f0c75e", "#6ddb9c", "#74b9ff", "#a29bfe", "#fd79a8", "#e17055", "#00cec9"];

function getItemById(id) {
    for (const cat of ["frozen", "desserts", "pitha"]) {
        const found = menuData[cat].find(i => i.id === id);
        if (found) return { ...found, category: cat };
    }
    return null;
}

// ========================================================
// 2. RENDER MENU
// ========================================================
function getItemRating(id) {
    const reviews = JSON.parse(localStorage.getItem(`reviews_${id}`) || "[]");
    if (reviews.length === 0) return { avg: 0, count: 0 };
    return { avg: (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1), count: reviews.length };
}

function getPlaceholderLetter(name) {
    return name.charAt(0);
}

function getPlaceholderColor(id) {
    let hash = 0;
    for (let i = 0; i < id.length; i++) hash = id.charCodeAt(i) + ((hash << 5) - hash);
    return fallbackBgColors[Math.abs(hash) % fallbackBgColors.length];
}

const imageFileMap = {
    "b_shami": "Beef Shami Kebab.jpg",
    "c_shami": "Chicken Kebab.jpg",
    "c_cutlet": "Chicken Cutlet.jpg",
    "vc_roll": "Veg-Chicken Roll.jpg",
    "c_roll": "Chicken Roll.jpg",
    "vc_s_roll": "Veg-Chicken Spring Roll.jpg",
    "b_pitha": "Beef Pitha.jpg",
    "c_pitha": "Chicken Pitha.jpg",
    "r_cutlet": "Russian Cutlet.jpg",
    "hm_pie": "Half-Moon Pie.jpg",
    "c_donut": "Chicken Donut.jpg",
    "c_patty": "Patty.jpg",
    "c_popsicle": "Popsicle.jpg",
    "c_momo": "Momo.jpg",

    "caramel_pud": "Caramel Pudding.jpg",
    "coconut_pud": "Coconut Pudding.jpg",
    "pepe_halwa": "Peper Halwa.jpg",
    "gajorer_halwa": "Gajorer Halwa.jpg",
    "narikel_borfi": "Narikeler Borfi.jpg",
    "booter_halwa": "Booter Halwa.jpg",

    "patisapta": "Patishapta.jpg",
    "daisy_pitha": "Daisy.jpg",
    "rosbori": "Roshbori.jpg",
    "narikel_puli": "Narikeler Puli.jpg",
    "cupcake": "Cupcake.jpg",
    "choco_brownie": "Brownie.jpg"
};

function getItemImagePath(dish, category) {
    const fileName = imageFileMap[dish.id] || `${dish.name}.jpg`;
    const catFolder = category || dish.category;
    return `images/${catFolder}/${encodeURIComponent(fileName)}`;
}

function buildMenuGridDOM(itemsList, targetElementId, category) {
    const containerNode = document.getElementById(targetElementId);
    if (!containerNode) return;

    let aggregateHtml = "";
    itemsList.forEach(dish => {
        const rating = getItemRating(dish.id);
        const starsHtml = rating.count > 0
            ? `<div class="food-rating"><span class="stars">${'★'.repeat(Math.round(rating.avg))}${'☆'.repeat(5 - Math.round(rating.avg))}</span> <span class="review-count">(${rating.count})</span></div>`
            : '';

        let variantOptionsHtml = "";
        dish.options.forEach((opt, idx) => {
            variantOptionsHtml += `<label class="variant-option${idx === 0 ? ' selected' : ''}">
                <input type="radio" name="${dish.id}_variant" value="${idx}" ${idx === 0 ? 'checked' : ''} hidden>
                ${opt.unit} — ৳${opt.price}
            </label>`;
        });

        const placeholderColor = getPlaceholderColor(dish.id);
        const placeholderLetter = getPlaceholderLetter(dish.name);

        aggregateHtml += `
            <article class="food-card fade-in-section" data-category="${category}" data-id="${dish.id}" data-raw-payload='${JSON.stringify(dish).replace(/'/g, "&#39;")}'>
                <div class="food-img-wrapper">
                    <img class="food-img" src="${getItemImagePath(dish, category)}" alt="${dish.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                    <div class="food-img-placeholder" style="display:none;background:${placeholderColor}22;color:${placeholderColor};">${placeholderLetter}</div>
                </div>
                <div class="food-info">
                    <h3 class="food-title">${dish.name}</h3>
                    ${starsHtml}
                    <p class="food-description">${dish.desc}</p>
                    <div class="variant-selector-wrapper">
                        <div class="variant-options">${variantOptionsHtml}</div>
                    </div>
                </div>
                <button type="button" class="btn-add-tray" data-id="${dish.id}">Add to Tray</button>
            </article>
        `;
    });
    containerNode.innerHTML = aggregateHtml;
}

buildMenuGridDOM(menuData.frozen, "frozen-grid", "frozen");
buildMenuGridDOM(menuData.desserts, "dessert-grid", "desserts");
buildMenuGridDOM(menuData.pitha, "pitha-grid", "pitha");

// ========================================================
// 3. HERO CAROUSEL
// ========================================================
(function initCarousel() {
    const track = document.getElementById("carousel-track");
    const slides = track.querySelectorAll(".carousel-slide");
    const dotsContainer = document.getElementById("carousel-dots");
    const prevBtn = document.querySelector(".carousel-prev");
    const nextBtn = document.querySelector(".carousel-next");
    let current = 0;
    let interval;

    slides.forEach((_, i) => {
        const dot = document.createElement("span");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goTo(i));
        dotsContainer.appendChild(dot);
    });

    const carousel = document.getElementById("hero-carousel");

    function goTo(index) {
        current = index;
        const slideWidth = carousel.offsetWidth;
        track.style.transform = `translateX(-${current * slideWidth}px)`;
        dotsContainer.querySelectorAll("span").forEach((d, i) => d.classList.toggle("active", i === current));
    }

    function next() { goTo((current + 1) % slides.length); }
    function prev() { goTo((current - 1 + slides.length) % slides.length); }

    function startAuto() { interval = setInterval(next, 5000); }
    function stopAuto() { clearInterval(interval); }

    nextBtn.addEventListener("click", () => { stopAuto(); next(); startAuto(); });
    prevBtn.addEventListener("click", () => { stopAuto(); prev(); startAuto(); });

    carousel.addEventListener("mouseenter", stopAuto);
    carousel.addEventListener("mouseleave", startAuto);

    // Recalculate on resize so slides align correctly
    window.addEventListener("resize", () => goTo(current));

    startAuto();
})();

// ========================================================
// 4. SCROLL ANIMATIONS (IntersectionObserver)
// ========================================================
(function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".fade-in-section").forEach(el => observer.observe(el));

    const mutationObserver = new MutationObserver(() => {
        document.querySelectorAll(".fade-in-section:not(.is-visible)").forEach(el => observer.observe(el));
    });
    mutationObserver.observe(document.getElementById("frozen-grid").parentElement, { childList: true, subtree: true });
})();

// ========================================================
// 5. CATEGORY TABS + SEARCH
// ========================================================
(function initTabsAndSearch() {
    const tabs = document.querySelectorAll(".tab-btn");
    const searchInput = document.getElementById("search-input");

    function filterItems() {
        const activeTab = document.querySelector(".tab-btn.active").dataset.category;
        const query = searchInput.value.toLowerCase().trim();

        document.querySelectorAll(".food-card").forEach(card => {
            const cat = card.dataset.category;
            const name = card.querySelector(".food-title").textContent.toLowerCase();
            const desc = card.querySelector(".food-description").textContent.toLowerCase();
            const matchesTab = activeTab === "all" || cat === activeTab;
            const matchesSearch = !query || name.includes(query) || desc.includes(query);
            card.style.display = matchesTab && matchesSearch ? "" : "none";
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            filterItems();
        });
    });

    searchInput.addEventListener("input", filterItems);
})();

// ========================================================
// 6. ACCORDION (Smooth)
// ========================================================
document.querySelectorAll('.category-title').forEach(titleElement => {
    titleElement.addEventListener('click', () => {
        const targetGridId = titleElement.getAttribute('data-target');
        const targetGrid = document.getElementById(targetGridId);

        titleElement.classList.toggle('collapsed');
        if (targetGrid) {
            targetGrid.classList.toggle('hidden');
        }
    });
});

// ========================================================
// 7. CART / TRAY
// ========================================================
function syncCartStateUI() {
    const displayTrayNode = document.getElementById("cart-items-list");
    const checkoutSubmitButton = document.getElementById("btn-submit-order");
    const subtotalTextNode = document.getElementById("cart-total-amount");
    const discountTextNode = document.getElementById("discount-amount");
    const discountLine = document.getElementById("discount-line");
    const grandTotalNode = document.getElementById("cart-grand-total");
    const trayCount = document.getElementById("tray-count");

    let cumulativeSum = 0;
    let totalQty = 0;
    const itemsInTrayArray = Object.keys(globalCartState);

    if (itemsInTrayArray.length === 0) {
        displayTrayNode.innerHTML = `<p class="empty-message">Your tray is empty. Add yummy treats to start!</p>`;
        subtotalTextNode.textContent = "৳ 0";
        discountLine.style.display = "none";
        grandTotalNode.textContent = "৳ 0";
        trayCount.textContent = "0";
        checkoutSubmitButton.disabled = true;
        return;
    }

    let trayListHtml = "";
    itemsInTrayArray.forEach(stateKey => {
        const entry = globalCartState[stateKey];
        const costValue = entry.qty * entry.pricePerUnit;
        cumulativeSum += costValue;
        totalQty += entry.qty;

        trayListHtml += `
            <div class="cart-row">
                <div class="cart-item-info">
                    <div><strong>${entry.name}</strong></div>
                    <div style="font-size:0.75rem;color:#666;">${entry.unit} x ৳${entry.pricePerUnit}</div>
                </div>
                <div class="cart-controls">
                    <button type="button" class="btn-qty-adjust remove-btn" data-key="${stateKey}" data-action="decrease">−</button>
                    <span>${entry.qty}</span>
                    <button type="button" class="btn-qty-adjust" data-key="${stateKey}" data-action="increase">+</button>
                    <button type="button" class="btn-remove-item" data-key="${stateKey}" aria-label="Remove item">&times;</button>
                </div>
            </div>
        `;
    });

    displayTrayNode.innerHTML = trayListHtml;
    subtotalTextNode.textContent = `৳ ${cumulativeSum}`;
    trayCount.textContent = totalQty;

    const discountAmount = Math.round(cumulativeSum * activeDiscountPct / 100);
    if (discountAmount > 0) {
        discountLine.style.display = "flex";
        discountTextNode.textContent = `-৳ ${discountAmount}`;
        grandTotalNode.textContent = `৳ ${cumulativeSum - discountAmount}`;
    } else {
        discountLine.style.display = "none";
        grandTotalNode.textContent = `৳ ${cumulativeSum}`;
    }

    checkoutSubmitButton.disabled = false;
}

// Event delegation for Add / Qty / Modal / Quick-view
document.body.addEventListener("click", function(event) {
    // Add to Tray (skip if inside modal — modal has its own handler)
    if (event.target.classList.contains("btn-add-tray") && !event.target.closest(".modal-overlay")) {
        const targetBtn = event.target;
        const rootCard = targetBtn.closest(".food-card");
        if (!rootCard) return;
        const raw = rootCard.dataset.rawPayload;
        const embeddedData = JSON.parse(raw);

        const chosenIndex = parseInt(rootCard.querySelector("input[name$='_variant']:checked").value, 10);
        const activeVariant = embeddedData.options[chosenIndex];
        const stateMappingKey = `${embeddedData.id}_v_${chosenIndex}`;

        if (!globalCartState[stateMappingKey]) {
            globalCartState[stateMappingKey] = {
                id: embeddedData.id,
                name: embeddedData.name,
                unit: activeVariant.unit,
                pricePerUnit: activeVariant.price,
                qty: 1
            };
        } else {
            globalCartState[stateMappingKey].qty += 1;
        }

        // Flying animation
        createFlyingAnimation(targetBtn);

        const fallbackTextStr = targetBtn.textContent;
        targetBtn.textContent = "Added ✓";
        targetBtn.style.backgroundColor = "#27ae60";
        targetBtn.disabled = true;

        setTimeout(() => {
            targetBtn.textContent = fallbackTextStr;
            targetBtn.style.backgroundColor = "";
            targetBtn.disabled = false;
        }, 400);

        syncCartStateUI();
    }

    // Qty adjust
    if (event.target.classList.contains("btn-qty-adjust")) {
        const key = event.target.getAttribute("data-key");
        const action = event.target.getAttribute("data-action");

        if (globalCartState[key]) {
            if (action === "increase") {
                globalCartState[key].qty += 1;
            } else if (action === "decrease") {
                globalCartState[key].qty -= 1;
                if (globalCartState[key].qty <= 0) {
                    delete globalCartState[key];
                }
            }
            syncCartStateUI();
        }
    }

    // Quick-view modal (click on food card image or title area, not on button)
    if (event.target.closest(".food-card") && !event.target.closest(".btn-add-tray") && !event.target.closest(".variant-option")) {
        const card = event.target.closest(".food-card");
        openQuickView(card.dataset.id);
    }

    // Remove single item
    if (event.target.classList.contains("btn-remove-item")) {
        const key = event.target.getAttribute("data-key");
        delete globalCartState[key];
        syncCartStateUI();
    }

    // Clear all items
    if (event.target.id === "btn-clear-tray") {
        Object.keys(globalCartState).forEach(k => delete globalCartState[k]);
        syncCartStateUI();
    }

    // Variant radio toggle visual
    if (event.target.closest(".variant-option")) {
        const label = event.target.closest(".variant-option");
        label.closest(".variant-options").querySelectorAll(".variant-option").forEach(l => l.classList.remove("selected"));
        label.classList.add("selected");
    }
});

// ========================================================
// 8. FLYING ANIMATION
// ========================================================
function createFlyingAnimation(btn) {
    const rect = btn.getBoundingClientRect();
    const sidebar = document.getElementById("checkout-sidebar");
    const sidebarRect = sidebar.getBoundingClientRect();

    const flyer = document.createElement("div");
    flyer.className = "flying-item";
    flyer.textContent = "+1";
    flyer.style.left = `${rect.left + rect.width / 2 - 30}px`;
    flyer.style.top = `${rect.top}px`;
    document.body.appendChild(flyer);

    requestAnimationFrame(() => {
        flyer.style.left = `${sidebarRect.left + sidebarRect.width / 2 - 30}px`;
        flyer.style.top = `${sidebarRect.top + 40}px`;
        flyer.style.width = "30px";
        flyer.style.height = "30px";
        flyer.style.fontSize = "0.8rem";
        flyer.style.opacity = "0.5";
    });

    setTimeout(() => flyer.remove(), 800);
}

// ========================================================
// 9. QUICK-VIEW MODAL
// ========================================================
function openQuickView(itemId) {
    const dish = getItemById(itemId);
    if (!dish) return;

    const rating = getItemRating(itemId);
    const reviews = JSON.parse(localStorage.getItem(`reviews_${itemId}`) || "[]");
    const starsHtml = rating.count > 0
        ? `<span class="stars">${'★'.repeat(Math.round(rating.avg))}${'☆'.repeat(5 - Math.round(rating.avg))}</span> <span class="review-count">(${rating.count} reviews)</span>`
        : '<span class="review-count">No reviews yet</span>';

    let variantOptionsHtml = "";
    dish.options.forEach((opt, idx) => {
        variantOptionsHtml += `<label class="variant-option${idx === 0 ? ' selected' : ''}">
            <input type="radio" name="modal_${dish.id}_variant" value="${idx}" ${idx === 0 ? 'checked' : ''} hidden>
            ${opt.unit} — ৳${opt.price}
        </label>`;
    });

    let reviewsHtml = "";
    if (reviews.length > 0) {
        reviewsHtml = '<h4 style="margin:1rem 0 0.5rem;font-size:0.95rem;">Customer Reviews</h4>';
        reviews.slice(0, 3).forEach(r => {
            reviewsHtml += `<div class="review-item">
                <div class="reviewer">${r.name}</div>
                <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
                <div class="review-text">${r.text}</div>
            </div>`;
        });
    }

    const placeholderColor = getPlaceholderColor(dish.id);
    const placeholderLetter = getPlaceholderLetter(dish.name);

    document.getElementById("modal-body").innerHTML = `
        <div class="food-img-wrapper">
            <img class="food-img" src="${getItemImagePath(dish)}" alt="${dish.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
            <div class="food-img-placeholder" style="display:none;background:${placeholderColor}22;color:${placeholderColor};">${placeholderLetter}</div>
        </div>
        <h3 class="food-title">${dish.name}</h3>
        <div class="food-rating">${starsHtml}</div>
        <p class="food-description">${dish.desc}</p>
        <div class="variant-selector-wrapper">
            <div class="variant-options">${variantOptionsHtml}</div>
        </div>
        <button type="button" class="btn-add-tray" data-id="${dish.id}">Add to Tray</button>
        ${reviewsHtml}
    `;

    document.getElementById("modal-overlay").classList.add("open");

    // Add to tray from modal
    document.querySelector("#modal-body .btn-add-tray").addEventListener("click", function() {
        const chosenIndex = parseInt(document.querySelector("#modal-body input[name$='_variant']:checked")?.value || "0", 10);
        const variant = dish.options[chosenIndex];
        const key = `${dish.id}_v_${chosenIndex}`;

        if (!globalCartState[key]) {
            globalCartState[key] = { id: dish.id, name: dish.name, unit: variant.unit, pricePerUnit: variant.price, qty: 1 };
        } else {
            globalCartState[key].qty += 1;
        }
        syncCartStateUI();

        this.textContent = "Added ✓";
        this.style.backgroundColor = "#27ae60";
        setTimeout(() => {
            this.textContent = "Add to Tray";
            this.style.backgroundColor = "";
        }, 400);
    });

    // Variant visual
    document.querySelector("#modal-body").addEventListener("click", (e) => {
        if (e.target.closest(".variant-option")) {
            e.target.closest(".variant-options").querySelectorAll(".variant-option").forEach(l => l.classList.remove("selected"));
            e.target.closest(".variant-option").classList.add("selected");
        }
    });
}

document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("modal-overlay").classList.remove("open");
});
document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) document.getElementById("modal-overlay").classList.remove("open");
});

// ========================================================
// 10. MOBILE TRAY TOGGLE
// ========================================================
(function initMobileTray() {
    const fab = document.getElementById("tray-fab");
    const sidebar = document.getElementById("checkout-sidebar");
    const closeBtn = document.getElementById("sidebar-close");

    fab.addEventListener("click", () => sidebar.classList.toggle("open"));
    closeBtn.addEventListener("click", () => sidebar.classList.remove("open"));

    document.addEventListener("click", (e) => {
        if (window.innerWidth <= 991 && sidebar.classList.contains("open")) {
            if (!sidebar.contains(e.target) && !fab.contains(e.target)) {
                sidebar.classList.remove("open");
            }
        }
    });
})();

// ========================================================
// 11. PROMO CODES
// ========================================================
document.getElementById("promo-apply-btn").addEventListener("click", () => {
    const input = document.getElementById("promo-input");
    const msg = document.getElementById("promo-message");
    const code = input.value.trim().toUpperCase();

    if (PROMO_CODES[code]) {
        if (activePromoCode === code) {
            msg.textContent = "Code already applied!";
            msg.className = "promo-message error";
            return;
        }
        activeDiscountPct = PROMO_CODES[code];
        activePromoCode = code;
        msg.textContent = `${activeDiscountPct}% discount applied!`;
        msg.className = "promo-message success";
        input.disabled = true;
        document.getElementById("promo-apply-btn").disabled = true;
        syncCartStateUI();
    } else {
        msg.textContent = "Invalid promo code";
        msg.className = "promo-message error";
    }
});

// ========================================================
// 12. DELIVERY FORM + WHATSAPP
// ========================================================
document.getElementById("delivery-form").addEventListener("submit", function(formEvent) {
    formEvent.preventDefault();

    const cName = document.getElementById("cust-name").value.trim();
    const cPhone = document.getElementById("cust-phone").value.trim();
    const cAddress = document.getElementById("cust-address").value.trim();
    const cSlot = document.getElementById("delivery-slot").value;
    const cNotes = document.getElementById("order-notes").value.trim();

    // Validation
    let valid = true;
    if (!cName) { document.getElementById("name-error").textContent = "Name is required"; valid = false; }
    else { document.getElementById("name-error").textContent = ""; }

    if (!cPhone) { document.getElementById("phone-error").textContent = "Phone is required"; valid = false; }
    else if (!/^01\d{9}$/.test(cPhone.replace(/[^0-9]/g, '')) && !/^\d{11}$/.test(cPhone.replace(/[^0-9]/g, ''))) {
        document.getElementById("phone-error").textContent = "Enter a valid 11-digit phone number";
        valid = false;
    } else { document.getElementById("phone-error").textContent = ""; }

    if (!cAddress) { document.getElementById("address-error").textContent = "Address is required"; valid = false; }
    else { document.getElementById("address-error").textContent = ""; }

    if (!valid) return;

    let billingGrandTotal = 0;
    Object.values(globalCartState).forEach(item => {
        billingGrandTotal += item.qty * item.pricePerUnit;
    });
    const finalTotal = billingGrandTotal - Math.round(billingGrandTotal * activeDiscountPct / 100);

    const slotLabels = { morning: "Morning (10AM – 12PM)", afternoon: "Afternoon (12PM – 4PM)", evening: "Evening (4PM – 8PM)" };

    let textBillReport = `*New Order: Charuivati (চড়ুইভাতি)*\n`;
    textBillReport += `=========================\n\n`;

    Object.values(globalCartState).forEach(item => {
        const sumItemCost = item.qty * item.pricePerUnit;
        textBillReport += `• *${item.name}* (${item.unit})\n  Qty: ${item.qty} × ৳${item.pricePerUnit} = *৳${sumItemCost}*\n\n`;
    });

    textBillReport += `=========================\n`;
    if (activeDiscountPct > 0) {
        textBillReport += `*Discount (${activeDiscountPct}%): -৳${Math.round(billingGrandTotal * activeDiscountPct / 100)}*\n`;
    }
    textBillReport += `*Grand Total: ৳${finalTotal}*\n\n`;
    textBillReport += `*Delivery Details:*\n`;
    textBillReport += `👤 Name: ${cName}\n`;
    textBillReport += `📞 Phone: ${cPhone}\n`;
    textBillReport += `📍 Address: ${cAddress}\n`;
    if (cSlot) textBillReport += `🕐 Slot: ${slotLabels[cSlot] || cSlot}\n`;
    if (cNotes) textBillReport += `📝 Notes: ${cNotes}\n\n`;
    textBillReport += `_Please confirm availability and delivery slot!_`;

    const outputUrlString = `https://api.whatsapp.com/send?phone=${TARGET_WHATSAPP_PHONE}&text=${encodeURIComponent(textBillReport)}`;
    const w = window.open(outputUrlString, "_blank");
    if (!w || w.closed) {
        window.location.href = outputUrlString;
    }

    // Save order history
    /*saveOrderToHistory({ items: { ...globalCartState }, total: finalTotal, discount: activeDiscountPct, name: cName, phone: cPhone, address: cAddress, slot: cSlot, notes: cNotes });*/

    // Clear cart
    Object.keys(globalCartState).forEach(k => delete globalCartState[k]);
    activeDiscountPct = 0;
    activePromoCode = null;
    document.getElementById("promo-input").value = "";
    document.getElementById("promo-input").disabled = false;
    document.getElementById("promo-apply-btn").disabled = false;
    document.getElementById("promo-message").textContent = "";
    syncCartStateUI();

    formEvent.target.reset();

    // Show order status
    showOrderStatus();

    // Close mobile tray
    document.getElementById("checkout-sidebar").classList.remove("open");
});

// Real-time validation clearing
document.getElementById("cust-name").addEventListener("input", () => document.getElementById("name-error").textContent = "");
document.getElementById("cust-phone").addEventListener("input", () => document.getElementById("phone-error").textContent = "");
document.getElementById("cust-address").addEventListener("input", () => document.getElementById("address-error").textContent = "");

// ========================================================
// 13. ORDER STATUS TRACKER
// ========================================================
function showOrderStatus() {
    const section = document.getElementById("order-status-section");
    section.style.display = "block";

    const steps = section.querySelectorAll(".status-step");
    const timeEl = document.getElementById("status-time");

    // Reset
    steps.forEach(s => { s.classList.remove("completed", "active"); });
    steps[0].classList.add("completed");

    const now = new Date();
    timeEl.textContent = `Order received at ${now.toLocaleTimeString("en-BD", { hour: '2-digit', minute: '2-digit' })}`;

    // Simulate preparing after 10s, delivered after 20s
    setTimeout(() => {
        steps[0].classList.remove("completed");
        steps[0].classList.add("completed");
        steps[1].classList.add("active");
        steps[1].querySelector("span").textContent = "⋯";
        timeEl.textContent = "Status: Being prepared in the kitchen...";
    }, 10000);

    setTimeout(() => {
        steps[1].classList.remove("active");
        steps[1].classList.add("completed");
        steps[1].querySelector("span").textContent = "✓";
        steps[2].classList.add("active");
        steps[2].querySelector("span").textContent = "⋯";
        timeEl.textContent = "Status: Out for delivery! 🎉";
    }, 20000);

    setTimeout(() => {
        steps[2].classList.remove("active");
        steps[2].classList.add("completed");
        steps[2].querySelector("span").textContent = "✓";
        timeEl.textContent = "Delivered! Enjoy your meal 😊";
    }, 35000);
}

// ========================================================
// 14. ORDER HISTORY (localStorage)
// ========================================================
function saveOrderToHistory(order) {
    const history = JSON.parse(localStorage.getItem("orderHistory") || "[]");
    order.timestamp = new Date().toISOString();
    history.unshift(order);
    localStorage.setItem("orderHistory", JSON.stringify(history.slice(0, 20)));
    renderOrderHistory();
}

function renderOrderHistory() {
    const history = JSON.parse(localStorage.getItem("orderHistory") || "[]");
    const section = document.getElementById("order-history-section");
    const list = document.getElementById("order-history-list");

    if (history.length === 0) {
        section.style.display = "none";
        return;
    }

    section.style.display = "block";
    let html = "";
    history.forEach((order, idx) => {
        const date = new Date(order.timestamp);
        const itemSummary = Object.values(order.items).map(i => `${i.name} x${i.qty}`).join(", ");
        html += `
            <div class="order-history-card">
                <div class="order-header">
                    <span>${date.toLocaleDateString("en-BD")} ${date.toLocaleTimeString("en-BD", { hour: '2-digit', minute: '2-digit' })}</span>
                    <span>${order.name}</span>
                </div>
                <div class="order-items">${itemSummary}</div>
                <div class="order-total">Total: ৳${order.total}</div>
                <button class="btn-reorder" data-order-idx="${idx}">Reorder</button>
            </div>
        `;
    });
    list.innerHTML = html;

    const clearHistoryBtn = document.getElementById("btn-clear-history");
    if (clearHistoryBtn) {
        clearHistoryBtn.onclick = function () {
            localStorage.removeItem("orderHistory");
            section.style.display = "none";
        };
    }

    list.querySelectorAll(".btn-reorder").forEach(btn => {
        btn.addEventListener("click", () => {
            const idx = parseInt(btn.dataset.orderIdx, 10);
            const order = history[idx];
            Object.values(order.items).forEach(item => {
                const key = `${item.id}_v_${item.unit === item.unit ? 0 : 0}`;
                if (!globalCartState[key]) {
                    globalCartState[key] = { ...item };
                } else {
                    globalCartState[key].qty += item.qty;
                }
            });
            syncCartStateUI();
            btn.textContent = "Re-added!";
            setTimeout(() => { btn.textContent = "Reorder"; }, 1000);
        });
    });
}

renderOrderHistory();

// ========================================================
// 15. CUSTOMER REVIEWS
// ========================================================
(function initReviews() {
    const overlay = document.getElementById("review-form-overlay");
    const openBtn = document.getElementById("btn-review-add");
    const closeBtn = document.getElementById("review-form-close");
    const submitBtn = document.getElementById("review-submit-btn");
    const stars = document.querySelectorAll("#star-input .star");
    let selectedRating = 0;

    openBtn.addEventListener("click", () => overlay.classList.add("open"));
    closeBtn.addEventListener("click", () => overlay.classList.remove("open"));
    overlay.addEventListener("click", (e) => { if (e.target === overlay) overlay.classList.remove("open"); });

    stars.forEach(star => {
        star.addEventListener("click", () => {
            selectedRating = parseInt(star.dataset.value, 10);
            stars.forEach((s, i) => s.classList.toggle("active", i < selectedRating));
            document.getElementById("review-star-error").textContent = "";
        });
        star.addEventListener("mouseenter", () => {
            const val = parseInt(star.dataset.value, 10);
            stars.forEach((s, i) => s.style.color = i < val ? "#f5a623" : "#ddd");
        });
        star.addEventListener("mouseleave", () => {
            stars.forEach((s, i) => s.style.color = i < selectedRating ? "#f5a623" : "#ddd");
        });
    });

    submitBtn.addEventListener("click", () => {
        const name = document.getElementById("review-name").value.trim() || "Anonymous";
        const text = document.getElementById("review-text").value.trim();

        if (!selectedRating) {
            document.getElementById("review-star-error").textContent = "Please select a rating";
            return;
        }
        if (!text) {
            document.getElementById("review-star-error").textContent = "Please write a review";
            return;
        }

        // Save to all items or to a general store
        const review = { name, text, rating: selectedRating, timestamp: new Date().toISOString() };
        const allReviews = JSON.parse(localStorage.getItem("allReviews") || "[]");
        allReviews.unshift(review);
        localStorage.setItem("allReviews", JSON.stringify(allReviews.slice(0, 50)));

        overlay.classList.remove("open");
        document.getElementById("review-name").value = "";
        document.getElementById("review-text").value = "";
        selectedRating = 0;
        stars.forEach(s => s.classList.remove("active"));

        renderReviewsCarousel();
        updateAllItemRatings();

        // Re-render menu to update star displays
        document.getElementById("frozen-grid").innerHTML = "";
        document.getElementById("dessert-grid").innerHTML = "";
        document.getElementById("pitha-grid").innerHTML = "";
        buildMenuGridDOM(menuData.frozen, "frozen-grid", "frozen");
        buildMenuGridDOM(menuData.desserts, "dessert-grid", "desserts");
        buildMenuGridDOM(menuData.pitha, "pitha-grid", "pitha");
    });
})();

function renderReviewsCarousel() {
    const allReviews = JSON.parse(localStorage.getItem("allReviews") || "[]");
    const track = document.getElementById("reviews-carousel");
    const dots = document.getElementById("reviews-dots");

    if (allReviews.length === 0) {
        track.innerHTML = '<p style="text-align:center;color:var(--text-muted);">No reviews yet. Be the first to share!</p>';
        dots.innerHTML = "";
        return;
    }

    let current = 0;
    let html = '<div class="reviews-track">';
    allReviews.slice(0, 10).forEach(r => {
        html += `<div class="review-card">
            <div class="reviewer-name">${r.name}</div>
            <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
            <div class="review-text">"${r.text}"</div>
        </div>`;
    });
    html += '</div>';
    track.innerHTML = html;

    const cards = track.querySelectorAll(".review-card");
    dots.innerHTML = "";
    cards.forEach((_, i) => {
        const dot = document.createElement("span");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToReview(i));
        dots.appendChild(dot);
    });

    function goToReview(idx) {
        current = idx;
        track.querySelector(".reviews-track").style.transform = `translateX(-${current * 100}%)`;
        dots.querySelectorAll("span").forEach((d, i) => d.classList.toggle("active", i === current));
    }

    if (cards.length > 1) {
        setInterval(() => {
            goToReview((current + 1) % cards.length);
        }, 4000);
    }
}

function updateAllItemRatings() {
    const allReviews = JSON.parse(localStorage.getItem("allReviews") || "[]");
    // For now all reviews are general; in a full app they'd be per-item.
    // We'll update the localStorage per-item format for consistency.
}

renderReviewsCarousel();

// ========================================================
// 17. INIT
// ========================================================
syncCartStateUI();

// Observe new fade-in cards after re-render
const observer = new MutationObserver(() => {
    document.querySelectorAll(".fade-in-section:not(.is-visible)").forEach(el => {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        obs.observe(el);
    });
});
if (document.querySelector(".menu-container")) {
    observer.observe(document.querySelector(".menu-container"), { childList: true, subtree: true });
}
