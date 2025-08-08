exports.chat = async (req, res) => {
  const { message } = req.body;
  const responses = [
    "I hear you. Remember to breathe and take things slowly.",
    "Your feelings are valid. I'm here with you.",
    "It's okay to feel this way. Let's reflect on one positive thing today."
  ];
  const response = responses[Math.floor(Math.random() * responses.length)];
  res.json({ response, echo: message });
};
