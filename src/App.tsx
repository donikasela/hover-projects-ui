import Footer from "./components/Footer";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <Header />
      <ThemeToggle />
      <Footer />
    </main>
  );
}
