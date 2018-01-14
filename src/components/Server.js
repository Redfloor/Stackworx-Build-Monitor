import React from 'react';

const Server = (props) => {
  return (
    <li className="server-item">
      <p>{props.server}</p>
      <a href={props.server} target="_blank">Visit</a>
    </li>
  );
}

export default Server;
