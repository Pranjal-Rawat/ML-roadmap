import React, { useEffect } from "react";
import { motion } from "framer-motion";

const NotificationCard = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Close the notification after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg"
    >
      <p>{message}</p>
    </motion.div>
  );
};

export default NotificationCard;