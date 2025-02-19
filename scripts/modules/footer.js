import { Icons } from "../../src/icons/Icons.js";

export function createFooter(blogData, theme) {
    const footer = document.createElement("footer");
    footer.classList.add("footer", "primary-font", "text-color", "background-color");
    footer.style.borderTop = `1px solid ${theme.outline}`;
    footer.style.padding = blogData.theme.spacing.medium;
    footer.style.display = "flex";
    footer.style.justifyContent = "space-between";
    footer.style.alignItems = "center";
    footer.style.fontSize = blogData.theme.fonts.sizes.small;

    const socials = document.createElement("div");
    socials.classList.add("socials");
    socials.style.gap = blogData.theme.spacing.medium;

    blogData.socials.forEach(social => {
        const socialLink = document.createElement("a");
        const socialIcon = document.createElement("div");
        socialIcon.innerHTML = Icons(theme.text, social.title.toLowerCase(), '20px');
        socialLink.href = social.url;
        socialLink.textContent = social.title;
        socialLink.style.color = theme.text;
        socialLink.style.textDecoration = "none";
        socialLink.style.fontSize = blogData.theme.fonts.sizes.small;
    
        socialLink.appendChild(socialIcon);
        socials.appendChild(socialLink);
    });
    footer.appendChild(socials);

    const year = new Date().getFullYear();


    const footerText = document.createElement("p");
    footerText.textContent = `© ${year} ${blogData.name}. All rights reserved.`;

    footer.appendChild(footerText);
    
    return footer;
}