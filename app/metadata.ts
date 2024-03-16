const siteName = "X速報";
const description = "X(旧Twitter)などの情報配信サイトです0:";
const url = "https://google.com";

export async function generateMetadata() {
  return {
    metadataBase: new URL(url),
    icons: [{ rel: "icon", url: "/favicon.png" }],
    title: {
      default: siteName,
      template: `%s - ${siteName}`,
    },
    description,
    openGraph: {
      title: siteName,
      description,
      url,
      siteName,
      locale: "ja_JP",
      type: "website",
      images: [
        {
          url: "/ogp.jpeg",
          width: 800,
          height: 600,
        },
        {
          url: "/ogp.jpeg",
          width: 1800,
          height: 1600,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteName,
      description,
      site: "@xsokuhou",
      creator: "@xsokuhou",
      images: ["/ogp.jpeg"],
    },
    alternates: {
      canonical: url,
    },
  };
}
