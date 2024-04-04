export default function dragAndDrop() {
    const dragItems = document.querySelector(".cards-place");
    dragItems.addEventListener("dragstart", (e) => {
        e.target.classList.add("opacity-75");
    });

    dragItems.addEventListener("dragend", (e) => {
        e.target.classList.remove("opacity-75");
    });

    dragItems.addEventListener("dragover", (e) => {
        e.preventDefault();
        const activeElement = dragItems.querySelector(".opacity-75");
        const currentElement = e.target.closest(".visiting-card");
        
        if (activeElement !== currentElement && currentElement) {
            
            const nextElement = () => {
                if (currentElement === activeElement.nextElementSibling) {
                    return currentElement.nextElementSibling;
                } else {
                    return currentElement;
                }
            };
            dragItems.insertBefore(activeElement, nextElement());
        }
    });
}