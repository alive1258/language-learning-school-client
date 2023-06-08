import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Instructor from '../Instructor/Instructor';

const PopularInstructor = () => {

    const [allInstructor, setAllInstructor] = useState([])
    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => {
                const popularALlInstructor = data.filter(teacher => teacher.category === "instructor")
                const popularInstructor = popularALlInstructor.slice(0, 6)
                setAllInstructor(popularInstructor)

            })
    }, [])

    return (
        <div className='mt-28'>
            <SectionTitle heading="Meet Out Popular Instructor" />
            <p className='text-center'>They are experienced, knowledgeable, and passionate about teaching. With their expertise, <br /> you can gain valuable insights and improve your language skills effectively.</p>
            <div className='grid md:grid-cols-3 grid-cols-1 px-10 gap-10 mt-10'>
                {
                    allInstructor.map(instructors => <Instructor
                        key={instructors._id}
                        instructors={instructors}
                    ></Instructor>)
                }
            </div>

        </div>
    );
};

export default PopularInstructor;