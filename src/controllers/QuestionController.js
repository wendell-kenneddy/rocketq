module.exports = {
  post(req, res) {
    const roomId = req.params.roomId;
    const qeuestionId = req.params.questionId;
    const action = req.params.action;
    const password = req.body.password;

    console.log(`roomId: ${roomId}, questionId: ${qeuestionId}, action: ${action}, password: ${password}`);
  }
}