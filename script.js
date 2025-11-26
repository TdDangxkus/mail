// Danh sách tên người dùng trong hệ thống
const systemUsers = [
  // HP OFFICE
  "Vũ Thị Phương",
  "Bùi Thị Phương Dung",
  "Phạm Mai Hà Chung",
  "Vũ Bá Vinh",
  
  // HN OFFICE
  "Phạm Thị Thủy",
  "Nguyễn Thị Vui",
  "Vũ Khắc Quế",
  "Đỗ Thị Uyên",
  "Phạm Văn Đức",
  
  // HCM OFFICE
  "Nguyễn Thị Ngọc Ánh",
  "Trần Hữu Thanh",
  "Nguyễn Thị Hoa",
  "Ms Mei",
  "Phạm Nguyễn Quốc Trung",
  "Phạm Trọng Sơn",
  "Nguyễn Như Lễ",
  "Hồ Lê Mai Khôi",
  "Phạm Trần Thanh Vy",
  "Phạm Tú Trâm",
  "Đặng Vương Thái Đăng",
  "Elise",
  "Han Byul Jang",
  
  // Factory BD
  "Lê Thị Thu Thảo",
  "Huỳnh Thị Ánh Nguyệt",
  "Nguyễn Thị Diễm Quỳnh",
  "Lê Thanh Trúc",
  "Võ Thị Trúc Như",
  "Nguyễn Quang Minh",
  "Nguyễn Thị Thùy Dương",
  "Lương Thị Quỳnh Ngọc",
  "Nguyễn Thị Thoại My",
  "Nguyễn Ngọc Dung",
  "Nguyễn Kim Vàng",
  "Nguyễn Hồ Ngọc Nữ",
  "Nguyễn Tấn Dũng",
  "Nguyễn Bích Tâm",
  "Trần Thị Bích Huân",
  "Nguyễn Thị Thanh Truyền",
  "Hồ Thu Hiền",
  "Nguyễn Thu Cẩm",
  "Trần Thị Thu Hương",
  "Lý Thị Mỹ Xuyên",
  "Lee Kun Woo",
  "Ms Ha",
  "Nguyễn Thị Diễm Hà",
  "Lee cao",
  "Lee Chu",
  "Trần Minh Trung"
];

// Mapping users to offices (optional - for future use)
const userOfficeMapping = {
  // HP OFFICE
  "Vũ Thị Phương": "hp",
  "Bùi Thị Phương Dung": "hp",
  "Phạm Mai Hà Chung": "hp",
  "Vũ Bá Vinh": "hp",
  
  // HN OFFICE
  "Phạm Thị Thủy": "hn",
  "Nguyễn Thị Vui": "hn",
  "Vũ Khắc Quế": "hn",
  "Đỗ Thị Uyên": "hn",
  "Phạm Văn Đức": "hn",
  
  // HCM OFFICE
  "Nguyễn Thị Ngọc Ánh": "hcm",
  "Trần Hữu Thanh": "hcm",
  "Nguyễn Thị Hoa": "hcm",
  "Ms Mei": "hcm",
  "Phạm Nguyễn Quốc Trung": "hcm",
  "Phạm Trọng Sơn": "hcm",
  "Nguyễn Như Lễ": "hcm",
  "Hồ Lê Mai Khôi": "hcm",
  "Phạm Trần Thanh Vy": "hcm",
  "Phạm Tú Trâm": "hcm",
  "Đặng Vương Thái Đăng": "hcm",
  "Elise": "hcm",
  "Han Byul Jang": "hcm",
  
  // Factory BD
  "Lê Thị Thu Thảo": "factory",
  "Huỳnh Thị Ánh Nguyệt": "factory",
  "Nguyễn Thị Diễm Quỳnh": "factory",
  "Lê Thanh Trúc": "factory",
  "Võ Thị Trúc Như": "factory",
  
  // KTTT (thuộc Factory BD)
  "Nguyễn Quang Minh": "factory",
  "Nguyễn Thị Thùy Dương": "factory",
  "Lương Thị Quỳnh Ngọc": "factory",
  "Nguyễn Thị Thoại My": "factory",
  "Nguyễn Ngọc Dung": "factory",
  "Nguyễn Kim Vàng": "factory",
  "Nguyễn Hồ Ngọc Nữ": "factory",
  "Nguyễn Tấn Dũng": "factory",
  "Nguyễn Bích Tâm": "factory",
  "Trần Thị Bích Huân": "factory",
  "Nguyễn Thị Thanh Truyền": "factory",
  "Hồ Thu Hiền": "factory",
  "Nguyễn Thu Cẩm": "factory",
  "Trần Thị Thu Hương": "factory",
  "Lý Thị Mỹ Xuyên": "factory",
  "Lee Kun Woo": "factory",
  "Ms Ha": "factory",
  "Nguyễn Thị Diễm Hà": "factory",
  "Lee cao": "factory",
  "Lee Chu": "factory",
  "Trần Minh Trung": "factory"
};

// Office passwords mapping
const officePasswords = {
  hcm: "Aws@2025",
  hp: "Aws@1990",
  hn: "Aws@2003",
  factory: "Aws@fsv2025",
};

// Office names mapping
const officeNames = {
  hcm: "HCM OFFICE",
  hp: "HP OFFICE",
  hn: "HN OFFICE",
  factory: "Factory BD",
};

// DOM elements
const loadingScreen = document.getElementById("loading-screen");
const mainContent = document.getElementById("main-content");
const userNameInput = document.getElementById("user-name");
const userDropdown = document.getElementById("user-dropdown");
const officeSelect = document.getElementById("office-select");
const showPasswordBtn = document.getElementById("show-password-btn");
const passwordDisplay = document.getElementById("password-display");
const passwordValue = document.getElementById("password-value");
const copyBtn = document.getElementById("copy-btn");
const nameError = document.getElementById("name-error");
const userInfo = document.getElementById("user-info");
const selectedUserName = document.getElementById("selected-user-name");
const accessCount = document.getElementById("access-count");

let selectedUserNameValue = "";
let highlightedIndex = -1;
let filteredUsers = [];

// Filter users based on search input
function filterUsers(searchTerm) {
  if (!searchTerm.trim()) {
    return [];
  }
  const term = searchTerm.toLowerCase().trim();
  return systemUsers.filter((user) =>
    user.toLowerCase().includes(term)
  );
}

// Render dropdown with filtered users
function renderDropdown(users) {
  userDropdown.innerHTML = "";
  
  if (users.length === 0) {
    const emptyItem = document.createElement("div");
    emptyItem.className = "user-dropdown-empty";
    const emptyMsg = translations[currentLang]?.["no-name-found"] || translations[currentLang]?.noNameFound || "Không tìm thấy tên nào";
    emptyItem.textContent = emptyMsg;
    userDropdown.appendChild(emptyItem);
    userDropdown.classList.remove("hidden");
    return;
  }

  users.forEach((user, index) => {
    const item = document.createElement("div");
    item.className = "user-dropdown-item";
    if (index === highlightedIndex) {
      item.classList.add("highlight");
    }
    item.textContent = user;
    item.addEventListener("click", () => selectUser(user));
    userDropdown.appendChild(item);
  });

  userDropdown.classList.remove("hidden");
  highlightedIndex = -1;
}

// Select a user
function selectUser(userName) {
  selectedUserNameValue = userName;
  userNameInput.value = userName;
  userDropdown.classList.add("hidden");
  highlightedIndex = -1;
  
  // Tự động chọn văn phòng dựa trên mapping
  if (userOfficeMapping[userName]) {
    officeSelect.value = userOfficeMapping[userName];
  }
  
  updateButtonState();
}

// Handle keyboard navigation
function handleKeyNavigation(e) {
  if (!userDropdown.classList.contains("hidden") && filteredUsers.length > 0) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      highlightedIndex = Math.min(highlightedIndex + 1, filteredUsers.length - 1);
      updateDropdownHighlight();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      highlightedIndex = Math.max(highlightedIndex - 1, -1);
      updateDropdownHighlight();
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      e.preventDefault();
      selectUser(filteredUsers[highlightedIndex]);
    } else if (e.key === "Escape") {
      userDropdown.classList.add("hidden");
      highlightedIndex = -1;
    }
  }
}

// Update dropdown highlight
function updateDropdownHighlight() {
  const items = userDropdown.querySelectorAll(".user-dropdown-item");
  items.forEach((item, index) => {
    item.classList.remove("highlight");
    if (index === highlightedIndex) {
      item.classList.add("highlight");
      item.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  });
}

// Get access count from localStorage
function getAccessCount(userName) {
  const key = `access_count_${userName}`;
  const count = localStorage.getItem(key);
  return count ? parseInt(count, 10) : 0;
}

// Increment and save access count
function incrementAccessCount(userName) {
  const key = `access_count_${userName}`;
  const currentCount = getAccessCount(userName);
  const newCount = currentCount + 1;
  localStorage.setItem(key, newCount.toString());
  return newCount;
}

// Handle input search
userNameInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value;
  selectedUserNameValue = "";
  
  if (searchTerm.trim()) {
    filteredUsers = filterUsers(searchTerm);
    renderDropdown(filteredUsers);
  } else {
    userDropdown.classList.add("hidden");
    filteredUsers = [];
  }
  
  updateButtonState();
});

// Handle keyboard events
userNameInput.addEventListener("keydown", handleKeyNavigation);

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!userNameInput.contains(e.target) && !userDropdown.contains(e.target)) {
    userDropdown.classList.add("hidden");
  }
});

// Hide loading screen after page loads
window.addEventListener("load", () => {
  // Update language button text
  updateLanguageButton();
  setTimeout(() => {
    loadingScreen.classList.add("hidden");
    mainContent.classList.remove("hidden");
  }, 1500); // Show loading for 1.5 seconds
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

// Check if user name is in system
function isUserInSystem(userName) {
  return systemUsers.includes(userName);
}

// Enable/disable show password button
function updateButtonState() {
  const selectedName = selectedUserNameValue || userNameInput.value.trim();
  const selectedOffice = officeSelect.value;
  const isValidUser = selectedName && isUserInSystem(selectedName);
  
  // Kiểm tra văn phòng có đúng với người dùng không
  const isOfficeCorrect = !selectedName || !userOfficeMapping[selectedName] || 
                          userOfficeMapping[selectedName] === selectedOffice;

  if (selectedName && !isValidUser) {
    const errorMsg = translations[currentLang]?.["name-not-found"] || translations[currentLang]?.nameNotFound || "Tên không có trong hệ thống!";
    nameError.textContent = errorMsg;
    nameError.classList.remove("hidden");
    showPasswordBtn.disabled = true;
    userInfo.classList.add("hidden");
  } else if (selectedName && selectedOffice && !isOfficeCorrect) {
    // Hiển thị cảnh báo nếu văn phòng không đúng
    const errorMsg = translations[currentLang]?.["wrong-office-simple"] || "Vui lòng chọn đúng văn phòng!";
    nameError.textContent = errorMsg;
    nameError.classList.remove("hidden");
    showPasswordBtn.disabled = true;
    userInfo.classList.add("hidden");
  } else {
    nameError.classList.add("hidden");
    showPasswordBtn.disabled = !(isValidUser && selectedOffice && isOfficeCorrect);

    // Show user info if valid user selected
    if (isValidUser) {
      const count = getAccessCount(selectedName);
      selectedUserName.textContent = selectedName;
      accessCount.textContent = count;
      userInfo.classList.remove("hidden");
    } else {
      userInfo.classList.add("hidden");
    }
  }
}

officeSelect.addEventListener("change", updateButtonState);

// Show password when button is clicked
showPasswordBtn.addEventListener("click", () => {
  const selectedOffice = officeSelect.value;
  const userName = selectedUserNameValue || userNameInput.value.trim();

  // Kiểm tra lại văn phòng có đúng không
  const isOfficeCorrect = !userName || !userOfficeMapping[userName] || 
                          userOfficeMapping[userName] === selectedOffice;

  if (selectedOffice && userName && isUserInSystem(userName) && isOfficeCorrect) {
    // Increment access count
    const newCount = incrementAccessCount(userName);
    accessCount.textContent = newCount;

    const password = officePasswords[selectedOffice];
    const officeName = officeNames[selectedOffice];

    passwordValue.textContent = password;
    passwordDisplay.classList.remove("hidden");
  } else if (userName && userOfficeMapping[userName] && userOfficeMapping[userName] !== selectedOffice) {
    // Hiển thị cảnh báo nếu văn phòng sai
    alert(translations[currentLang]?.["wrong-office-alert"] || 
          "Vui lòng chọn đúng văn phòng!");
  }
});

// Copy password to clipboard
copyBtn.addEventListener("click", () => {
  const password = passwordValue.textContent;

  // Use modern clipboard API
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        // Show feedback
        const originalText = copyBtn.textContent;
        const copiedMsg = translations[currentLang]?.["copied"] || translations[currentLang]?.copied || "Đã sao chép!";
        copyBtn.textContent = copiedMsg;
        copyBtn.style.background = "#4caf50";

        setTimeout(() => {
          copyBtn.textContent = originalText;
          copyBtn.style.background = "#667eea";
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
        const failedMsg = translations[currentLang]?.["copy-failed"] || translations[currentLang]?.copyFailed || "Không thể sao chép. Vui lòng sao chép thủ công.";
        alert(failedMsg);
      });
  } else {
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = password;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand("copy");
      const originalText = copyBtn.textContent;
      const copiedMsg = translations[currentLang]?.["copied"] || translations[currentLang]?.copied || "Đã sao chép!";
      copyBtn.textContent = copiedMsg;
      copyBtn.style.background = "#4caf50";

      setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.style.background = "#667eea";
      }, 2000);
    } catch (err) {
      const failedMsg = translations[currentLang]?.["copy-failed"] || translations[currentLang]?.copyFailed || "Không thể sao chép. Vui lòng sao chép thủ công.";
      alert(failedMsg);
    }

    document.body.removeChild(textArea);
  }
});
