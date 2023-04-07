import express from 'express';
import {
    getCats,
    getCatById,
    saveCat,
    updateCat,
    deleteCat
} from '../controllers/CatController.js';

const router = express.Router();

router.get('/cats', getCats);
router.get('/cats/:id', getCatById);
router.post('/cats', saveCat);
router.patch('/cats/:id', updateCat);
router.delete('/cats/:id', deleteCat);

export default router;