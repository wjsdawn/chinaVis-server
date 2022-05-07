const neo4j =require('neo4j-driver')
// const db = "bolt://127.0.0.1:7687"
const db = 'bolt://47.111.179.56:7687'
const user = 'neo4j'
const password ='123456'
const driver =neo4j.driver(db,neo4j.auth.basic(user,password),{maxTransactionRetryTime:3000})

module.exports =driver
