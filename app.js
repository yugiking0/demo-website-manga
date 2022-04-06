import logger from './logger.js';
import 
  { TYPE_LOG, 
    TYPE_WARN, 
    TYPE_ERROR 
  } 
from './constant.js';

logger('Hello World!');
logger('Alert!!!', TYPE_WARN);
logger('Bugzzz!', TYPE_ERROR);
