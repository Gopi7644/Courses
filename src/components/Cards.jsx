import React from 'react'
import Card from "./Card"
import { useState } from 'react';
const Cards = (props) => {
  const [likedCouses, setLikedCourses] = useState([]);
  let courses = props.courses;
  let category = props.category
  // console.log(courses);
  

  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach(array => {
        array.forEach(courseData => {
          allCourses.push(courseData)
        })
      })
      return allCourses;
      
    }
    else{
      // Show only specific data
      return courses[category] || [];
      console.log("bguhioh",category);
      
    }
  }
  return (
    <div className='flex flex-wrap justify-center gap-4 '>
      {
        getCourses().map((course) => (
          <Card key={course.id}
            course={course}
            likedCouses={likedCouses}
            setLikedCourses={setLikedCourses} />
        ))
      }
    </div>
  )
}

export default Cards
