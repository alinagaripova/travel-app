import React from "react";
import { Link, NavLink, withRouter, Redirect } from "react-router-dom";
import { useSearchContext } from "./searchContext";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Input, OutlinedInput } from "@material-ui/core";
import { Modal } from "@material-ui/core";
// import "./search.css";
// import Searchresult from "./searchresult";

export default function Search() {
  const searchCntx = useSearchContext();
  // if (this.state.error) {
  //   this.setState({
  //     error: null,
  //   });
  //   return <Redirect to="/404" />;
  // }

  const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    // console.log(event.currentTarget);
    // setAnchorEl(event.currentTarget);
    setAnchorEl(event.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  function searchHandler(event) {
    searchCntx.setSearchValue(event.target.value);
    if (event.target.value.length > 2) {
      handleClick(event);
      setTimeout(() => {
        console.log(searchCntx.searchValue);
        searchCntx.apiHandler();
        console.log(searchCntx.countries);
        console.log(searchCntx.capitals);
      }, 500);
    }
  }

  return (
    <div className="search-field">
      <form className={"search-form"}>
        <OutlinedInput
          type="text"
          placeholder="  Введите запрос"
          className="search-input"
          onChange={searchHandler}
          variant="outlined"
          autoFocus={true}
        ></OutlinedInput>
        {
          /*
        <Link
        // to={`/search/${this.state.searchState}/1`} onClick={this.searchResultHandler.bind(this, "a")}
        >
         */ <button className="search-button">
            Поиск{" "}
          </button> /*
        </Link> */
        }
      </form>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        disableAutoFocus={true}
        disableEnforceFocus={true}
      >
        {`Возможно вы искали:`}
        <br />
        {`Страны`}
        <ul>
          {searchCntx.countries.length > 0 ? (
            searchCntx.countries.map((elem) => {
              return <li>{elem.name}</li>;
            })
          ) : (
            <div />
          )}
        </ul>

        {"Столицы"}
        <ul>
          {searchCntx.capitals.length > 0 ? (
            searchCntx.capitals.map((elem) => {
              return <li>{elem.capital}</li>;
            })
          ) : (
            <div />
          )}
        </ul>

        {/* <Typography className={classes.typography}>The content of the Popover.</Typography> */}
      </Popover>

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
