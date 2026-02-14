const testController = (req, res) => {
    res.status(200).json({ message: "This is a test route", success: true });
};

module.exports = { testController };