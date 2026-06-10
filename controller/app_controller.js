const model = require("../model/app_model");

exports.getNotes = async (req, res) => {
  try {
    const note = await model.find({ user: req.user.id });
    if (!note) {
      return res.status(404).json({
        message: "Notes not found!",
      });
    }
    res.json(note);
  } catch (e) {
    res.status(500).json({
      message: e,
    });
  }
};

exports.getNote = async (req, res) => {
  try {
    const note = await model.findById(req.params.id);
    if (!note) {
      return res.status(404).json({
        message: "NoteId not found!",
      });
    }
    res.json(note);
  } catch (e) {
    res.status(500).json({
      message: e,
    });
  }
};

exports.createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const data = await model.create({
      title,
      content,
      user: req.user.id,
    });
    if (!data) {
      return res.status(404).json({
        message: "Error : Empty Body!",
      });
    }
    res.json(data);
  } catch (e) {
    res.status(500).json({
      message: e,
    });
  }
};

exports.updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await model.findByIdAndUpdate(req.params.id, {
      title,
      content,
    });
    if (!note) {
      return res.status(404).json({
        message: "Id Not Found!",
      });
    }
    res.json(note);
  } catch (e) {
    res.status(500).json({
      message: e,
    });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const data = await model.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({
        message: "Id Not Found",
      });
    }
    res.send("Deleted Successfully");
  } catch (e) {
    res.status(500).json({
      message: e,
    });
  }
};
