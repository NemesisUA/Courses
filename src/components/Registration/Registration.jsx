import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button, Input } from '../../common';

import styles from './registration.module.css';

const Registration = () => {
	const navigate = useNavigate();

	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState({});
	const [backendErrors, setBackendErrors] = useState('');

	const handleChange = (event) => {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	};

	async function handleSubmit(e) {
		e.preventDefault();

		const newErrors = {};

		Object.keys(form).forEach((key) => {
			if (form[key].trim().length === 0) {
				newErrors[key] =
					`${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
			}
		});

		setErrors(newErrors);

		if (Object.keys(newErrors).length === 0) {
			const newUser = {
				name: form.name,
				email: form.email,
				password: form.password,
			};

			const response = await fetch('http://localhost:4000/register', {
				method: 'POST',
				body: JSON.stringify(newUser),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const result = await response.json();

			if (result.successful) {
				setBackendErrors(null);
				navigate('/login');
			} else {
				setBackendErrors(result.errors[0]);
			}
		}
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Registration</h1>
			<form onSubmit={handleSubmit}>
				<div className={styles.formContent}>
					<Input
						labelText='Name'
						placeholderText='Input text'
						name='name'
						value={form.name}
						onChange={handleChange}
						required
						error={errors.name}
					/>

					<Input
						labelText='Email'
						placeholderText='Input text'
						type='email'
						name='email'
						value={form.email}
						onChange={handleChange}
						required
						error={errors.email}
					/>
					{backendErrors && (
						<span style={{ color: 'red', marginBottom: '1rem' }}>
							{backendErrors}
						</span>
					)}

					<Input
						labelText='Password'
						placeholderText='Input text'
						type='password'
						name='password'
						value={form.password}
						onChange={handleChange}
						required
						error={errors.password}
					/>
					<br />
					<Button type='submit' buttonText='Registration' />
					<p className={styles.redirectText}>If you have an account you may</p>
					<Link to='/login'>
						<b>Login</b>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Registration;
