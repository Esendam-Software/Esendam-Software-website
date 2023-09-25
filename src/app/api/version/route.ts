
import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  return new Response(JSON.stringify({ version: 'v1.0.0' }))
}
