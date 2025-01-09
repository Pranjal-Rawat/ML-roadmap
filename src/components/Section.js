import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaCode, FaChartLine } from "react-icons/fa";

const Section = ({ title, topics, onTopicClick, onSubtopicComplete, onSubtopicClick }) => {
  const getIcon = (title) => {
    switch (title) {
      case "Foundations":
        return <FaBook className="inline-block mr-2" />;
      case "Core Machine Learning":
        return <FaCode className="inline-block mr-2" />;
      case "Advanced Topics":
        return <FaChartLine className="inline-block mr-2" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
        {getIcon(title)} {title}
      </h2>
      <div className="space-y-4">
        {topics.map((topic) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2"
          >
            <button
              onClick={() => onTopicClick(topic)}
              className={`w-full text-left bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200 ${topic.completed ? "line-through" : ""}`}
            >
              {topic.title}
            </button>
            <div className="pl-4 space-y-1">
              {topic.subtopics?.map((subtopic) => (
                <div key={subtopic.id} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={subtopic.completed || false}
                    onChange={() => onSubtopicComplete(topic.id, subtopic.id)}
                    className="mr-2"
                  />
                  <button
                    onClick={() => onSubtopicClick(subtopic)}
                    className={`text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 ${subtopic.completed ? "line-through" : ""}`}
                  >
                    {subtopic.title}
                  </button>
                </div>
              ))}
            </div>
            {topic.related?.length > 0 && (
              <div className="pl-4 text-sm text-gray-500">
                Related:{" "}
                {topic.related.map((related, index) => (
                  <span key={related} className="inline-flex items-center">
                    {related}
                    {index < topic.related.length - 1 && (
                      <span className="mx-1 text-blue-500">→</span>
                    )}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Section;