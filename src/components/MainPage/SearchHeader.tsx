import "./SearchHeader.scss";
import { useState } from "react";

export default function SearchHeader() {
  const [searchValue, setSearchValue] = useState("");

  const filters = [
    "Filtry",
    "IT",
    "Marketing",
    "Obsługa klienta",
    "Sprzedaż",
    "HR",
    "Inżynieria",
    "Pozostałe",
  ];

  return (
    <>
      <div className="search-header">
        <div className="search-header__inner">
          <div className="search-box">
            <h1>Tu znajdziesz nową pracę. Sprawdź zarobki i aplikuj.</h1>
            <input
              type="text"
              placeholder="Wyszukaj ofert..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="filters-sticky">
        <div className="filters-inner">
          {filters.map((f) => (
            <button className="filter-btn" key={f}>
              {f}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
