import "../globals.css";

export const metadata = {
  title: "Profspective",
  description: "Simplify finding the next class you have to take at USf",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://alwingulla.com/88/tag.min.js"
          data-zone="111847"
          async
          data-cfasync="false"
        ></script>
        <meta name="monetag" content="6bff7ae7ae4d17ff2f03ef969857992f" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3188211813377663"
          crossorigin="anonymous"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
