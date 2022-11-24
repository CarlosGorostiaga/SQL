const {Router} = require ("express")
const router = Router();
const notasCtrl = require("../controller/nota.controller")


router.get("/notas?id=", notasCtrl.getNotas);

router.get("/notas", notasCtrl.getNotas);

router.post("/notas", notasCtrl.postNota);

router.put("/notas", notasCtrl.putNota);

router.delete("/notas", notasCtrl.deleteNota);

module.exports = router;