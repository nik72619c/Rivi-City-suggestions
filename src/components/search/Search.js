import React from 'react';
import cities from '../../constants/city.json';
import Select from 'react-select'
export default class SearchComponent extends React.Component {

    constructor(){
        super();
        this.state = {
            options: cities.cities.map(city=> {
            return {value: city.name, label: city.name}
        })
        }
        console.log(cities);
    }

    componentDidMount(){
        let newCities =  cities.cities.map(city=> {
            return {value: city.name, label: city.name}
        });
        console.log(newCities);
        this.setState({
            cities: newCities
        })
    }
    render(){
        return (<div>
          <Select options={this.state.options} isMulti />
        </div>)
    }
}