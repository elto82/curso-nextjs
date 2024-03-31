import React from 'react'

const Card = ({ children }: { children: React.ReactNode }) => {
  const cardStyle = {
    backgroundColor: 'blue',
    padding: '1rem',
    borderRadius: '0.5rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '1rem',
  }
  return (
    <div
      style={cardStyle}
      className="card"
    >
      {children}
    </div>
  )
}

export default Card