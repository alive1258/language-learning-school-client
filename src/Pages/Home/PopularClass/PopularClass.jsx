import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useClasses from '../../../Hooks/useClasses';
import PopularCourse from '../PopularCourse/PopularCourse';

const PopularClass = () => {
    // const [allClass] = useClasses()
    // const allPopularClass = allClass.slice(0, 6)
    const [allClass,setAllClass]=useState([])
    useEffect(()=>{
        fetch('classes.json')
        .then(res=>res.json())
        .then(data=>{
            const popularAllClass=data.filter(course=> course.category === "popularClass")
            const popularClasses=popularAllClass.slice(0,6)
            setAllClass(popularClasses)

        })
    },[])

    return (
        <div>
            <SectionTitle heading="Choose Your Popular Classes"
                
            />
            <p className='text-center mb-8'>Take your language skills to the next level with our popular advanced  conversation classes,<br /> perfect for enhancing fluency and confidence</p>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 px-10'>
                {
                  allClass.map(course=><PopularCourse
                  key={course._id}
                  course={course}
                  ></PopularCourse>)  
                }

            </div>

        </div>
    );
};

export default PopularClass;