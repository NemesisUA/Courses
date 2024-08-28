const formatCreationDate = (dateStr) => {
	const [day, month, year] = dateStr.split('/');
	return `${day.padStart(2, '0')}.${month.padStart(2, '0')}.${year}`;
};

export default formatCreationDate;
