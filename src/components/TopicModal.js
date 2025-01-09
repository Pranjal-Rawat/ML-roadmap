import React from "react";

const TopicModal = ({ topic, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full transform transition-all duration-300 animate-scale-in">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{topic.title}</h2>
        <p className="text-gray-600 mb-6">{topic.description}</p>

        {/* Display subtopics */}
        {topic.subtopics && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Subtopics</h3>
            <ul className="space-y-2">
              {topic.subtopics.map((subtopic) => (
                <li key={subtopic.id} className="text-gray-600">
                  {subtopic.title}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Display resources */}
        {topic.resources && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Resources</h3>
            <ul className="space-y-2">
              {topic.resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {resource.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={onClose}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TopicModal;