import * as React from 'react';

import Button from 'material-ui/Button';

import './App.scss';

class App extends React.Component {
  constructor(props: {}, context?: any) {
    super(props, context);
    this.handleViewSourceCodeClick = this.handleViewSourceCodeClick.bind(this);
  }

  public handleViewSourceCodeClick() {
    window.location.href = 'https://github.com/nicolaspearson/react.material.boilerplate';
  }

  public render() {
    return (
      <section className="app-landing-page">
        <div className="main-content">
          <div className="hero">
            <div className="container">
              <h2>React Material Boilerplate</h2>
              <p>
                React Material Boilerplate is a helpful template built with Google's Material Design
                guidelines in mind, it comes with tons of useful features to kickstart your next
                project.
              </p>
              <Button
                variant="raised"
                color="primary"
                className="btn-cta"
                onClick={this.handleViewSourceCodeClick}
              >
                View Source Code
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
