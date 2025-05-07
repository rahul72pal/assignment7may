import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SmallScreenFooter from "./components/SmallScreenFooter";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar />
        {children}
        {/* Footer for larger screens */}
        <Footer className="hidden lg:block" />
        {/* Footer for small screens */}
        <SmallScreenFooter className="block lg:hidden" />
      </body>
    </html>
  );
}
