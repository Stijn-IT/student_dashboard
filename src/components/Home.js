import React from 'react';
import { useState, useEffect } from "react";
import { BarChart, ResponsiveContainer, Bar, LabelList, CartesianGrid, XAxis, Legend, YAxis, } from 'recharts';

const Home = ({ superResultaat, sortDifficultyLevel, sortFunlevel }) => {

  const [data, setData] = useState("")
  const [titleHome, setTitleHome] = useState("")

  useEffect(() => {
    setData(superResultaat)
  }, [superResultaat])

  useEffect(() => {
    setTitleHome("chronological")
  }, [])

  return (
    <div className='barChart'>
      <h2>Chart all students & exercises <span style={{ textDecoration: "underline" }}>{titleHome}</span></h2>

      {/* BUTTONS */}
      <button className='button' onClick={() => { setData(superResultaat); setTitleHome("Chronological") }}>Chronological</button>
      <button className='button' onClick={() => { setData(sortFunlevel); setTitleHome("highest FunLevel") }}>Highest FunLevel</button>
      <button className='button' onClick={() => { setData(sortDifficultyLevel); setTitleHome("highest DifficultyLevel") }}>Highest DifficultyLevel</button>

      <ResponsiveContainer width={"80%"} height={40 * data.length} >
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 30,
            left: 180,
            bottom: 5,
            right: 20
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
            tick={{ fontSize: 15 }}
            domain={[0, 4]} />
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
  );
}

export default Home