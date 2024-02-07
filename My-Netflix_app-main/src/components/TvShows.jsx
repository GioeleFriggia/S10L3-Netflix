import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const GenreDropdown = ({ name }) => <Dropdown.Item>{name}</Dropdown.Item>;

const TvShows = () => {
  const [loading, setLoading] = useState(true);
  const categories = [
    { name: "Comedy" },
    { name: "Drama" },
    { name: "Thriller" },
  ];

  useEffect(() => {
    // Simuliamo il caricamento dei dati asincroni con un timeout
    const fetchData = async () => {
      try {
        // Simuliamo il caricamento asincrono
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid px-0 py-3">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-5 ms-2">TV Shows</h2>{" "}
          {loading ? (
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <div className="btn-group" role="group">
              <Dropdown className="ms-4 mt-1">
                <Dropdown.Toggle
                  variant="secondary"
                  size="sm"
                  className="rounded-0"
                  style={{ backgroundColor: "#221f1f" }}
                >
                  Genres
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {categories.map((category, index) => (
                    <GenreDropdown key={index} name={category.name} />
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
        </div>
        <div>
          <i className="bi bi-grid icons"></i>
          <i className="bi bi-grid-3x3 icons"></i>
        </div>
      </div>
    </div>
  );
};

export default TvShows;
