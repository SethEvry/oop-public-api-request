class Search {
	constructor(data) {
		this.value = null;
		this.data = data;
		this.form = document.createElement("form");
		this.html = `
                <input type="search" id="search-input" class="search-input" placeholder="Search...">
                <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
        `;
		this.form.insertAdjacentHTML("beforeend", this.html);
		this.form.addEventListener("submit", this);
		this.form.querySelector("input").addEventListener("keyup", this);
		document
			.querySelector(".search-container")
			.insertAdjacentElement("beforeend", this.form);
	}
	get filteredData() {
		return this.data.filter((user) =>
			`${user.name.first.toLowerCase()} ${user.name.last.toLowerCase()}`.includes(
				this.value
			)
		);
	}

	/**
	 * When values are inputted into the search bar, updates the gallery.
	 *
	 * @param {Object} e  Event object
	 */
	handleEvent = (e) => {
		e.preventDefault();
		this.value = this.form.querySelector("input").value.toLowerCase();
		const gallery = document.getElementById("gallery");
		while (gallery.hasChildNodes()) {
			gallery.firstChild.remove();
		}
		new Gallery(this.filteredData);
	};
}
