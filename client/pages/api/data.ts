import {NextApiRequest, NextApiResponse} from 'next'

import redis from '@/redis'

export default async function handler(
  _request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const checksData = await redis.get('cachedData')

    if (checksData) {
      const parsedChecks = JSON.parse(checksData)
      response.json(parsedChecks)
    } else {
      response.json({data: 'Not Found'})
    }
  } catch (error) {
    console.error('Error fetching data from Redis:', error)
  } finally {
    redis.quit()
  }
}
