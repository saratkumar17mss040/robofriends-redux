import React, { Component } from 'react';
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
// import { ReactComponent } from '*.svg';

// state - object >> props
// props -things that come out of state

// if we need to use state  - we need to have class

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			robots: [],
			searchfield: '',
		};
	}

	componentDidMount() {
		// fetch('https://jsonplaceholder.typicode.com/users')
		// 	.then(response => {
		// 		return response.json();
		// 	})
		// 	.then(users => {
		// 		this.setState({ robots: users });
		// 	});
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ robots: users }));
	}

	onSearchChange = (event) => {
		this.setState({
			searchfield: event.target.value,
		});
		// console.log(event.target.value);
		// const filteredRobots = this.state.robots.filter((robots) => {
		// 	return robots.name
		// 		.toLowerCase()
		// 		.includes(this.state.searchfield.toLowerCase());
		// });
	};

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		//	 Conditional rendering
		return !robots.length ? (
			<h1>Loading...</h1>
		) : (
			<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<SearchBox onSearchChange={this.onSearchChange} />
				{/* <CardList robots={this.state.robots} /> */}
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots} />
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
}

export default App;
