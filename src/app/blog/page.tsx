import React from 'react';

const BlogPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-6">Blog</h1>
            <p className="text-lg mb-4">Welcome to the ADmyBRAND AI Suite blog! Here you will find articles, tips, and resources to help you maximize your marketing efforts with our AI-powered tools.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Example Blog Post Card */}
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-2xl font-semibold">Understanding AI in Marketing</h2>
                    <p className="text-gray-600">Explore how AI is transforming the marketing landscape and what it means for your business.</p>
                    <a href="#" className="text-blue-500 hover:underline">Read more</a>
                </div>
                {/* Additional blog post cards can be added here */}
            </div>
        </div>
    );
};

export default BlogPage;