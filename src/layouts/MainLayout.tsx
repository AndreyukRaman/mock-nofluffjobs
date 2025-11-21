import Navbar from "../components/Navbar/Navbar";
import SearchHeader from "../components/MainPage/SearchHeader";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <SearchHeader />
      {children}
    </>
  );
}
