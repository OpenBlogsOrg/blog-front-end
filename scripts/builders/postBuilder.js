import { createNavBar } from "../modules/navBar.js";
import { createBanner } from "../modules/banner.js";
import { blogData } from "../main.js";
import { createFooter } from "../modules/footer.js";

document.addEventListener("DOMContentLoaded", () => {
    const bannerImage = blogData.banner;
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = isDarkMode ? blogData.theme.colors.dark : blogData.theme.colors.light;
    const bannerAltText = blogData.bannerAlt;
    const banner = createBanner(bannerImage, bannerAltText);
    document.body.prepend(banner);
    const nav = createNavBar(blogData);
    document.body.prepend(nav);
    const footer = createFooter(blogData, theme);
    const body = document.body;
    body.style.backgroundColor = theme.background;
    const homePosts = document.createElement("div");
    homePosts.classList.add("post-content");
    document.body.appendChild(homePosts);
    document.body.appendChild(footer);
});