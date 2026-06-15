import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectRows from "./components/ProjectRows";

export default function App() {
  return (
    <main className="min-h-screen bg-light text-dark dark:bg-dark dark:text-light transition-colors duration-300">
      <Header />
      <ProjectRows />
      <Footer />
    </main>
  );
}
