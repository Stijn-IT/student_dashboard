import React from 'react';
import { useState, useEffect } from "react";
import { LineChart, ResponsiveContainer, Line, CartesianGrid, XAxis, Legend, YAxis } from 'recharts';

const Top10Charts = ({ sortEasiest, sortBoring }) => {

  const [dataTop10, setDataTop10] = useState("")
  const [titleTop10, setTitleTop10] = useState("")

  useEffect(() => {
    setDataTop10(sortEasiest)
  }, [sortEasiest])


  useEffect(() => {
    setTitleTop10("Easiest")
  }, [])

  return (
    <div className='barChart'>
      <h2>Top 10 <span style={{ textDecoration: "underline" }}> {titleTop10} </span></h2>

      {/* BUTTONS */}
      <button className='button' onClick={() => { setDataTop10(sortEasiest); setTitleTop10("Easiest") }}>Easiest Exercises</button>
      <button className='button' onClick={() => { setDataTop10(sortBoring); setTitleTop10("most Boring") }}>Most boring</button>

      <div className='barChart2'>
      <ResponsiveContainer width={"%"} height={40 * dataTop10.length} >
        <LineChart
          data={dataTop10}
          margin={{
            top: 30,
            bottom: 5,
            right: 4
          }}
        >
          <Line type="monotone" dataKey="funLevel" stroke="green" fill="green" dot={true} />
          <Line type="monotone" dataKey="difficultyLevel" stroke="red" fill="red" dot={true} />
          <CartesianGrid
            stroke="none" />
          <XAxis
            dataKey="exercise"

          />
          <Legend layout="horizontal" verticalAlign="top" align="center" height={50} />
          <YAxis
            type="number"
            domain={[0, 4]}
            dataKey="difficultyLevel"

          />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Top10Charts;