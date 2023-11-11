async function createComment(req, res) {
  try {
    const email = req.header('email');
    const id = req.header('id');

    console.log(email);
    console.log(id);

    res.status(200).send();
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = { createComment };
