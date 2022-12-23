import React from "react";
import StudentList from "./StudentList"
import { BarChart, ResponsiveContainer, Bar, LabelList, CartesianGrid, XAxis, Legend, YAxis, } from 'recharts';

const StudentChart = ({ filterUniqueName, handleClick, namesData, namesTitle }) => {

  const names = filterUniqueName();

  const studentsJSX = names.map((student, index) => (
    <StudentList
      student={student}
      key={index}
      clickItem={() => handleClick(student)}
    />
  ));

  const data = namesData

  return (
    <div>
      <div className="titles-studentchart">
        <h2>Chart per student</h2>
        <h3>Click on studentname for chart:</h3>
        <ul className="ul-students"> {studentsJSX} </ul>
      </div>
      <div className='barChartt'>
        <h2> {namesTitle} </h2>
        <ResponsiveContainer width={"70%"} height={40 * data.length} >
          <BarChart
            data={data}
            layout="vertical"
            margin={{
              top: 10,
              left: 180,
              bottom: 5,
              right: 16
            }}
          >
            <Bar
              dataKey="difficultyLevel"
              radius={8} barSize={10} fill="#ff5722"
              label={{
                position: "right",
                angle: 0,
                fill: "black",
                fontSize: 12,
                offset: 5
              }}

            />
            <LabelList dataKey="funLevel" />
            <Bar
              dataKey="funLevel"
              radius={8} barSize={10} fill="#74c77e"
              label={{
                position: "right",
                angle: 0,
                fill: "black",
                fontSize: 12,
                offset: 5
              }}
            />

            <CartesianGrid
              stroke="none" />
            <XAxis
              type="number"
              tick={{ fontSize: 15 }} />

            <CartesianGrid strokeDasharray="3 3" />
            <YAxis
              dataKey="exercise"
              type="category"
              tick={{ fontSize: 15 }}
            />

            <Legend layout="horizontal" verticalAlign="top" align="center" height={50} />

          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

  )
};

export default StudentChart

