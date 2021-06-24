module.exports = {
  index(req, res) {
    return res.render('home', { page: 'enter-room' });
  },

  createPass(req, res) {
    return res.render('home', { page: 'create-pass' });
  }
};
