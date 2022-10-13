import dotenv from 'dotenv';
dotenv.config();



export default {
    MONGO_LOCAL_DBNAME : process.env.MONGO_LOCAL_DBNAME || 'mongoDBLocalName'
}