import express, { IRouter } from 'express';
import {
  getDemoItemsController,
  createDemoItemController,
  getOneDemoItemController,
  deleteDemoItemController,
  updateOneDemoItemPropertyValueController,
  updateDemoItemPropertyValuesController,
} from './demo.controller';

const router: IRouter = express.Router();

router.get('/', getDemoItemsController);
router.post('/', createDemoItemController);
router.get('/:demoId', getOneDemoItemController);
router.delete('/:demoId', deleteDemoItemController);
router.patch('/:demoId', updateOneDemoItemPropertyValueController);
router.put('/:id', updateDemoItemPropertyValuesController);

export { router };
