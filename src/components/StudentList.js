import React from 'react';


const StudentList = ({ student, clickItem }) => {
  return (
    <div>
      <div className="names-students">
        <li className='li-students' onClick={clickItem}>
          <div>{student} </div>
        </li>
      </div>
    </div>
  );
}

export default StudentList