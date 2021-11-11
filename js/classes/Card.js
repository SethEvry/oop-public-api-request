class Card extends User {
	constructor(user, index) {
		//=================================================
		//=====            Properties                 =====
		//=================================================
		super(user);
		this.modal = null;
		this.index = index;
		//=================================================

		//=================================================
		//=====           Div initiation              =====
		//=================================================
		this.div = document.createElement("div");
		this.div.className = "card";
		this.div.id = `${this.first}-${this.last}`;
		this.div.insertAdjacentHTML("beforeend", this.html);
		//=================================================

		//=================================================
		//=====           Parent Appendation          =====
		//=================================================
		this.parent = document.getElementById("gallery");
		this.parent.appendChild(this.div);
		//=================================================

		//=================================================
		//=====            Event Listener             =====
		//=================================================
		this.div.addEventListener("click", () => this.createModal(user));
		//=================================================
	}
	get html() {
		return `        
                <div class="card-img-container">
                    <img class="card-img" src="${this.image}" alt="profile picture">
                </div>
                <div class="card-info-container">
                    <h3 class="card-name cap">${this.first} ${this.last}</h3>
                    <p class="card-text">${this.email}</p>
                    <p class="card-text cap">${this.city}, ${this.state}</p>
                </div>
        `;
	}

	createModal = (user) => {
		this.modal = new Modal(user, this.index);
	};
}
