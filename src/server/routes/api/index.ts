import {Router} from 'express';
import campaignsRouter from './campaigns';
import discussionsRouter from './discussions';
import players_campaignsRouter from './players_campaigns';

const router = Router();

router.use('/campaigns', campaignsRouter);
router.use('/discussions', discussionsRouter);
router.use('/players_campaigns', players_campaignsRouter);

export default router;