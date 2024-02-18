import { Suspense } from 'react';

import CardSleleton from '@/app/modules/dashboard/components/card/CardSleleton';
import CardList from '@/app/modules/dashboard/components/card/CardList';
import TransactionsSkeleton from '@/app/modules/dashboard/components/transactions/TransactionsSkeleton';
import Transactions from '@/app/modules/dashboard/components/transactions/Transactions';
import ChartSkeleton from '@/app/modules/dashboard/components/chart/ChartSkeleton';
import ChartContainer from '@/app/modules/dashboard/components/chart/ChartContainer';
import Rightbar from '@/app/modules/dashboard/components/Rightbar';

const DashboardPage = async () => {
	return (
		<div className='flex-1 flex gap-5'>
			<div className='w-full lg:w-[65%] xl:w-[75%] flex flex-col gap-5'>
				<Suspense fallback={<CardSleleton amount={3} />}>
					<CardList />
				</Suspense>

				<Suspense fallback={<TransactionsSkeleton />}>
					<Transactions />
				</Suspense>

				<Suspense fallback={<ChartSkeleton />}>
					<ChartContainer />
				</Suspense>
			</div>

			<div className='hidden lg:block w-[35%] xl:w-[25%]'>
				<Rightbar />
			</div>
		</div>
	);
};

export default DashboardPage;
