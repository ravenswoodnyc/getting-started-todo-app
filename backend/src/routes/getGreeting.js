const GREETINGS = [
    'Hello world!',
    'Ahoy, matey!',
    'Greetings, Earthling!',
    'Howdy, partner!',
    'Salutations!',
    'Bonjour, mon ami!',
    'Hola, amigo!',
    'Ciao, amico!',
    'Konnichiwa, tomodachi!',
];

module.exports = async (req, res) => {
    res.send({
        greeting: GREETINGS[Math.floor(Math.random() * GREETINGS.length)],
    });
};
