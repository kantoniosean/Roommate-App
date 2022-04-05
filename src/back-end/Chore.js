class Chore {
	
	constructor(name) {
		this.name = name; 		//Name of the chore
		this.desc = ""; 		//Note or description of the chore
		this.handler = ""; 		//Person tasked to the chore
		this.completed = false; //Completion status of the chore
	}
	//Setters
	setName(newName) {

		this.name = newName;
        
	}

	setDesc(newDesc) {

		this.desc = newDesc;

	}

    	setHandler(newHand) {

		this.handler = newHand;

	}

	setStatus(newComp) {

		this.completed = newComp;

	}

	//Getters
	getName() {

		return this.name;

	}

	getDesc() {

		return this.desc;

	}

	getHandler() {

		return this.handler;

	}

	getStatus() {

		return this.completed;

	}

}

export default Chore
