import { Line } from 'react-chartjs-2';

import data from '../utils/data.json';

const examNames = data.student_performance_over_time.map((exam) => {
  const examNames = exam.exam_name.split('-');
  const term = examNames[2].slice(6, -1);
  return examNames[1] + ' ' + term;
});

const examScores = data.student_performance_over_time.map(
  (exam) => exam.avg_score
);

const state = {
  labels: examNames,
  datasets: [
    {
      label: 'Performance',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'teal',
      borderColor: 'black',
      borderWidth: 2,
      data: examScores,
    },
  ],
};

const PerformanceOT = () => {
  return (
    <div className='chartContainer'>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: 'Student performance over time',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'top',
          },
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default PerformanceOT;
