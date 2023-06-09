
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useInformation from '../../../Hooks/useInformation';
import ClassCart from '../../../components/ClassCart/ClassCart';

const PopularClass = () => {
    const [information] = useInformation()
    const popularAllClass = information.filter(course => course.category === "popularClass")
    const popularClasses = popularAllClass.slice(0, 6)

    return (
        <div>
            <SectionTitle heading="Choose Your Popular Classes"

            />
            <p className='text-center mb-8'>Take your language skills to the next level with our popular advanced  conversation classes,<br /> perfect for enhancing fluency and confidence</p>

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