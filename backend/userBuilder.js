class UserBuilder {

    UserBuilder(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }

    roommates(r) {
        this.roommates = roommates;
        return this;
    }

    build() {
        let user = new User(this);
        return user;
    }
}