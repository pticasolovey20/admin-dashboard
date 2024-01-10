export const leftSideAnimation = {
	hidden: {
		width: '94px',
		transition: {
			duration: 0.5,
			when: 'beforeChildren',
		},
	},

	show: {
		width: '300px',
		transition: {
			duration: 0.5,
			when: 'afterChildren',
		},
	},
};

export const rightSideAnimation = {
	open: {
		x: '0%',
		transition: { when: 'beforeChildren', duration: 0.5 },
	},

	closed: {
		x: '100%',
		transition: { when: 'afterChildren', duration: 0.5 },
	},
};

export const menuItemAnimation = {
	hidden: {
		width: 0,
		opacity: 0,
		transition: {
			duration: 0.5,
		},
	},

	show: {
		width: 'auto',
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
};
