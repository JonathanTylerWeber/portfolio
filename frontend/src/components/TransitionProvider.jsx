import React, { createContext, useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TransitionContext = createContext();

export const useTransition = () => {
  return useContext(TransitionContext);
};

export const TransitionProvider = ({ children }) => {
  const [showTransition, setShowTransition] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const titles = {
    "/": "Home",
    "/about": "About",
    "/contact": "Contact",
  };

  const handleTransition = (event) => {
    event.preventDefault();
    const path = event.currentTarget.getAttribute('href');
    const title = titles[path] || "";

    setPageTitle(title);
    setShowTransition(true);

    setTimeout(() => {
      navigate(path);
    }, 500);

    setTimeout(() => {
      setShowTransition(false);
    }, 2000);
  };

  useEffect(() => {
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => link.addEventListener('click', handleTransition));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleTransition));
    };
  }, [navigate, titles]);

  return (
    <TransitionContext.Provider value={{ showTransition, pageTitle }}>
      {children}
    </TransitionContext.Provider>
  );
};
