import {NextApiRequest, NextApiResponse} from 'next'
import jwt from 'jsonwebtoken'

import redis from '@/redis'

const secretKey = 'secret-key'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const body = await request.body
    const decode = jwt.verify(body.token, secretKey)

    await redis.set('cachedData', JSON.stringify(decode), 'EX', 3600)

    return response.json(decode)
  } catch (error) {
    return response.json({error})
  }
}
