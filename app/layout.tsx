import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Delanie Heck — Product Design',
  description: 'Product design portfolio of Delanie Heck',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QXE3N0KNZH"
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QXE3N0KNZH');
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Merriweather+Sans:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="w-full bg-neutral-balanced-light">
            {children}
            <Footer />
      </body>
    </html>
  );
}
