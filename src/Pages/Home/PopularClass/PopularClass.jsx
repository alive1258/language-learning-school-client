
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ClassCart from '../../../components/ClassCart/ClassCart';
import useClasses from '../../../Hooks/useClasses';
import { Fade, Reveal, Slide } from 'react-awesome-reveal';

const PopularClass = () => {
    const [classes] = useClasses()
    const approvedClass = classes.filter(course => course.status === "approved")
    const popularClasses = approvedClass.slice(0, 6)

    return (
        <div className='mt-24'>
             <Reveal effect={[Fade, Slide]} duration={1000} delay={200}>
            <SectionTitle heading="Choose Your Popular Classes"

            />
            <p className='text-center px-4 mb-8'>Take your language skills to the next level with our popular advanced  conversation classes,<br /> perfect for enhancing fluency and confidence</p>
            </Reveal>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 px-10'>
                {
                    popularClasses.map(course => <ClassCart
                        key={course._id}
                        course={course}
                    ></ClassCart>)
                }

            </div>

        </div>
    );
};

export default PopularClass;