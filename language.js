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
    "step1-title": "Cấu hình tài khoản email AWS trên Outlook",
    "step1-desc1": "Mở Outlook và chọn",
    "step1-desc2": "Nhấn",
    "step1-desc3": "để thêm email mới (AWS WorkMail).",
    "step2-title": "Điền thông tin email",
    "step2-desc": "Điền đầy đủ thông tin email được IT cung cấp và nhấn",
    "step2-desc2": "để Outlook tự động cấu hình.",
    "step3-title": "Đồng bộ và kiểm tra",
    "step3-desc1": "Đồng bộ thư mục và kiểm tra khả năng nhận/gửi email.",
    "step3-desc2": "Thiết lập lưu trữ, chữ ký và các tùy chọn theo nhu cầu của từng bộ phận.",
    "step4-title": "Xóa tài khoản cũ và hoàn tất",
    "step4-desc1": "Sau khi email AWS đã hoạt động ổn định, vui lòng xóa tài khoản email cũ của Zimbra trong mục",
    "step4-desc2": "để tránh xung đột và lỗi hệ thống.",
    "step4-desc3": "Kiểm tra vận hành thực tế để đảm bảo Outlook hoạt động ổn định.",
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
    "welcome-no": "Không, cảm ơn",
    "outlook-config-title": "Cấu hình Outlook",
    "outlook-config-intro": "Sau khi đã đăng nhập thành công vào AWS WorkMail, bạn cần cấu hình Outlook để có thể sử dụng email trên máy tính. Thực hiện theo các bước sau:",
    "outlook-b1-title": "Mở Outlook và chọn File",
    "outlook-b1-desc1": "Mở Microsoft Outlook trên máy tính của bạn.",
    "outlook-b1-desc2": "Ở góc trái trên cùng, nhấp chuột vào tab File trên thanh menu.",
    "outlook-b2-title": "Truy cập Account Settings",
    "outlook-b2-desc1": "Trong menu File, tìm và chọn Account Settings.",
    "outlook-b2-desc2": "Sau đó chọn tiếp Account Settings từ menu con hiển thị.",
    "outlook-b3-title": "Kiểm tra email đã tồn tại",
    "outlook-b3-desc1": "Trong cửa sổ Account Settings, kiểm tra xem email AWS WorkMail đã được cấu hình chưa.",
    "outlook-b3-case1": "Trường hợp 1:",
    "outlook-b3-case1-desc": "Nếu email đã tồn tại trong danh sách, vui lòng thực hiện từ Bước 4 để xóa và tạo lại profile.",
    "outlook-b3-case2": "Trường hợp 2:",
    "outlook-b3-case2-desc": "Nếu email chưa có, bạn có thể bỏ qua các bước 4-9 và bắt đầu từ Bước 10 để cấu hình email mới.",
    "outlook-b4-title": "Mở Control Panel",
    "outlook-b4-desc1": "Nếu email đã tồn tại, bạn cần xóa profile cũ trước.",
    "outlook-b4-desc2": "Mở Control Panel trên máy tính Windows của bạn.",
    "outlook-b4-desc3": "Bạn có thể tìm Control Panel bằng cách nhấn phím Windows và gõ \"Control Panel\".",
    "outlook-b5-title": "Truy cập User Accounts",
    "outlook-b5-desc1": "Trong Control Panel, tìm và nhấp vào mục User Accounts.",
    "outlook-b5-desc2": "Nếu không thấy, bạn có thể thay đổi chế độ xem sang \"Large icons\" hoặc \"Small icons\" để dễ tìm hơn.",
    "outlook-b6-title": "Mở Mail (Microsoft Outlook)",
    "outlook-b6-desc1": "Trong User Accounts, tìm và nhấp vào Mail (Microsoft Outlook).",
    "outlook-b6-desc2": "Lưu ý: Tùy thuộc vào phiên bản Outlook bạn đang sử dụng, có thể hiển thị là 32-bit hoặc 64-bit.",
    "outlook-b7-title": "Chọn Show Profiles",
    "outlook-b7-desc1": "Trong cửa sổ Mail Setup, nhấp vào nút Show Profiles.",
    "outlook-b7-desc2": "Đây là nơi bạn có thể quản lý tất cả các profile email đã được cấu hình trên máy tính.",
    "outlook-b8-title": "Xóa Profile cũ",
    "outlook-b8-desc1": "Chọn profile email cũ mà bạn muốn xóa (thường là profile của email Zimbra hoặc email cũ).",
    "outlook-b8-desc2": "Nhấp vào nút Remove hoặc Delete để xóa profile đó.",
    "outlook-b8-warning": "⚠️ Lưu ý: Hãy đảm bảo bạn đã backup dữ liệu quan trọng trước khi xóa profile.",
    "outlook-b9-title": "Tạo Profile mới",
    "outlook-b9-desc1": "Sau khi xóa profile cũ, quay lại Outlook và tạo profile mới.",
    "outlook-b9-desc2": "Bạn sẽ cần cấu hình lại email từ đầu với thông tin AWS WorkMail mới.",
    "outlook-b10-title": "Đăng nhập email mới",
    "outlook-b10-desc1": "Trong Outlook, bắt đầu quá trình thêm tài khoản email mới.",
    "outlook-b10-desc2": "Nhập đầy đủ địa chỉ email của bạn, ví dụ: Dalziel@fourseasonsbutton.com",
    "outlook-b10-desc3": "Nhập mật khẩu đã được IT cung cấp.",
    "outlook-b10-note": "Lưu ý quan trọng:",
    "outlook-b10-note-desc": "Hãy đảm bảo tích vào ô Advanced options để có thể cấu hình thêm các tùy chọn cần thiết.",
    "outlook-b11-title": "Chọn Outlook.com",
    "outlook-b11-desc1": "Trong phần Advanced options, chọn loại tài khoản là Outlook.com.",
    "outlook-b11-desc2": "Đây là cấu hình phù hợp cho AWS WorkMail để Outlook có thể kết nối đúng cách.",
    "outlook-b12-title": "Chờ quá trình cấu hình",
    "outlook-b12-desc1": "Sau khi nhấn Next, Outlook sẽ bắt đầu quá trình cấu hình và kết nối với AWS WorkMail.",
    "outlook-b12-desc2": "Vui lòng chờ trong khi hệ thống đang xử lý. Quá trình này có thể mất vài phút.",
    "outlook-b12-desc3": "Sau khi hoàn tất, bạn sẽ thấy màn hình tiếp theo.",
    "outlook-b13-title": "Chấp nhận quyền truy cập",
    "outlook-b13-desc1": "Hệ thống sẽ yêu cầu bạn cấp quyền truy cập cho Outlook.",
    "outlook-b13-desc2": "Nhấp vào nút Allow hoặc Cho phép để chấp nhận và tiếp tục.",
    "outlook-b13-desc3": "Điều này cho phép Outlook đồng bộ email từ AWS WorkMail về máy tính của bạn.",
    "outlook-b14-title": "Tiếp tục với Next",
    "outlook-b14-desc1": "Sau khi chấp nhận quyền truy cập, nhấp vào nút Next để tiếp tục quá trình cấu hình.",
    "outlook-b14-desc2": "Outlook sẽ hoàn tất việc thiết lập kết nối với tài khoản email của bạn.",
    "outlook-b15-title": "Hoàn tất cấu hình",
    "outlook-b15-desc1": "Nhấp vào nút Done để hoàn tất quá trình cấu hình.",
    "outlook-b15-desc2": "Outlook sẽ bắt đầu đồng bộ tất cả email từ webmail về máy tính của bạn.",
    "outlook-b15-desc3": "Quá trình này có thể mất một chút thời gian tùy thuộc vào số lượng email của bạn.",
    "outlook-b15-note": "Hoàn tất:",
    "outlook-b15-note-desc": "Sau khi đồng bộ xong, bạn có thể sử dụng Outlook để gửi và nhận email như bình thường. Tất cả email từ AWS WorkMail sẽ được hiển thị trong Outlook."
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
    "step1-title": "Configure AWS email account on Outlook",
    "step1-desc1": "Open Outlook and select",
    "step1-desc2": "Click",
    "step1-desc3": "to add new email (AWS WorkMail).",
    "step2-title": "Enter email information",
    "step2-desc": "Fill in all email information provided by IT and click",
    "step2-desc2": "for Outlook to automatically configure.",
    "step3-title": "Sync and verify",
    "step3-desc1": "Sync folders and check email receive/send capability.",
    "step3-desc2": "Set up storage, signatures and options according to each department's needs.",
    "step4-title": "Delete old account and complete",
    "step4-desc1": "After AWS email is operating stably, please delete the old Zimbra email account in",
    "step4-desc2": "to avoid conflicts and system errors.",
    "step4-desc3": "Check actual operation to ensure Outlook is operating stably.",
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
    "welcome-no": "No, thanks",
    "outlook-config-title": "Outlook Configuration",
    "outlook-config-intro": "After successfully logging into AWS WorkMail, you need to configure Outlook to use email on your computer. Follow these steps:",
    "outlook-b1-title": "Open Outlook and select File",
    "outlook-b1-desc1": "Open Microsoft Outlook on your computer.",
    "outlook-b1-desc2": "In the top left corner, click on the File tab in the menu bar.",
    "outlook-b2-title": "Access Account Settings",
    "outlook-b2-desc1": "In the File menu, find and select Account Settings.",
    "outlook-b2-desc2": "Then select Account Settings from the submenu that appears.",
    "outlook-b3-title": "Check if email already exists",
    "outlook-b3-desc1": "In the Account Settings window, check if AWS WorkMail email has already been configured.",
    "outlook-b3-case1": "Case 1:",
    "outlook-b3-case1-desc": "If the email already exists in the list, please proceed from Step 4 to delete and recreate the profile.",
    "outlook-b3-case2": "Case 2:",
    "outlook-b3-case2-desc": "If the email is not present, you can skip steps 4-9 and start from Step 10 to configure the new email.",
    "outlook-b4-title": "Open Control Panel",
    "outlook-b4-desc1": "If the email already exists, you need to delete the old profile first.",
    "outlook-b4-desc2": "Open Control Panel on your Windows computer.",
    "outlook-b4-desc3": "You can find Control Panel by pressing the Windows key and typing \"Control Panel\".",
    "outlook-b5-title": "Access User Accounts",
    "outlook-b5-desc1": "In Control Panel, find and click on User Accounts.",
    "outlook-b5-desc2": "If you don't see it, you can change the view mode to \"Large icons\" or \"Small icons\" for easier access.",
    "outlook-b6-title": "Open Mail (Microsoft Outlook)",
    "outlook-b6-desc1": "In User Accounts, find and click on Mail (Microsoft Outlook).",
    "outlook-b6-desc2": "Note: Depending on the Outlook version you're using, it may display as 32-bit or 64-bit.",
    "outlook-b7-title": "Select Show Profiles",
    "outlook-b7-desc1": "In the Mail Setup window, click on the Show Profiles button.",
    "outlook-b7-desc2": "This is where you can manage all email profiles configured on your computer.",
    "outlook-b8-title": "Delete old Profile",
    "outlook-b8-desc1": "Select the old email profile you want to delete (usually the Zimbra email profile or old email).",
    "outlook-b8-desc2": "Click on the Remove or Delete button to delete that profile.",
    "outlook-b8-warning": "⚠️ Note: Make sure you have backed up important data before deleting the profile.",
    "outlook-b9-title": "Create new Profile",
    "outlook-b9-desc1": "After deleting the old profile, return to Outlook and create a new profile.",
    "outlook-b9-desc2": "You will need to reconfigure the email from scratch with the new AWS WorkMail information.",
    "outlook-b10-title": "Login to new email",
    "outlook-b10-desc1": "In Outlook, begin the process of adding a new email account.",
    "outlook-b10-desc2": "Enter your full email address, for example: Dalziel@fourseasonsbutton.com",
    "outlook-b10-desc3": "Enter the password provided by IT.",
    "outlook-b10-note": "Important note:",
    "outlook-b10-note-desc": "Make sure to check the Advanced options box to configure additional necessary options.",
    "outlook-b11-title": "Select Outlook.com",
    "outlook-b11-desc1": "In the Advanced options section, select the account type as Outlook.com.",
    "outlook-b11-desc2": "This is the appropriate configuration for AWS WorkMail so Outlook can connect correctly.",
    "outlook-b12-title": "Wait for configuration process",
    "outlook-b12-desc1": "After clicking Next, Outlook will begin the configuration and connection process with AWS WorkMail.",
    "outlook-b12-desc2": "Please wait while the system is processing. This process may take a few minutes.",
    "outlook-b12-desc3": "After completion, you will see the next screen.",
    "outlook-b13-title": "Accept access permissions",
    "outlook-b13-desc1": "The system will request you to grant access permissions to Outlook.",
    "outlook-b13-desc2": "Click on the Allow or Cho phép button to accept and continue.",
    "outlook-b13-desc3": "This allows Outlook to sync emails from AWS WorkMail to your computer.",
    "outlook-b14-title": "Continue with Next",
    "outlook-b14-desc1": "After accepting access permissions, click on the Next button to continue the configuration process.",
    "outlook-b14-desc2": "Outlook will complete the connection setup with your email account.",
    "outlook-b15-title": "Complete configuration",
    "outlook-b15-desc1": "Click on the Done button to complete the configuration process.",
    "outlook-b15-desc2": "Outlook will begin syncing all emails from webmail to your computer.",
    "outlook-b15-desc3": "This process may take some time depending on the number of emails you have.",
    "outlook-b15-note": "Complete:",
    "outlook-b15-note-desc": "After syncing is complete, you can use Outlook to send and receive emails normally. All emails from AWS WorkMail will be displayed in Outlook."
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

