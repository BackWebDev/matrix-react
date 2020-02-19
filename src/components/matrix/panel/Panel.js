import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {randomWithExclude} from "../../../utils";
import {sample} from "lodash";

import {PanelStyled} from "../../../styles/matrix/panel";

import {setFilled, filling, clear, stop} from "../../../redux/actions/items";

import Button from "./Button";

const Panel = (props) => {
	useEffect(() => {
		if (!props.filling) {
			return;
		}

		let timeout = setTimeout(() => {
			let id = sample(Object.keys(props.emptyItems));

			props.setFilled(
				id,
				randomWithExclude(
				0,
				props.size*props.size,
					Object.values(props.filledItems)
				),
				props.emptyItems
			);
		}, 1000);

		return () => {
			if(Object.keys(props.emptyItems).length === 0) {
				props.stop();
			}
			clearTimeout(timeout);
		};
	});

	return (
	<PanelStyled>
		<Button text={"Start"} handler={props.fillingStart}/>
		<Button text={"Clear"} handler={e => props.clear(props.recreate)}/>
	</PanelStyled>
	);
};

const mapStateToProps = state => ({
	emptyItems: state.items.empty,
	filledItems: state.items.filled,
	filling: state.items.filling,
	recreate: state.items.recreate,
	size: state.items.size
});

const mapDispatchToProps = dispatch => ({
	setFilled: (id, number, emptyItems) => dispatch(setFilled(id, number, emptyItems)),
	fillingStart: () => dispatch(filling()),
	clear: recreate => dispatch(clear(recreate)),
	stop: () => dispatch(stop())
});

Panel.propTypes = {
	emptyItems: PropTypes.object,
	filledItems: PropTypes.object,
	filling: PropTypes.bool,
	recreate: PropTypes.number,
	size: PropTypes.number,

	setFilled: PropTypes.func,
	fillingStart: PropTypes.func,
	clear: PropTypes.func,
	stop: PropTypes.func
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Panel);