import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { Pool } from 'pg'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const { username, password } = req.body
  const { rows } = await pool.query('SELECT password FROM users WHERE username=$1', [username])

  if (rows.length === 0) return res.status(401).json({ error: 'Invalid credentials' })

  const match = await bcrypt.compare(password, rows[0].password)
  if (!match) return res.status(401).json({ error: 'Invalid credentials' })

  const token = jwt.sign({ username }, process.env.JWT_SECRET!, { expiresIn: '2h' })
  res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=7200`)
  res.status(200).json({ ok: true })
}