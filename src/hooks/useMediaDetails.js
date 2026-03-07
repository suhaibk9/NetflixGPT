import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../utils/consants";
import { useDispatch } from "react-redux";
import { addMedia, addTrailerId } from "../utils/mediaSlice";
const useMediaDetails = (id, isMovie) => {
  const dispatch = useDispatch();
  const fetchMediaDetails = useCallback(async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/${isMovie ? "movie" : "tv"}/${id}`,
        API_OPTIONS,
      );
      const data = await res.json();
      dispatch(addMedia(data));
      const trailerRes = await fetch(
        `https://api.themoviedb.org/3/${
          isMovie ? "movie" : "tv"
        }/${id}/videos?language=en-US`,
        API_OPTIONS,
      );
      const trailerData = await trailerRes.json();

      let trailer = trailerData.results.find(
        (video) =>
          video.type === "Trailer" &&
          (video.name === "YouTube" || video.site === "YouTube"),
      );
      if (!trailer) {
        trailer = trailerData.results.find(
          (video) =>
            video.type === "Teaser" &&
            (video.name === "YouTube" || video.site === "YouTube"),
        );
      }
      if (!trailer) {
        trailer = trailerData.results[0];
      }
      dispatch(addTrailerId(trailer ? trailer.key : null));
    } catch (error) {
      console.error("Failed to fetch media details or trailer", error);
    }
  }, [id, isMovie, dispatch]);

  useEffect(() => {
    fetchMediaDetails();
  }, [fetchMediaDetails]);

  return null;
};

export default useMediaDetails;
