import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button, Input } from '../../common';

import styles from './login.module.css';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
	const navigate = useNavigate();
	const { signIn } = useAuth();

	const [form, setForm] = useState({
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState({});

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
			const newUser = { name: '', email: form.email, password: form.password };

			const response = await fetch('http://localhost:4000/login', {
				method: 'POST',
				body: JSON.stringify(newUser),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const result = await response.json();

			signIn(result.user, result.result, () => navigate('/courses'));
		}
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Login</h1>
			<form onSubmit={handleSubmit}>
				<div className={styles.formContent}>
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
					<Button type='submit' buttonText='Login' />
					<p className={styles.redirectText}>
						If you don't have an account you may
					</p>
					<Link to='/registration'>
						<b>Registration</b>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Login;
