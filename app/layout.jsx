import './globals.css';

export const metadata = {
	title: 'Admin Dashboard',
	description: 'Generated by create next app',
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body suppressHydrationWarning={true} className="text-primary bg-primary">
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
