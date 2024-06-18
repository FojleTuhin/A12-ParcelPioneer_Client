
import  { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';

function Barchart() {
    const [chartData, setChartData] = useState({ categories: [], data: [] });

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:5000/allParcel');
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
    }, []);

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
        <div className="App">
            <Chart options={chartOptions} series={series} type="bar" height={300} width={350}/>
        </div>
    );
}

export default Barchart;
