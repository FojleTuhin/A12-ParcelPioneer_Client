
import  { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import useAxiosSecure from '@/hooks/useAxiosSecure';

function Barchart() {
    const [chartData, setChartData] = useState({ categories: [], data: [] });
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosSecure.get('https://parcel-pioneer-server.vercel.app/allParcel');
            const orders = response.data;

            const ordersByDate = orders.reduce((acc, order) => {
                const date = order.bookingDate;
                if (!acc[date]) {
                    acc[date] = 0;
                }
                acc[date]++;
                return acc;
            }, {});

            const dates = Object.keys(ordersByDate);
            const orderCounts = Object.values(ordersByDate);

            setChartData({
                categories: dates,
                data: orderCounts
            });
        };

        fetchData();
    }, [axiosSecure]);

    const chartOptions = {
        chart: {
            type: 'bar',
        },
        xaxis: {
            categories: chartData.categories,
        },
        title: {
            text: 'Number of Orders by Booking Date',
        },
    };

    const series = [
        {
            name: 'Orders',
            data: chartData.data,
        },
    ];

    return (
        <div className="">
            <Chart options={chartOptions} series={series} type="bar" height={300} />
        </div>
    );
}

export default Barchart;
