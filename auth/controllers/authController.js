const authService = require('../services/authService');
const producer = require('../services/producer'); 

exports.registerUser = async (req, res) => {
  try {
    const user = await authService.register(req.body);
    const safeUser = user.toObject ? user.toObject() : { ...user };
    delete safeUser.password;

    try {
      await producer.publishUserEmail(user);
    } catch (err) {
      console.error('Register-event kon niet worden verzonden:', err.message);
      return res.status(201).json({
        message: 'Gebruiker aangemaakt, maar register-event niet verzonden',
        user: safeUser,
        eventPublished: false
      });
    }

    res.status(201).json({
      message: 'Gebruiker aangemaakt',
      user: safeUser,
      eventPublished: true
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const token = await authService.login(req.body);
    res.status(200).json({ token });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
