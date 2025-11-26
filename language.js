// Language translations
const translations = {
  vi: {
    // Index page
    "page-title": "AWS Workmail Configuration",
    "guide-link": "📖 Xem hướng dẫn sử dụng",
    "search-name-label": "Tìm kiếm tên của bạn:",
    "search-name-placeholder": "Gõ để tìm kiếm tên...",
    "office-select-label": "Chọn nơi làm việc:",
    "select-office": "-- Chọn văn phòng --",
    "show-password-btn": "Hiển thị mật khẩu",
    "hello": "Xin chào,",
    "access-count": "Số lần đã mở:",
    "office-password": "Mật khẩu chung của văn phòng:",
    "copy-btn": "Sao chép",
    "copied": "Đã sao chép!",
    "name-not-found": "Tên không có trong hệ thống!",
    "no-name-found": "Không tìm thấy tên nào",
    "wrong-office": "Vui lòng chọn đúng văn phòng:",
    "wrong-office-simple": "Vui lòng chọn đúng văn phòng!",
    "wrong-office-alert": "Vui lòng chọn đúng văn phòng!",
    
    // Guide page
    "guide-title": "Hướng Dẫn Sử Dụng Hệ Thống Email AWS (Mới)",
    "back-link": "← Quay lại trang chính",
    "login-guide-title": "Hướng dẫn đăng nhập",
    "login-guide-text": "Vui lòng truy cập đường link sau và đăng nhập bằng thông tin được cấp:",
    "username-label": "Username:",
    "username-text": "chỉ nhập phần tên (không bao gồm \"@fourseasonsbutton.com\").",
    "example": "Ví dụ:",
    "password-label": "Password:",
    "password-text": "sử dụng mật khẩu đã được cung cấp riêng.",
    "important-notes-title": "Lưu ý quan trọng khi sử dụng hệ thống mới",
    "note1": "Chỉ xem và kiểm tra email sau khi hoàn tất backup dữ liệu (bao gồm thao tác gửi thử nội bộ).",
    "note2": "Tuyệt đối không public hoặc chia sẻ bất kỳ địa chỉ IP nội bộ dưới mọi hình thức.",
    "note3": "Việc gửi email ra bên ngoài sẽ được phép sau khi có thông báo chính thức từ Bộ phận IT, khi hệ thống đã chuyển đổi hoàn tất và hoạt động ổn định.",
    "outlook-setup-title": "Hướng dẫn Setup Outlook sau khi chuyển đổi",
    "outlook-intro": "Sau khi Bộ phận IT thông báo tài khoản của bạn đã chuyển đổi sang hệ thống email mới, vui lòng phối hợp để hoàn tất việc cài đặt Outlook theo hướng dẫn sau:",
    "step": "Bước",
    "step1-title": "Đăng nhập",
    "step1-login-desc1": "Truy cập vào đường link AWS WorkMail và đăng nhập bằng thông tin được cấp.",
    "step1-login-desc2": "Nhập Username (chỉ phần tên, không bao gồm @fourseasonsbutton.com) và Password.",
    "step2-title": "Trang chủ",
    "step2-homepage-desc1": "Sau khi đăng nhập thành công, bạn sẽ thấy trang chủ của AWS WorkMail.",
    "step2-homepage-desc2": "Tại đây bạn có thể xem email, soạn thư mới và quản lý các thư mục.",
    "step3-title": "Cài đặt",
    "step3-settings-desc1": "Truy cập vào mục Cài đặt (Settings) để cấu hình tài khoản.",
    "step3-settings-desc2": "Tại đây bạn có thể thay đổi các thiết lập email, chữ ký, và các tùy chọn khác.",
    "step4-title": "Đổi mật khẩu",
    "step4-password-desc1": "Trong mục Cài đặt, chọn \"Đổi mật khẩu\" hoặc \"Change Password\".",
    "step4-password-desc2": "Nhập mật khẩu hiện tại và mật khẩu mới, sau đó xác nhận.",
    "step4-password-desc3": "Lưu ý: Mật khẩu mới phải đáp ứng các yêu cầu bảo mật của hệ thống.",
    "outlook-config-title": "Cấu hình Outlook",
    "outlook-config-intro": "Sau khi đã đăng nhập thành công vào AWS WorkMail, bạn cần cấu hình Outlook để có thể sử dụng email trên máy tính. Thực hiện theo các bước sau:",
    "outlook-config-update": "📝 Đang cập nhật...",
    "outlook-step1-title": "Mở Account Settings trong Outlook",
    "outlook-step1-desc1": "Mở Microsoft Outlook trên máy tính của bạn.",
    "outlook-step1-desc2": "Chọn",
    "outlook-step1-desc3": "trên thanh menu.",
    "outlook-step1-desc4": "Chọn",
    "outlook-step2-title": "Thêm tài khoản email mới",
    "outlook-step2-desc1": "Trong cửa sổ Account Settings, nhấn nút",
    "outlook-step2-desc2": "để thêm tài khoản email mới.",
    "outlook-step2-desc3": "Chọn",
    "outlook-step2-desc4": "và nhấn Next.",
    "outlook-step3-title": "Điền thông tin tài khoản",
    "outlook-step3-desc1": "Điền đầy đủ thông tin sau:",
    "outlook-step3-email": "Email:",
    "outlook-step3-email-desc": "địa chỉ email đầy đủ của bạn (ví dụ: yourname@fourseasonsbutton.com)",
    "outlook-step3-password": "Password:",
    "outlook-step3-password-desc": "mật khẩu đã được IT cung cấp",
    "outlook-step3-desc2": "Nhấn",
    "outlook-step3-desc3": "để Outlook tự động cấu hình.",
    "outlook-step4-title": "Hoàn tất và kiểm tra",
    "outlook-step4-desc1": "Outlook sẽ tự động cấu hình và kết nối với AWS WorkMail.",
    "outlook-step4-desc2": "Sau khi hoàn tất, kiểm tra:",
    "outlook-step4-check1": "Đồng bộ thư mục (Inbox, Sent Items, etc.)",
    "outlook-step4-check2": "Khả năng nhận email",
    "outlook-step4-check3": "Khả năng gửi email",
    "outlook-step5-title": "Xóa tài khoản email cũ (Zimbra)",
    "outlook-step5-desc1": "Sau khi email AWS đã hoạt động ổn định, vui lòng:",
    "outlook-step5-desc2": "Mở",
    "outlook-step5-desc3": "Chọn tài khoản email cũ của Zimbra và nhấn",
    "outlook-step5-desc4": "để xóa.",
    "outlook-step5-warning": "⚠️ Lưu ý: Chỉ xóa tài khoản cũ sau khi đã xác nhận email AWS hoạt động bình thường.",
    "support-title": "Hỗ trợ",
    "support-text": "Trong quá trình này, IT sẽ trực tiếp hỗ trợ nếu cần thiết để đảm bảo tất cả hoạt động ổn định.",
    "update-password-title": "Cập nhật mật khẩu",
    "modal-name-label": "Tên của bạn:",
    "modal-name-placeholder": "Nhập tên của bạn",
    "modal-office-label": "Văn phòng:",
    "modal-select-office": "-- Chọn văn phòng --",
    "modal-password-label": "Mật khẩu mới:",
    "modal-password-placeholder": "Nhập mật khẩu mới",
    "save-password-btn": "Lưu mật khẩu",
    "password-updated": "Đã cập nhật mật khẩu cho",
    "at-step": "ở bước",
    "name-required": "Vui lòng nhập tên của bạn!",
    "office-required": "Vui lòng chọn văn phòng!",
    "password-required": "Vui lòng nhập mật khẩu mới!",
    "copy-failed": "Không thể sao chép. Vui lòng sao chép thủ công.",
    "welcome-yes": "Có, cảm ơn!",
    "welcome-no": "Không, cảm ơn"
  },
  en: {
    // Index page
    "page-title": "AWS Workmail Configuration",
    "guide-link": "📖 View User Guide",
    "search-name-label": "Search your name:",
    "search-name-placeholder": "Type to search name...",
    "office-select-label": "Select workplace:",
    "select-office": "-- Select office --",
    "show-password-btn": "Show Password",
    "hello": "Hello,",
    "access-count": "Access count:",
    "office-password": "Office shared password:",
    "copy-btn": "Copy",
    "copied": "Copied!",
    "name-not-found": "Name not found in system!",
    "no-name-found": "No names found",
    "wrong-office": "Please select the correct office:",
    "wrong-office-simple": "Please select the correct office!",
    "wrong-office-alert": "Please select the correct office!",
    
    // Guide page
    "guide-title": "AWS Email System User Guide (New)",
    "back-link": "← Back to main page",
    "login-guide-title": "Login Instructions",
    "login-guide-text": "Please access the following link and login with the provided credentials:",
    "username-label": "Username:",
    "username-text": "enter only the name part (excluding \"@fourseasonsbutton.com\").",
    "example": "Example:",
    "password-label": "Password:",
    "password-text": "use the password that was provided separately.",
    "important-notes-title": "Important notes when using the new system",
    "note1": "Only view and check email after completing data backup (including internal test sending).",
    "note2": "Absolutely do not publicize or share any internal IP addresses in any form.",
    "note3": "Sending emails outside will be allowed after official notification from the IT Department, when the system has completed migration and is operating stably.",
    "outlook-setup-title": "Outlook Setup Guide After Migration",
    "outlook-intro": "After the IT Department notifies that your account has been migrated to the new email system, please coordinate to complete Outlook installation as follows:",
    "step": "Step",
    "step1-title": "Login",
    "step1-login-desc1": "Access the AWS WorkMail link and login with the provided credentials.",
    "step1-login-desc2": "Enter Username (name part only, excluding @fourseasonsbutton.com) and Password.",
    "step2-title": "Homepage",
    "step2-homepage-desc1": "After successful login, you will see the AWS WorkMail homepage.",
    "step2-homepage-desc2": "Here you can view emails, compose new messages and manage folders.",
    "step3-title": "Settings",
    "step3-settings-desc1": "Access the Settings section to configure your account.",
    "step3-settings-desc2": "Here you can change email settings, signatures, and other options.",
    "step4-title": "Change Password",
    "step4-password-desc1": "In the Settings section, select \"Change Password\" or \"Đổi mật khẩu\".",
    "step4-password-desc2": "Enter current password and new password, then confirm.",
    "step4-password-desc3": "Note: The new password must meet the system's security requirements.",
    "outlook-config-title": "Outlook Configuration",
    "outlook-config-intro": "After successfully logging into AWS WorkMail, you need to configure Outlook to use email on your computer. Follow these steps:",
    "outlook-config-update": "📝 Updating...",
    "outlook-step1-title": "Open Account Settings in Outlook",
    "outlook-step1-desc1": "Open Microsoft Outlook on your computer.",
    "outlook-step1-desc2": "Select",
    "outlook-step1-desc3": "on the menu bar.",
    "outlook-step1-desc4": "Select",
    "outlook-step2-title": "Add new email account",
    "outlook-step2-desc1": "In the Account Settings window, click the",
    "outlook-step2-desc2": "button to add a new email account.",
    "outlook-step2-desc3": "Select",
    "outlook-step2-desc4": "and click Next.",
    "outlook-step3-title": "Enter account information",
    "outlook-step3-desc1": "Fill in the following information:",
    "outlook-step3-email": "Email:",
    "outlook-step3-email-desc": "your full email address (e.g., yourname@fourseasonsbutton.com)",
    "outlook-step3-password": "Password:",
    "outlook-step3-password-desc": "password provided by IT",
    "outlook-step3-desc2": "Click",
    "outlook-step3-desc3": "for Outlook to automatically configure.",
    "outlook-step4-title": "Complete and verify",
    "outlook-step4-desc1": "Outlook will automatically configure and connect to AWS WorkMail.",
    "outlook-step4-desc2": "After completion, verify:",
    "outlook-step4-check1": "Folder sync (Inbox, Sent Items, etc.)",
    "outlook-step4-check2": "Email receiving capability",
    "outlook-step4-check3": "Email sending capability",
    "outlook-step5-title": "Delete old email account (Zimbra)",
    "outlook-step5-desc1": "After AWS email is operating stably, please:",
    "outlook-step5-desc2": "Open",
    "outlook-step5-desc3": "Select the old Zimbra email account and click",
    "outlook-step5-desc4": "to remove.",
    "outlook-step5-warning": "⚠️ Note: Only delete the old account after confirming AWS email is working normally.",
    "support-title": "Support",
    "support-text": "During this process, IT will provide direct support if necessary to ensure all operations are stable.",
    "update-password-title": "Update Password",
    "modal-name-label": "Your name:",
    "modal-name-placeholder": "Enter your name",
    "modal-office-label": "Office:",
    "modal-select-office": "-- Select office --",
    "modal-password-label": "New password:",
    "modal-password-placeholder": "Enter new password",
    "save-password-btn": "Save Password",
    "password-updated": "Password updated for",
    "at-step": "at step",
    "name-required": "Please enter your name!",
    "office-required": "Please select office!",
    "password-required": "Please enter new password!",
    "copy-failed": "Unable to copy. Please copy manually.",
    "welcome-yes": "Yes, thanks!",
    "welcome-no": "No, thanks"
  }
};

// Get current language from localStorage or default to Vietnamese
let currentLang = localStorage.getItem('language') || 'vi';

// Function to change language
function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  updatePageLanguage();
}

// Function to update all text on page
function updatePageLanguage() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'search')) {
        element.placeholder = translations[currentLang][key];
      } else if (element.tagName === 'INPUT' && element.type === 'password') {
        element.placeholder = translations[currentLang][key];
      } else if (element.tagName === 'OPTION') {
        element.textContent = translations[currentLang][key];
      } else if (element.tagName === 'A') {
        // For links, update text but keep href
        const text = element.textContent;
        if (text.includes('📖')) {
          element.textContent = '📖 ' + translations[currentLang][key];
        } else if (text.includes('←')) {
          element.textContent = '← ' + translations[currentLang][key].replace('← ', '');
        } else {
          element.textContent = translations[currentLang][key];
        }
      } else {
        element.textContent = translations[currentLang][key];
      }
    }
  });
  
  // Update HTML lang attribute
  document.documentElement.lang = currentLang;
  
  // Update page title
  const titleElement = document.querySelector('title');
  if (titleElement) {
    const titleKey = document.querySelector('h1[data-i18n]')?.getAttribute('data-i18n') || 
                     (document.querySelector('.guide-section') ? 'guide-title' : 'page-title');
    if (translations[currentLang] && translations[currentLang][titleKey]) {
      titleElement.textContent = translations[currentLang][titleKey];
    }
  }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  updatePageLanguage();
});

