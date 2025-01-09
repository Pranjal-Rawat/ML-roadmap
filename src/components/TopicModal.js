import React from "react";

const TopicModal = ({ topic, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full transform transition-all duration-300 animate-scale-in">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{topic.title}</h2>
        <p className="text-gray-600 mb-6">{topic.description}</p>
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