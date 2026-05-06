const supertest = require('supertest')
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/health', (req, res) => {
  res.send('ok')
})

const api = supertest(app)

describe('App', () => {
  test('GET / returns Hello World', async () => {
    const response = await api.get('/')
    expect(response.status).toBe(200)
    expect(response.text).toBe('Hello World!')
  })

  test('GET /health returns ok', async () => {
    const response = await api.get('/health')
    expect(response.status).toBe(200)
    expect(response.text).toBe('ok')
  })
})