"use client"
import { useState } from 'react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, message } = formData;

        if (!name || !email || !message) {
            setFormStatus('Please fill in all fields.');
            return;
        }

        setIsSubmitting(true);
        setFormStatus('');

        // Simulate form submission (you can replace this with an actual API call)
        setTimeout(() => {
            setIsSubmitting(false);
            setFormStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <section id="contact" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
                <p className="mt-4 text-lg text-gray-500">Have questions? We&apos;d love to hear from you!</p>

                <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Contact Information */}
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="flex items-center space-x-4">
                            <i className="bx bx-phone text-4xl text-blue-600"></i>
                            <div>
                                <h3 className="font-semibold text-xl text-gray-800">Phone</h3>
                                <p className="text-gray-600">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <i className="bx bx-envelope text-4xl text-blue-600"></i>
                            <div>
                                <h3 className="font-semibold text-xl text-gray-800">Email</h3>
                                <p className="text-gray-600">contact@university.com</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <i className="bx bx-map text-4xl text-blue-600"></i>
                            <div>
                                <h3 className="font-semibold text-xl text-gray-800">Address</h3>
                                <p className="text-gray-600">123 University Rd, City, State, 12345</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-span-2">
                        <form
                            id="contact-form"
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>

                            {formStatus && (
                                <div className="text-center text-blue-500">{formStatus}</div>
                            )}

                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`px-6 py-3 ${isSubmitting ? 'bg-gray-500' : 'bg-blue-600'} text-white font-semibold rounded-md hover:bg-blue-700`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
