
import express from 'express'
import resolvers from './resolvers'
import schema from './schema'
import {graphqlHTTP} from 'express-graphql'
const app = express()
app.get("/",(req,res)=>{
    res.send("Up and running with graphql crash coursre")
})
const root = resolvers;
// {lco:()=>console.log('LearnCodeOnline.in')}
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
    
}))

app.listen(8082,()=>console.log("Running at 8082"))