import React, { Component } from 'react';
import axios from 'axios';

class DataTable extends Component {
  state = {
    data: [],
    loading: true,
  };

  componentDidMount() {
    // Step 1: Fetch data from the API
    axios.get('https://api.example.com/data')
      .then(response => {
        // Step 2: Parse the API response (assuming it's an array of objects)
        this.setState({
          data: response.data,
          loading: false,
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.setState({ loading: false });
      });
  }

  render() {
    // Step 3: Define table structure and headers
    const tableHeaders = ['Column1', 'Column2', 'Column3'];

    return (
      <div>
        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <table>
            <thead>
              <tr>
                {tableHeaders.map(header => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item, index) => (
                <tr key={index}>
                  {tableHeaders.map(header => (
                    <td key={header}>{item[header]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default DataTable;
