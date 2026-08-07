// Interface untuk struktur data formulir
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Menunggu hingga DOM siap
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm') as HTMLFormElement | null;

  if (!form) return;

  form.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault();

    // Mengambil elemen input dengan tipe yang spesifik
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const subjectInput = document.getElementById('subject') as HTMLInputElement;
    const messageInput = document.getElementById('message') as HTMLTextAreaElement;

    // Memasukkan data ke dalam objek ber-type
    const formData: ContactFormData = {
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