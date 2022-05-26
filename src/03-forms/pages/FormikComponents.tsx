import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => {
	return (
		<div>
			<div>Formik Components</div>
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					terms: false,
					jobType: '',
				}}
				onSubmit={values => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
					lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
					email: Yup.string().email('Invalid email address').required('Required'),
					terms: Yup.boolean().isTrue('You must accept the terms and conditions'),
					jobType: Yup.string().notOneOf(['it-jr'], 'Is option not permite').required('Required'),
				})}>
				{formik => (
					<Form>
						<label htmlFor='firstName'>First Name</label>
						<Field name='firstName' type='text' placeholder='First Name' />
						<ErrorMessage name='firstName' component='span' />

						<label htmlFor='lastName'>Last Name</label>
						<Field name='lastName' type='text' />
						<ErrorMessage name='lastName' component='span' />

						<label htmlFor='email'>Email Address</label>
						<Field name='email' type='text' />
						<ErrorMessage name='email' component='span' />

						<label htmlFor='jobType'>Job Type</label>
						<Field name='jobType' as='select'>
							<option value=''>Select One</option>
							<option value='developer'>Developer</option>
							<option value='designer'>Designer</option>
							<option value='it-senior'>IT senior</option>
							<option value='it-jr'>IT Jr.</option>
						</Field>
						<ErrorMessage name='jobType' component='span' />

						<label htmlFor='terms'>
							<Field name='terms' type='checkbox' />
							Terms and conditions
						</label>
						<ErrorMessage name='terms' component='span' />

						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
