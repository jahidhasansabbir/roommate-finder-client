import { useEffect } from 'react'
import './App.css' // make sure tailwind is imported

function useDarkModeSync() {
  useEffect(() => {
    const syncTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme')
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }

    syncTheme()

    const observer = new MutationObserver(syncTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => observer.disconnect()
  }, [])
}

function App() {
  useDarkModeSync()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-300">
      <h1 className="text-3xl mb-4">Theme Toggle Test</h1>

      <label className="flex items-center gap-2">
        🌞
        <input
          type="checkbox"
          className="toggle theme-controller"
          data-toggle-theme="dark,light"
          data-act-class="ACTIVE"
        />
        🌙
      </label>
    </div>
  )
}

export default App
