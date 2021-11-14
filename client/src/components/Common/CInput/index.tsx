import React from 'react';
import { classnames, TTailwindString } from '@@/tailwindcss-classnames';

interface Props {
	classes?: TTailwindString;
	type: string;
	label?: string;
	placeholder?: string;
	autofocus: boolean;
}

export const CInput = (props: Props): JSX.Element => {
	const classes = classnames('w-10/12', 'h-10','border', 'm-2', 'p-2');
	const label = classnames( 'mx-2','mt-5');
	return (
		<div>
			{
				props.label ? <div className={label}>{props.label}</div> : null
			}
			<input type={props.type}
				   placeholder={props.placeholder}
				   autoFocus={props.autofocus}
				   className={classnames(classes, props.classes)}/>
		</div>

	);
};

CInput.defaultProps = {
	type: 'text',
	autofocus: false,
};