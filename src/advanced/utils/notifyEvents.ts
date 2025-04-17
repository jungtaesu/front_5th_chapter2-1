export function notifyEvent(message) {
    alert(message || "Event occurred!");
}

export function notifyDiscount(discount) {
    alert(discount ? `Discount applied: ${discount}%` : "No discount available.");
}