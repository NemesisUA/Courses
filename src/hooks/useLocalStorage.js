export const useLocalStorage = (key, defaultValue) => {
	const setItem = (value) => {
		try {
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			throw new Error(`Failed to set item ${key}, error: ${error.message}`);
		}
	};

	const getItem = () => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : defaultValue;
		} catch (error) {
			throw new Error(`Failed to get item ${key}, error: ${error.message}`);
		}
	};

	const removeItem = () => {
		try {
			window.localStorage.removeItem(key);
		} catch (error) {
			throw new Error(`Failed to remove item ${key}, error: ${error.message}`);
		}
	};

	return { setItem, getItem, removeItem };
};
