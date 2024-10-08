import React from 'react'

```
/**
 * Renders a footer component with a copyright notice.
 * @returns {JSX.Element} A footer element with the current year and copyright information.
 */
```
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-white dark:bg-dark-blue text-black dark:text-white">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {currentYear} JJ Krasnick. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer