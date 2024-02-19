import { delay } from '@/app/utils';

import Chart from './Chart';

const ChartContainer = async () => {
	await delay(2000);

	return <Chart />;
};

export default ChartContainer;
