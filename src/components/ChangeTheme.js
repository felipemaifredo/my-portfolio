import React, { useState, useEffect } from 'react';

export function ChangeTheme() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 't-light');

  const handleThemeChange = () => {
    const newTheme = theme === 't-light' ? 't-dark' : 't-light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className='box-change-theme'>
        <label class="swith">
            <div class="switch-wrapper">
                <input type="checkbox" id="checkbox-theme" onChange={handleThemeChange} checked={theme === 't-dark'} />
                <span class="swith-b"></span>
            </div>
        </label>
    </div>
  );
}
