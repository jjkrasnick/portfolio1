import React from 'react'

/**
 * A React functional component that renders a loading spinner.
 * The spinner is centered on the screen and uses Tailwind CSS classes for styling and animation.
 * @returns {JSX.Element} A div containing an animated spinning border element.
 */
const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  )
}

export default LoadingSpinner