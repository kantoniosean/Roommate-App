class Question {

	constructor(prompt, value) {
		this.prompt = prompt;
		this.value = value;
	}

	getPrompt() {
		return this.prompt;
	}
	
	getValue() {return this.value;}

	setPrompt(prompt) {
		this.prompt = prompt;
	}

	setValue(value) {
		this.value = value;
	}

	compare() {
	    throw new Error("You cannot create an instance of     Abstract Class");
	}
}

// options for this question would be true or false
class TFQ extends Question {
	compare(ans) {
		return (ans) ? this.value : 0;
	}
}