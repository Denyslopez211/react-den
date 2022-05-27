import { ErrorMessage, useField } from 'formik';
import { Props } from '../interfaces';

export const MyCheckbox = ({ label, ...props }: Props) => {
	const [field] = useField({ ...props, type: 'checkbox' });
	return (
		<>
			<label htmlFor={props.id || props.name}>
				<input type='checkbox' {...field} {...props} />
				{label}
			</label>
			<ErrorMessage name={props.name} component='span' className='error' />
		</>
	);
};