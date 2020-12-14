
const express = require('express')
require('dotenv').config()
const { createClient } = require('@supabase/supabase-js')
const app = express()
const port = 3000
const supabaseUrl = 'https://nosmtsuvodddozkrlamj.supabase.co'
const supabaseKey = process.env.SUPABASEKEY
const supabase = createClient(supabaseUrl, supabaseKey)

async function test () {
  const chatbox = supabase
  .from('chatbox')
  .on('INSERT', payload => {
    console.log('Change received!', payload)
  })
  .subscribe()
} 
test()
app.get('/', (req, res) => {
  res.send('x')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

