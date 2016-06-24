// Any JS in here is auto ran for us
// 


// Import the react library from node modules
import React, { Component } from 'react'; // assign to React Variable name
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';
import axios from 'axios';

// Create component
class App extends Component {

	constructor(props){ // special object in React
		super(props);  // boilerplate item

		this.state = { images: [] }; // initialize state object
	}

	componentWillMount() {
		// load data here
		axios.get('http://api.imgur.com/3/gallery/hot/viral/0')
			.then(response => this.setState({ images: response.data.data }));
	}

	render(){
		return (
			<div>
				<ImageList images={this.state.images} />
			</div>
		);
	}
};

// Render this component to the screen
Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.container'));	
});
