import Chart from 'react-apexcharts'
const BarChart = () => {
    return (
        <div className='px-14 py-8'>
            <Chart 
            type='bar'
            width={400}
            height={300}
            series={
                [
                    {
                        name:'total order',
                        data:[1,2,3,4,5,5,6,]
                    }
                ]
            }
            options={
                {
                    title:{
                        text:"Barchart for date",
                        style:{fontSize: 20}
                     },
                    xaxis:{
                        categories:["Facebook", 'twitter', 'insta','a','b']
                    }
                }
            }
            >
                 
            </Chart>
        </div>
    );
};

export default BarChart;