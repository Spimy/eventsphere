class Authentication {
  constructor() {
    this.sessionKey = 'session';

    const session = localStorage.getItem(this.sessionKey);
    this.user = session ? JSON.parse(session) : null;
  }

  hash = async (password) => {
    const buffer = await crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode(password)
    );
    const chars = Array.prototype.map
      .call(new Uint8Array(buffer), (ch) => String.fromCharCode(ch))
      .join('');
    return btoa(chars);
  };

  checkPassword = async (password, savedPassword) => {
    return (await this.hash(password)) === savedPassword;
  };

  getSession = () => this.user;

  createSession = (user) => {
    this.user = user;
    localStorage.setItem(this.sessionKey, JSON.stringify(user));
  };

  deleteSession = () => {
    this.user = null;
    localStorage.removeItem(this.sessionKey);
  };
}

const Auth = new Authentication();

const setNavbar = () => {
  const navbar = document.querySelector('header.navbar .navbar__links');
  if (!navbar) return;

  const navLinks = navbar.querySelectorAll('a');
  const userLink = navLinks.item(navLinks.length - 1);

  const session = Auth.getSession();
  if (session) {
    userLink.href = 'dashboard.html';
    userLink.innerHTML = session.name.split(' ').slice(0, 1);
  }
};

setNavbar();
