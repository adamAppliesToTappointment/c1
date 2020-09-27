import fs from 'fs';
import express from 'express';
import recallMiddleware from '../middlewares/memory/recallMiddleware';
import storeMiddleware from '../middlewares/memory/storeMiddleware';
import textFileMemoryService from '../services/textFileMemoryService';

const router = express.Router();

router.get('/recall', recallMiddleware(textFileMemoryService));

router.put('/store', storeMiddleware(textFileMemoryService));

export default router;
