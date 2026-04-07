import { siteData } from "/assets/js/site-data.js";

const app = document.querySelector("#app");
const pageId = document.body.dataset.page || "home";
const CAROUSEL_AUTO_ADVANCE_MS = 3000;

const renderApp = () => {
    app.innerHTML = `
        <div class="site-shell">
            ${renderHeader(pageId)}
            <main class="page-main">
                <div class="page-container">
                    ${renderPage(pageId)}
                </div>
            </main>
            ${renderFooter()}
        </div>
    `;

    initNav();
    initCarousels();
};

const renderHeader = (currentPage) => `
    <header class="site-header">
        <div class="site-header__inner">
            <a class="site-brand" href="/">${siteData.siteTitle}</a>
            <button class="site-nav__toggle" type="button" aria-expanded="false" aria-controls="site-nav-list">
                <span class="site-nav__toggle-icon"><span></span></span>
                <span>Menu</span>
            </button>
            <nav class="site-nav" aria-label="Main navigation">
                <ul class="site-nav__list" id="site-nav-list">
                    ${siteData.navigation.map((item) => `
                        <li>
                            <a class="site-nav__link ${item.id === currentPage ? "is-active" : ""}" href="${item.href}">
                                ${item.label}
                            </a>
                        </li>
                    `).join("")}
                </ul>
            </nav>
        </div>
    </header>
`;

const renderFooter = () => `
    <footer class="site-footer">
        <div class="site-footer__inner">
            <p>${siteData.footerHtml}</p>
        </div>
    </footer>
`;

const renderPage = (currentPage) => {
    if (currentPage === "home") {
        return renderHomePage();
    }

    if (currentPage === "publications") {
        return renderPublicationsPage();
    }

    if (currentPage === "setups") {
        return renderSetupsPage();
    }

    if (currentPage === "awards") {
        return renderAwardsPage();
    }

    return renderNotFoundPage();
};

const renderHomePage = () => `
    <div class="stack">
        ${renderProfileCard()}
        ${renderEducationCard()}
        ${renderSelectedPublicationsCard()}
        ${renderSelectedAwardsCard()}
    </div>
`;

const renderProfileCard = () => `
    <section class="card profile-card">
        <div class="profile-card__main">
            <div class="profile-card__content">
                <div class="profile-card__title-row">
                    <h1 class="profile-card__name">${siteData.profile.name}</h1>
                </div>
                <div class="profile-card__positions">
                    ${siteData.profile.positions.map((position) => `
                        <div class="profile-card__position">
                            <img class="profile-card__position-logo" src="${position.logo}" alt="">
                            <span>${position.text}</span>
                        </div>
                    `).join("")}
                </div>
                <div class="profile-card__bio">
                    ${siteData.profile.bio.map((paragraph) => `<p>${paragraph}</p>`).join("")}
                </div>
            </div>
            <div class="profile-card__portrait">
                <img class="profile-card__portrait-image" src="${siteData.profile.portrait}" alt="Portrait of Yuhao Chen">
            </div>
        </div>
        <div class="profile-card__links">
            ${siteData.profile.links.map((link) => `
                <a class="chip-link" href="${link.href}" ${opensNewTab(link.href) ? 'target="_blank" rel="noreferrer"' : ""}>
                    <span class="chip-link__icon">${link.shortLabel}</span>
                    <span>${link.label}</span>
                </a>
            `).join("")}
        </div>
    </section>
`;

const renderEducationCard = () => `
    <section class="card section-card">
        <div class="section-card__header">
            <h2 class="section-card__title">Education</h2>
        </div>
        <div class="section-card__body section-card__body--padded">
            <ul class="summary-list">
                ${siteData.education.map((item) => `
                    <li class="education-item">
                        <div class="education-item__header">
                            <div class="education-item__school">
                                <img class="education-item__logo" src="${item.logo}" alt="">
                                <p class="education-item__name">${item.name}</p>
                            </div>
                            <div class="education-item__date">${item.date}</div>
                        </div>
                        <div class="education-item__position">${item.position}</div>
                    </li>
                `).join("")}
            </ul>
        </div>
    </section>
`;

const renderSelectedAwardsCard = () => `
    <section class="card section-card">
        <div class="section-card__header">
            <h2 class="section-card__title">Selected Awards</h2>
            <a class="link-pill" href="/awards/">More</a>
        </div>
        <div class="section-card__body section-card__body--padded">
            <ul class="summary-list summary-awards summary-awards--stacked">
                ${siteData.homeAwards.map((award) => `
                    <li>
                        <span>${award.name}</span>
                        <span class="summary-awards__date">${award.date}</span>
                    </li>
                `).join("")}
            </ul>
        </div>
    </section>
`;

const renderSelectedPublicationsCard = () => `
    <section class="card section-card">
        <div class="section-card__header">
            <h2 class="section-card__title">Selected Publications</h2>
            <a class="link-pill" href="/publications/">More</a>
        </div>
        <div class="section-card__body section-card__body--padded">
            ${siteData.selectedPublications.map((publication) => `
                <article class="publication-preview">
                    <div>
                        <div class="publication-preview__cover-frame">
                            <img class="publication-preview__cover" src="${publication.cover}" alt="${publication.title}">
                        </div>
                    </div>
                    <div>
                        <h3 class="publication-preview__title">
                            ${publication.title}
                            ${publication.links.length > 0 ? ` ${publication.links.map((link) => renderLinkPill(link)).join("")}` : ""}
                        </h3>
                        <p class="publication-preview__authors">${publication.authors}</p>
                        <p class="publication-preview__venue"><em>${publication.venue}</em></p>
                        <p class="publication-preview__abstract">${publication.abstract}</p>
                    </div>
                </article>
            `).join("")}
        </div>
    </section>
`;

const renderPublicationsPage = () => `
    <section class="card card--padded">
        <h1 class="page-heading">Publications</h1>
        <p class="page-intro">
            See <a href="https://scholar.google.com/citations?user=b7rFzfgAAAAJ&hl=en" target="_blank" rel="noreferrer">my Google Scholar profile</a> for a full publication list.
        </p>
        ${siteData.publicationSections.map((section) => `
            <section class="publication-section">
                <h2 class="page-section-title">${section.title}</h2>
                <ol class="citation-list">
                    ${section.items.map((item) => `
                        <li>
                            <span>${item.html}</span>
                            ${item.links.length > 0 ? `
                                <span class="citation-links">
                                    ${item.links.map((link) => renderLinkPill(link)).join("")}
                                </span>
                            ` : ""}
                        </li>
                    `).join("")}
                </ol>
            </section>
        `).join("")}
    </section>
`;

const renderAwardsPage = () => `
    <section class="card card--padded">
        <h1 class="page-heading">Awards</h1>
        <ul class="award-list">
            ${siteData.allAwards.map((award) => `
                <li>
                    <span>${award.name}</span>
                    <span class="summary-awards__date">${award.date}</span>
                </li>
            `).join("")}
        </ul>
    </section>
`;

const renderSetupsPage = () => `
    <div class="stack">
        <section class="card card--padded">
            <h1 class="page-heading">Setups</h1>
            <div class="setups-stack">
                ${siteData.setups.map((setup, index) => renderSetupRow(setup, index)).join("")}
            </div>
        </section>
    </div>
`;

const renderSetupRow = (setup, index) => `
    <article class="setup-row">
        <section class="card card--padded setup-description">
            <h3 class="setup-description__title">${setup.title}</h3>
            <p class="setup-description__body">${setup.description}</p>
        </section>
        <section>
            ${renderCarousel(`setup-${index + 1}`, setup.images)}
        </section>
    </article>
`;

const renderCarousel = (carouselId, images) => `
    <div class="carousel" data-carousel id="${carouselId}">
        <div class="carousel__slides">
            ${images.map((image, index) => `
                <figure class="carousel__slide ${index === 0 ? "is-active" : ""}" data-carousel-slide>
                    <img class="carousel__image" src="${image.src}" alt="${image.desc}" loading="lazy">
                    <figcaption class="carousel__caption">${image.desc}</figcaption>
                </figure>
            `).join("")}
        </div>
        ${images.length > 1 ? `
            <button class="carousel__control carousel__control--prev" type="button" aria-label="Previous slide" data-carousel-action="prev"></button>
            <button class="carousel__control carousel__control--next" type="button" aria-label="Next slide" data-carousel-action="next"></button>
            <div class="carousel__dots" role="tablist" aria-label="Carousel pagination">
                ${images.map((_, index) => `
                    <button class="carousel__dot ${index === 0 ? "is-active" : ""}" type="button" aria-label="Show slide ${index + 1}" data-carousel-dot data-carousel-index="${index}"></button>
                `).join("")}
            </div>
        ` : ""}
    </div>
`;

const renderNotFoundPage = () => `
    <section class="card card--padded not-found">
        <h1 class="page-heading">Page not found</h1>
        <p class="not-found__body">
            The page you were looking for does not exist in this rebuilt static site.
        </p>
        <a class="link-pill" href="/">Return home</a>
    </section>
`;

const renderLinkPill = (link) => `
    <a class="link-pill" href="${link.href}" ${opensNewTab(link.href) ? 'target="_blank" rel="noreferrer"' : ""}>${link.label}</a>
`;

const isExternal = (href) => /^https?:\/\//.test(href);
const opensNewTab = (href) => isExternal(href) || /\.pdf($|[?#])/i.test(href);

const initNav = () => {
    const toggle = document.querySelector(".site-nav__toggle");
    const navLinks = document.querySelectorAll(".site-nav__link");

    if (!toggle) {
        return;
    }

    toggle.addEventListener("click", () => {
        const isOpen = document.body.classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            document.body.classList.remove("nav-open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });
};

const initCarousels = () => {
    document.querySelectorAll("[data-carousel]").forEach((carousel) => {
        const slides = [...carousel.querySelectorAll("[data-carousel-slide]")];
        const dots = [...carousel.querySelectorAll("[data-carousel-dot]")];

        if (slides.length <= 1) {
            return;
        }

        let index = 0;
        let autoAdvanceId = null;

        const setIndex = (nextIndex) => {
            index = (nextIndex + slides.length) % slides.length;

            slides.forEach((slide, slideIndex) => {
                slide.classList.toggle("is-active", slideIndex === index);
            });

            dots.forEach((dot, dotIndex) => {
                dot.classList.toggle("is-active", dotIndex === index);
            });
        };

        const stopAutoAdvance = () => {
            if (autoAdvanceId !== null) {
                window.clearInterval(autoAdvanceId);
                autoAdvanceId = null;
            }
        };

        const startAutoAdvance = () => {
            stopAutoAdvance();
            autoAdvanceId = window.setInterval(() => {
                setIndex(index + 1);
            }, CAROUSEL_AUTO_ADVANCE_MS);
        };

        const restartAutoAdvance = () => {
            startAutoAdvance();
        };

        carousel.querySelector('[data-carousel-action="prev"]')?.addEventListener("click", () => {
            setIndex(index - 1);
            restartAutoAdvance();
        });

        carousel.querySelector('[data-carousel-action="next"]')?.addEventListener("click", () => {
            setIndex(index + 1);
            restartAutoAdvance();
        });

        dots.forEach((dot) => {
            dot.addEventListener("click", () => {
                setIndex(Number(dot.dataset.carouselIndex));
                restartAutoAdvance();
            });
        });

        carousel.addEventListener("mouseenter", stopAutoAdvance);
        carousel.addEventListener("mouseleave", startAutoAdvance);
        carousel.addEventListener("focusin", stopAutoAdvance);
        carousel.addEventListener("focusout", startAutoAdvance);

        startAutoAdvance();
    });
};

renderApp();
