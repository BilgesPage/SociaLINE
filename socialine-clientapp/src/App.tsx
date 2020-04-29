import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  /* SAMPLE1: PASSING SAMPLE DATA INTO THE BROWSER
  state= {
    values: []
  }

  componentDidMount() {
    this.setState({
      values: [{id:1, name: 'Value 101'}, {id:2, name: 'Value 102'} ]
    })
  };
  */

  state = {
    values : []
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/values').then(
      (response) => {

        console.log(response);

        this.setState({
          values: response.data
        });

      }
    )
  }

  render(){
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}

          {
          /* SAMPLE1: PASSING SAMPLE DATA INTO THE BROWSER
          <ul>
            {
              this.state.values.map((value: any) => (
              <li>{value.name}</li>
              ))
            }
          </ul>
          */
          }

          <ul>
            {
              this.state.values.map( (value:any) => (
              <li key={value}>{value.name}</li>
              ))
            }
          </ul>

        </header>
      </div>
    );
  }; 
}

export default App;
