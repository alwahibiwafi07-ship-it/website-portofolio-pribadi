"use strict";
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
});
localStorage.removeItem('pesanPortofolio');
//# sourceMappingURL=script.js.map