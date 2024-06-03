const formatCreationDate = (dateStr) => {
	let date = new Date(dateStr);
	let day = ('0' + date.getDate()).slice(-2);
	let month = ('0' + (date.getMonth() + 1)).slice(-2);
	let year = date.getFullYear();

	return day + '.' + month + '.' + year;
};

export default formatCreationDate;
