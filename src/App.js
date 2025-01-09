import React, { useState, useEffect } from "react";
import Section from "./components/Section";
import TopicModal from "./components/TopicModal";
import SubtopicModal from "./components/SubtopicModal";
import NotificationCard from "./components/NotificationCard";
import Confetti from "react-confetti";
import { topics } from "./data/topics";

// Debounce function
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

const App = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const [completedSubtopics, setCompletedSubtopics] = useState({});
  const [showConfetti, setShowConfetti] = useState(false);
  const [notification, setNotification] = useState(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [pageHeight, setPageHeight] = useState(document.body.scrollHeight);

  // Update window size and page height on resize or scroll
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setPageHeight(document.body.scrollHeight);
    };

    const handleScroll = () => {
      setPageHeight(document.body.scrollHeight);
    };

    const debouncedResize = debounce(handleResize, 100);
    const debouncedScroll = debounce(handleScroll, 100);

    window.addEventListener("resize", debouncedResize);
    window.addEventListener("scroll", debouncedScroll);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, []);

  // Load completed subtopics from localStorage on initial render
  useEffect(() => {
    const savedCompletedSubtopics = JSON.parse(localStorage.getItem("completedSubtopics")) || {};
    setCompletedSubtopics(savedCompletedSubtopics);
  }, []);

  // Save completed subtopics to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("completedSubtopics", JSON.stringify(completedSubtopics));
  }, [completedSubtopics]);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  const handleSubtopicClick = (subtopic) => {
    setSelectedSubtopic(subtopic);
  };

  const handleSubtopicComplete = (topicId, subtopicId) => {
    setCompletedSubtopics((prev) => {
      const updatedCompletedSubtopics = {
        ...prev,
        [subtopicId]: !prev[subtopicId], // Toggle completion status
      };

      // Check if all subtopics in the topic are completed
      const topic = topics.foundations.topics
        .concat(topics.coreML.topics, topics.advanced.topics)
        .find((t) => t.id === topicId);

      const allSubtopicsCompleted = topic.subtopics.every(
        (subtopic) => updatedCompletedSubtopics[subtopic.id] || subtopic.id === subtopicId
      );

      // Show confetti and notification if all subtopics are completed
      if (allSubtopicsCompleted) {
        setShowConfetti(true);
        setNotification(`🎉 Congrats on completing the "${topic.title}" topic!`);
        setTimeout(() => {
          setShowConfetti(false);
          setNotification(null); // Hide notification after 3 seconds
        }, 3000);
      }

      return updatedCompletedSubtopics;
    });
  };

  const closeModal = () => {
    setSelectedTopic(null);
    setSelectedSubtopic(null); // Close subtopic modal
  };

  // Add completed status to each subtopic
  const getTopicsWithCompletion = (topics) => {
    return topics.map((topic) => ({
      ...topic,
      subtopics: topic.subtopics.map((subtopic) => ({
        ...subtopic,
        completed: completedSubtopics[subtopic.id] || false,
      })),
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-8">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={pageHeight} // Use the total scrollable height
        />
      )}
      {notification && <NotificationCard message={notification} onClose={() => setNotification(null)} />}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 animate-fade-in">
        Machine Learning Roadmap
      </h1>

      <div className="space-y-8">
        <Section
          title={topics.foundations.title}
          topics={getTopicsWithCompletion(topics.foundations.topics)}
          onTopicClick={handleTopicClick}
          onSubtopicComplete={handleSubtopicComplete}
          onSubtopicClick={handleSubtopicClick}
        />
        <Section
          title={topics.coreML.title}
          topics={getTopicsWithCompletion(topics.coreML.topics)}
          onTopicClick={handleTopicClick}
          onSubtopicComplete={handleSubtopicComplete}
          onSubtopicClick={handleSubtopicClick}
        />
        <Section
          title={topics.advanced.title}
          topics={getTopicsWithCompletion(topics.advanced.topics)}
          onTopicClick={handleTopicClick}
          onSubtopicComplete={handleSubtopicComplete}
          onSubtopicClick={handleSubtopicClick}
        />
      </div>

      {selectedTopic && <TopicModal topic={selectedTopic} onClose={closeModal} />}
      {selectedSubtopic && <SubtopicModal subtopic={selectedSubtopic} onClose={closeModal} />}
    </div>
  );
};

export default App;