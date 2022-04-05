class User {

    User(firstName, lastName, id, email, [results], [roommates], [chores]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.email = email;
        this.results = results;
        this.roommates = roommates;
        this.chores = chores;
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

    
	setScore([questions]) {
		let total = 0;
		let currentScore = 0;

		for(let i = 0; i < questions.length; i++) {
			total += questions[i].getValue();

			currentScore += questions[i].compare(this.results[i]);
		}
        	this.score = ((currentScore+0.0)/total*100).toFixed();
		return this.score;
	}

}
