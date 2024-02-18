'use client';

import { TailSpin } from 'react-loader-spinner';

const CircleLoader = () => {
	return (
		<div className='h-full flex justify-center items-center p-5'>
			<div className='flex gap-4'>
				<TailSpin
					height='30'
					width='30'
					color='#ffffff'
					visible={true}
					ariaLabel='tail-spin-loading'
					radius='1'
				/>

				<h1 className='text-xl text-center'>Loading...</h1>
			</div>
		</div>
	);
};

export default CircleLoader;
