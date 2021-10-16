// placeholder code for structure only, still to write

const { User } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().select('-__v -password');
    }
  }
};

module.exports = resolvers;