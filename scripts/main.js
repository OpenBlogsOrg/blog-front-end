export const blogData = {
    name: "OpenBlogs",
    title: "OpenBlogs",
    description: "OpenBlogs - Blogging for Everyone!",
    logo: {
        light: "../../src/brand/logo-light.svg",
        dark: "../../src/brand/logo-dark.svg",
    },
    metaImage: "../../src/brand/meta-image.png",
    logoAlt: "OpenBlogs Logo",
    banner: "../../src/brand/banner.png",
    bannerAlt: "OpenBlogs Default Banner",
    favicon: "../../src/brand/favicon.png",
    heroText: "A Free Blogging Platform For Everyone!",
    theme: {
        colors: {
            light: {
                primary: "#308AFF",
                secondary: "#3059FF",
                tertiary: "#FF2079",
                text: "#1B1B1B",
                background: "#F4F4F4",
                outline: "#dedede",
                neutral: "#9F9F9F",
                postBackground: "#ffffff",
            },
            dark: {
                primary: "#308AFF",
                secondary: "#3059FF",
                tertiary: "#FF2079",
                text: "#F4F4F4",
                background: "#1B1B1B",
                outline: "#6f6f6f",
                neutral: "#9F9F9F",
                postBackground: "#333333",
            },
        },
        fonts: {
            primary: "Montserrat, serif",
            secondary: "Fraunces, serif",
            sizes: {
                tiny: "1.8vh",
                small: "2vh",
                medium: "1.5vh",
                large: "3vh",
                xlarge: "3rem",
            },
            weights: {
                thin: 100,
                light: 300,
                regular: 400,
                bold: 700,
                bolder: 900,
            },
        },
        spacing: {
            small: "0.5rem",
            medium: "1rem",
            large: "1.5rem",
            extraLarge: "2rem",
        },
        breakpoints: {
            mobile: "only screen and (max-width: 600px)",
            tablet: "only screen and (max-width: 768px)",
            desktop: "only screen and (min-width: 769px)",
        },
    },
    pages: [
        {
            title: "Home",
            url: "/",
        },
    ],
    socials: [
        {
            title: "github",
            url: "https://github.com",
            icon: {
                src: "../../src/icons/github.svg",
                alt: "GitHub logo",
                color: "#9F4BFF",
            }
        },
        {
            title: "blueSky",
            url: "https://bsky.app",
            icon: {
                src: "../../src/icons/bluesky.svg",
                alt: "BlueSky logo",
                color: "#1185FE",
            }
        }
    ]
};

export const blogPosts = [
    {
        title: "Hello, Blog!",
        headline: "Welcome to OpenBlogs! This is the first post on this blog.",
        author: "John Doe",
        dateTime: "2021-01-01T00:00:00Z",
        content: "Hello, Blog! Welcome to OpenBlogs! This is the first post on this blog. We hope you enjoy reading it!",
        thumbnail: "../../src/media/posts/images/hello-world.png",
        thumbnailAlt: "Hello, Blog! Thumbnail",
        slug: "hello-blog",
        tags: ["hello", "blog", "first", "post"],
    },
    {
        title: "Open Source Projects",
        headline: "Open source projects are the future of technology.",
        author: "Jane Doe",
        dateTime: "2021-02-01T00:00:00Z",
        content: "Open source projects provide countless opportunities for collaboration and innovation.",
        thumbnail: "../../src/media/posts/images/open-source.png",
        thumbnailAlt: "Open Source Projects Thumbnail",
        slug: "open-source-projects",
        tags: ["open source", "technology", "projects"],
    },
    {
        title: "Blog For Everyone",
        headline: "Blogging is for everyone!",
        author: "Alex Smith",
        dateTime: "2021-03-01T00:00:00Z",
        content: "This blog post emphasizes the inclusive nature of blogging and shared experiences.",
        thumbnail: "../../src/media/posts/images/blog-for-everyone.png",
        thumbnailAlt: "Blog For Everyone Thumbnail",
        slug: "blog-for-everyone",
        tags: ["blog", "inclusivity", "community"],
    },
    {
        title: "Donate!",
        headline: "Support OpenBlogs with a donation.",
        author: "Fundraiser Team",
        dateTime: "2021-04-01T00:00:00Z",
        content: "Your contributions help us keep the blog alive. Thank you for your support!",
        thumbnail: "../../src/media/posts/images/donate.png",
        thumbnailAlt: "Donate Thumbnail",
        slug: "donate",
        tags: ["donate", "support", "funding"],
    },
];

const head = document.querySelector("head");

const preconnect1 = document.createElement("link");
preconnect1.rel = "preconnect";
preconnect1.href = "https://fonts.googleapis.com";
head.appendChild(preconnect1);

const preconnect2 = document.createElement("link");
preconnect2.rel = "preconnect";
preconnect2.href = "https://fonts.gstatic.com";
preconnect2.crossOrigin = "anonymous";
head.appendChild(preconnect2);

const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap";
head.appendChild(fontLink);

const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.href = blogData.favicon;
head.appendChild(favicon);

const title = document.createElement("title");
title.textContent = blogData.title;
head.appendChild(title);

const checkDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const theme = checkDarkMode ? blogData.theme.colors.dark : blogData.theme.colors.light;

const style = document.createElement("style");
style.textContent = `
    .primary-font {
        font-family: ${blogData.theme.fonts.primary};
    }
    .secondary-font {
        font-family: ${blogData.theme.fonts.secondary};
    }
    .thin-font {
        font-weight: ${blogData.theme.fonts.weights.thin};
    }
    .light-font {
        font-weight: ${blogData.theme.fonts.weights.light};
    }
    .regular-font {
        font-weight: ${blogData.theme.fonts.weights.regular};
    }
    .bold-font {
        font-weight: ${blogData.theme.fonts.weights.bold};
    }
    .bolder-font {
        font-weight: ${blogData.theme.fonts.weights.bolder};
    }
    .tiny-font {
        font-size: ${blogData.theme.fonts.sizes.tiny};
    }
    .small-font {
        font-size: ${blogData.theme.fonts.sizes.small};
    }
    .medium-font {
        font-size: ${blogData.theme.fonts.sizes.medium};
    }
    .large-font {
        font-size: ${blogData.theme.fonts.sizes.large};
    }
    .xlarge-font {
        font-size: ${blogData.theme.fonts.sizes.xlarge};
    }
    .primary-color {
        color: ${theme.primary};
    }
    .secondary-color {
        color: ${theme.secondary};
    }
    .tertiary-color {
        color: ${theme.tertiary};
    }
    .text-color {
        color: ${theme.text};
    }
    .background-color {
        background-color: ${theme.background};
    }
    .outline-color {
        border-color: ${theme.outline};
    }
    .neutral-color {
        color: ${theme.neutral};
    }
    .post-background-color {
        background-color: ${theme.postBackground};
    }
    .small-spacing {
        padding: ${blogData.theme.spacing.small};
    }
    .medium-spacing {
        padding: ${blogData.theme.spacing.medium};
    }
    .large-spacing {
        padding: ${blogData.theme.spacing.large};
    }
    .extra-large-spacing {
        padding: ${blogData.theme.spacing.extraLarge};
    }
    @media ${blogData.theme.breakpoints.mobile} {
        .mobile-hide {
            display: none;
        }
    }
    @media ${blogData.theme.breakpoints.tablet} {
        .tablet-hide {
            display: none;
        }
    }
    @media ${blogData.theme.breakpoints.desktop} {
        .desktop-hide {
            display: none;
        }
    }
    
`;

head.appendChild(style);