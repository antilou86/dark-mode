import React, { useEffect } from "react";
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkModeOn');
    
    const addDarkMode = () => {
       return document.querySelector('body').classList.add('dark-mode')
    }
    const removeDarkMode = () => {
       return document.querySelector('body').classList.remove('dark-mode')
    }
    
    useEffect( () => {
        darkMode ? addDarkMode() : removeDarkMode();
    }), [darkMode];


    return [darkMode, setDarkMode];
}

export default useDarkMode