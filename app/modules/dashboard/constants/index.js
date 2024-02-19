import {
	MdDashboard,
	MdSupervisedUserCircle,
	MdShoppingBag,
	MdAttachMoney,
	MdWork,
	MdAnalytics,
	MdPeople,
	MdOutlineSettings,
	MdHelpCenter,
} from 'react-icons/md';

export const menuItems = [
	{
		title: 'Pages',
		list: [
			{
				title: 'Dashboard',
				path: '/dashboard',
				icon: <MdDashboard size={30} />,
			},
			{
				title: 'Users',
				path: '/dashboard/users',
				icon: <MdSupervisedUserCircle size={30} />,
			},
			{
				title: 'Products',
				path: '/dashboard/products',
				icon: <MdShoppingBag size={30} />,
			},
			{
				title: 'Transactions',
				path: '/dashboard/transactions',
				icon: <MdAttachMoney size={30} />,
			},
		],
	},
	{
		title: 'Analytics',
		list: [
			{
				title: 'Revenue',
				path: '/dashboard/revenue',
				icon: <MdWork size={30} />,
			},
			{
				title: 'Reports',
				path: '/dashboard/reports',
				icon: <MdAnalytics size={30} />,
			},
			{
				title: 'Teams',
				path: '/dashboard/teams',
				icon: <MdPeople size={30} />,
			},
		],
	},
	{
		title: 'User',
		list: [
			{
				title: 'Settings',
				path: '/dashboard/settings',
				icon: <MdOutlineSettings size={30} />,
			},
			{
				title: 'Help',
				path: '/dashboard/help',
				icon: <MdHelpCenter size={30} />,
			},
		],
	},
];

export const transactions = [
	{ id: 1, name: 'J. Smith', status: 'Complete', date: '25.12.2023', amount: '3.593' },
	{ id: 2, name: 'J. Cena', status: 'Pending', date: '14.02.2024', amount: '1.356' },
	{ id: 3, name: 'J. Doe', status: 'Complete', date: '09.01.2024', amount: '8.426' },
	{ id: 4, name: 'J. Snow', status: 'Rejected', date: '17.01.2024', amount: '0.001' },
];

export const chartData = [
	{
		name: 'S',
		visit: 4000,
		click: 2400,
	},
	{
		name: 'M',
		visit: 3000,
		click: 1398,
	},
	{
		name: 'T',
		visit: 2000,
		click: 3800,
	},
	{
		name: 'W',
		visit: 2780,
		click: 3908,
	},
	{
		name: 'T',
		visit: 1890,
		click: 4800,
	},
	{
		name: 'F',
		visit: 2390,
		click: 3800,
	},
	{
		name: 'S',
		visit: 3490,
		click: 4300,
	},
];
