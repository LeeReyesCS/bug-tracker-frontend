import React, {PureComponent} from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Graph = (bugs) => {
  return (
    <div>Graph
    <ResponsiveContainer width="100%" height="100%">
    <BarChart width={150} height={40} bugs={bugs}>
      <Bar dataKey="blocked" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
  </div>
  )
}

export default Graph