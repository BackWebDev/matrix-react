import React from "react";

import {RowStyled} from "../../styles/matrix/matrix";

const Row = ({items}) => {
	return (
	<RowStyled>
		{items}
	</RowStyled>
	);
};

export default Row;