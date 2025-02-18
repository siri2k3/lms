import React, { useEffect, useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses([
      { id: 1, name: "React Basics", instructor: "John Doe" },
      { id: 2, name: "Advanced JavaScript", instructor: "Jane Smith" },
      { id: 3, name: "Node.js & Express", instructor: "Alex Brown" }
    ]);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Available Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name} - {course.instructor}</li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
