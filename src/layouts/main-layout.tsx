// src/layouts/MainLayout.jsx
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-poppins">
      <Navbar />

      {/* Main content area */}
      <main>{children}</main>

      <Footer />
    </div>
  );
}
