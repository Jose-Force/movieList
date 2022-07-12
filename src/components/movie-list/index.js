import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./index.css";
import useAnalytics from './useAnalytics';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedYear: null,
      result: []
    };
  }

  handleYearChange = (e) => {
    this.setState({selectedYear: e.target.value});
    const gaEventTracker = useAnalytics("Search");
    gaEventTracker(e.target.value);
  }

  onClick = () => {
    this.resolveData(this.state.selectedYear);
  }

  resolveData = (year) =>  {
    fetch(`https://jsonmock.hackerrank.com/api/movies?Year=${year}`)
      .then((response) => response.json())
      .then(result => this.setState({
        result: result.data
      }));
  }
  
  render() {

    return (
      <div className="layout-column align-items-center mt-50">
        <section className="layout-row align-items-center justify-content-center">
          <input type="number" className="large" placeholder="Enter Year eg 2022" data-testid="app-input" onBlur={this.handleYearChange}/>
          <button className="" data-testid="submit-button"  onClick={(e)=>this.onClick(e)} >Search</button>
        </section>
        {this.state.selectedYear && this.state.result.length > 0 &&
        <ul className="mt-50 styled" data-testid="movieList">
          {this.state.result.map((res, index) => {
                return (
                  <li className="slide-up-fade-in py-10" key={index + 1 }><Link>{res.Title}</Link></li>
                  );
                })    
              }
        </ul>
  }
  {this.state.selectedYear && this.state.result.length === 0 &&
        <div className="mt-50 slide-up-fade-in" data-testid="no-result">No Movies found</div>}
      </div>
    );
  }
}