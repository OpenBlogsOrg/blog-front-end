export function createBanner(image, alt) {
    const banner = document.createElement("div");

    banner.classList.add("banner");
    banner.style.backgroundImage = `url(${image})`; 
    banner.alt = alt;

    return banner;
}