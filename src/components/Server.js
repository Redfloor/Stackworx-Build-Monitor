import React from 'react';

const Server = (props) => {
  return (
    <li className="server-item">
      <p>{props.server}</p>
      <p>Status: <span className="status-text">STATUS</span></p>
      <a href={props.server} target="_blank">Visit</a>
    </li>
  );
}

export default Server;
