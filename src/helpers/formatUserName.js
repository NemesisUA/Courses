const formatUserName = (str) =>
	str
		.split(' ')
		.map((item) => item[0].toUpperCase() + item.slice(1))
		.join();

export default formatUserName;
