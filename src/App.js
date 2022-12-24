// npm install -S react-router-dom (tip voor mezelf: vergeet dit niet te intalleren in app map.)
import './App.css';
import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Utils from "./components/Utils"
import Home from "./components/Home"
import StudentChart from "./components/StudentChart"
import Top10Charts from './components/Top10Charts';


function App() {
  const originalData = Utils()
  const [allData, setAllData] = useState(originalData);

  useEffect(() => {
    setAllData(originalData)
  }, [originalData])



  // Ik weet dat ..Set korter is. Gebruik de langere hier om te oefenen met meerdere varianten. 
  const filterUniqueName = () => {
    const arrayNamen = allData.map(item => item.name)
    const arrayNamesNoDuplicates = arrayNamen.sort().filter(function (item, pos, ary) {
      return (!pos || item !== ary[pos - 1]);
    });
    return arrayNamesNoDuplicates
  }


  // Make exercise name shorter for visuals
  const makeNames = (array) => {
    for (let v of array) if (v.exercise === 'W2D5 - Project - Filmzoeker') v.exercise = 'W2D5-P'
    for (let v of array) if (v.exercise === 'W1D3 - Project - Guess-the-number') v.exercise = 'W1D3-P'
    for (let v of array) if (v.exercise === 'W1D4 - Project - Kleurentoggle') v.exercise = 'W1D4-P'
    for (let v of array) if (v.exercise === 'W1D5 - Project -Galgje') v.exercise = 'W1D5-P'
    for (let v of array) if (v.exercise === 'W1D3 - Project - Guess-the-number') v.exercise = 'W1D3-P'
    for (let v of array) if (v.exercise === 'W3D5 - Project - Todo-List') v.exercise = 'W3D5-P'
    for (let v of array) if (v.exercise === 'W4D3 - Project - Next-Level CSS') v.exercise = 'W4D3-P'
    for (let v of array) if (v.exercise === 'W5D5 - Project - Lil_Playlist') v.exercise = 'W5D5-P'
    for (let v of array) if (v.exercise === 'W6D2 - Project - Eindopdracht') v.exercise = 'W6D2-P'
    return array
  }


// Uitkomst gemiddelde funLevel, difficultyLevel. (heet superResultaat omdat ik zo blij was dat het gelukt was!)
  const superResultaat = () => {
    const data = makeNames(allData)
    const unique = [...new Set(data.map(item => item.exercise))];
    var resultaat = []
    for (let opdracht of unique) {
      var somFun = 0
      var somScore = 0
      var aantalkeerfun = 0
      var aantalkeerscore = 0
      for (let object of data.filter((item) => item.exercise === opdracht, data)) {
        if (object.funLevel) { somFun += object.funLevel }
        somScore += object.difficultyLevel
        aantalkeerscore++;
        aantalkeerfun++;
      }
      const resultItem = { "exercise": opdracht, "funLevel": somFun / aantalkeerfun, "difficultyLevel": somScore / aantalkeerscore }
      resultaat.push(resultItem)
    }
    return resultaat
  }

  // Constants for Sort
  const AverageNumbers = superResultaat()
  const AverageNumbers2 =  superResultaat()

  // Sort DifficultyLevel, most difficult first
  const sortDifficultyLevel = () => {
    const newListRatings = AverageNumbers.sort((a, b) => b.difficultyLevel - a.difficultyLevel)
    return newListRatings
  }

   // Sort Funlevel, most Fun first
  const sortFunlevel = () => {
    const newListRatings2 = AverageNumbers2.sort((a, b) => b.funLevel - a.funLevel)
    return newListRatings2
  }

  // Top 10 Easiest
  const sortEasiest = () => {
    const newListRatings = AverageNumbers.sort((a, b) => a.difficultyLevel - b.difficultyLevel)
    return newListRatings.slice(0, 10)
  }

  // Top 10 most boring exercises
  const sortBoring = () => {
    const newListRatings = AverageNumbers.sort((a, b) => a.funLevel - b.funLevel)
    return newListRatings.slice(0, 10)
  }

  // State for names
  const [namesData, setNames] = useState("")
  const [namesTitle, setNameTitle] = useState("");

  const handleClick = (student) => {
    const filter = allData.filter(item => item.name === student)
    makeNames(filter)
    setNames(filter)
    setNameTitle(student)
    return filter
  }

  return (
    <Router>
      <div className="App">
        <nav>
          <ul className='ul-app'>
            <li className='li-app'>
              <div>
                <Link className='link' to="/">Home</Link>
              </div>
            </li>
            <li className='li-app'>
              <div>
                <Link className='link' to="students">Students view</Link>
              </div>
            </li>
            <li className='li-app'>
              <div>
                <Link className='link' to="top10charts">Top 10's</Link>
              </div>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route
              path="/top10charts"
              element={
                <Top10Charts sortBoring={sortBoring} sortEasiest={sortEasiest}  />
              }
            />
            <Route
              path="/students"
              element={
                <StudentChart filterUniqueName={filterUniqueName} handleClick={handleClick} namesData={namesData} namesTitle={namesTitle} />
              }
            />
            <Route path="/"
              element={
                <Home allData={allData} superResultaat={superResultaat} sortFunlevel={sortFunlevel} sortDifficultyLevel={sortDifficultyLevel} />
              } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App


