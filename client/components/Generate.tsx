'use client'
import React, {useState} from 'react'

const TokenGenerator = () => {
  const [generatedToken, setGeneratedToken] = useState('')

  const generateToken = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      setGeneratedToken(data.token)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='flex flex-col p-2'>
      <button className='bg-purple-500 rounded p-2' onClick={generateToken}>
        Generate Token
      </button>
      {generatedToken && (
        <div>
          <h2>Generated Token:</h2>
          <pre>{generatedToken}</pre>
        </div>
      )}
    </div>
  )
}

export default TokenGenerator
