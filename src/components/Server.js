import React from 'react';

const Server = (props) => {
  // console.log("RESPONSE: " + props.response);
  return (
    <li className="server-item">
      <p>{props.server}</p>
      <p>Status: <span className="status-text">{props.response}</span></p>
      <a href={props.server} target="_blank">Visit</a>
    </li>
  );
}

export default Server;
