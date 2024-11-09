import React from 'react';
import Image from 'next/image';
const About = () => {
    return (
        <div className="bg-gray-100 py-16 px-6 lg:px-20 text-gray-800" id='about'>
            {/* University Overview */}
            <section className="text-center mb-16">
                <h1 className="text-4xl font-bold text-mainColor mb-4">About Eduford University</h1>
                <p className="max-w-3xl mx-auto text-lg text-gray-600">
                    Eduford University is one of the world’s most prestigious institutions dedicated to advancing knowledge and fostering innovation. Since its inception, Eduford has been committed to offering high-quality education and research programs, empowering students to achieve their potential.
                </p>
            </section>

            {/* Mission, Vision, Core Values */}
            <section className="grid md:grid-cols-3 gap-12 text-center mb-16">
                <div>
                    <i className="bx bxs-rocket text-5xl text-mainColor mb-4"></i>
                    <h2 className="text-2xl font-semibold">Our Mission</h2>
                    <p className="text-gray-600 mt-2">
                        To empower students to become pioneers in their fields through rigorous education, research, and service to the community.
                    </p>
                </div>
                <div>
                    <i className="bx bxs-bulb text-5xl text-mainColor mb-4"></i>
                    <h2 className="text-2xl font-semibold">Our Vision</h2>
                    <p className="text-gray-600 mt-2">
                        To be a globally recognized university that transforms lives through knowledge, innovation, and a commitment to excellence.
                    </p>
                </div>
                <div>
                    <i className="bx bxs-heart text-5xl text-mainColor mb-4"></i>
                    <h2 className="text-2xl font-semibold">Core Values</h2>
                    <p className="text-gray-600 mt-2">
                        Integrity, Excellence, Innovation, and Social Responsibility are the guiding principles that define our ethos.
                    </p>
                </div>
            </section>

            {/* Departments and Programs */}
            <section className="text-center mb-16">
                <h2 className="text-3xl font-bold text-mainColor mb-6">Our Departments</h2>
                <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
                    Eduford University offers a wide range of programs across multiple disciplines to prepare students for the global job market.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Computer Science</h3>
                        <p className="text-gray-600">
                            Learn cutting-edge technologies and develop skills in software engineering, data science, and artificial intelligence.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Business Administration</h3>
                        <p className="text-gray-600">
                            Equip yourself with business skills through programs in management, finance, and entrepreneurship.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Engineering</h3>
                        <p className="text-gray-600">
                            Gain expertise in mechanical, electrical, and civil engineering with hands-on projects and labs.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Medicine</h3>
                        <p className="text-gray-600">
                            Become a healthcare leader with programs that combine classroom learning and clinical practice.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Law</h3>
                        <p className="text-gray-600">
                            Explore the legal system, justice, and policy development through comprehensive legal education.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Environmental Studies</h3>
                        <p className="text-gray-600">
                            Address global environmental challenges and sustainability through research-driven learning.
                        </p>
                    </div>
                </div>
            </section>

            {/* Notable Faculty */}
            <section className="text-center mb-16">
                <h2 className="text-3xl font-bold text-mainColor mb-6">Meet Our Esteemed Faculty</h2>
                <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
                    Our faculty consists of world-renowned professors and researchers who are dedicated to mentoring students and pushing the boundaries of knowledge.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md text-center ">
                        <Image src="/first.avif" width={100} height={100} alt="Faculty Member" className="object-cover w-24 h-24 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">Dr. John Doe</h3>
                        <p className="text-gray-600">Professor of Computer Science</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <Image src="/second.webp" alt="Faculty Member" width={100} height={100} className="object-cover w-24 h-24 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">Dr. Jane Smith</h3>
                        <p className="text-gray-600">Dean of Business School</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center">
                        <Image src="/third.webp" width={100} height={100} alt="Faculty Member" className="object-cover w-24 h-24 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-semibold">Dr. Alan Brown</h3>
                        <p className="text-gray-600">Head of Engineering</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
