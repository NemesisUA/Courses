export default function checkNewCourseErrors(formData) {
	const { title, description, duration } = formData;
	const errors = {};

	if (title.trim().length < 2) {
		errors.title = 'Text length should be at least 2 characters';
	}

	if (description.trim().length < 2) {
		errors.description = 'Text length should be at least 2 characters';
	}

	if (+duration <= 0) {
		errors.duration = 'Duration should be more than 0 minutes';
	}

	return errors;
}
