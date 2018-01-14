import React, { Component } from 'react';
import Server from './Server';
import Request from 'react-http-request';

export default class ServerList extends Component  {
  // const Servers = props.videos.map( (server) => {
  //   return <VideoListItem key={ video.etag } video = { video } />;
  // } );

  render() {
    // console.log(this.props.servers);
    const serverListHTML = this.props.servers.map((server, index) => <Server server={server} key={`${index}`}/>)

    return (
      <ul className="server-list">
        {serverListHTML}
      </ul>

      // <Request
      //   url='https://api.github.com/users/mbasso'
      //   method='get'
      //   accept='application/json'
      //   verbose={true}
      // >
      //   {
      //     ({error, result, loading}) => {
      //       if (loading) {
      //         return <div>loading...</div>;
      //       } else {
      //         return <div>{ JSON.stringify(result) }</div>;
      //       }
      //     }
      //   }
      // </Request>


    );
  }
}
