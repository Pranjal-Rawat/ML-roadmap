import React from "react";

const NotificationCard = ({ message, onClose }) => {
  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg animate-slide-in">
      <p>{message}</p>
      <button onClick={onClose} className="mt-2 text-sm underline">
        Close
      </button>
    </div>
  );
};

export default NotificationCard;