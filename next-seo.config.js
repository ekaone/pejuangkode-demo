const title = "Pejuang Kode";
const description =
  "Komunitas Pejuang Kode Indonesia adalah komunitas para developer frontend dengan tujuan bertukar informasi dan berbagi untuk kemajuan bersama. ";

const SEO = {
  title,
  description,
  canonical: "https://pejuangkode-demo.vercel.app",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://pejuangkode-demo.vercel.app",
    title,
    description,
    images: [
      {
        url: "https://pejuangkode-demo.vercel.app/images/banner@2x.jpg",
        alt: title,
        width: 1024,
        height: 1024,
      },
    ],
  },
  twitter: {
    handle: "@pejuangkode",
    site: "@pejuangkode",
    cardType: "summary_large_image",
  },
};

export default SEO;
