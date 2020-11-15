import { Pie } from 'react-chartjs-2';

import data from '../utils/data.json';

const subjectNames = data.subject_results.map(
  (subject) => subject.subject_name
);

const dataValues = data.subject_results.map((subject) => {
  return subject.score;
});

const state = {
  labels: subjectNames,
  datasets: [
    {
      label: 'Results',
      backgroundColor: [
        'hsl(117,80.1%,39.4%)',
        'hsl(23.9,37.7%,51.6%)',
        'hsl(234.1,91.9%,56.5%)',
        'hsl(144.2,71.5%,49.6%)',
        'hsl(270.6,69.9%,28.6%)',
        'hsl(179.7,83.8%,51.6%)',
        'hsl(310.2,51.9%,53.5%)',
        'hsl(234.2,43%,62.2%)',
        'hsl(313.1,49.3%,41.8%)',
        'hsl(109,90.6%,75.1%)',
        'hsl(149.2,58%,59.8%)',
      ],
      hoverBackgroundColor: [
        'hsl(117,80.1%,19.4%)',
        'hsl(23.9,37.7%,31.6%)',
        'hsl(234.1,91.9%, 36.5%)',
        'hsl(144.2,71.5%,30.6%)',
        'hsl(270.6,69.9%,8.6%)',
        'hsl(179.7,83.8%,31.6%)',
        'hsl(310.2,51.9%,33.5%)',
        'hsl(234.2,43%,42.2%)',
        'hsl(313.1,49.3%,21.8%)',
        'hsl(109,90.6%,55.1%)',
        'hsl(149.2,58%,39.8%)',
      ],
      data: dataValues,
    },
  ],
};

const SubjectResults = () => {
  return (
    <div>
      <Pie
        data={state}
        options={{
          title: { display: true, text: 'Subject results', fontSize: 20 },
          legend: { display: true, position: 'top' },
        }}
      />
    </div>
  );
};

export default SubjectResults;
