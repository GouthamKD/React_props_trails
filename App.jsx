import React from 'react';

    class App extends React.Component {
      render() {
        return (
          <div>
            <h1> The application name is : {this.props.title}</h1>
          </div>
        );
      }
    }

    export default App;