import { useState } from 'react'

export default function useSide() {
  const [size, setSize] = useState('SMALL')
  const handleSize = () => {
    setSize(size === 'SMALL' ? 'LARGE' : 'SMALL')
  }
  return {
    handleSize,
    size
  }
}
