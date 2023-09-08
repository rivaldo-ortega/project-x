const generateToken = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/data', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.error('error', error)
  }
}

async function CachedTokens() {
  const data = await generateToken()
  console.log(data)

  return (
    <div className='px-2'>
      <h2>Checks Table</h2>
      <table>
        <thead>
          <tr>
            <th>Check</th>
            <th>Status</th>
          </tr>
        </thead>
        {/* <tbody>{JSON.stringify(data)}</tbody> */}
      </table>
    </div>
  )
}

export default CachedTokens
