import { createBurguerMenu } from "./burguerMenu.js";

export function createNavBar(blogData) {
    const nav = document.createElement("nav");
    nav.classList.add("nav-bar", "medium-spacing", "primary-font", "text-color", "background-color");

    const checkDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = checkDarkMode ? blogData.theme.colors.dark : blogData.theme.colors.light;
    const logo = checkDarkMode ? blogData.logo.dark : blogData.logo.light;

    nav.style.borderBottom = `1px solid ${theme.outline}`;

    const navItems = blogData.pages.map(page => page.title);

    const burgerMenu = createBurguerMenu(navItems, theme);

    const blogLogo = document.createElement("img");
    blogLogo.src = logo;
    blogLogo.alt = blogData.logoAlt;
    blogLogo.style.height = "40px";

    const navList = document.createElement("ul");
    navList.style.display = "flex";
    navList.style.listStyle = "none";
    navList.style.margin = "0";
    navList.style.padding = "0";


    const navBarInteractions = document.createElement("div");
    navBarInteractions.classList.add("nav-bar-interactions", "mobile-hide");

    navItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        li.style.marginLeft = blogData.theme.spacing.medium;
        li.style.cursor = "pointer";
        li.style.fontSize = blogData.theme.fonts.sizes.small;
        li.style.fontWeight = blogData.theme.fonts.weights.bold;
        li.style.color = theme.neutral;

        li.addEventListener("mouseenter", () => li.style.color = theme.primary);
        li.addEventListener("mouseleave", () => li.style.color = theme.neutral);

        navList.appendChild(li);
    });

    navBarInteractions.appendChild(navList);

    nav.appendChild(blogLogo);
    nav.appendChild(burgerMenu);

    nav.appendChild(navBarInteractions);

    return nav;
}