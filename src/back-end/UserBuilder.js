class UserBuilder {

    UserBuilder(firstName, lastName, id, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.email = email;
    }

    results([results]) {
        this.results = results;
        return this;
    }

    roommates(r) {
        this.roommates = roommates;
        return this;
    }

    chores(c) {
        this.chores = chores;
        return this;
    }

    build() {
        let user = new User(this);
        return user;
    }
}