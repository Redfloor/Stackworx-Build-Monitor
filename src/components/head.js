import React, { Component } from 'react';
import Server from './Server';

export default class ServerList extends Component  {
  constructor(props) {
    super(props);

    this.state = { serverResponses: [] };
  }
}
const Head = () => {
  return (
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <title>Dylan&#39;s Reactive Playground</title>
  }
);

export default Head;
