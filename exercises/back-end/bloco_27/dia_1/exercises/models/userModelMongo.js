const { ObjectId } = require('mongodb');
const connection = require('./connectionMongo');

const createUser = async (user) => {
  const { firstName, lastName, email, password } = user;
  return await connection()
    .then(conn => conn.collection('users').insertOne(user))
    .then(result => ({
      firstName, lastName, email, password, id: result.insertedId
    }))
}

const getAllUsers = async () => {
  return await connection()
    .then(conn => conn.collection('users').find().toArray())
}

const getById = async (id) => {
  if(!ObjectId.isValid(id)) return null;

  const user = await connection()
    .then(conn => conn.collection('users').findOne({ _id: new ObjectId(id) }))

  if (!user) {
    return null;
  }

  return user;
}

const updateUser = async (id, user) => {
  if(!ObjectId.isValid(id)) return null;

  const userData = getById(id);

  if (!userData) return null;

  const { firstName, lastName, email, password } = user;
  
  return await connection()
    .then(conn => conn.collection('users').updateOne({ _id: new ObjectId(id) }, { $set: { firstName, lastName, email, password } }))
    .then(result => ({firstName, lastName, email, password, id: result.insertedId }));
}


const isValid = (user) => {
  const { firstName, lastName, email, password } = user;
  if (!firstName || !lastName || !email || !password) {
    return false;
  }

  if (password.length < 6) {
    return false;
  }

  return true;
}


module.exports = {
  createUser,
  isValid,
  getById,
  getAllUsers,
  updateUser
}