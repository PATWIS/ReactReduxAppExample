import * as React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
export const TournamentCard = ({ tournament }) => {
  return (
    <li className="item">
      <Card>
        {/*<CardImg
          top 
          width="100%"
          src="https://placeimg.com/640/120/any"
          alt="Card image cap"
        />*/}
        <CardBody>
          <CardTitle>{tournament.name}</CardTitle>
          <CardSubtitle>Turniej rozpocznie się za 5 dni !</CardSubtitle>
          <CardText>{tournament.desc}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </li>
  );
};
