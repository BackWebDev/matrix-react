import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ItemStyled, ItemNumber} from "../../styles/matrix/matrix";

const Item = (props) => {
	let number = "";

	if (Object.keys(props.filled).includes(props.id)) {
		number = props.filled[props.id];
	}

	return (
	<ItemStyled size={props.size}>
		<ItemNumber>{number}</ItemNumber>
	</ItemStyled>
	);
};

const mapStateToProps = state => ({
	size: state.items.size,
	filled: state.items.filled
});

Item.propTypes = {
	size: PropTypes.number,
	filled: PropTypes.object,
	id: PropTypes.string
};

export default connect(
	mapStateToProps
)(Item);