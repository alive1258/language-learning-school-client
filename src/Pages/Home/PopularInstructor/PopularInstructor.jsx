
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Instructor from '../Instructor/Instructor';
import useInformation from '../../../Hooks/useInformation';

const PopularInstructor = () => {

    const [information] = useInformation()

    const popularALlInstructor = information.filter(teacher => teacher.category === "instructor")
    const popularInstructor = popularALlInstructor.slice(0, 6)



    return (
        <div className='mt-28'>
            <SectionTitle heading="Meet Out Popular Instructor" />
            <p className='text-center'>They are experienced, knowledgeable, and passionate about teaching. With their expertise, <br /> you can gain valuable insights and improve your language skills effectively.</p>
            <div className='grid md:grid-cols-3 grid-cols-1 px-10 gap-10 mt-10'>
                {
                    popularInstructor.map(instructors => <Instructor
                        key={instructors._id}
                        instructors={instructors}
                    ></Instructor>)
                }
            </div>

        </div>
    );
};

export default PopularInstructor;