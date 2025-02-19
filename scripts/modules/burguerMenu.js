export function createBurguerMenu(navItems, theme) {
    const burgerMenu = document.createElement("div");
    burgerMenu.classList.add("burger-menu", "desktop-hide");

    const burgerButton = document.createElement("button");
    burgerButton.innerHTML = '<span class="material-icons text-color">menu</span>';
    burgerButton.classList.add("burger-button", "text-color");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("burger-menu-container");
    menuContainer.style.backgroundColor = theme.background;
    menuContainer.style.border = `1px solid ${theme.outline}`;

    const navList = document.createElement("ul");
    navList.style.listStyle = "none";
    navList.style.margin = "0";
    navList.style.padding = "0";

    navItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        li.style.padding = "10px";
        li.style.cursor = "pointer";
        li.style.color = theme.text;
        li.style.fontSize = "16px";

        li.addEventListener("mouseenter", () => (li.style.color = theme.primary));
        li.addEventListener("mouseleave", () => (li.style.color = theme.text));

        navList.appendChild(li);
    });

    menuContainer.style.display = "none";

    burgerButton.addEventListener("click", () => {
        const icon = burgerButton.querySelector(".material-icons");
        const isHidden = getComputedStyle(menuContainer).display === "none";

        menuContainer.style.display = isHidden ? "block" : "none";

        if (isHidden) {
            icon.textContent = "close";
            burgerButton.classList.add("rotate");
        } else {
            icon.textContent = "menu";
            burgerButton.classList.remove("rotate");
        }
    });

    menuContainer.appendChild(navList);
    burgerMenu.appendChild(burgerButton);
    burgerMenu.appendChild(menuContainer);

    return burgerMenu;
}
