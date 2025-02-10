import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";

type PropsType = {
  children: React.ReactNode;
};

const Layout = ({ children }: PropsType) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto ">
        <SearchBar />
      </div>
      <div className="px-4 md:px-0 flex-1">
        <div className="container mx-auto py-10 flex-1">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
