import { Router } from 'express'
const router = Router()

import * as sectionsController from '../controllers/sections.controller';

router.post('/', sectionsController.createSection);
router.get('/', sectionsController.getSections);
router.get('/:id', sectionsController.getSectionById);
router.put('/:id', sectionsController.updateSectionById);
router.delete('/:id', sectionsController.deleteSection);

export default router;

