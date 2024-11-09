// components/Courses.js
import Image from 'next/image';
import 'boxicons/css/boxicons.min.css';

const coursesData = [
    {
        id: 1,
        title: 'Computer Science',
        description: 'Learn the fundamentals of computer science, algorithms, and data structures.',
        duration: '3 Years',
        students: '2500+ Students',
        image: "/coding.avif"
    },
    {
        id: 2,
        title: 'Business Management',
        description: 'Master the art of business, including strategy, management, and finance.',
        duration: '2 Years',
        students: '1800+ Students',
        image: "/business.avif"
    },
    {
        id: 3,
        title: 'Engineering',
        description: 'Explore various engineering fields and gain hands-on experience.',
        duration: '4 Years',
        students: '3200+ Students',
        image: '/engineering.avif',
    },
    {
        id: 4,
        title: 'Graphic Design',
        description: 'Learn design principles and tools for creating stunning visuals.',
        duration: '1 Year',
        students: '1500+ Students',
        image: '/graphicDesign.avif',
    },
];

const Courses = () => {
    return (
        <section className="py-16 px-8 lg:px-24 bg-gray-100" id="courses">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-mainColor">Our Courses</h2>
                <p className="text-lg text-gray-600 mt-2">
                    Explore a variety of courses tailored to help you achieve your career goals.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {coursesData.map((course) => (
                    <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <Image src={course.image} alt={course.title} width={500} height={300} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-mainColor mb-2">{course.title}</h3>
                            <p className="text-gray-600 mb-4">{course.description}</p>
                            <div className="flex items-center justify-between text-gray-500 text-sm">
                                <div className="flex items-center">
                                    <i className="bx bx-time-five mr-2"></i>
                                    <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="bx bx-user mr-2"></i>
                                    <span>{course.students}</span>
                                </div>
                            </div>
                            <button className="btn-main mt-4 w-full">Learn More</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Courses;
