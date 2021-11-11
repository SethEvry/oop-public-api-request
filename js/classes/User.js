class User {
	constructor(user, index) {
		this.first = user.name.first;
		this.last = user.name.last;
		this.email = user.email;
		this.city = user.location.city;
		this.state = user.location.state;
		this.image = user.picture.large;
		this.phone = user.cell;
		this.birthday = user.dob.date;
		this.postcode = user.location.postcode;
		this.street = `${user.location.street.number} ${user.location.street.name}`;
		this.index = index
	}
}
