import React from 'react'

const Title = ({ title, color = 'black' }) => (
  <h2 className='text-center main-title mb-4' style={{ color }}>{title}</h2>
)
export default Title
