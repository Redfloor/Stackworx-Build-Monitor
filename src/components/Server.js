import React from 'react';

const serverItemColor = (response) => {
  switch(response) {
     case 201:
     case 202:
     case 203:
     case 200: {  //ok
        return "status-text green";
     }
     case 302:
     case 303:
     case 204:
     case 205:
     case 206:
     case 301: {  //redirected or no content
        return "status-text orange";
     }
     case 207:
     case 300:
     case 0: {  //unspecified error
        return "status-text grey";
     }
     default: { //fail
        return "status-text red";
     }
   }
 }

const Server = (props) => {
  //HERE IS THE GOLDEN SPOT
  const {response, server} = props;
  return (
    <li className="server-item">
      <p>{server}</p>
      <p>Status: <span className={serverItemColor(response)}>{response}</span></p>
      <a href={server} target="_blank">Visit</a>
    </li>
  );
}

export default Server;
