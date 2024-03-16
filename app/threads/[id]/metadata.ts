import * as threadApi from "@/app/lib/db/thread";
import { bucket } from "@/app/lib/firebase/admin";
import { getDownloadURL } from "firebase-admin/storage";

export async function generateMetadata({ params }: { params: { id: string } }) {
  let downloadUrl;
  try {
    const fileRef = bucket.file(params.id + ".jpeg");
    downloadUrl = await getDownloadURL(fileRef);
  } catch (e) {
    downloadUrl = "/noimage.png";
    console.log(e);
  }

  let title = "X速報";
  let siteName = "X速報";
  let description = "X(旧Twitter)などの情報配信サイトです";
  let url = "https://google.com";
  try {
    const thread: thread.Data = await threadApi.server.getById({
      threadId: params.id,
    });

    title = thread.title;
    description = thread.description;
  } catch (e) {
    console.log(e);
  }

  return {
    metadataBase: new URL(url),
    icons: [{ rel: "icon", url: "/favicon.png" }],
    title: {
      default: siteName,
      template: `%s - ${siteName}`,
    },
    description,
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "ja_JP",
      type: "website",
      images: [
        {
          url: downloadUrl,
          width: 800,
          height: 600,
        },
        {
          url: downloadUrl,
          width: 1800,
          height: 1600,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      // card: "summary",
      title: title,
      description,
      site: "Xsokuhou",
      creator: "@x_sokuhou",
      images: [downloadUrl],
    },
    alternates: {
      canonical: url,
    },
  };
}
