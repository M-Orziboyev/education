import express, {Application, Request, Response} from 'express'
import {config} from 'dotenv'
import data from './db.json'


config()

const app: Application = express()
app.use(express.json())
app.post('/page-find', (req: Request, res: Response) => {
    try {
        const {firstCategory} = req.body
        const response = data.page[firstCategory].find
        return res.status(200).json(response)
    } catch (error) {
        const result = error as Error
        return res.status(400).json(result.message)
    }
})

app.post('/product-find', (req: Request, res: Response) => {
    try {
        const {category} = req.body
        const response = data.product.filter(c => c._id === category)
        return res.status(200).json(response)
    } catch (error) {
        const result = error as Error
        return res.status(400).json(result.message)
    }
})

app.get('/page-find/:id',  (req: Request, res: Response) => {
    try{
        const response = data.productPage.filter(c => c._id === req.params.id)
        return res.status(200).json(response)
    }catch (error) {
        const result = error as Error
        return res.status(400).json(result.message)
    }
})
app.get('/', (req: Request, res: Response) => {
    return res.status(200).json(data)
})
const PORT = process.env.PORT || 4100

function appStart() {
    try {
        app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

appStart()