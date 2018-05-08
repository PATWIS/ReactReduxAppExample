import * as React from "react";
import { TournamentCard } from "./TournamentCard";

export class TournamentsList extends React.Component {
  render() {
    return (
      <ul className="ui relaxed divided list selection">
        {this.props.tournaments.map(t => (
          <TournamentCard key={t.id} tournament={t} />
        ))}
      </ul>
    );
  }
}
