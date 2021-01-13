import { Router } from 'express';
import * as passport from 'passport';
import db from '../../db';

const router = Router();


//GET All passport.authenticate('jwt'),
router.get('/', async(req: any, res) => {
    try {
        const campaigns = await db.campaigns.all();
        res.json(campaigns);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "code bad at server, routes, api, campaigns.ts, GET All", error});
    }
});

//GET One passport.authenticate('jwt'),
router.get('/:id', async(req: any, res) => {
    try {
        const id = String(req.params.id);
        const [campaigns] = await db.campaigns.one(id);
        res.json(campaigns);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "code bad at server, routes, api, campaigns.ts, GET One", error});
    }
});

//DELETE passport.authenticate('jwt'), 
router.delete('/:id', async(req, res) => {
    try {
        const id = String(req.params.id);
        const results = await db.campaigns.destroy(id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "code bad at server, routes, api, campaigns.ts, DELETE", error});
    }
});

//POST passport.authenticate('jwt'),
router.post('/', async(req, res) => {
    try {
        const newCampaign = req.body;
        const results = await db.campaigns.insert(newCampaign);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "code bad at server, routes, api, campaigns.ts, POST", error});
    }
});


export default router;