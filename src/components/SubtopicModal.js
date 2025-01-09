import React from "react";

const SubtopicModal = ({ subtopic, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full transform transition-all duration-300 animate-scale-in">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{subtopic.title}</h2>
        <p className="text-gray-600 mb-6">{subtopic.description || "No description available."}</p>

        {/* Display resources */}
        {subtopic.resources && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Resources</h3>
            <ul className="space-y-2">
              {subtopic.resources.map((resource, index) => (
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

export default SubtopicModal;