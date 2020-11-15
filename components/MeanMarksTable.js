import { useEffect, useState } from 'react';

import data from '../utils/data.json';

const MeanMarksTable = () => {
  const [meanMarks, setMeanMarks] = useState({});

  useEffect(() => {
    setMeanMarks(data.mean_marks);
  });

  return (
    <div>
      <h3>Mean Marks</h3>
      <table>
        <tr>
          <th>Deviation</th>
          <th>Average Score</th>
        </tr>
        <tr>
          <td>{meanMarks.deviation}</td>
          <td>{meanMarks.avg_score}</td>
        </tr>
      </table>
    </div>
  );
};

export default MeanMarksTable;
