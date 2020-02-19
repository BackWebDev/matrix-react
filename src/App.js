import React from "react";

import {GobalStyle} from "./styles/global";

import Wrap from "./components/matrix/Wrap";

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
		<React.Fragment>
			<GobalStyle/>
			<Wrap/>
		</React.Fragment>
		);
	};
}

export default App;