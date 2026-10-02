document.getElementById('whatsappForm')!.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const noHP = (document.getElementById('noHP') as HTMLInputElement).value;
    const subject = (document.getElementById('subject') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;
    const phoneNumber: string = "6285194708015";

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

    const text: string = `Halo, saya mendapat pesan baru dari website:\n\n*Nama:* ${name}\n*Nomor HP:* ${noHP}\n*Subjek:* ${subject}\n*Pesan:* ${message}`;
    const encodedText: string = encodeURIComponent(text);
    const whatsappURL: string = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;

    window.open(whatsappURL, '_blank');

    (e.target as HTMLFormElement).reset()
});
localStorage.removeItem('pesanPortofolio')