// Тема (светлая/тёмная)
const themeCheckbox = document.getElementById("themeCheckbox");
const body = document.body;

if (themeCheckbox) {
    // по умолчанию – тёмная
    themeCheckbox.checked = false;

    themeCheckbox.addEventListener("change", () => {
        if (themeCheckbox.checked) {
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");
        } else {
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
        }
    });
}

// Плавный скролл по меню
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Кнопка "Boka pass" – скролл к контактам
const bookBtn = document.getElementById("bookBtn");
const contactSection = document.getElementById("contact");
if (bookBtn && contactSection) {
    bookBtn.addEventListener("click", () => {
        contactSection.scrollIntoView({ behavior: "smooth" });
    });
}

// Отправка формы на e-mail через mailto
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        const subject = encodeURIComponent("Bokningsförfrågan från webbplatsen");
        const bodyText = encodeURIComponent(
            `Namn: ${name}\nE-post: ${email}\n\nMeddelande:\n${message}`
        );

        window.location.href = `mailto:moriahek@gmail.com?subject=${subject}&body=${bodyText}`;
    });
}

// Форма "Ring upp mig" – тоже на почту
const callbackForm = document.getElementById("callbackForm");
if (callbackForm) {
    callbackForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(callbackForm);
        const name = formData.get("name");
        const phone = formData.get("phone");
        const time = formData.get("time");

        const subject = encodeURIComponent("Önskar återuppringning");
        const bodyText = encodeURIComponent(
            `Namn: ${name}\nTelefon: ${phone}\nTid som passar: ${time}`
        );

        window.location.href = `mailto:moriahek@gmail.com?subject=${subject}&body=${bodyText}`;
    });
}

// Галерея – добавление фото (в памяти браузера)
const galleryUpload = document.getElementById("galleryUpload");
const galleryGrid = document.getElementById("galleryGrid");

if (galleryUpload && galleryGrid) {
    galleryUpload.addEventListener("change", () => {
        const files = Array.from(galleryUpload.files);
        files.forEach(file => {
            if (!file.type.startsWith("image/")) return;
            const img = document.createElement("img");
            img.className = "gallery-img";
            img.alt = file.name;
            img.src = URL.createObjectURL(file);
            galleryGrid.prepend(img);
        });
    });
}
