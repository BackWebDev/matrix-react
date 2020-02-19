import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {chunk, uniqueId} from "lodash";

import {WrapStyled} from "../../styles/matrix/matrix";

import {setEmpty} from "../../redux/actions/items";

import Row from "./Row";
import Item from "./Item";
import Panel from "./panel/Panel";

const Wrap = ({ size, setEmpty, recreate }) => {
	const [state, setState] = useState({
		items: []
	});

	useEffect(() => {
		let items = [];
		let emptyItems = {};
		for (let i = 0; i < (size * size); i++) {
			let id = uniqueId("_");
			items.push(<Item id={id} key={id}/>);
			emptyItems[id] = "";
		}

		setEmpty(emptyItems);
		setState({
			...state,
			items: [...chunk(items, size)]
		});
	}, [size, setEmpty, recreate]);

	return (
		<WrapStyled>
			<Panel/>
			{
				state.items.map((items, key) => {
					return <Row items={items} key={key}/>
				})
			}
		</WrapStyled>
	);
};

const mapStateToProps = state => ({
	size: state.items.size,
	recreate: state.items.recreate
});

const mapDispatchToProps = dispatch => ({
	setEmpty: emptyItems => dispatch(setEmpty(emptyItems))
});

Wrap.propTypes = {
	size: PropTypes.number,
	recreate: PropTypes.number,

	setEmpty: PropTypes.func
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Wrap);