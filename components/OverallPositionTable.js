import { useEffect, useState } from 'react';

import data from '../utils/data.json';

const OverallPositionTable = () => {
  const [overallPosition, setOverallPosition] = useState({});

  useEffect(() => {
    setOverallPosition(data.overall_position);
  });

  return (
    <div>
      <h3>Overall position</h3>
      <table>
        <thead>
          <tr>
            <th>Deviation</th>
            <th>Position Out Of</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{overallPosition.deviation}</td>
            <td>{overallPosition.position_out_of}</td>
            <td>{overallPosition.position}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OverallPositionTable;
