const {Router} = require ("express")
const router = Router();
const mediasCtrl = require("../controller/media.controller")


router.get("/media", mediasCtrl.getMedia);

router.get("/apuntadas?id=", mediasCtrl.getApuntadas);

router.get("/apuntadas", mediasCtrl.getApuntadas);

router.get("/impartidas?id=", mediasCtrl.getImpartidas);

router.get("/impartidas", mediasCtrl.getImpartidas);

module.exports = router;