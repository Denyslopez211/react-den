import { ErrorMessage, useField } from 'formik';
import { Props } from '../interfaces';

export const MySelect = ({ label, ...props }: Props) => {
	const [field] = useField(props);
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<select {...field} {...props} />
			<ErrorMessage name={props.name} component='span' className='error' />
		</>
	);
};
