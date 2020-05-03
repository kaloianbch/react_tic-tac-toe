import React from 'react';
import '../css/App.css';
import Game from './Game';

// TODO - how does the manifest.json work

/**
 * The App component acts as the entry point for the code of the site.
 * Beyond and even here is just React code.
 */
class App extends React.Component {
  /**
   * React render function, returns DOM elements of the component.
   * @return {Element} Game component.
   * @see Game
   */
  render() {
    return (
      <Game/>
    );
  }
}

export default App;
