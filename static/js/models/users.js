class UserRepository {
  constructor() {
    this.usersKey = 'users';
    this.users = JSON.parse(localStorage.getItem(this.usersKey) ?? '[]');
  }

  getUsers = () => this.users;
  getUserByEmail = (email) => this.getUsers().find((u) => u.email === email);

  save = async (user) => {
    if (this.getUserByEmail(user.email)) return false;
    const newUser = {
      ...user,
      password: await Auth.hash(user.password),
      bookings: []
    };

    const savedUsers = this.getUsers();
    savedUsers.push(newUser);

    this.users = savedUsers;
    localStorage.setItem(this.usersKey, JSON.stringify(savedUsers));

    return true;
  };

  updateUser = (email, user) => {
    this.users = [...this.users.filter((user) => user.email !== email), user];
    localStorage.setItem(this.usersKey, JSON.stringify(this.users));
  };

  setBooking = (email, booking) => {
    const savedUsers = this.getUsers();
    const user = savedUsers.find((user) => user.email === email);

    if (!user.bookings) {
      user.bookings = [];
    }

    let uuid = crypto.randomUUID();
    while (user.bookings.find((booking) => booking.id === uuid)) {
      uuid = crypto.randomUUID();
    }

    user.bookings.push({
      id: uuid,
      ...booking
    });

    this.updateUser(user.email, user);
    return user;
  };

  updateBooking = (email, bookingId, booking) => {
    const savedUsers = this.getUsers();
    const user = savedUsers.find((user) => user.email === email);

    if (!user.bookings) {
      user.bookings = [];
    }

    const foundBooking = user.bookings.find((b) => b.id === bookingId);
    if (!foundBooking) return user;

    user.bookings = [
      ...user.bookings.filter((b) => b.id !== bookingId),
      { ...foundBooking, ...booking }
    ];

    this.updateUser(user.email, user);
    return user;
  };

  removeBooking = (email, id) => {
    const savedUsers = this.getUsers();
    const user = savedUsers.find((user) => user.email === email);

    if (!user.bookings) {
      user.bookings = [];
      return user;
    }

    user.bookings = user.bookings.filter((booking) => booking.id !== id);

    this.updateUser(user.email, user);
    return user;
  };
}

const User = new UserRepository();
