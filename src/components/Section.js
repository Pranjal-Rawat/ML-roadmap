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

  const calculateProgress = (subtopics) => {
    const completed = subtopics.filter((subtopic) => subtopic.completed).length;
    return (completed / subtopics.length) * 100;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b-2 border-blue-500 pb-2">
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
              className="w-full text-left bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-800 dark:text-blue-200 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              {topic.title}
            </button>
            <div className="pl-4 space-y-1">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${calculateProgress(topic.subtopics)}%` }}
                ></div>
              </div>
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
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {subtopic.title}
                  </button>
                </div>
              ))}
            </div>
            {topic.related?.length > 0 && (
              <div className="pl-4 text-sm text-gray-500 dark:text-gray-400">
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