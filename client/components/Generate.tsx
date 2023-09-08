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
        body: JSON.stringify({id: generatedToken}),
      })
      const data = await response.json()
      setGeneratedToken(data.token)
    } catch (error) {
      console.error(error)
    }
  }

  const handleCopyToke = () => {
    navigator.clipboard.writeText(generatedToken)
  }

  return (
    <div className='flex flex-col p-2 w-1/2'>
      <button className='bg-purple-500 rounded p-2' onClick={generateToken}>
        Generate Token
      </button>
      <div className='w-full mt-2'>
        {generatedToken && (
          <div className='flex flex-col gap-2 w-full h-auto'>
            <h2 className='text-yellow-500'>Generated Token:</h2>
            <div className='break-words'>{generatedToken}</div>
            <button
              onClick={handleCopyToke}
              className='rounded bg-yellow-300 p-2 w-28'
            >
              Copy
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default TokenGenerator
