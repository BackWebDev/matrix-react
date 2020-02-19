import React from "react";

import {ButtonStyled} from "../../../styles/matrix/panel";

const Button = ({text, handler}) => {
	return (
	<ButtonStyled onClick={handler}>{text}</ButtonStyled>
	);
};

export default Button;