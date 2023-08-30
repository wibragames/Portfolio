import React from "react";

interface Igloo {
  city: string;
  name: string;
  address: string;
}

interface Props {
  igloos: Igloo[];
}

const IgloosList: React.FC<Props> = ({ igloos }) => {
  return (
    <ul>
      {igloos.map((igloo) => (
        <li key={igloo.address}>
          <h2>{igloo.name}</h2>
          <p>{igloo.address}</p>
        </li>
      ))}
    </ul>
  );
};

export default IgloosList;