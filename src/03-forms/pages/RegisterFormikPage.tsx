import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyTextInput } from '../components/MyTextInput';

export const RegisterFormikPage = () => {
	return (
		<div>
			<h1>Register Formik Page</h1>
			<Formik
				initialValues={{
					name: '',
					email: '',
					password1: '',
					password2: '',
				}}
				onSubmit={values => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					name: Yup.string().min(2, 'Too Short!').max(15, 'Too Long!').required('Required'),
					email: Yup.string().email('Invalid email').required('Required'),
					password1: Yup.string().min(5, 'Too Short!').max(15, 'Too Long!').required('Required'),
					password2: Yup.string()
						.oneOf([Yup.ref('password1')], 'Passwords must match')
						.required('Required'),
				})}>
				{({ handleReset }) => (
					<Form>
						<MyTextInput name='name' type='text' label='Name' placeholder='Name' />
						<MyTextInput name='email' type='email' label='Email' placeholder='Email' />
						<MyTextInput name='password1' type='password' label='Password' placeholder='********' />
						<MyTextInput name='password2' type='password' label='Confirm Password' placeholder='********' />
						<button type='submit'>Register</button>
						<button type='button' onClick={handleReset}>
							Reset
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
