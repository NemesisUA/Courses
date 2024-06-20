const LS_KEYS = {
	TOKEN: 'token',
	USER: 'user',
};

class LocalStorageService {
	static get(key) {
		const value = localStorage.getItem(key);

		try {
			return JSON.parse(value);
		} catch {
			return '';
		}
	}

	static set(key, value) {
		return localStorage.setItem(key, JSON.stringify(value));
	}

	static remove(key) {
		return localStorage.removeItem(key);
	}

	static clearAll() {
		return localStorage.clear();
	}
}

export { LocalStorageService, LS_KEYS };
