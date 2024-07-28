import React, { useContext, useState } from "react";
import { getImgUrl } from "../utils/chine-utlity";
import Rating from "./Rating";
import MovieDetelsModal from "./MovieDetelsModal";
import { MovieContext } from "../context";
import { toast } from "react-toastify";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [seletedMovie, setSeletedMovie] = useState(null);
  // console.log(movie);

  const { state, dispatch } = useContext(MovieContext);

  const handleMovieSelection = (movie) => {
    // console.log('clicked',movie)
    setSeletedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSeletedMovie(null);
    setShowModal(false);
  };

  const handleAddToCart = (event, movie) => {
    event.stopPropagation();
    const found = state.cartData.find((item) => {
      return item.id === movie.id;
    });

    if (!found) {
      dispatch({
        type:'ADD_TO_CART',
        payload:{
          ...movie
        }
      })
      toast.success("🦄 Product Added!", {
        position: "top-center",
        autoClose: 5000,
        theme: "light",
      });
    } else {
      toast.error("🦄 Product alredy is added!", {
        position: "top-center",
        autoClose: 5000,
        theme: "light",
        
      });
    }
  };
  return (
    <>
      {showModal && (
        <MovieDetelsModal
          movie={seletedMovie}
          onClose={handleCloseModal}
          onCardAdd={handleAddToCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
          />

          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm mb-0"
              href="#"
              onClick={(event) => handleAddToCart(event, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
