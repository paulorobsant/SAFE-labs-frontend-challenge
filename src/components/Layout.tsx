import React from 'react';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="h-screen bg-gray-300 flex items-center justify-center">
			<div className="h-screen lg:h-full w-4/4 lg:w-1/4 bg-white rounded-2xl shadow-xl overflow-hidden">
				{children}
			</div>
		</div>
	);
};

export default Layout;
