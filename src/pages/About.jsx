import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-amber-600">About This App</h1>

      <div className="bg-white shadow-md p-6 rounded-md space-y-4 border border-amber-200">
        <p className="text-gray-700">
          <strong>Todo App</strong> is a simple productivity tool built using <span className="font-medium">React</span> and <span className="font-medium">Redux Toolkit Query</span> for managing your daily tasks.
        </p>

        <p className="text-gray-700">
          You can add, view, update, and delete tasks efficiently. Each todo has a status that lets you know whether it's completed or still pending.
        </p>

        <p className="text-gray-700">
          This app is designed to help users stay organized and on top of their responsibilities. It's a great project for practicing modern React concepts like:
        </p>

        <ul className="list-disc pl-5 text-gray-700">
          <li>React Router</li>
          <li>RTK Query for data fetching</li>
          <li>Tailwind CSS for styling</li>
          <li>Component-based architecture</li>
        </ul>

        <p className="text-gray-700">
          Future enhancements may include authentication, persistent data storage, and offline support.
        </p>
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/"
          className="inline-block px-5 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default About;
