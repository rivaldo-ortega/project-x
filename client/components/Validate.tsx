'use client'
import {useState} from 'react'

const TokenValidator = () => {
  const [token, setToken] = useState('')
  const [validationResult, setValidationResult] = useState('')

  const handleValidate = async () => {
    try {
      const response = await fetch('/api/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({token}),
      })

      const data = await response.json()
      setValidationResult(data.result)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='flex flex-col gap-2 p-2'>
      <div className='flex flex-row gap-2'>
        <input
          type='text'
          placeholder='Enter Token'
          value={token}
          onChange={e => setToken(e.target.value)}
          className='rounded px-2'
        />
        <button onClick={handleValidate} className='bg-purple-500 rounded p-2'>
          Validate
        </button>
      </div>
      <div>
        <h2 className='text-yellow-500'>Validation Result:</h2>
        <p>{validationResult}</p>
      </div>
    </div>
  )
}

export default TokenValidator
