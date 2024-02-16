import Card from '@/app/modules/dashboard/components/card/Card';
import Transactions from '@/app/modules/dashboard/components/transactions/Transactions';
import Chart from '@/app/modules/dashboard/components/chart/Chart';
import Rightbar from '@/app/modules/dashboard/components/right-bar/Rightbar';

const DashboardPage = () => {
	return (
		<div className='flex-1 flex gap-5'>
			<div className='w-full lg:w-[65%] xl:w-[75%] flex flex-col gap-5'>
				<div className='w-full flex justify-between flex-wrap gap-5'>
					{Array.from({ length: 3 }).map((_, index) => (
						<Card key={index} />
					))}
				</div>

				<Transactions />
				<Chart />
			</div>

			<div className='hidden lg:block w-[35%] xl:w-[25%]'>
				<Rightbar />
			</div>
		</div>
	);
};

export default DashboardPage;
