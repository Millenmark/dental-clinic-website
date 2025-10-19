// src/layouts/MainLayout.jsx
import Navbar from "../components/navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-poppins">
      <Navbar />

      {/* Main content area */}
      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>

      {/* Optional footer */}
      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} My App. All rights reserved.
      </footer>
    </div>
  );
}
