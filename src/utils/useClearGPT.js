import { useDispatch } from 'react-redux';
import {
  setGptSearch,
  setGptSearchResults,
  setGptArray,
  setGptSearchClicked,
  setActualQuery,
} from '../utils/gptSlice';
const useClearGPT = () => {
  const dispatch = useDispatch();
  dispatch(setGptSearch(false));
  dispatch(setGptSearchResults(null));
  dispatch(setGptArray(null));
  dispatch(setGptSearchClicked(false));
  dispatch(setActualQuery(null));
  return null;
};
export default useClearGPT;
