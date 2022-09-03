/**
 * @description - Task 13
 * @var {object} user - User object
 * @function logWelcomeUser - Welcome message
 * @param {String}  welcomeString
 * @var {String} bindLogWelcomeUser
 */

const user = {
  hobby: 'Calligraphy',
  favoriteSport: 'Hockey',
  astrologicalSign: 'Aries',
  firstName: 'Buillaume',
  lastName: 'Ialva',
  location: 'Telaviv',
  occupation: 'Engineer'
};

function logWelcomeUser (welcomeString) {
  console.log(welcomeString + ', ' + this.firstName + '. Your occupation is: ' + this.occupation);
}

const bindLogWelcomeUser = logWelcomeUser.bind(user);
bindLogWelcomeUser('Welcome');
bindLogWelcomeUser('Hello');
