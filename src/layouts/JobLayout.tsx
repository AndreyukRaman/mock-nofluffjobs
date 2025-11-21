import Navbar from "../components/Navbar/Navbar";

export default function JobLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
