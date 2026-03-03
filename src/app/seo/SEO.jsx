import { Helmet } from "react-helmet-async";

export default function SEO({
    title,
    description,
    path = "/",
    image = "/logo.png",
    siteName = "Invendoi AI Solutions Pvt. Ltd.",
}) {
    const url = `https://${siteName.includes("Invendoi") ? "www.invendoi.com" : ""}${path}`;
    return (
        <Helmet>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}
            <meta property="og:title" content={title} />
            {description && <meta property="og:description" content={description} />}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={siteName} />
            {image && <meta property="og:image" content={image} />}
            {url && <meta property="og:url" content={url} />}
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
    );
}