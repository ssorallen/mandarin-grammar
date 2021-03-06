/* @flow */

import './App.css';
import { Books, Grammars } from './Grammars';
import React from 'react';
import ReactMarkdown from 'react-markdown';

type State = {
  currentGrammar: Object,
};

class App extends React.Component<void, State> {
  constructor() {
    super();
    this.state = {
      currentGrammar: Grammars[Math.floor(Math.random() * Grammars.length)],
    };
  }

  _handleRandom = () => {
    const currentGrammarIndex = Grammars.indexOf(this.state.currentGrammar);
    let nextGrammarIndex;
    do {
      // Ensure the same grammar is not chosen again, the "Random" button should always bring up a
      // different grammar.
      nextGrammarIndex = Math.floor(Math.random() * Grammars.length);
    } while (nextGrammarIndex === currentGrammarIndex);
    this.setState({ currentGrammar: Grammars[nextGrammarIndex] });
  };

  render() {
    const { currentGrammar } = this.state;
    const currentBook = Books.find(book => book.id === currentGrammar.bookId);
    if (currentBook == null) return <div />;

    return (
      <React.Fragment>
        <main className="container" role="main">
          <div className="row justify-content-md-center">
            <div className="col-lg-6">
              <div className="mt-2">
                <small className="text-muted">Volume {currentBook.volume}</small>{' '}
                <small className="text-muted">⦊</small>{' '}
                <small className="text-muted">Lesson {currentGrammar.lesson}</small>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-lg-6">
              <div className="card mt-2">
                <div className="card-body">
                  <h5 className="card-title">{currentGrammar.grammar.zh_TW}</h5>
                  <h5 className="card-title">{currentGrammar.grammar.en}</h5>
                  <ul className="card-text">
                    {currentGrammar.examples.map((example, index) => (
                      <li key={index}>
                        <ReactMarkdown source={example.zh_TW} />
                        <ReactMarkdown source={example.en} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="footer">
          <div className="container">
            <div className="row justify-content-md-center" style={{ position: 'relative' }}>
              <div className="bg-light col-lg-6 mt-3 py-3">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  disabled={Grammars.length < 2}
                  onClick={this._handleRandom}>
                  Random
                </button>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
