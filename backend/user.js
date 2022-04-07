class User {
    User(builder) {
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.id = builder.id;
        this.roommates = builder.roommates;
    }

    getFirst() { return this.firstName };
    getLast() { return this.lastName };
    getId() { return this.id };
    getRoommates() { return this.roommates };
}