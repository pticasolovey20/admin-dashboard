import { cn } from '@/app/utils';

const SubmitButton = ({ label, styles }) => {
	return (
		<button type='submit' className={cn('col-span-2 p-3 rounded-lg bg-[teal]', styles)}>
			{label}
		</button>
	);
};

export default SubmitButton;
