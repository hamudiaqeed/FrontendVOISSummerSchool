import React from "react";
import Card from "../components/Card";

function CardPage() {
  return (
    <>
      <Card title="Card 1" content="Content for card 1" />
      <Card title="Card 2" content="Content for card 2" />
      <Card title="Card 3" content="Content for card 3" />
    </>
    // Folosim fragments <></> si randam 3 componente de tip Card,
    // dar cu props diferite
  );
}

export default CardPage;
