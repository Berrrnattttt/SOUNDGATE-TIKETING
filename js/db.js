/* ==========================================================================
   SOUNDGATE — Database Engine (LocalStorage)
   Seed konser, orders, tickets, dan gate logs.
   ========================================================================== */

const DB_KEY = 'soundgate_db_v1';

const SEED_CONCERTS = [
    {
        id: 'c-coldplay', title: 'Coldplay: Music of the Spheres World Tour', artist: 'Coldplay',
        category: 'internasional', city: 'Jakarta', venue: 'Gelora Bung Karno', date: '2026-11-15', time: '19:00 WIB',
        genre: 'Pop Rock', emoji: '🪐', colors: ['#2563EB', '#DB2777'], code: 'CP', promoter: 'seller-pk',
        description: 'Tur dunia Coldplay dengan pertunjukan cahaya xyloband dan panggung ramah lingkungan.',
        tiers: [
            { id: 'vvip', name: 'VVIP Ultimate Experience', price: 11000000, quota: 200, sold: 152 },
            { id: 'vip', name: 'VIP Seated', price: 5700000, quota: 800, sold: 610 },
            { id: 'festival', name: 'Festival Standing', price: 3500000, quota: 3000, sold: 2410 },
            { id: 'tribune', name: 'Tribune Category 3', price: 1500000, quota: 5000, sold: 3800 }
        ]
    },
    {
        id: 'c-brunomars', title: 'Bruno Mars Live in Jakarta 2026', artist: 'Bruno Mars',
        category: 'internasional', city: 'Jakarta', venue: 'Jakarta International Stadium', date: '2026-12-05', time: '20:00 WIB',
        genre: 'R&B / Funk', emoji: '🎷', colors: ['#B45309', '#9333EA'], code: 'BM', promoter: 'seller-pk',
        description: '24K Magic hingga Die With A Smile — malam penuh groove bersama Bruno Mars.',
        tiers: [
            { id: 'vvip', name: 'VVIP Gold Lounge', price: 9500000, quota: 150, sold: 88 },
            { id: 'vip', name: 'VIP', price: 4800000, quota: 700, sold: 420 },
            { id: 'festival', name: 'Festival Standing', price: 2900000, quota: 2500, sold: 1500 },
            { id: 'tribune', name: 'Tribune', price: 1250000, quota: 4000, sold: 2100 }
        ]
    },
    {
        id: 'c-taylor', title: 'Taylor Swift | The Eras Tour Asia', artist: 'Taylor Swift',
        category: 'internasional', city: 'Singapore', venue: 'National Stadium Singapore', date: '2027-01-20', time: '19:30 SGT',
        genre: 'Pop', emoji: '✨', colors: ['#DB2777', '#7C3AED'], code: 'TS', promoter: 'seller-pk',
        description: 'Perjalanan melintasi seluruh era musik Taylor Swift dalam satu malam spektakuler.',
        tiers: [
            { id: 'vvip', name: 'VVIP Eras Package', price: 15500000, quota: 120, sold: 120 },
            { id: 'vip', name: 'VIP Cat 1', price: 6800000, quota: 900, sold: 870 },
            { id: 'festival', name: 'Festival Standing', price: 3900000, quota: 3500, sold: 3100 },
            { id: 'tribune', name: 'Tribune Cat 4', price: 1900000, quota: 6000, sold: 5200 }
        ]
    },
    {
        id: 'c-olivia', title: 'Olivia Rodrigo: GUTS World Tour', artist: 'Olivia Rodrigo',
        category: 'internasional', city: 'Jakarta', venue: 'Indonesia Arena', date: '2027-02-14', time: '19:00 WIB',
        genre: 'Pop Punk', emoji: '💜', colors: ['#7C3AED', '#E11D48'], code: 'OR', promoter: 'seller-pk',
        description: 'GUTS World Tour hadir di Jakarta dengan energi pop-punk yang meledak-ledak.',
        tiers: [
            { id: 'vip', name: 'VIP Soundcheck Party', price: 4200000, quota: 300, sold: 140 },
            { id: 'festival', name: 'Festival Standing', price: 2400000, quota: 2000, sold: 980 },
            { id: 'tribune', name: 'Tribune', price: 1100000, quota: 3000, sold: 1200 }
        ]
    },
    {
        id: 'c-so7', title: 'Sheila on 7: Tunggu Aku di Jakarta', artist: 'Sheila on 7',
        category: 'lokal', city: 'Jakarta', venue: 'Gelora Bung Karno', date: '2026-11-28', time: '19:00 WIB',
        genre: 'Pop Rock', emoji: '🎸', colors: ['#0F766E', '#CA8A04'], code: 'SO7', promoter: 'seller-pk',
        description: 'Konser nostalgia terbesar Sheila on 7 — Dan, Sephia, hingga Melompat Lebih Tinggi.',
        tiers: [
            { id: 'vip', name: 'VIP', price: 1850000, quota: 500, sold: 330 },
            { id: 'festival', name: 'Festival Standing', price: 950000, quota: 4000, sold: 2650 },
            { id: 'tribune', name: 'Tribune', price: 550000, quota: 6000, sold: 3100 }
        ]
    },
    {
        id: 'c-hindia', title: 'Hindia: Lagipula Hidup Akan Berakhir Tour', artist: 'Hindia',
        category: 'lokal', city: 'Bandung', venue: 'Sabuga ITB', date: '2026-12-12', time: '19:30 WIB',
        genre: 'Indie Pop', emoji: '🌙', colors: ['#1E3A8A', '#64748B'], code: 'HND', promoter: 'seller-pk',
        description: 'Baskara Putra membawakan album Lagipula Hidup Akan Berakhir secara utuh.',
        tiers: [
            { id: 'vip', name: 'VIP', price: 950000, quota: 300, sold: 210 },
            { id: 'festival', name: 'Festival Standing', price: 450000, quota: 2000, sold: 1340 }
        ]
    },
    {
        id: 'c-dewa19', title: 'Dewa 19 All Stars: 30 Tahun Berkarya', artist: 'Dewa 19',
        category: 'lokal', city: 'Surabaya', venue: 'Stadion Gelora Bung Tomo', date: '2027-01-10', time: '19:00 WIB',
        genre: 'Rock', emoji: '🔥', colors: ['#991B1B', '#1F2937'], code: 'D19', promoter: 'seller-pk',
        description: 'Ahmad Dhani bersama Once, Ari Lasso, dan Virzha dalam satu panggung legendaris.',
        tiers: [
            { id: 'vvip', name: 'VVIP Meet & Greet', price: 3500000, quota: 100, sold: 64 },
            { id: 'vip', name: 'VIP', price: 1500000, quota: 600, sold: 380 },
            { id: 'festival', name: 'Festival Standing', price: 750000, quota: 5000, sold: 2900 },
            { id: 'tribune', name: 'Tribune', price: 400000, quota: 8000, sold: 4100 }
        ]
    },
    {
        id: 'c-bernadya', title: 'Bernadya: Sialnya, Hidup Harus Tetap Berjalan', artist: 'Bernadya',
        category: 'lokal', city: 'Yogyakarta', venue: 'Jogja Expo Center', date: '2026-12-20', time: '19:00 WIB',
        genre: 'Pop Ballad', emoji: '🌷', colors: ['#BE185D', '#F59E0B'], code: 'BRN', promoter: 'seller-pk',
        description: 'Konser tunggal Bernadya dengan aransemen orkestra intim.',
        tiers: [
            { id: 'vip', name: 'VIP Seated', price: 1200000, quota: 250, sold: 190 },
            { id: 'festival', name: 'Festival Standing', price: 550000, quota: 1800, sold: 1120 }
        ]
    }
];

const SEED_USERS = [
    { id: 'buyer-budi', role: 'buyer', name: 'Budi Santoso', email: 'budi@gmail.com', label: 'Pembeli' },
    { id: 'seller-pk', role: 'seller', name: 'PK Entertainment', email: 'promotor@pkentertainment.id', label: 'Promotor' },
    { id: 'admin', role: 'admin', name: 'Super Admin', email: 'admin@soundgate.id', label: 'Super Admin' }
];

function buildSeedData() {
    const now = Date.now();
    const orders = [
        {
            id: 'ORD-260930-A1B2', userId: 'buyer-budi', concertId: 'c-coldplay', tierId: 'festival', qty: 2,
            subtotal: 7000000, fee: 350000, total: 7350000, method: 'qris', buyerName: 'Budi Santoso',
            email: 'budi@gmail.com', createdAt: new Date(now - 6 * 86400000).toISOString()
        },
        {
            id: 'ORD-261002-C3D4', userId: 'buyer-budi', concertId: 'c-so7', tierId: 'vip', qty: 1,
            subtotal: 1850000, fee: 92500, total: 1942500, method: 'bca_va', buyerName: 'Budi Santoso',
            email: 'budi@gmail.com', createdAt: new Date(now - 3 * 86400000).toISOString()
        }
    ];
    const tickets = [
        {
            code: 'TKT-CP-99812A', orderId: 'ORD-260930-A1B2', userId: 'buyer-budi', concertId: 'c-coldplay', tierId: 'festival',
            holderName: 'Budi Santoso', idNumber: '3171012304950001', seat: 'FEST-A / Standing', gate: 'GATE 2 (FESTIVAL STANDING)',
            status: 'valid', checkedInAt: null, checkedInGate: null
        },
        {
            code: 'TKT-CP-99812B', orderId: 'ORD-260930-A1B2', userId: 'buyer-budi', concertId: 'c-coldplay', tierId: 'festival',
            holderName: 'Budi Santoso', idNumber: '3171012304950001', seat: 'FEST-A / Standing', gate: 'GATE 2 (FESTIVAL STANDING)',
            status: 'used', checkedInAt: new Date(now - 2 * 3600000).toISOString(), checkedInGate: 'GATE 2 (FESTIVAL STANDING)'
        },
        {
            code: 'TKT-SO7-55120C', orderId: 'ORD-261002-C3D4', userId: 'buyer-budi', concertId: 'c-so7', tierId: 'vip',
            holderName: 'Budi Santoso', idNumber: '3171012304950001', seat: 'VIP-B / 14', gate: 'GATE 1 (VIP & VVIP ENTRANCE)',
            status: 'valid', checkedInAt: null, checkedInGate: null
        }
    ];
    tickets.forEach(t => { t.qrPayload = DB.signTicket(t); });
    const gateLogs = [
        {
            time: tickets[1].checkedInAt, code: 'TKT-CP-99812B', holder: 'Budi Santoso',
            gate: 'GATE 2 (FESTIVAL STANDING)', result: 'valid'
        }
    ];
    return {
        concerts: JSON.parse(JSON.stringify(SEED_CONCERTS)),
        users: SEED_USERS,
        orders,
        tickets,
        gateLogs,
        currentUserId: 'buyer-budi'
    };
}

const DB = {
    data: null,

    load() {
        try {
            const raw = localStorage.getItem(DB_KEY);
            this.data = raw ? JSON.parse(raw) : null;
        } catch (e) {
            this.data = null;
        }
        if (!this.data || !Array.isArray(this.data.concerts)) {
            this.data = buildSeedData();
            this.save();
        }
        return this.data;
    },

    save() {
        try {
            localStorage.setItem(DB_KEY, JSON.stringify(this.data));
        } catch (e) {
            console.warn('Gagal menyimpan ke LocalStorage', e);
        }
    },

    reset() {
        localStorage.removeItem(DB_KEY);
        this.data = buildSeedData();
        this.save();
    },

    // Simple deterministic signature so QR payloads can't be hand-forged trivially.
    signTicket(t) {
        const base = `${t.code}|${t.concertId}|${t.tierId}|${t.idNumber}`;
        let h = 2166136261;
        for (let i = 0; i < base.length; i++) {
            h ^= base.charCodeAt(i);
            h = Math.imul(h, 16777619);
        }
        const sig = (h >>> 0).toString(16).toUpperCase().padStart(8, '0');
        return `SOUNDGATE:${t.code}:${sig}`;
    },

    getConcerts() {
        return this.data.concerts;
    },

    getConcert(id) {
        return this.data.concerts.find(c => c.id === id);
    },

    addConcert(concert) {
        this.data.concerts.unshift(concert);
        this.save();
    },

    deleteConcert(id) {
        this.data.concerts = this.data.concerts.filter(c => c.id !== id);
        this.save();
    },

    getTicket(code) {
        return this.data.tickets.find(t => t.code === code);
    },

    getTicketsByUser(userId) {
        return this.data.tickets.filter(t => t.userId === userId);
    },

    // Atomically decrement stock and create order + tickets.
    createOrder({ userId, concertId, tierId, qty, method, attendee, subtotal, fee, total }) {
        const concert = this.getConcert(concertId);
        if (!concert) throw new Error('Konser tidak ditemukan.');
        const tier = concert.tiers.find(t => t.id === tierId);
        if (!tier) throw new Error('Kategori tiket tidak ditemukan.');
        if (tier.quota - tier.sold < qty) throw new Error('Sisa kuota tiket tidak mencukupi.');

        tier.sold += qty;

        const d = new Date();
        const ymd = d.toISOString().slice(2, 10).replace(/-/g, '');
        const orderId = `ORD-${ymd}-${randomCode(4)}`;
        const order = {
            id: orderId, userId, concertId, tierId, qty, subtotal, fee, total, method,
            buyerName: attendee.name, email: attendee.email, createdAt: d.toISOString()
        };
        this.data.orders.unshift(order);

        const gate = gateForTier(tierId);
        const prefix = `TKT-${concert.code || 'SG'}-`;
        const tickets = [];
        for (let i = 0; i < qty; i++) {
            const t = {
                code: prefix + randomCode(6), orderId, userId, concertId, tierId,
                holderName: attendee.name, idNumber: attendee.idNumber,
                seat: seatForTier(tierId), gate, status: 'valid', checkedInAt: null, checkedInGate: null
            };
            t.qrPayload = this.signTicket(t);
            tickets.push(t);
        }
        this.data.tickets.unshift(...tickets);
        this.save();
        return { order, tickets };
    },

    addGateLog(entry) {
        this.data.gateLogs.unshift(entry);
        this.data.gateLogs = this.data.gateLogs.slice(0, 200);
        this.save();
    }
};

function randomCode(len) {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let s = '';
    for (let i = 0; i < len; i++) s += chars[Math.floor(Math.random() * chars.length)];
    return s;
}

function gateForTier(tierId) {
    if (tierId === 'vvip' || tierId === 'vip') return 'GATE 1 (VIP & VVIP ENTRANCE)';
    if (tierId === 'festival') return 'GATE 2 (FESTIVAL STANDING)';
    return Math.random() < 0.5 ? 'GATE 3 (TRIBUNE BARAT)' : 'GATE 4 (TRIBUNE TIMUR)';
}

function seatForTier(tierId) {
    const row = 'ABCDEFGH'[Math.floor(Math.random() * 8)];
    if (tierId === 'festival') return `FEST-${row} / Standing`;
    const num = 1 + Math.floor(Math.random() * 40);
    return `${tierId.toUpperCase()}-${row} / ${num}`;
}

DB.load();
