import path from 'path'
import express from 'express'

/**
 * Basic express app to get started. Getting CI/CD setup before development.
 */

const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html')

app.use(express.static(DIST_DIR))

app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
})

const PORT = process.env.PORT || 2000

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}`)
})