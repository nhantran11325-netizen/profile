// **********************************************
// ĐÂY LÀ CODE ĐÃ CHỈNH SỬA CHO FILE App.jsx HOẶC home.jsx CỦA BẠN
// **********************************************

import React, { useEffect, useState } from 'react';
import './App.css'; // Đảm bảo bạn đã có file App.css
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Bạn cần cài đặt Font Awesome cho React nếu chưa có (npm install --save @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons)
// Nếu không, bạn dùng thẻ <i> như ví dụ GMAIL/phuoccao

function App() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Ẩn thông báo sau 2 giây
  };

  const handleDiscordClick = () => {
    // Mở trang Discord chính
    window.open('https://discord.gg/7Yw6R7sDcH', '_blank');
    // Mở trang Discord user ID
    window.open('https://discord.com/users/1198150809305763923', '_blank');
  };

  return (
    <div className="profile-container">
      
      {/* -------------------- PHẦN HEADER VÀ TÊN -------------------- */}
      <div className="header">
        {/* Placeholder cho Avatar/Hình ảnh */}
        <img src="/public/avatar.jpg" alt="Avatar" className="avatar" /> 
        
        {/* Tên đã đổi: shadow thành CP Phước */}
        <h1 className="name">CP Phước</h1> 
        
        {/* Owner đã đổi: Owner of shdw.site thành Owner is Phước */}
        <h3 className="occupation">Owner is Phước</h3> 
        
        {/* Tiêu đề 2 đã đổi: Wokeupby... thành thơ */}
        <p className="description">
            𝙏𝙝𝙞𝙚̂𝙣 𝙙𝙞̣𝙖 𝙫𝙤̂ 𝙡𝙪𝙖̂𝙣 𝙡𝙪̣𝙞,<br/> 
            𝙏𝙧𝙖̂̃𝙢 𝙙𝙞̣𝙣𝙝 𝙫𝙖̣𝙣 𝙘𝙤̂̉ 𝙨𝙞𝙣𝙝.
        </p>
      </div>

      <div className="contact-links">
        
        {/* -------------------- NÚT GMAIL (Thay BTC) -------------------- */}
        <a 
          className="contact-btn" 
          onClick={() => handleCopy('caophuocff2@gmail.com')} 
          title={copied ? "Đã sao chép!" : "Nhấp để sao chép GMAIL"}>
            <i className="fa-regular fa-envelope"></i> GMAIL
        </a>

        {/* -------------------- NÚT VN (Thay LTC) -------------------- */}
        <a href="#" className="contact-btn">
          <i className="fa-solid fa-plane"></i> VN
        </a>

        {/* -------------------- NÚT PHUOCCAO (Nút mới) -------------------- */}
        <a href="https://guns.lol/phuoccao" target="_blank" rel="noopener noreferrer" className="contact-btn neon-glow">
          <i className="fa-solid fa-link"></i> phuoccao
        </a>
        
        {/* -------------------- NÚT DISCORD -------------------- */}
        <a 
          href="#" 
          onClick={handleDiscordClick} 
          className="contact-btn">
            <i className="fa-brands fa-discord"></i> Discord
        </a>
        
        {/* -------------------- NÚT YOUTUBE -------------------- */}
        <a href="https://www.youtube.com/@Unlimited_VN" target="_blank" rel="noopener noreferrer" className="contact-btn">
            <i className="fa-brands fa-youtube"></i> YouTube
        </a>
        
        {/* -------------------- NÚT GITHUB -------------------- */}
        <a href="https://github.com/nhantran11325-netizen" target="_blank" rel="noopener noreferrer" className="contact-btn">
            <i className="fa-brands fa-github"></i> GitHub
        </a>
        
        {/* XÓA NÚT TWITTER VÀ INSTAGRAM */}
        
      </div>
    </div>
  );
}

export default App;
