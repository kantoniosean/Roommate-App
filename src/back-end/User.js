class User {

    User(builder) {
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.id = builder.id;
        this.email = builder.email;
        this.results = builder.results;
        this.roommates = builder.roommates;
        this.chores = builder.chores;
        this.setScore(results);
    }

    getFirst() { return this.firstName };
    getLast() { return this.lastName };
    getId() { return this.id };
    getEmail() { return this.email };
    getRoommates() { return this.roommates };
    getChores() { return this.chores };
    getScore() {return this.score };
    
    addRoommate(roommate) {
        this.roommates.push(roommate);
    }

    removeRoommate(roommate) {
        for (let i = 0; i < this.roommates.length; i++) {
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
        for (let i = 0; i < this.chores.length; i++) {
            if (this.chores[i].id === chore.id) {
                this.chores.splice(i, 1);
                return;
            }
        }
    }

    
	setScore([results]) {
		let total = 0;
		let currentScore = 0;

		for(let i = 0; i < this.results.length; i++) {
			total += 1
			currentScore += (results[i]) ? 1 : 0;
		}
		this.score = ((currentScore+0.0)/total*100).toFixed();
		return this.score;
	}

}
