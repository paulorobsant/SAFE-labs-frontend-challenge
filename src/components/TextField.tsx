import React from 'react';
import cx from 'classnames';

interface TextFieldProps {
	fullWidth?: boolean;
	onChange?: (value: string) => void;
	placeholder?: string;
	value: string | number;
}

const TextField: React.FC<TextFieldProps> = ({
	onChange,
	placeholder,
	fullWidth,
}) => {
	return (
		<input
			className={cx('bg-gray-200 rounded-md p-2', { 'w-full': fullWidth })}
			type="text"
			onChange={({ target }) => onChange && onChange(target.value)}
			placeholder={placeholder}
		/>
	);
};

export default TextField;
