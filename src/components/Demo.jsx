import React from 'react'
import Card from "./Card"

const Cards = (props) => {
  let courses = props.courses;

  function getCourses() {
    let allCourses = [];
    Object.values(courses).forEach(array => {
      if (Array.isArray(array)) {
        array.forEach(courseData => {
          allCourses.push(courseData)
        });
      }
    });
    return allCourses;
  }

  return (
    <div>
      {
        getCourses().map((course) => (
          <Card key={course.id} {...course} />
        ))
      }
    </div>
  )
}

export default Cards
