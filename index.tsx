import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from './Pages/Home';
import './sass/main.scss';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return <Home/>
  }
}

render(<App />, document.getElementById('root'));
