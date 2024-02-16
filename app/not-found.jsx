import Link from 'next/link';

const NotFoundPage = () => {
	return (
		<main className='min-h-screen flex items-center justify-center p-5'>
			<div className='flex flex-col gap-4'>
				<h1 className='text-2xl text-center'>404 | Page not found</h1>

				<Link href='/dashboard' className='text-center text-xl px-4 py-3 rounded-xl bg-secondary'>
					Bach to Dashboard
				</Link>
			</div>
		</main>
	);
};

export default NotFoundPage;
