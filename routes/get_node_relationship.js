var express = require('express')
var router = express.Router()
const { getJson } = require("../models/get_node_relationship")

router.post("/",async (req,res,next)=>{
  let paramas = req.body
  await getJson({id:paramas['id'],start:paramas['start'],end:paramas['end']}).then((result)=>{
    res.send({
      state:200,
      msg:'查询成功',
      data:result
    })
  }).catch(next);
})
module.exports = router
