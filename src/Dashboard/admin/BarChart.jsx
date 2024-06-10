import Chart from 'react-apexcharts'
const BarChart = () => {
    return (
        <div className='md:px-14 '>
            <Chart
                type='bar'
                width={350}
                height={300}
                series={
                    [
                        {
                            name: 'total order',
                            data: [1, 2, 3, 4, 5, 5, 6,7.8,4,8,9]
                        }
                    ]
                }
                options={
                    {
                        title: {
                            text: "Barchart for date",
                            style: { fontSize: 20 }
                        },
                        xaxis: {
                            categories: ["10/2/24", '11/2/34', '12/3/23', 'a', 'b']
                        }
                    }
                }
            >

            </Chart>
        </div>
    );
};

export default BarChart;