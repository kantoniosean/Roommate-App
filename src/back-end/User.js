class User {
    User(firstName, lastName, id, email, [results], [roommates], [chores]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.results = results;
        this.roommates = roommates;
        this.chores = chores;
    }

    getFirst() { return this.firstName };
    getLast() { return this.lastName };
    getId() { return this.id };
    getEmail() { return this.email };
    getResults() { return this.results };
    getRoommates() { return this.roommates };
    getChores() { return this.chores };
    
    addRoommate(roommate) {
        this.roommates.push(roommate);
    }

    removeRoommate(roommate) {
        for (i = 0; i < this.roommates.length; i++) {
            if (this.roommates[i].id === roommate.id) {
                this.roommates.splice(i, 1);
                return;
            }
        }
    }

    addChore(chore) {
        this.chores.push(chore);
    }

    removeChore(chore) {
        for (i = 0; i < this.chores.length; i++) {
            if (this.chores[i].id === chore.id) {
                this.chores.splice(i, 1);
                return;
            }
        }
    }

    

}