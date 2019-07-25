import React, { useEffect } from "react";
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkModeOn', false);
    
    const addDarkMode = () => {
        document.querySelector('body').classList.add('dark-mode')
    }
    const removeDarkMode = () => {
        document.querySelector('body').classList.remove('dark-mode')
    }
    const setDarkMode = () => {
    useEffect(() => {
        darkMode ? addDarkMode() : removeDarkMode();
    }), [darkMode];
}

    return [darkMode, setDarkMode];
}

export default useDarkMode