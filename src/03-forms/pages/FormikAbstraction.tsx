import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstraction = () => {
	return (
		<div>
			<div>Formik Abstraction</div>
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
				{form => (
					<Form>
						<MyTextInput label='First Name' name='firstName' type='text' placeholder='First Name' />
						<MyTextInput label='Last Name' name='lastName' type='text' placeholder='Last Name' />
						<MyTextInput label='Email Address' name='email' type='text' placeholder='Email Address' />
						<MySelect label='Job Type' name='jobType'>
							<option value=''>Select One</option>
							<option value='developer'>Developer</option>
							<option value='designer'>Designer</option>
							<option value='it-senior'>IT senior</option>
							<option value='it-jr'>IT Jr.</option>
						</MySelect>
						<MyCheckbox label='Terms & conditions' name='terms' />
						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
