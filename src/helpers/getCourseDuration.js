const formatCreationDate = (minsNumber) => {
	let hours = Math.floor(+minsNumber / 60);
	let hoursStr = hours < 10 ? `0${hours}` : `${hours}`;

	let postfix = 'hours';
	if (hours <= 1) postfix = 'hour';

	let mins = minsNumber % 60;
	let minsStr = mins < 10 ? `0${mins}` : `${mins}`;

	return hoursStr + ':' + minsStr + ' ' + postfix;
};

export default formatCreationDate;
