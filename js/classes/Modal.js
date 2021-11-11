class Modal extends User {
	constructor(user, index) {
		//=================================================
		//=====            Properties                 =====
		//=================================================
		super(user, index);
		//=================================================

		//=================================================
		//=====           Div initiation              =====
		//=================================================
		this.div = document.createElement("div");
		this.div.className = "modal-container";
		this.div.insertAdjacentHTML("beforeend", this.html);
		//=================================================

		//=================================================
		//=====           Parent Appendation          =====
		//=================================================
		this.parent = document.getElementById("gallery");
		this.parent.insertAdjacentElement("beforebegin", this.div);
		this.parentLength = this.parent.children.length;
		//=================================================

		//=================================================
		//=====            Event Listener             =====
		//=================================================
		this.btn.addEventListener("click", this.removeModal);
		this.prev.addEventListener("click", this.prevModal);
		this.next.addEventListener("click", this.nextModal);
		//=================================================

		this.buttonCheck(this.index, this.parentLength);
	}
	/**
	 * uses RegEx to format a phone number
	 */
	get phoneNumber() {
		let phone = this.phone.split(/[\s./)(\-]+/g).join("");
		const phoneRegex = /^(\d{3})(\d{3})(\d{4})$/;
		phone = phone.match(phoneRegex);
		return `(${phone[1]}) ${phone[2]}-${phone[3]}`;
	}
	/**
	 * formats the birth date
	 */
	get birthdayDate() {
		const date = this.birthday.slice(0, 10);
		const splitDate = date.split("-");
		return `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}`;
	}

	get btn() {
		return document.getElementById("modal-close-btn");
	}
	get next() {
		return document.getElementById("modal-next");
	}

	get prev() {
		return document.getElementById("modal-prev");
	}
	get html() {
		return `
            
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="${this.image}" alt="profile picture">
                        <h3 id="name" class="modal-name cap">${this.first} ${this.last}</h3>
                        <p class="modal-text">${this.email}</p>
                        <p class="modal-text cap">${this.city}</p>
                        <hr>
                        <p class="modal-text">${this.phoneNumber}</p>
                        <p class="modal-text">${this.street}, ${this.city}, ${this.city} ${this.postcode}</p>
                        <p class="modal-text">Birthday: ${this.birthdayDate}</p>
                    </div>
                </div>
                
                <div class="modal-btn-container">
                    <div><button type="button" id="modal-prev" class="modal-prev btn">Prev</button></div>
                    <div><button type="button" id="modal-next" class="modal-next btn">Next</button></div>
                </div>
            
        `;
	}

	removeModal = () => {
		document.querySelector(".modal-container").remove();
	};
	/**
	 * Clears the current modal then emulates a click to create the next modal.
	 */
	prevModal = () => {
		if (this.index > 0) {
			this.removeModal();
			this.parent.children[this.index - 1].click();
		}
	};

	nextModal = () => {
		if (this.index < this.parentLength - 1) {
			this.removeModal();
			this.parent.children[this.index + 1].click();
		}
	};

	/**
	 *  Removes the prev/next buttons if there is only 1 option, otherwise disables the
	 * proper button on either end of the list
	 *
	 * @param {Number} index  Current index of the card in the list of cards
	 * @param {Number} length  Number of cards in the list
	 */

	buttonCheck = (index, length) => {
		if (length <= 1) {
			this.div.lastElementChild.remove();
		} else if (index == 0) {
			this.prev.classList.add("disabled");
			this.prev.parentNode.classList.add("not-allowed");
		} else if (index == length - 1) {
			this.next.classList.add("disabled");
			this.next.parentNode.classList.add("not-allowed");
		}
	};
}
