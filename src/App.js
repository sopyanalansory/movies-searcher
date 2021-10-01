import './App.css';
import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import MoviesList from './components/MoviesList';
import Header from './components/Header';
import { getListMovies } from './actions/moviesAction';
import useInfiniteScroll from './components/useInfiniteScroll';
import Loading from './components/Loading';

function App(props) {
  const { isFetch, error, success, list, totalResults } = props.movies;
  const [page, setPage]=useState(1);
  const [keyword, setKeyword]=useState('');
  const [movielist, setMovieList]=useState([]);
	const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreMovieList);

  const usePrevious=(value)=>{
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

 const prevIsFetch = usePrevious(isFetch)

  useEffect(() => {
   getList();
   setKeyword('Ant Man');
  },[]);

  useEffect(() => {
    if(prevIsFetch !== isFetch && success && !isFetch){
      if(page > 1)
        setMovieList([...movielist, ...list]);
      else
        setMovieList([...list]);
    } 
    else{
      if(!success && error ) {
        if(page === 1) setMovieList([]);
        
        setIsFetching(false);
      }
    }
  },[isFetch, prevIsFetch, success, list]);

  const getList = (keyword='Ant Man') => {
    const query = {
      params:{
        apikey:'faf7e5bb',
        s:keyword,
        page
      }
    }
   props.getListMovies(query);
  }

  const searchChangeHandler=(e) => {
    const searchTerm = e.target.value;
    setPage(1);
    setKeyword(searchTerm);
    getList(searchTerm);
  }


	function fetchMoreMovieList(){
    if(success && movielist.length && parseInt(totalResults) > 10){
      let nextPage = page+1;
      getList(keyword, nextPage);
      setPage(nextPage);
      setIsFetching(false);
    }
	}
  
  return (
    <div className="App">
      <Header />
      <input className ="searchBar" placeholder="Enter search term" onChange={searchChangeHandler}/>
      {
        isFetch && page === 1 ? 
        <Loading />
        :
        <MoviesList movies={movielist} isLoading={isFetching}/>
      }
    </div>
  );
}

const mapStateToProps=(state) => ({
  movies:state.movies,
});

const mapDispatchToProps=(dispatch) => ({
  getListMovies:(query) => dispatch(getListMovies(query)),
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
