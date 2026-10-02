"use strict";
const DRAFT_KEY = 'draftPortofolio';
document.getElementById('whatsappForm').addEventListener('input', () => {
    const draft = {
        name: document.getElementById('name').value,
        noHP: document.getElementById('noHP').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
});
// Isi form dari draft saat halaman dibuka
window.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem(DRAFT_KEY);
    if (saved) {
        const draft = JSON.parse(saved);
        document.getElementById('name').value = draft.name || '';
        document.getElementById('noHP').value = draft.noHP || '';
        document.getElementById('subject').value = draft.subject || '';
        document.getElementById('message').value = draft.message || '';
    }
});
document.getElementById('whatsappForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const noHP = document.getElementById('noHP').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const phoneNumber = "6285194708015";
    const newMessage = {
        name: name,
        noHP: noHP,
        subject: subject,
        message: message,
        timestamp: new Date().toLocaleString()
    };
    const existingMessages = JSON.parse(localStorage.getItem('pesanPortofolio') || '[]');
    existingMessages.push(newMessage);
    localStorage.setItem('pesanPortofolio', JSON.stringify(existingMessages));
    const text = `Halo, saya mendapat pesan baru dari website:\n\n*Nama:* ${name}\n*Nomor HP:* ${noHP}\n*Subjek:* ${subject}\n*Pesan:* ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;
    window.open(whatsappURL, '_blank');
    e.target.reset();
    localStorage.removeItem(DRAFT_KEY);
});
//# sourceMappingURL=script.js.map