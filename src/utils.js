import {sample} from "lodash";

export const randomWithExclude = (from, to, exclude) => {
	let numbers = [];
	for (let i = from; i <= to; i++) {
		if (!exclude.includes(i)) {
			numbers.push(i);
		}
	}

	return sample(numbers);
};