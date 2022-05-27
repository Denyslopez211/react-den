export interface Props {
	label: string;
	name: string;
	placeholder?: string;
	type?: 'text' | 'email' | 'password';
	[key: string]: any;
}
