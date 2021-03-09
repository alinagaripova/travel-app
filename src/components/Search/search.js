import React from "react";
import { Link, NavLink, withRouter, Redirect } from "react-router-dom";
import { useSearchContext } from "./searchContext";
// import "./search.css";
// import Searchresult from "./searchresult";

export default function Search() {
  const searchCntx = useSearchContext() 
    // if (this.state.error) {
    //   this.setState({
    //     error: null,
    //   });
    //   return <Redirect to="/404" />;
    // }

function searchHandler(event){
  searchCntx.setSearchValue(event.target.value)
}

  return (
    <div className="search-field">
      <form className={"search-form"}>
        <input
          type="text"
          placeholder="  Введите запрос"
          className="search-input"
          onChange={searchHandler}
        ></input>
        {/*
        <Link
        // to={`/search/${this.state.searchState}/1`} onClick={this.searchResultHandler.bind(this, "a")}
        >
         */ <button className="search-button">Поиск </button>/*
        </Link> */}
      </form>
      <div className="search-result">
        <p>{`Результаты поиска по запросу ${searchCntx.searchValue}`}</p>
        {/* {this.state.films.map((film) => {
          return (
            <NavLink
              className={"NavLink"}
              // to={"/film/" + film.filmId}
            >
              <Searchresult
                key={film.filmId}
                nameRu={film.nameRu}
                nameEn={film.nameEn}
                rating={film.rating}
                posterUrl={film.posterUrl}
                year={film.year}
                genre={film.genres}
              />
            </NavLink>
          );
        })} */}

        {/* <NavLink
          className={"NavLink"}
          //   to={`/search/${this.state.searchState}/1`}
          //   onClick={this.searchResultHandler.bind(this, "a")}
        >{`Посмотреть все совпадения`}</NavLink> */}
      </div>
    </div>
  );
}

// export default withRouter(Search);
