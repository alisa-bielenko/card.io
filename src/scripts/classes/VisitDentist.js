import Visit from "./Visit.js";
import { noItemsBlock } from "../main.js";
import { getOneCard } from "../functions.js";
import { TOKEN } from "../main.js";

const cardsContainer = document.querySelector(".cards-place");

class VisitDentist extends Visit {
    constructor({ name, urgency, short_desc, date, id, doctor, purpose, status }) {
        super(name, urgency, short_desc, id, doctor, purpose, status);
        this.date = date;
        this.status = status;
    }
    render() {
        super.render();
        this.card.insertAdjacentHTML(
            "beforeend",
            `
            <div class="card card-body hidden">
            <p>Short description: ${this.short_desc}</p>
            <p>Purpose of visit: ${this.purpose}</p>
            <p class="period">Urgency: ${this.urgency}</p>
            <p>Date: ${this.date}</p>
            </div>
            `
        );

        // getOneCard(this.id, TOKEN).then((obj) => {
        //     // Отримуємо поточний статус
        //     const currentStatus = obj.status;
            
        //     // Оновлюємо статус на картці візуально
        //     const statusElement = cardsContainer.querySelector(".status");
        //     // if (statusElement) {
        //     //     // Змінюємо відображення статусу в залежності від поточного статусу
        //     //     statusElement.textContent = `Status: ${currentStatus}`;
        //     // }
        // });

        cardsContainer.append(this.card);
        noItemsBlock.style.display = "none";
    }
}

export default VisitDentist;