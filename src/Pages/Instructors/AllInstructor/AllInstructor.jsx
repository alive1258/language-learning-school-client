import React from 'react';
import useInformation from '../../../Hooks/useInformation';
import TotalInstructor from '../TotalInstructor/TotalInstructor';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Fade, Reveal, Slide } from 'react-awesome-reveal';

const AllInstructor = () => {
    const [information] = useInformation()
    // const [information] = useInformation()

    const popularALlInstructor = information.filter(teacher => teacher.category === "instructor")
    return (
        <div>
          <Reveal effect={[Fade, Slide]} duration={1000} delay={200}>
            <SectionTitle heading="Total instructor"/>
            <p className='text-center'>We have skilled and knowledgeable instructors who are passionate
                 create an engaging and effective<br />  learning  experience for our students. 
                 Join our classes and learn from our talented instructors <br /> who are here to support
                  and guide you every step of the way.
                  </p>
                  </Reveal>
              <div className='grid md:grid-cols-3 grid-cols-1 md:px-10 px-6 gap-10 my-10'>
                <Fade>
                {
                    popularALlInstructor.map(instructors => <TotalInstructor
                        key={instructors._id}
                        instructors={instructors}
                    ></TotalInstructor>)
                }
                </Fade>
            </div>
        </div>
    );
};

export default AllInstructor;