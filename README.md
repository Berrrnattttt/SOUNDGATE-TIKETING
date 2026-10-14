# SOUNDGATE-TIKETING
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SOUNDGATE | Platform Jual Beli Tiket Konser Lokal & Internasional Resmi</title>
    <meta name="description" content="Platform resmi jual beli tiket konser lokal dan internasional. Dilengkapi e-ticket QR Code anti-pemalsuan, payment gateway real-time, dashboard promotor & admin, dan sistem verifikasi gerbang stadion.">
    <meta name="keywords" content="tiket konser, jual beli tiket, tiket coldplay, sheila on 7, bruno mars, e-ticket qr code, tiket resmi, promotor konser">

    <!-- Favicon -->
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2222%22 fill=%22%238B5CF6%22/><text y=%2268%22 x=%2250%22 text-anchor=%22middle%22 font-size=%2255%22 font-family=%22sans-serif%22 font-weight=%22900%22 fill=%22white%22>⚡</text></svg>">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;700;800&display=swap" rel="stylesheet">

    <!-- Main Stylesheet -->
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>

    <!-- ==========================================================================
       OFFICIAL DISCLAIMER BANNER (MANDATORY REQUIREMENT)
       ========================================================================== -->
    <aside class="official-disclaimer-banner" id="disclaimer-banner" aria-label="Pemberitahuan Resmi">
        <div class="disclaimer-container">
            <div class="disclaimer-content">
                <span class="disclaimer-icon">⚠️</span>
                <span class="disclaimer-badge">DISCLAIMER RESMI</span>
                <span class="disclaimer-text">
                    <strong>Pemberitahuan:</strong> Tanggal, nama acara, dan harga pada katalog saat ini merupakan <strong>data contoh</strong>, bukan penawaran tiket yang sudah diverifikasi.
                </span>
            </div>
            <button class="disclaimer-close-btn" onclick="document.getElementById('disclaimer-banner').style.display='none'" title="Tutup Pemberitahuan" aria-label="Tutup Banner">×</button>
        </div>
    </aside>

    <!-- ==========================================================================
       ROLE DEMO SWITCHER BAR (EVALUATOR QUICK ACCESS)
       ========================================================================== -->
    <div class="role-demo-bar">
        <div class="role-demo-container">
            <div class="role-demo-left">
                <span>Mode Akun Evaluasi:</span>
                <div class="demo-role-btn-group">
                    <button class="demo-role-btn active" data-role="buyer" onclick="switchDemoRole('buyer')">
                        🛒 Pembeli (Budi)
                    </button>
                    <button class="demo-role-btn" data-role="seller" onclick="switchDemoRole('seller')">
                        🎪 Promotor / Penjual (PK Ent)
                    </button>
                    <button class="demo-role-btn" data-role="admin" onclick="switchDemoRole('admin')">
                        🛡️ Super Admin
                    </button>
                </div>
            </div>
            <div class="role-demo-right">
                <span class="active-account-badge" id="active-user-badge">
                    👤 <strong>Budi Santoso</strong> (Pembeli)
                </span>
                <button class="btn-reset-db" onclick="handleResetDatabase()" title="Kembalikan semua data ke pengaturan awal">
                    🔄 Reset Data
                </button>
            </div>
        </div>
    </div>

    <!-- ==========================================================================
       HEADER & NAVIGATION
       ========================================================================== -->
    <header class="main-header">
        <div class="nav-container">
            <a href="javascript:void(0)" onclick="switchView('catalog')" class="brand-logo" aria-label="SoundGate Beranda">
                <div class="logo-icon">⚡</div>
                <div class="brand-text">
                    <h1>SOUNDGATE</h1>
                    <p>Live Concert Ticketing Platform</p>
                </div>
            </a>

            <!-- Navigation Links -->
            <nav class="main-nav" aria-label="Menu Utama">
                <button class="nav-tab-btn active" data-view="catalog" onclick="switchView('catalog')">
                    🎵 Katalog Konser
                </button>
                <button class="nav-tab-btn" data-view="mytickets" onclick="switchView('mytickets')">
                    🎟️ Tiket Saya
                </button>
                <button class="nav-tab-btn" id="nav-tab-dashboard" data-view="dashboard" onclick="switchView('dashboard')" style="display: none;">
                    📊 Dashboard Promotor
                </button>
            </nav>

            <!-- Right Actions -->
            <div class="header-actions">
                <button class="btn-scanner-gate" onclick="openScannerGateModal()" title="Buka Gerbang Pemindaian Tiket Stadion">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    <span>Verifikasi Gerbang (Gate Scanner)</span>
                </button>

                <div class="user-menu-trigger" id="user-header-menu" onclick="openModal('modal-auth')">
                    <div class="user-avatar-dot">B</div>
                    <span>Budi</span>
                </div>
            </div>
        </div>
    </header>

    <!-- ==========================================================================
       MAIN CONTENT CONTAINER (SPA VIEWS)
       ========================================================================== -->
    <main>
        <!-- ==========================================
           VIEW 1: CATALOG & HERO VIEW
           ========================================== -->
        <section id="view-catalog">
            <!-- Hero Section -->
            <section class="hero-section">
                <div class="hero-container">
                    <div class="hero-glass-card">
                        <div class="hero-pill-tag">
                            <span class="hero-pulse-dot"></span>
                            <span>OFFICIAL MUSIC FESTIVALS & STADIUM TOURS 2026</span>
                        </div>
                        <h2 class="hero-title">
                            Nonton Konser Impian <br>
                            <span class="gradient-text">Lokal & Internasional</span> Resmi
                        </h2>
                        <p class="hero-description">
                            Jual beli tiket konser dengan jaminan 100% tiket asli, sistem enkripsi QR Code berstandar stadion internasional, pembayaran langsung real-time, dan teknologi verifikasi gerbang anti-tiket palsu & anti-calo.
                        </p>

                        <!-- Search & Live Filter Bar -->
                        <div class="search-control-wrapper">
                            <div class="search-input-group">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                <input type="text" id="catalog-search-input" placeholder="Cari nama artis, judul konser, kota (Jakarta, Bandung, Singapore), atau venue..." autocomplete="off">
                            </div>
                        </div>

                        <!-- Quick Category Pills -->
                        <div class="quick-category-pills">
                            <button class="cat-pill active" data-category="all">
                                🌟 Semua Konser
                            </button>
                            <button class="cat-pill" data-category="internasional">
                                🌍 Konser Internasional (Coldplay, Bruno Mars, Taylor Swift, Olivia Rodrigo)
                            </button>
                            <button class="cat-pill" data-category="lokal">
                                🇮🇩 Konser Lokal (Sheila on 7, Hindia, Dewa 19, Bernadya)
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Concert Catalog Grid Section -->
            <section class="catalog-section">
                <div class="section-container">
                    <div class="section-header-row">
                        <div class="section-title-wrap">
                            <h2>Katalog Konser Resmi</h2>
                            <p>Pilih konser favorit Anda dan amankan tiket langsung dari promotor resmi terverifikasi</p>
                        </div>
                        <span class="catalog-stats-badge" id="catalog-stats-badge">Memuat data konser...</span>
                    </div>

                    <!-- Dynamic Concert Cards Grid -->
                    <div class="concert-grid" id="concert-grid">
                        <!-- Populated by app.js -->
                    </div>
                </div>
            </section>
        </section>

        <!-- ==========================================
           VIEW 2: MY TICKETS (TIKET SAYA)
           ========================================== -->
        <section id="view-mytickets" style="display: none; padding: 40px 20px 80px;">
            <div class="section-container">
                <div class="section-header-row">
                    <div class="section-title-wrap">
                        <h2>Tiket Saya</h2>
                        <p>Daftar digital E-Ticket konser yang telah Anda beli. Siap digunakan di gerbang masuk stadion.</p>
                    </div>
                </div>
                <div id="mytickets-view-mount">
                    <!-- Populated by app.js -->
                </div>
            </div>
        </section>

        <!-- ==========================================
           VIEW 3: PROMOTER / ADMIN DASHBOARD
           ========================================== -->
        <section id="view-dashboard" style="display: none;">
            <div class="dashboard-view-container" id="dashboard-view-mount">
                <!-- Populated dynamically based on user role -->
            </div>
        </section>
    </main>

    <!-- ==========================================================================
       MODAL 1: TIER SELECTION & QUANTITY (PILIH TIKET)
       ========================================================================== -->
    <div class="modal-overlay" id="modal-tier-select" role="dialog" aria-modal="true">
        <div class="modal-container">
            <button class="modal-close-btn" onclick="closeModal('modal-tier-select')" aria-label="Tutup Dialog">×</button>
            <div class="modal-scrollable-body">
                <div class="modal-event-header" id="modal-event-header-content">
                    <!-- Populated by app.js -->
                </div>

                <h3 style="font-size: 1.15rem; margin-top: 24px; color: #fff;">Pilih Kategori Tiket:</h3>
                <div class="tiers-container" id="modal-tiers-list">
                    <!-- Populated by app.js -->
                </div>

                <div class="checkout-control-strip">
                    <div class="quantity-stepper">
                        <span style="font-size: 0.85rem; color: var(--text-secondary); margin-right: 6px;">Jumlah Tiket:</span>
                        <button class="step-btn" onclick="adjustQuantity(-1)" aria-label="Kurangi Tiket">-</button>
                        <span class="quantity-display" id="tier-qty-display">1</span>
                        <button class="step-btn" onclick="adjustQuantity(1)" aria-label="Tambah Tiket">+</button>
                    </div>

                    <div class="total-summary-display">
                        <div class="total-label">Total Pembayaran (Termasuk Pajak & Biaya)</div>
                        <div class="total-price" id="tier-total-display">Rp 0</div>
                    </div>
                </div>

                <div style="margin-top: 24px; text-align: right;">
                    <button class="btn-process-payment" id="btn-proceed-checkout" onclick="proceedToPayment()">
                        Lanjut ke Pembayaran →
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- ==========================================================================
       MODAL 2: PAYMENT GATEWAY SIMULATOR (CHECKOUT)
       ========================================================================== -->
    <div class="modal-overlay" id="modal-payment-gateway" role="dialog" aria-modal="true">
        <div class="modal-container payment-modal-container">
            <button class="modal-close-btn" onclick="closeModal('modal-payment-gateway')" aria-label="Tutup Dialog">×</button>
            <div class="modal-scrollable-body">
                <div class="payment-steps-indicator">
                    <div class="pay-step active">
                        <span class="step-number">1</span>
                        <span>Identitas Penonton</span>
                    </div>
                    <div class="pay-step active">
                        <span class="step-number">2</span>
                        <span>Metode Pembayaran</span>
                    </div>
                    <div class="pay-step active">
                        <span class="step-number">3</span>
                        <span>Penerbitan E-Ticket</span>
                    </div>
                </div>

                <!-- Order Brief -->
                <div id="payment-order-brief"></div>

                <!-- Attendee Identity Form -->
                <h4 style="font-size: 1rem; color: #fff; margin-bottom: 12px;">Data Pemegang Tiket (Sesuai KTP / Paspor)</h4>
                <div class="attendee-form-grid">
                    <div>
                        <label class="form-label" for="pay-name">Nama Lengkap Penonton *</label>
                        <input type="text" id="pay-name" class="form-input" placeholder="Contoh: Budi Santoso" required>
                    </div>
                    <div>
                        <label class="form-label" for="pay-email">Email Penerima E-Ticket *</label>
                        <input type="email" id="pay-email" class="form-input" placeholder="budi@gmail.com" required>
                    </div>
                    <div>
                        <label class="form-label" for="pay-phone">Nomor WhatsApp *</label>
                        <input type="tel" id="pay-phone" class="form-input" placeholder="081234567890">
                    </div>
                    <div>
                        <label class="form-label" for="pay-idnumber">Nomor KTP / Paspor *</label>
                        <input type="text" id="pay-idnumber" class="form-input" placeholder="3171012304950001">
                    </div>
                </div>

                <!-- Payment Method Selector -->
                <h4 style="font-size: 1rem; color: #fff; margin-bottom: 12px;">Pilih Jalur Pembayaran Real-Time</h4>
                <div class="payment-method-selector">
                    <div class="pay-method-card active" data-method="qris" onclick="selectPaymentMethod('qris')">
                        <div class="method-icon">⚡</div>
                        <div class="method-name">QRIS Instant</div>
                        <div class="method-sub">BCA, GoPay, OVO, Dana</div>
                    </div>
                    <div class="pay-method-card" data-method="bca_va" onclick="selectPaymentMethod('bca_va')">
                        <div class="method-icon">🏦</div>
                        <div class="method-name">BCA VA</div>
                        <div class="method-sub">Virtual Account</div>
                    </div>
                    <div class="pay-method-card" data-method="mandiri_va" onclick="selectPaymentMethod('mandiri_va')">
                        <div class="method-icon">🏛️</div>
                        <div class="method-name">Mandiri VA</div>
                        <div class="method-sub">Virtual Account</div>
                    </div>
                    <div class="pay-method-card" data-method="cc" onclick="selectPaymentMethod('cc')">
                        <div class="method-icon">💳</div>
                        <div class="method-name">Kartu Kredit</div>
                        <div class="method-sub">Visa, Mastercard</div>
                    </div>
                </div>

                <!-- Payment Interactive Panel -->
                <div class="payment-interactive-panel" id="payment-method-panel">
                    <!-- Populated by app.js -->
                </div>

                <button class="btn-process-payment" id="btn-submit-real-payment" onclick="executePaymentProcess()">
                    🔒 Konfirmasi & Terbitkan E-Ticket Sekarang
                </button>
            </div>
        </div>
    </div>

    <!-- ==========================================================================
       MODAL 3: DIGITAL E-TICKET BOARDING PASS WITH QR CODE
       ========================================================================== -->
    <div class="modal-overlay" id="modal-eticket" role="dialog" aria-modal="true">
        <div class="modal-container" style="max-width: 680px;">
            <button class="modal-close-btn" onclick="closeModal('modal-eticket')" aria-label="Tutup Dialog">×</button>
            <div class="modal-scrollable-body" id="eticket-container-mount">
                <!-- Populated by app.js -->
            </div>
        </div>
    </div>

    <!-- ==========================================================================
       MODAL 4: TICKET VERIFICATION SCANNER GATE (STADIUM HUD)
       ========================================================================== -->
    <div class="modal-overlay" id="modal-scanner-gate" role="dialog" aria-modal="true">
        <div class="modal-container scanner-gate-modal">
            <button class="modal-close-btn" onclick="closeModal('modal-scanner-gate')" aria-label="Tutup Dialog">×</button>
            <div class="scanner-hud-container">
                <div class="scanner-hud-header">
                    <div class="scanner-hud-title">
                        <span class="gate-indicator-dot"></span>
                        <span>SOUNDGATE STADIUM ACCESS CONTROL HUD</span>
                    </div>
                    <div>
                        <select id="scanner-gate-select" class="custom-select" style="font-size: 0.8rem; padding: 6px 12px;">
                            <option value="GATE 1 (VIP & VVIP ENTRANCE)">Gate 1 (VIP & VVIP)</option>
                            <option value="GATE 2 (FESTIVAL STANDING)">Gate 2 (Festival Field)</option>
                            <option value="GATE 3 (TRIBUNE BARAT)">Gate 3 (Tribune Barat)</option>
                            <option value="GATE 4 (TRIBUNE TIMUR)">Gate 4 (Tribune Timur)</option>
                        </select>
                    </div>
                </div>

                <div class="scanner-hud-body">
                    <!-- Left: Camera & Input Target -->
                    <div>
                        <div class="scanner-camera-viewport">
                            <div class="laser-scanner-line"></div>
                            <div class="camera-crosshairs"></div>
                            <div style="position: absolute; bottom: 12px; font-size: 0.75rem; color: #34D399; font-weight: 600; text-shadow: 0 1px 4px #000;">
                                SCANNER AKTIF • KAMERA & BARCODE DETECTOR
                            </div>
                        </div>

                        <!-- Manual Ticket Code Input -->
                        <div style="margin-top: 14px; display: flex; gap: 8px;">
                            <input type="text" id="scanner-input-code" class="form-input" placeholder="Ketik kode tiket (misal: TKT-CP-99812A)..." style="font-family: monospace; font-size: 0.95rem;">
                            <button class="btn-book-ticket" onclick="handleManualVerify()" style="white-space: nowrap;">
                                Verifikasi
                            </button>
                        </div>

                        <!-- Quick Test Dropdown for Easy Evaluation -->
                        <div class="quick-test-section">
                            <label class="quick-test-label" for="quick-ticket-select">⚡ Uji Cepat Tiket dalam Database:</label>
                            <select id="quick-ticket-select" class="custom-select" style="width: 100%; font-size: 0.8rem;" onchange="handleQuickSelectVerify(this.value)">
                                <!-- Populated dynamically -->
                            </select>
                        </div>
                    </div>

                    <!-- Right: Verification Result Visual Screen -->
                    <div>
                        <div class="verification-result-panel status-standby" id="scanner-result-screen">
                            <div class="result-status-icon">📡</div>
                            <h4 class="result-status-title">MENUNGGU SCAN TIKET</h4>
                            <p class="result-status-desc">Arahkan QR Code tiket ke kamera scanner atau pilih tiket uji coba di sebelah kiri.</p>
                        </div>
                    </div>
                </div>

                <!-- Gate Activity Log Table -->
                <div class="gate-log-section">
                    <div class="gate-log-title">📋 Riwayat Aktivitas Gerbang Masuk (Live Check-in Log)</div>
                    <div class="log-table-wrap">
                        <table class="gate-table">
                            <thead>
                                <tr>
                                    <th>Waktu</th>
                                    <th>Kode Tiket</th>
                                    <th>Pengunjung</th>
                                    <th>Pintu Gerbang</th>
                                    <th>Status Hasil</th>
                                </tr>
                            </thead>
                            <tbody id="gate-log-tbody">
                                <!-- Populated by app.js -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ==========================================================================
       MODAL 5: PROMOTOR - ADD NEW CONCERT
       ========================================================================== -->
    <div class="modal-overlay" id="modal-add-concert" role="dialog" aria-modal="true">
        <div class="modal-container" style="max-width: 680px;">
            <button class="modal-close-btn" onclick="closeModal('modal-add-concert')" aria-label="Tutup Dialog">×</button>
            <div class="modal-scrollable-body">
                <h3 style="font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 6px;">Tambah Konser Baru</h3>
                <p style="color: var(--text-secondary); font-size: 0.88rem; margin-bottom: 20px;">Daftarkan konser musik baru ke katalog resmi SoundGate.</p>

                <form id="form-add-concert">
                    <div class="attendee-form-grid">
                        <div class="form-group-full">
                            <label class="form-label" for="add-concert-title">Judul Acara Konser *</label>
                            <input type="text" id="add-concert-title" class="form-input" placeholder="Contoh: Sheila on 7 Tunggu Aku di Surabaya" required>
                        </div>
                        <div>
                            <label class="form-label" for="add-concert-artist">Nama Artis / Band *</label>
                            <input type="text" id="add-concert-artist" class="form-input" placeholder="Contoh: Sheila on 7" required>
                        </div>
                        <div>
                            <label class="form-label" for="add-concert-category">Kategori Konser *</label>
                            <select id="add-concert-category" class="custom-select" style="width: 100%;">
                                <option value="lokal">🇮🇩 Konser Lokal Indonesia</option>
                                <option value="internasional">🌍 Konser Internasional</option>
                            </select>
                        </div>
                        <div>
                            <label class="form-label" for="add-concert-city">Kota Penyelenggaraan *</label>
                            <input type="text" id="add-concert-city" class="form-input" placeholder="Jakarta / Surabaya / Bandung" required>
                        </div>
                        <div>
                            <label class="form-label" for="add-concert-venue">Nama Gedung / Stadion (Venue) *</label>
                            <input type="text" id="add-concert-venue" class="form-input" placeholder="Gelora Bung Karno" required>
                        </div>
                        <div>
                            <label class="form-label" for="add-concert-date">Tanggal Acara *</label>
                            <input type="date" id="add-concert-date" class="form-input" value="2026-12-20" required>
                        </div>
                        <div>
                            <label class="form-label" for="add-concert-time">Jam Pintu Dibuka *</label>
                            <input type="text" id="add-concert-time" class="form-input" placeholder="19:00 WIB" required>
                        </div>
                        <div class="form-group-full">
                            <label class="form-label" for="add-concert-genre">Genre Musik</label>
                            <input type="text" id="add-concert-genre" class="form-input" placeholder="Pop / Rock / Indie">
                        </div>
                        <div class="form-group-full">
                            <label class="form-label" for="add-concert-desc">Deskripsi Konser</label>
                            <textarea id="add-concert-desc" class="form-input" rows="3" placeholder="Informasi singkat tentang konser..."></textarea>
                        </div>
                    </div>

                    <h4 style="font-size: 0.95rem; margin: 16px 0 10px; color: #fff;">Pengaturan Kategori & Kuota Tiket:</h4>
                    <div class="attendee-form-grid" style="margin-bottom: 20px;">
                        <div>
                            <label class="form-label">Harga Kategori VIP (Rp)</label>
                            <input type="number" id="add-tier-vip-price" class="form-input" value="1850000">
                        </div>
                        <div>
                            <label class="form-label">Kuota VIP</label>
                            <input type="number" id="add-tier-vip-quota" class="form-input" value="100">
                        </div>
                        <div>
                            <label class="form-label">Harga Festival Standing (Rp)</label>
                            <input type="number" id="add-tier-fest-price" class="form-input" value="950000">
                        </div>
                        <div>
                            <label class="form-label">Kuota Festival</label>
                            <input type="number" id="add-tier-fest-quota" class="form-input" value="500">
                        </div>
                    </div>

                    <button type="submit" class="btn-process-payment">
                        🚀 Terbitkan Konser ke Katalog
                    </button>
                </form>
            </div>
        </div>
    </div>

    <!-- ==========================================================================
       MODAL 6: LOGIN & REGISTRASI
       ========================================================================== -->
    <div class="modal-overlay" id="modal-auth" role="dialog" aria-modal="true">
        <div class="modal-container" style="max-width: 480px;">
            <button class="modal-close-btn" onclick="closeModal('modal-auth')" aria-label="Tutup Dialog">×</button>
            <div class="modal-scrollable-body">
                <h3 style="font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 6px;">Akun SoundGate</h3>
                <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 20px;">Masuk atau pilih profil evaluasi Anda.</p>

                <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); border-radius: var(--radius-md); padding: 16px; margin-bottom: 20px;">
                    <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 8px;">PILIH AKUN EVALUASI CEPAT:</div>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <button class="demo-role-btn" onclick="switchDemoRole('buyer'); closeModal('modal-auth');" style="justify-content: flex-start; padding: 10px 14px;">
                            🛒 <strong>Budi Santoso</strong> (Pembeli - budi@gmail.com)
                        </button>
                        <button class="demo-role-btn" onclick="switchDemoRole('seller'); closeModal('modal-auth');" style="justify-content: flex-start; padding: 10px 14px;">
                            🎪 <strong>PK Entertainment</strong> (Promotor - promotor@pkentertainment.id)
                        </button>
                        <button class="demo-role-btn" onclick="switchDemoRole('admin'); closeModal('modal-auth');" style="justify-content: flex-start; padding: 10px 14px;">
                            🛡️ <strong>Super Admin</strong> (admin@soundgate.id)
                        </button>
                    </div>
                </div>

                <div style="text-align: center; font-size: 0.8rem; color: var(--text-muted);">
                    Data akun tersimpan aman di LocalStorage peramban Anda.
                </div>
            </div>
        </div>
    </div>

    <!-- ==========================================================================
       FOOTER
       ========================================================================== -->
    <footer class="main-footer">
        <div class="footer-container">
            <div class="footer-col">
                <div class="brand-logo" style="margin-bottom: 14px;">
                    <div class="logo-icon">⚡</div>
                    <div class="brand-text">
                        <span style="font-family: var(--font-heading); font-size: 1.3rem; font-weight: 800; color: #fff;">SOUNDGATE</span>
                    </div>
                </div>
                <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 14px;">
                    Platform digital jual beli tiket konser resmi pertama dengan perlindungan anti-tiket palsu, QR code terenkripsi dinamis, dan integrasi gerbang stadion langsung.
                </p>
                <div style="font-size: 0.78rem; color: #FBBF24; background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); padding: 8px 12px; border-radius: var(--radius-sm);">
                    ⚠️ Catatan: Data konser dan harga pada katalog merupakan data contoh.
                </div>
            </div>

            <div class="footer-col">
                <h4>Kategori Konser</h4>
                <ul>
                    <li><a href="javascript:void(0)" onclick="state.currentCategory='internasional'; renderConcertCatalog(); switchView('catalog');">Konser Internasional</a></li>
                    <li><a href="javascript:void(0)" onclick="state.currentCategory='lokal'; renderConcertCatalog(); switchView('catalog');">Konser Lokal Indonesia</a></li>
                    <li><a href="javascript:void(0)" onclick="state.currentCategory='all'; renderConcertCatalog(); switchView('catalog');">Semua Festival Musik</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Fitur Platform</h4>
                <ul>
                    <li><a href="javascript:void(0)" onclick="openScannerGateModal()">Gerbang Verifikasi Tiket</a></li>
                    <li><a href="javascript:void(0)" onclick="switchView('mytickets')">Digital E-Ticket & QR Code</a></li>
                    <li><a href="javascript:void(0)" onclick="switchDemoRole('seller'); switchView('dashboard');">Portal Promotor & Penjual</a></li>
                    <li><a href="javascript:void(0)" onclick="switchDemoRole('admin'); switchView('dashboard');">Dashboard Super Admin</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Dukungan & Keamanan</h4>
                <ul>
                    <li><a href="javascript:void(0)" onclick="showToast('Customer service aktif 24/7 di cs@soundgate.id', 'info')">Pusat Bantuan 24/7</a></li>
                    <li><a href="javascript:void(0)" onclick="showToast('Garansi 100% uang kembali jika tiket tidak valid di gate stadion.', 'info')">Garansi Tiket Resmi</a></li>
                    <li><a href="javascript:void(0)" onclick="handleResetDatabase()">Reset Database Contoh</a></li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom-bar">
            <span>© 2026 SOUNDGATE Technologies Inc. Seluruh hak cipta dilindungi undang-undang.</span>
            <span>Platform Penjualan Tiket Konser Digital Terverifikasi</span>
        </div>
    </footer>

    <!-- Toast Notifications Mount -->
    <div class="toast-container" id="toast-container"></div>

    <!-- Scripts -->
    <script src="js/qrcode.min.js"></script>
    <script src="js/db.js"></script>
    <script src="js/auth.js"></script>
    <script src="js/payment.js"></script>
    <script src="js/scanner.js"></script>
    <script src="js/app.js"></script>
</body>
</html>
