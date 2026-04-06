import React from 'react'
import { useTheme } from '../context/ThemeContext'

export default function Dashboard() {

  const { dark, toggletheme } = useTheme();  // match context names

  return (
    <div className="grid h-full w-full bg-white dark:bg-gray-900 transition-colors duration-300">
      
      <div>
        <button 
          onClick={toggletheme}
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
        >
          {dark === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>

      <div>
        {/* rest of dashboard */}
      </div>

    </div>
  )
}