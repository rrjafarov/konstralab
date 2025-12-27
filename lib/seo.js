import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";

export async function generateMetadata() {
  const cookieStore = cookies();
  const langCookie = cookieStore.get("NEXT_LOCALE");
  const lang = langCookie?.value || "en";

  try {
    const { data: seoData } = await axiosInstance.get("/page-data/seo", {
      headers: { Lang: lang },
    });

    const imageUrl = seoData?.data?.og_image;
    const imageAlt = seoData?.data?.meta_title || "Konstralab";
    const canonicalUrl = "https://gipstar.az";

    return {
      title: seoData?.data?.meta_title,
      description: seoData?.data?.meta_description,
      openGraph: {
        title: seoData?.data?.meta_title,
        description: seoData?.data?.meta_description,
        url: canonicalUrl,
        images: imageUrl
          ? [
              {
                url: `https://admin.gipstar.az/storage${imageUrl}`,
                alt: imageAlt,
                width: 1200,
                height: 630,
              },
            ]
          : [],
        site_name: "gipstar.az",
        type: "website",
        locale: lang,
      },
      twitter: {
        card: "summary_large_image",
        title: seoData?.data?.meta_title,
        description: seoData?.data?.meta_description,
        creator: "@gipstar",
        site: "@gipstar",
        images: imageUrl ? [`https://admin.gipstar.az/storage${imageUrl}`] : [],
      },
      alternates: {
        canonical: canonicalUrl,
      },
    };
  } catch (err) {
    return {
      title: "Konstralab",
      description: "Konstralab Sirkə Zavodu",
    };
  }
}
