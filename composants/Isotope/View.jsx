import React, { useState, useEffect } from "react";
import Isotope from "isotope-layout";
import Filter from "./Filter";
const View = ({ blogs, handleBlogs, filterValue, setFilterValue }) => {
  const [iso, setIso] = useState(null);

  useEffect(() => {
    setIso(
      new Isotope(".grid", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
      })
    );
  }, []);

  // handling filter key change
  useEffect(() => {
    console.log("iso >> ", iso);
    if (iso) {
      filterValue === "All"
        ? iso.arrange({ filter: "*" })
        : iso.arrange({ filter: `.${filterValue}` });
    }
  }, [iso, filterValue]);
  return (
    <div className="App">
      <>
        <Filter setFilterValue={setFilterValue} />
        <hr />
        <ul className="grid">
          <div className="filter-item vege">
            <span>Cucumber</span>
          </div>
          <div className="filter-item fruit">
            <span>Apple</span>
          </div>
          <div className="filter-item fruit">
            <span>Orange</span>
          </div>
          <div className="filter-item">
            <span>Tomato</span>
          </div>
        </ul>
      </>
    </div>
  );
};
export default View;
