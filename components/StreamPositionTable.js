import { useEffect, useState } from 'react';

import data from '../utils/data.json';

const StreamPositionTable = () => {
  const [streamPosition, setStreamPosition] = useState({});

  useEffect(() => {
    setStreamPosition(data.stream_position);
  });

  return (
    <div>
      <h3>Stream position</h3>
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
            <td>{streamPosition.deviation}</td>
            <td>{streamPosition.position_out_of}</td>
            <td>{streamPosition.position}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StreamPositionTable;
