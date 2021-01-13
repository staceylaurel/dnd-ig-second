import { Router } from 'express';
import * as passport from 'passport';
import db from '../../db';

const router = Router();


//GET All passport.authenticate('jwt'),
router.get('/', async(req: any, res) => {
    try {
        const discussions = await db.discussions.all();
        res.json(discussions);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "code bad at server, routes, api, discussions.ts, GET All", error});
    }
});

//GET One passport.authenticate('jwt'),
router.get('/:id', async(req: any, res) => {
    try {
        const id = Number(req.params.id);
        const [discussions] = await db.discussions.one(id);
        res.json(discussions);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "code bad at server, routes, api, discussions.ts, GET One", error});
    }
});

//PUT passport.authenticate('jwt'), 
router.put('/:id', async(req: any, res) => {
    try {
        const id = Number(req.params.id);
        const editDiscussions = req.body
        const results = await db.discussions.update(editDiscussions, id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "code bad at server, routes, api, discussions.ts, PUT", error});
    }
});

//DELETE passport.authenticate('jwt'), 
router.delete('/:id', async(req, res) => {
    try {
        const id = Number(req.params.id);
        const results = await db.discussions.destroy(id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "code bad at server, routes, api, discussions.ts, DELETE", error});
    }
});

//POST passport.authenticate('jwt'),
router.post('/', async(req, res) => {
    try {
        const newDiscussion = req.body;
        const results = await db.discussions.insert(newDiscussion);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "code bad at server, routes, api, discussions.ts, POST", error});
    }
});


export default router;