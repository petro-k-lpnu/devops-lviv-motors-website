class ContactController {

	constructor() {
		this.emailInput = document.getElementById('email-input')
		this.textInput = document.getElementById('text-input')

	}

	submit(event) {
		if (this.emailInput.value && this.textInput.value) {
			this.save();

			alert('Ваше повідомлення збережено. Дякуємо за відгук!')
		}

	}

	async save() {
		console.info('storing on the server...', {
			email: this.emailInput.value,
			text: this.textInput.value,
		})

	}
}

document.addEventListener("DOMContentLoaded", () => {
	window.contactController = new ContactController()
});