import React, { useState } from 'react';
import Back from "../common/back/Back"
import "./notification.css"


const Notification = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'Your resume has been updated.', read: false },
    { id: 2, text: 'New job postings are available.', read: false },
    { id: 3, text: 'Your application was viewed by the recruiter.', read: false },
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const unreadCount = notifications.filter(notification => !notification.read).length;

  return (
    <div className="notification-container">
      <Back title="Go Back" /> {/* Use the Back component */}
      <h2>Notifications ({unreadCount})</h2>
      <ul className="notification-list">
        {notifications.map(notification => (
          <li key={notification.id} className={notification.read ? 'read' : 'unread'}>
            {notification.text}
            {!notification.read && <button onClick={() => markAsRead(notification.id)}>Mark as Read</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
