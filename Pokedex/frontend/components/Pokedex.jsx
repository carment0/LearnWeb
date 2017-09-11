import React from 'react';
import { fetchPokemons } from '../actions';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
    this.forceUpdate = this.forceUpdate.bind(this);
    this.props.store.subscribe(this.forceUpdate);

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  fetchPokemons(offset=0) {
    $.ajax({
      url: 'http://pokeapi.co/api/v2/pokemon/',
      data: {offset},
      type: 'GET',
      dataType: 'JSON',
      success: (res) => {
        this.props.store.dispatch(fetchPokemons(res.results));
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  componentDidMount() {
    for (let i = 0; i <= 160; i += 20) {
      this.fetchPokemons(i);
    }
  }

  handleSearchTermChange(e) {
    e.preventDefault();
    this.setState({
      searchTerm: e.target.value
    });
  }

  getPokemonList() {
    const pokemons = this.props.store.getState().pokemons;
    const listItems = [];
    Object.keys(pokemons).forEach((pokemonName) => {
      listItems.push(<li>{pokemonName}</li>);
    });

    return <ul className="pokemon">{listItems}</ul>;
  }

  getPokemonSearchSuggestion() {
    if (this.state.searchTerm.length === 0) {
      return <ul className="pokemon"></ul>;
    }

    const pokemons = this.props.store.getState().pokemons;
    const listItems = [];
    Object.keys(pokemons)
    .filter((pokemonName) => pokemonName.includes(this.state.searchTerm))
    .forEach((pokemonName) => {
      listItems.push(<li>{pokemonName}</li>);
    });
    return <ul className="pokemon">{listItems}</ul>;
  }

  render() {
    return (
      <div>
        <h1>Welcome to Your Pokedex!</h1>
        <h2>Search About a Pokemon!</h2>
        <nav className="pokemons-search">
          <label>
            Enter Pokemon Name:
            <br/>
            <input
              id="search-input"
              type="text"
              name="pokemon-name"
              onChange={this.handleSearchTermChange}
              value={this.state.searchTerm} />
          </label>
        <h4>Result</h4>
          {this.getPokemonSearchSuggestion()}
        </nav>
      </div>
    );
  }
}

export default Pokedex;
