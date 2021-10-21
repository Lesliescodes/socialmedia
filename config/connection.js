const mongoose = require('mongoose');
mongoose.set('debug', true);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialmedia', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection
