'use client';

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { chartData } from '../../constants';

const Chart = () => {
	return (
		<div className="w-full h-[300px] sm:h-[450px] p-5 rounded-xl bg-secondary">
			<h2 className="text-2xl text-secondary font-extralight mb-5">Weakly Recap</h2>

			<ResponsiveContainer width="100%" height="90%">
				<LineChart
					width={500}
					height={300}
					data={chartData}
					margin={{
						top: 5,
						right: 10,
						left: -15,
						bottom: 15,
					}}
				>
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip contentStyle={{ border: 'none', backgroundColor: '#151c2c' }} />
					<Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
					<Line
						type="monotone"
						dataKey="click"
						stroke="#82ca9d"
						strokeDasharray="3 4 5 2"
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;
