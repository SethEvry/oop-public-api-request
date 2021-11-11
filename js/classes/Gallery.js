class Gallery {
	constructor(users) {
		this.users = users;
		this.cards = this.createCard(users);
	}

	createCard = (users) => {
		let cards = [];
		users.forEach((user, index) => {
			cards.push(new Card(user, index));
		});
		return cards;
	};
}
