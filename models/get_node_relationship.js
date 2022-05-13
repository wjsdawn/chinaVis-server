//导入数据库
const neo4jDriver = require('../db');
const getJson = async({
    id,
    start = 0,
    end = 3
  }={}) =>{
  return new Promise((resolve,reject)=>{
    let nodes=[],edges = []
    let query = `MATCH (c:Domain{id:"${id}"})-[r*${start}..${end}]->(result) return r,result`
    neo4jDriver.session().run(query).then(result=>{
      result.records.forEach(record=>{
        nodes.push({
          ID:record.get('result').properties.c_id,
          id:record.get('result').properties.id,
          name:record.get('result').properties.name,
          label:record.get('result').labels,
          industry:record.get('result').properties.industry
        })
        // console.log(record.get('result'))
        record.get('r').forEach(i=>{
          edges.push({
            start:i.start.low,
            end:i.end.low,
            type:i.type
          })
        })
      })
    }).catch(error=>{
      console.log(error)
    }).then(()=>{
      let json = {
        nodes:nodes,
        edges:edges
      }
      resolve(json)
    })
  })
}
// getJson(1)
let data={
  id:'Domain_c58c149eec59bb14b0c102a0f303d4c20366926b5c3206555d2937474124beb9',
}
// getJson({
//   id:data.id
// })
module.exports = getJson()
