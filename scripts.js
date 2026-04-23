function showMessage(element, text, isError) {
  element.textContent = text;
  element.classList.toggle('error', isError);
  element.style.display = 'block';
}
function submitLogin(event) {
  event.preventDefault();
  var email = document.getElementById('loginEmail').value.trim();
  var password = document.getElementById('loginPassword').value;
  var message = document.getElementById('loginMessage');
  if (!email || !password) {
    showMessage(message, 'Vui lòng điền đầy đủ email và mật khẩu.', true);
    return;
  }
  var demoEmail = 'demo@hocduong.test';
  var demoPassword = '123456';
  var users = JSON.parse(localStorage.getItem('signupDemoUsers') || '[]');
  var matchedUser = users.find(function(user) { return user.email.toLowerCase() === email.toLowerCase(); });
  if (matchedUser && matchedUser.password === password) {
    showMessage(message, 'Đăng nhập thành công! Tài khoản mới đã được xác thực.', false);
    setTimeout(function() {
      window.location.href = 'dashboard.html';
    }, 800);
    return;
  }
  if (email.toLowerCase() === demoEmail && password === demoPassword) {
    showMessage(message, 'Đăng nhập thành công! Bạn đã truy cập vào bản demo.', false);
    setTimeout(function() {
      window.location.href = 'dashboard.html';
    }, 800);
  } else {
    showMessage(message, 'Email hoặc mật khẩu không đúng. Hãy thử lại với tài khoản đã đăng ký hoặc dùng tài khoản demo.', true);
  }
}
function submitSignup(event) {
  event.preventDefault();
  var name = document.getElementById('signupName').value.trim();
  var email = document.getElementById('signupEmail').value.trim();
  var password = document.getElementById('signupPassword').value;
  var confirmPassword = document.getElementById('signupConfirmPassword').value;
  var message = document.getElementById('signupMessage');
  if (!name || !email || !password || !confirmPassword) {
    showMessage(message, 'Vui lòng điền đầy đủ thông tin đăng ký.', true);
    return;
  }
  if (password.length < 6) {
    showMessage(message, 'Mật khẩu phải có ít nhất 6 ký tự.', true);
    return;
  }
  if (password !== confirmPassword) {
    showMessage(message, 'Mật khẩu và xác nhận mật khẩu không khớp.', true);
    return;
  }
  var users = JSON.parse(localStorage.getItem('signupDemoUsers') || '[]');
  if (users.some(function(user) { return user.email.toLowerCase() === email.toLowerCase(); })) {
    showMessage(message, 'Email này đã được đăng ký trước đó. Vui lòng dùng email khác hoặc đăng nhập.', true);
    return;
  }
  users.push({ name: name, email: email.toLowerCase(), password: password, createdAt: new Date().toISOString() });
  localStorage.setItem('signupDemoUsers', JSON.stringify(users));
  showMessage(message, 'Đăng ký thành công! Bạn có thể sử dụng email và mật khẩu để đăng nhập.', false);
  document.getElementById('signupName').value = '';
  document.getElementById('signupEmail').value = '';
  document.getElementById('signupPassword').value = '';
  document.getElementById('signupConfirmPassword').value = '';
}
function submitContact(event) {
  event.preventDefault();
  var name = document.getElementById('contactName').value.trim();
  var email = document.getElementById('contactEmail').value.trim();
  var messageText = document.getElementById('contactMessage').value.trim();
  var box = document.getElementById('contactMessageBox');
  if (!name || !email || !messageText) {
    showMessage(box, 'Vui lòng nhập đầy đủ họ tên, email và nội dung liên hệ.', true);
    return;
  }
  var contactData = { name: name, email: email, message: messageText, savedAt: new Date().toISOString() };
  localStorage.setItem('contactDemoData', JSON.stringify(contactData));
  showMessage(box, 'Cảm ơn bạn! Nội dung liên hệ đã được lưu tạm vào trình duyệt để demo.', false);
  document.getElementById('contactName').value = '';
  document.getElementById('contactEmail').value = '';
  document.getElementById('contactMessage').value = '';
}

function renderDashboardChart() {
  var chartBars = document.querySelectorAll('.chart-bar');
  chartBars.forEach(function(bar) {
    var tooltip = bar.querySelector('.chart-tooltip');
    var fill = bar.querySelector('.chart-fill');
    if (!tooltip || !fill) return;
    var value = parseFloat(tooltip.textContent.replace(/,/g, '.'));
    if (isNaN(value)) return;
    fill.style.height = Math.min(100, Math.max(0, (value / 10) * 100)) + '%';
  });
}

document.addEventListener('DOMContentLoaded', function() {
  renderDashboardChart();
  var printBtn = document.getElementById('printProfileBtn');
  if (printBtn) {
    printBtn.addEventListener('click', function() {
      window.print();
    });
  }
});
