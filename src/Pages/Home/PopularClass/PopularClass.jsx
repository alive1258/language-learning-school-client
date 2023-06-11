
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ClassCart from '../../../components/ClassCart/ClassCart';
import useClasses from '../../../Hooks/useClasses';

const PopularClass = () => {
    const [classes] = useClasses()
    // const popularAllClass = information.filter(course => course.category === "popularClass")
    const popularClasses = classes.slice(0, 6)

    return (
        <div>
            <SectionTitle heading="Choose Your Popular Classes"

            />
            <p className='text-center px-4 mb-8'>Take your language skills to the next level with our popular advanced  conversation classes,<br /> perfect for enhancing fluency and confidence</p>

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