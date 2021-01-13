import { Router } from 'express';

const router = Router();

router.get('/', async(req, res) => {
    try {
        res.json('TEST');
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "code bad this path", error});
    }
});

export default router;