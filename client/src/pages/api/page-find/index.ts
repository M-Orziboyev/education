import data from '../../../../db.json'
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const {firstCategory} = req.body
            const response = data.page[firstCategory].find;
            return res.status(200).json(response)

        } catch (error) {
            res.status(400).json(error)
        }

    }
}