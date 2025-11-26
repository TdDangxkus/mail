// Office passwords mapping
const officePasswords = {
  hcm: "Aws@2025",
  hp: "Aws@1990",
  hn: "Aws@2003",
  factory: "Aws@fsv2025",
};

// DOM elements
const loadingScreen = document.getElementById("loading-screen");
const mainContent = document.getElementById("main-content");
const passwordModal = document.getElementById("password-modal");
const modalUserName = document.getElementById("modal-user-name");
const modalOfficeSelect = document.getElementById("modal-office-select");
const modalPassword = document.getElementById("modal-password");
const modalMessage = document.getElementById("modal-message");

let currentStep = "";

// Hide loading screen after page loads
window.addEventListener("load", () => {
  // Update language button text
  updateLanguageButton();
  setTimeout(() => {
    loadingScreen.classList.add("hidden");
    mainContent.classList.remove("hidden");
  }, 1500);
});

// Toggle language function
function toggleLanguage() {
  currentLang = currentLang === 'vi' ? 'en' : 'vi';
  changeLanguage(currentLang);
  updateLanguageButton();
}

// Update language button text
function updateLanguageButton() {
  const langText = document.getElementById('lang-text');
  if (langText) {
    langText.textContent = currentLang === 'vi' ? 'EN' : 'VI';
  }
}

// Open password update modal
function updatePassword(step) {
  currentStep = step;
  passwordModal.classList.remove("hidden");
  modalUserName.value = "";
  modalOfficeSelect.value = "";
  modalPassword.value = "";
  modalMessage.classList.add("hidden");
  modalMessage.textContent = "";
}

// Close password modal
function closePasswordModal() {
  passwordModal.classList.add("hidden");
  currentStep = "";
}

// Close modal when clicking outside
window.addEventListener("click", (event) => {
  if (event.target === passwordModal) {
    closePasswordModal();
  }
});

// Save password
function savePassword() {
  const userName = modalUserName.value.trim();
  const office = modalOfficeSelect.value;
  const newPassword = modalPassword.value.trim();

  // Validation
  if (!userName) {
    showModalMessage(translations[currentLang]?.nameRequired || "Vui lòng nhập tên của bạn!", "error");
    return;
  }

  if (!office) {
    showModalMessage(translations[currentLang]?.officeRequired || "Vui lòng chọn văn phòng!", "error");
    return;
  }

  if (!newPassword) {
    showModalMessage(translations[currentLang]?.passwordRequired || "Vui lòng nhập mật khẩu mới!", "error");
    return;
  }

  // Get current password for the office
  const currentPassword = officePasswords[office];

  // Save to localStorage with step info
  const key = `password_update_${userName}_${office}_${currentStep}`;
  const updateData = {
    userName: userName,
    office: office,
    step: currentStep,
    oldPassword: currentPassword,
    newPassword: newPassword,
    timestamp: new Date().toISOString(),
  };

  localStorage.setItem(key, JSON.stringify(updateData));

  // Also save a list of all updates
  let allUpdates = JSON.parse(localStorage.getItem("all_password_updates") || "[]");
  allUpdates.push(updateData);
  localStorage.setItem("all_password_updates", JSON.stringify(allUpdates));

  const successMsg = (translations[currentLang]?.passwordUpdated || "Đã cập nhật mật khẩu cho") + 
                     ` ${userName} ` + 
                     (translations[currentLang]?.atStep || "ở bước") + 
                     ` ${currentStep}!`;
  showModalMessage(successMsg, "success");

  // Clear form after 2 seconds
  setTimeout(() => {
    modalUserName.value = "";
    modalOfficeSelect.value = "";
    modalPassword.value = "";
  }, 2000);
}

// Show modal message
function showModalMessage(message, type) {
  modalMessage.textContent = message;
  modalMessage.className = `modal-message ${type}`;
  modalMessage.classList.remove("hidden");

  if (type === "success") {
    setTimeout(() => {
      modalMessage.classList.add("hidden");
    }, 3000);
  }
}

// Handle Enter key in modal inputs
modalUserName.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    modalOfficeSelect.focus();
  }
});

modalOfficeSelect.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    modalPassword.focus();
  }
});

modalPassword.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    savePassword();
  }
});

