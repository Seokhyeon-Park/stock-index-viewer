import styles from './Graph.module.css';
// import ApexChart from 'apexcharts'

const Graph = () => {
    const preProcess = async (data) => {
        const arr = new Array();
        const json = JSON.parse(data);
        for (const row of json) {
            arr.push([row.date, row.value.close]);
        }

        return arr;
    }

    const makeChart = (data) => {
        // 
    }

    const showChart = (key) => {
        fetch(`http://183.102.138.178:3000/${key}`)
            .then((res) => res.json())
            .then(async (data) => {
                const preDataArr = await preProcess(data);
                console.log(preDataArr);
            });
    }

    // showChart('sp')

    return (
        <div className='chartContainer'>
           
        </div>
    )
}

export default Graph;