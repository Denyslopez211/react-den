import { Form, Formik } from 'formik';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
	initialValues[input.name] = input.value;
	if (!input.validations) continue;

	let schema = Yup.string();

	for (const rule of input.validations) {
		if (rule.type === 'required') {
			schema = schema.required(rule.message);
		}
		if (rule.type === 'minLength') {
			schema = schema.min((rule as any).length, rule.message);
		}
	}
	requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
	return (
		<div>
			<div>Dynamic Form</div>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={value => {
					console.log(value);
				}}>
				{formik => (
					<Form noValidate>
						{formJson.map(({ type, name, label, placeholder, options }) => {
							if (type === 'input' || type === 'email' || type === 'password') {
								return (
									<MyTextInput key={name} type={type as any} name={name} label={label} placeholder={placeholder} />
								);
							} else if (type === 'select') {
								return (
									<MySelect key={name} label={label} name={name}>
										<option value=''>Select an option</option>
										{options?.map(({ id, label }) => (
											<option key={id} value={id}>
												{label}
											</option>
										))}
									</MySelect>
								);
							}
							throw new Error('Unknown input type');
						})}

						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

// {
//     "type": "select",
//     "name": "favoriteGame",
//     "label": "Favorite Game",
//     "value": "",
//     "options": [
//       {
//         "name": "Super Smash",
//         "value": "super_smash",
//         "id": "1"
//       },
//       {
//         "name": "Metal Gear",
//         "value": "metal_gear",
//         "id": "2"
//       },
//       {
//         "name": "Resident Evil",
//         "value": "resident_evil",
//         "id": "3"
//       }
//     ]
//   }

//   interface Fields {
//     [key: string]: any
// }
//    <Form>
//                             {formJson.map(({ type, label, name, placeholder, options }) => {

//                                 const props = {
//                                     key: name,
//                                     label,
//                                     name,
//                                     placeholder,
//                                     options,
//                                     type: (type as any)
//                                 }

//                                 const fields: Fields = {
//                                     input: <MyTextInput {...props} />,
//                                     email: <MyTextInput {...props} />,
//                                     password: <MyTextInput {...props} />,
//                                     select: <MySelect {...props} />
//                                 }

//                                 return fields[type]
//                             })}
//                             <button type="submit">Submit</button>
//                         </Form>

// return (
//                   <MySelect
//                     key={ name }
//                     label={ label }
//                     name={ name }
//                   >
//                     <option value="">Select an option</option>
//                     {
//                       options?.map( opt => (
//                         <option key={ opt.id } value={ opt.value }>{ opt.name }</option>
//                       ))
//                     }
//                   </MySelect>
//                 )
