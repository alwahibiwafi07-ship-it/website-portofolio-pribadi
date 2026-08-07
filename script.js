"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Menunggu hingga DOM siap
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (!form)
        return;
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Mengambil elemen input dengan tipe yang spesifik
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        // Memasukkan data ke dalam objek ber-type
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            subject: subjectInput.value.trim(),
            message: messageInput.value.trim()
        };
        // Simulasi pengiriman data
        console.log('Data yang dikirim:', formData);
        alert(`Terima kasih, ${formData.name}! Pesan Anda telah terkirim.`);
        // Reset formulir setelah submit
        form.reset();
    });
});
//# sourceMappingURL=script.js.map