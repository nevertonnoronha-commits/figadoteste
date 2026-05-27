import React, { useState, useEffect } from 'react';

export const ScrollProgressBar = () => {
const [scrollProgress, setScrollProgress] = useState(0);

useEffect(() => {
const handleScroll = () => {
const totalScroll = document.documentElement.scrollTop;
const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
const scroll = `${totalScroll / windowHeight * 100}%`;
setScrollProgress(scroll);
};

window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);

return (
<div id="scroll-progress" style={{ width: scrollProgress }}></div>
);
};
