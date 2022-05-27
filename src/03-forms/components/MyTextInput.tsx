import { ErrorMessage, useField } from 'formik';
import { Props } from '../interfaces';

export const MyTextInput = ({ label, ...props }: Props) => {
	const [field] = useField(props);
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className='text-input' {...field} {...props} />
			<ErrorMessage name={props.name} component='span' className='error' />
		</>
	);
};
