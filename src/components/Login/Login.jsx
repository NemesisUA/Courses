import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/user/userSlice';

import { Button, Input } from '../../common';

import styles from './login.module.css';
import {
	LocalStorageService,
	LS_KEYS,
} from '../../store/services/LocalStorageService';

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [form, setForm] = useState({
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState({});
	const [isLoading, setIsLoading] = useState(false);

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

			try {
				setIsLoading(true);

				const response = await fetch(
					'https://courses-api-a3hw.onrender.com/login',
					{
						method: 'POST',
						body: JSON.stringify(newUser),
						headers: {
							'Content-Type': 'application/json',
						},
					}
				);

				const result = await response.json();

				dispatch(loginUser(result));

				LocalStorageService.set(LS_KEYS.TOKEN, result.result);
				LocalStorageService.set(LS_KEYS.USER, result.user);

				navigate('/courses');
			} catch (error) {
				alert('Login Failed', error.message);
			} finally {
				setIsLoading(false);
			}
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
					<Button
						type='submit'
						buttonText='Login'
						onClick={handleSubmit}
						disabled={isLoading}
					/>
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
