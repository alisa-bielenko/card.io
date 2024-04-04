export const cardsContainer = document.querySelector(".cards-place");

class Modal {
  constructor(userEmail, userPassword) {
    this.email = userEmail;
    this.password = userPassword;
  }

  async getToken() {
    let response = await fetch(
      "https://ajax.test-danit.com/api/v2/cards/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: this.email, password: this.password }),
      }
    );
    let result = await response.text();
    return result;
  }
}

export default Modal;