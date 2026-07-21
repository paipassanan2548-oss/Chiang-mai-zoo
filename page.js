export default function DormitoryDashboard() {
  return (
    <>
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
          {/* แจ้งซ่อม */}
          <div className="menu-card">
            <div className="menu-icon"><i className="fa-solid fa-screwdriver-wrench"></i></div>
            <h3 className="menu-title">แจ้งซ่อมคุรุภัณฑ์</h3>
            <p className="menu-desc">แจ้งปัญหาอุปกรณ์ชำรุด พร้อมแนบรูปภาพ</p>
          </div>
          
          {/* ติดตามสถานะ */}
          <div className="menu-card">
            <div className="menu-icon"><i className="fa-solid fa-bars-progress"></i></div>
            <h3 className="menu-title">ติดตามสถานะ</h3>
            <p className="menu-desc">ตรวจสอบความคืบหน้างานซ่อมแบบเรียลไทม์</p>
          </div>

          {/* ใบแจ้งหนี้ */}
          <div className="menu-card">
            <div className="menu-icon"><i className="fa-solid fa-file-invoice-dollar"></i></div>
            <h3 className="menu-title">ใบแจ้งหนี้ / ชำระเงิน</h3>
            <p className="menu-desc">ดูยอดค้างชำระ สแกน QR Code และแนบสลิป</p>
          </div>

          {/* ข้อมูลส่วนตัว */}
          <div className="menu-card">
            <div className="menu-icon"><i className="fa-solid fa-id-card"></i></div>
            <h3 className="menu-title">ข้อมูลผู้พักอาศัย</h3>
            <p className="menu-desc">จัดการข้อมูลส่วนตัวและการทำสัญญา</p>
          </div>
        </div>

        {/* Dashboard Section */}
        <div className="dashboard-section">
          
          {/* Recent Repairs */}
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

          {/* Billing Summary */}
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
