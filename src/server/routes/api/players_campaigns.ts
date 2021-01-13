import { Router } from 'express';
import * as passport from 'passport';
import db from '../../db';

const router = Router();


//GET All passport.authenticate('jwt'),
router.get('/', async(req: any, res) => {
    try {
        const players_campaigns = await db.players_campaigns.all();
        res.json(players_campaigns);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "code bad at server, routes, api, players_campaigns.ts, GET All", error});
    }
});

//GET One passport.authenticate('jwt'),
router.get('/:id', async(req: any, res) => {
    try {
        const id = String(req.params.id);
        const [players_campaigns] = await db.players_campaigns.one(id);
        res.json(players_campaigns);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "code bad at server, routes, api, players_campaigns.ts, GET One", error});
    }
});

//DELETE passport.authenticate('jwt'), 
router.delete('/:id', async(req, res) => {
    try {
        const id = String(req.params.id);
        const results = await db.players_campaigns.destroy(id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "code bad at server, routes, api, players_campaigns.ts, DELETE", error});
    }
});

//POST passport.authenticate('jwt'),
router.post('/', async(req, res) => {
    try {
        const newPlayers_Campaigns = req.body;
        const results = await db.players_campaigns.insert(newPlayers_Campaigns);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "code bad at server, routes, api, players_campaigns.ts, POST", error});
    }
});


export default router;