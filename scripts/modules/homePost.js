
export function createHomePost(postData, theme) {
    const post = document.createElement("div");
    post.classList.add("home-post");
    post.style.backgroundColor = theme.postBackground;

    const postThumbnail = document.createElement("img");
    postThumbnail.classList.add("home-post-thumbnail");
    postThumbnail.src = postData.thumbnail;
    postThumbnail.alt = postData.thumbnailAlt;

    post.appendChild(postThumbnail);

    const postContent = document.createElement("div");
    postContent.classList.add("home-post-content");

    post.appendChild(postContent);

    const postTitle = document.createElement("p");
    postTitle.classList.add("home-post-content-title", "primary-font", "bold-font", "small-font", "text-color");

    postTitle.textContent = postData.title;

    postContent.appendChild(postTitle);

    const postHeadline = document.createElement("p");
    postHeadline.classList.add("home-post-content-headline", "secondary-font", "regular-font", "small-font", "text-color");
    postHeadline.textContent = postData.headline;

    postContent.appendChild(postHeadline);

    const postAuthor = document.createElement("p");
    postAuthor.classList.add("home-post-content-author", "secondary-font", "tiny-font", "neutral-color");
    postAuthor.textContent = `by: ${postData.author}`;

    postContent.appendChild(postAuthor);

    const postDateTime = document.createElement("p");
    postDateTime.classList.add("home-post-content-date-time", "secondary-font", "tiny-font", "neutral-color");
    const dateTime = postData.dateTime;
    postDateTime.textContent = formatDateTime(dateTime, "dateTimeUS");

    postContent.appendChild(postDateTime);
    

    post.addEventListener("click", () => {
        window.location.href = `../post/?${postData.slug}`;
    });

    return post;
}

const formatDateTime = (dateTime, model) => {
    const date = new Date(dateTime);
    const options = {};
    switch (model) {
        case "dateUS":
            options.month = "2-digit";
            options.day = "2-digit";
            options.year = "numeric";
            return date.toLocaleDateString("en-US", options);
        case "dateEU":
            options.day = "2-digit";
            options.month = "2-digit";
            options.year = "numeric";
            return date.toLocaleDateString("en-EU", options);
        case "time":
            options.hour = "2-digit";
            options.minute = "2-digit";
            return date.toLocaleTimeString("en-US", options);
        case "dateTimeUS":
            return `${formatDateTime(dateTime, "dateUS")} at ${formatDateTime(dateTime, "time")}`;
        case "dateTimeEU":
            return `${formatDateTime(dateTime, "dateEU")} at ${formatDateTime(dateTime, "time")}`;
        default:
            return date.toLocaleString();
    }
}