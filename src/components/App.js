import * as React from "react";
import { connect } from "react-redux";
import { AppHeader } from "./AppHeader.js";
import { TournamentsList } from "./TournamentsList.js";
import { tournamentsFetched } from "../actions";

export class App extends React.Component {
  componentDidMount() {
    fetch("http://localhost:3000/tournaments")
      .then(res => res.json())
      .then(json => this.props.tournamentsFetched(json));
    // .then(json => this.setState({ contacts: json.results }));
  }

  render() {
    // const tournaments = this.state.tournaments;

    return (
      <div>
        <AppHeader />
        <main className="ui main text container">
          <TournamentsList tournaments={this.props.tournaments} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tournaments: state.tournaments // (1)
  };
};

const mapDispatchToProps = { tournamentsFetched }; // (2)

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App); // (3)
