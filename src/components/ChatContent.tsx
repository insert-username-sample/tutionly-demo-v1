'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ChatMessage {
  sender: 'tutor' | 'user';
  text: string;
  image?: string;
}

interface Subject {
  name: string;
  chat: ChatMessage[];
}

const subjects: Subject[] = [
  {
    name: 'Math',
    chat: [
      { sender: 'tutor', text: "Can you help me out with this?", image: '/image.png' },
      { sender: 'user', text: 'Okay, where do we start?' },
      { sender: 'tutor', text: 'First, we need to find the discriminant.' },
    ],
  },
  {
    name: 'Science',
    chat: [
      { sender: 'tutor', text: "Welcome to our science session! Today we're looking at H2O." },
      { sender: 'user', text: 'What are those lines between the atoms?' },
      { sender: 'tutor', text: 'Those represent covalent bonds.' },
    ],
  },
  {
    name: 'History',
    chat: [
      { sender: 'tutor', text: 'The Renaissance was a pivotal period in history. Any questions?' },
      { sender: 'user', text: 'Who was the most famous artist?' },
      { sender: 'tutor', text: 'That is subjective, but Leonardo da Vinci is a strong candidate.' },
    ],
  },
];

const ChatContent = () => {
  const [currentSubjectIndex, setCurrentSubjectIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubjectIndex((prevIndex) => (prevIndex + 1) % subjects.length);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  const currentSubject = subjects[currentSubjectIndex];

  return (
    <div className="space-y-3 sm:space-y-4">
      {currentSubject.chat.map((message, index) => (
        <div key={index} className="p-2 sm:p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
          <p className="text-sm sm:text-base leading-relaxed break-words"><strong>{message.sender}:</strong> {message.text}</p>
          {message.image && (
            <div className="mt-2">
              <Image
                src={message.image}
                alt="chat image"
                width={180}
                height={135}
                className="sm:w-[200px] sm:h-[150px] rounded-lg touch-manipulation"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatContent;
