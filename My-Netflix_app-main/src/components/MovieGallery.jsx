import React, { useState, useEffect } from "react";
import "../data/Gallery.css";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const GalleryContainer = styled.div`
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;
`;

const GalleryTitle = styled.h3`
  margin-bottom: 10px;
`;

const MovieCard = styled.div`
  margin-right: 20px;
  text-align: center;
  transition: transform 0.5s ease;
  height: 400px;
`;

const MovieImage = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
`;

const NavigationButton = styled.div`
  font-size: 24px;
  cursor: pointer;
  opacity: ${({ isTransparent }) => (isTransparent ? 0.3 : 1)};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: transparent; 
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed; 
  top: 50%;
  margin-left: 50px;
  margin-right:50px
  transform: translateY(-50%);
  z-index: 1; 
`;

const LeftNavigationButton = styled(NavigationButton)`
  left: 0px;
`;

const RightNavigationButton = styled(NavigationButton)`
  right: 0;
`;

const movieSagas = [
  "Harry Potter",
  "Star Wars",
  "Lord of the Rings",
  "Indiana Jones",
  "The Matrix",
];

function MovieGalleryComponent() {
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const fetchMovies = async (searchQuery) => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?i=tt3896198&apikey=edb89261&s=${encodeURIComponent(
            searchQuery
          )}`
        );

        if (response.ok) {
          const data = await response.json();

          if (data.Response === "True") {
            setMovies((prevMovies) => ({
              ...prevMovies,
              [searchQuery]: data.Search,
            }));
          } else {
            setError(data.Error);
          }
        } else {
          console.error("API Error:", response.statusText);
          setError(response.statusText);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError(error.message);
      }
    };

    const fetchAllMovies = async () => {
      try {
        await Promise.all(movieSagas.map((saga) => fetchMovies(saga)));
      } catch (error) {
        console.error("Error fetching all movies:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllMovies();
  }, []);

  const handleNextClick = () => {
    setScrollPosition((prevPosition) =>
      prevPosition + 1 >= movies[movieSagas[0]].length ? 0 : prevPosition + 1
    );
  };

  const handlePrevClick = () => {
    setScrollPosition((prevPosition) =>
      prevPosition > 0 ? prevPosition - 1 : 0
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {movieSagas.map((saga) => (
        <div key={saga}>
          <GalleryContainer>
            <GalleryTitle>{saga}</GalleryTitle>
            <div
              className="movies-container"
              style={{
                display: "flex",
                padding: "20px",
                transform: `translateX(${-scrollPosition * 300}px)`,
                transition: "transform 0.5s ease",
                position: "relative",
              }}
            >
              {movies[saga].map((movie, index) => (
                <MovieCard key={movie.imdbID}>
                  <MovieImage src={movie.Poster} alt={movie.Title} />
                  <p>{movie.Title}</p>
                  <p>{movie.Year}</p>
                </MovieCard>
              ))}
            </div>
          </GalleryContainer>
        </div>
      ))}
      <LeftNavigationButton
        onClick={handlePrevClick}
        isTransparent={scrollPosition === 0}
        style={{ left: 10 }}
      >
        {"<"}
      </LeftNavigationButton>
      <RightNavigationButton
        onClick={handleNextClick}
        isTransparent={scrollPosition === movies[movieSagas[0]].length - 1}
        style={{ right: 10 }}
      >
        {">"}
      </RightNavigationButton>
    </div>
  );
}

export default MovieGalleryComponent;
