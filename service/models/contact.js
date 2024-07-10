const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: String,
  phone: String,
  favorite: {
    type: Boolean,
    default: false,
  },
});

// Tworzenie modelu na podstawie schematu
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
