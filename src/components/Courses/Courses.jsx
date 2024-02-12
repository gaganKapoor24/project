import React, {useState} from 'react';

const Courses = () =>{

    const courses = [
        {
            id:1,
            name:"Introduction to React"
        },
        {
            id:2,
            name:"Web Development Fundamentals"
        },
        {
            id:3,
            name:"Javascript for Begineers"
        }
    ]

    const [selected, setSelected] = useState(null);

    const handleCourses = (course) =>{
        setSelected(course);
    }

    return(
        <div>
        <h1>Select the Course you want to pursue:</h1>
        <ul className='courseList'>
            {courses.map((course)=>(
                <li key={course.id} onClick={()=>handleCourses(course)}>{course.name}</li>
            ))
                
            }
            {selected ? <p><b>Selected Course:</b>{selected?.name}</p> : ""}
            </ul>
        </div>
    )
}

export default Courses;