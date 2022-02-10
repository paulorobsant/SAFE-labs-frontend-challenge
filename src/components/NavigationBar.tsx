import React from 'react';
import cx from 'classnames';

interface NavigationBarProps {
	leftButton?: any;
	rightButton?: any;
	title?: string;
	transparent?: boolean;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
	leftButton: LeftButton,
	rightButton: RightButton,
	title,
	transparent,
}) => {
	return (
		<div
			className={cx('flex p-4 h-20 items-center', {
				'bg-white': !transparent,
				'bg-transparent': transparent,
			})}
		>
			<div className="w-1/4">{LeftButton && <LeftButton />}</div>
			<div className="w-2/4 text-center font-bold text-lg">{title}</div>
			<div className="w-1/4 grid justify-items-end">
				{RightButton && <RightButton />}
			</div>
		</div>
	);
};

export default NavigationBar;
