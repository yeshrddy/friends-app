const { createFriends, getAllFiends, formPage, aboutPage } = require('../controller/friendsControllers');
const router=require('express').Router();

const upload=require('../middleware/multer')

router.get('/create',formPage);

router.get('/about',aboutPage)

router.get('/',getAllFiends )

router.post('/', upload.single('file') ,createFriends)


module.exports=router;