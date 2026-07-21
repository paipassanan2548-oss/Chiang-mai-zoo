import React from 'react';

export default function DormitoryDashboard() {
  return (
    <>
      {/* โหลด Font และ CSS ไว้ในไฟล์เดียวกัน */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

        :root {
            --primary-blue: #004aad;
            --secondary-blue: #007bff;
            --light-blue: #e8f1f8;
            --white: #ffffff;
            --bg-color: #f4f7f6;
            --text-main: #333333;
            --text-muted: #777777;
            --success: #28a745;
            --warning: #ffc107;
            --danger: #dc3545;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Prompt', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-main);
            line-height: 1.6;
        }

        /* Navbar */
        .navbar {
            background-color: var(--primary-blue);
            color: var(--white);
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .navbar-brand {
            font-size: 1.5rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .navbar-profile {
            display: flex;
            align-items: center;
            gap: 15px;
            font-size: 0.9rem;
        }

        .navbar-profile i {
            cursor: pointer;
            font-size: 1.2rem;
        }

        /* Main Container */
        .container {
            max-width: 1200px;
            margin: 20px auto;
            padding: 0 20px;
        }

        /* Welcome Section */
        .welcome-section {
            background-color: var(--white);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-left: 5px solid var(--primary-blue);
        }

        .welcome-text h2 {
            font-size: 1.4rem;
            color: var(--primary-blue);
        }

        /* Menu Grid */
        .menu-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .menu-card {
            background-color: var(--white);
            padding: 30px 20px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            transition: transform 0.2s, box-shadow 0.2s;
            cursor: pointer;
            border: 1px solid #eef2f5;
        }

        .menu-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 15px rgba(0,0,0,0.1);
            border-color: var(--light-blue);
        }

        .menu-icon {
            font-size: 2.5rem;
            color: var(--secondary-blue);
            margin-bottom: 15px;
            background-color: var(--light-blue);
            width: 70px;
            height: 70px;
            line-height: 70px;
            border-radius: 50%;
            display: inline-block;
        }

        .menu-title {
            font-size: 1.1rem;
            font-weight: 500;
            margin-bottom: 5px;
        }

        .menu-desc {
            font-size: 0.85rem;
            color: var(--text-muted);
        }

        /* Status & Dashboard Section */
        .dashboard-section {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 20px;
        }

        @media (max-width: 768px) {
            .dashboard-section {
                grid-template-columns: 1fr;
            }
        }

        .card {
            background-color: var(--white);
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            padding: 20px;
        }

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #eee;
        }

        .card-header h3 {
            font-size: 1.2rem;
            color: var(--primary-blue);
            display: flex;
            align-items: center;
            gap: 10px;
        }

        /* Lists */
        .status-list {
            list-style: none;
        }

        .status-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
            border-bottom: 1px dashed #eee;
        }

        .status-item:last-child {
            border-bottom: none;
        }

        .item-info h4 {
            font-size: 1rem;
            margin-bottom: 3px;
        }

        .item-info p {
            font-size: 0.85rem;
            color: var(--text-muted);
        }

        .badge {
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
        }

        .badge-warning { background-color: #fff3cd; color: #856404; }
        .badge-success { background-color: #d4edda; color: #155724; }
        .badge-danger { background-color: #f8d7da; color: #721c24; }

        .btn {
            display: inline-block;
            padding: 8px 15px;
            background-color: var(--primary-blue);
            color: var(--white);
            text-decoration: none;
            border-radius: 5px;
            font-size: 0.9rem;
            transition: background 0.3s;
            border: none;
            cursor: pointer;
        }

        .btn:hover {
            background-color: var(--secondary-blue);
        }
        `
      }} />

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <i className="fa-solid fa-building-user"></i> Dormitory
        </div>
        <div className="navbar-profile">
          <span><i className="fa-solid fa-bell"></i></span>
          <span>ผู้พักอาศัย ห้อง 305</span>
          <i className="fa-solid fa-circle-user"></i>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container">
        
        {/* Welcome Section */}
        <div className="welcome-section">
          <div className="welcome-text">
            <h2>สวัสดี, คุณลูกค้า</h2>
            <p>ระบบบริหารจัดการหอพัก แจ้งซ่อมและชำระเงิน</p>
          </div>
          <div>
            <span className="badge badge-success">
              <i className="fa-solid fa-circle-check"></i> สถานะปกติ
            </span>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="menu-grid">
          <div className="menu-card">
            <div className="menu-icon"><i className="fa-solid fa-screwdriver-wrench"></i></div>
            <h3 className="menu-title">แจ้งซ่อมคุรุภัณฑ์</h3>
            <p className="menu-desc">แจ้งปัญหาอุปกรณ์ชำรุด พร้อมแนบรูปภาพ</p>
          </div>
          
          <div className="menu-card">
            <div className="menu-icon"><i className="fa-solid fa-bars-progress"></i></div>
            <h3 className="menu-title">ติดตามสถานะ</h3>
            <p className="menu-desc">ตรวจสอบความคืบหน้างานซ่อมแบบเรียลไทม์</p>
          </div>

          <div className="menu-card">
            <div className="menu-icon"><i className="fa-solid fa-file-invoice-dollar"></i></div>
            <h3 className="menu-title">ใบแจ้งหนี้ / ชำระเงิน</h3>
            <p className="menu-desc">ดูยอดค้างชำระ สแกน QR Code และแนบสลิป</p>
          </div>

          <div className="menu-card">
            <div className="menu-icon"><i className="fa-solid fa-id-card"></i></div>
            <h3 className="menu-title">ข้อมูลผู้พักอาศัย</h3>
            <p className="menu-desc">จัดการข้อมูลส่วนตัวและการทำสัญญา</p>
          </div>
        </div>

        {/* Dashboard Section */}
        <div className="dashboard-section">
          
          <div className="card">
            <div className="card-header">
              <h3><i className="fa-solid fa-clock-rotate-left"></i> สถานะการแจ้งซ่อมล่าสุด</h3>
              <a href="#" className="btn">ดูทั้งหมด</a>
            </div>
            <ul className="status-list">
              <li className="status-item">
                <div className="item-info">
                  <h4>เครื่องปรับอากาศไม่เย็น</h4>
                  <p><i className="fa-regular fa-calendar"></i> 12 ก.ค. 2569 | รหัส: REQ-001</p>
                </div>
                <span className="badge badge-warning">กำลังดำเนินการ</span>
              </li>
              <li className="status-item">
                <div className="item-info">
                  <h4>หลอดไฟระเบียงขาด</h4>
                  <p><i className="fa-regular fa-calendar"></i> 05 ก.ค. 2569 | รหัส: REQ-002</p>
                </div>
                <span className="badge badge-success">ซ่อมเสร็จสิ้น</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="card-header">
              <h3><i className="fa-solid fa-wallet"></i> ยอดชำระเดือนนี้</h3>
            </div>
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>รอบบิล: กรกฎาคม 2569</p>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--danger)', margin: '10px 0' }}>4,500 ฿</h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--danger)', marginBottom: '20px' }}>
                * กำหนดชำระภายในวันที่ 5 ส.ค.
              </p>
              <button className="btn" style={{ width: '100%', padding: '12px', fontSize: '1rem' }}>
                <i className="fa-solid fa-qrcode"></i> สแกนจ่าย / แนบสลิป
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
