* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #2563eb;
    --primary-dark: #1d4ed8;
    --dark: #111827;
    --text: #334155;
    --muted: #64748b;
    --light: #f8fafc;
    --border: #e2e8f0;
    --white: #ffffff;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: var(--light);
    color: var(--text);
    line-height: 1.6;
}

/* NAVBAR */

.navbar {
    background: white;
    min-height: 72px;
    padding: 15px 7%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 15px rgba(0,0,0,0.07);
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo {
    color: var(--dark);
    font-size: 21px;
    font-weight: 800;
    text-decoration: none;
}

nav {
    display: flex;
    align-items: center;
    gap: 22px;
}

nav a {
    color: #475569;
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
}

nav a:hover,
nav a.active {
    color: var(--primary);
}

.nav-btn {
    background: var(--primary);
    color: white !important;
    padding: 9px 17px;
    border-radius: 7px;
}

/* HERO */

.hero {
    min-height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 70px 7%;
    background:
        radial-gradient(circle at 10% 20%, #dbeafe, transparent 35%),
        linear-gradient(135deg, #eff6ff, #ffffff);
}

.hero-content {
    max-width: 900px;
}

.badge {
    display: inline-block;
    padding: 8px 17px;
    background: #dbeafe;
    color: var(--primary);
    border-radius: 30px;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 22px;
}

.hero h1 {
    color: var(--dark);
    font-size: 58px;
    line-height: 1.1;
    margin-bottom: 25px;
}

.hero h1 span {
    color: var(--primary);
}

.hero p {
    max-width: 750px;
    margin: auto;
    color: var(--muted);
    font-size: 18px;
}

.hero-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 35px;
}

/* BUTTONS */

.btn {
    display: inline-block;
    text-decoration: none;
    padding: 13px 23px;
    border-radius: 8px;
    font-weight: 700;
    transition: 0.2s;
}

.btn.primary {
    background: var(--primary);
    color: white;
}

.btn.primary:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
}

.btn.outline {
    background: white;
    color: var(--primary);
    border: 1px solid var(--primary);
}

/* STATS */

.stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background: white;
    padding: 40px 7%;
    border-bottom: 1px solid var(--border);
}

.stat {
    text-align: center;
    border-right: 1px solid var(--border);
}

.stat:last-child {
    border-right: none;
}

.stat h2 {
    color: var(--primary);
    font-size: 34px;
}

.stat p {
    color: var(--muted);
}

/* SECTIONS */

.section {
    padding: 85px 7%;
}

.section-heading {
    text-align: center;
    margin-bottom: 45px;
}

.section-heading span {
    color: var(--primary);
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 2px;
}

.section-heading h2 {
    color: var(--dark);
    font-size: 38px;
    margin: 7px 0;
}

.section-heading p {
    color: var(--muted);
}

.process-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 22px;
}

.process-card {
    background: white;
    border: 1px solid var(--border);
    padding: 30px 25px;
    border-radius: 14px;
    text-align: center;
    transition: 0.25s;
}

.process-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.08);
}

.process-icon {
    font-size: 40px;
    margin-bottom: 15px;
}

.process-card h3 {
    color: var(--dark);
    margin-bottom: 10px;
}

.process-card p {
    color: var(--muted);
}

/* CATEGORIES */

.categories {
    padding: 70px 7%;
    background: white;
}

.category-grid {
    max-width: 950px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
}

.category {
    padding: 22px;
    border: 1px solid var(--border);
    border-radius: 12px;
    font-size: 17px;
    display: flex;
    gap: 12px;
    align-items: center;
}

.category strong {
    color: var(--dark);
}

/* CTA */

.cta {
    text-align: center;
    padding: 80px 20px;
    background: #eff6ff;
}

.cta h2 {
    color: var(--dark);
    font-size: 36px;
}

.cta p {
    color: var(--muted);
    margin: 10px 0 25px;
}

/* PAGE HEADER */

.page-header {
    padding: 65px 20px;
    text-align: center;
    background: #eff6ff;
}

.page-header h1 {
    color: var(--dark);
    font-size: 42px;
}

.page-header p {
    color: var(--muted);
    margin-top: 8px;
}

/* FORM */

.form-section {
    padding: 70px 20px;
}

.form-container {
    max-width: 850px;
    margin: auto;
    background: white;
    padding: 42px;
    border-radius: 15px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.06);
}

.form-title {
    margin-bottom: 30px;
}

.form-title h2 {
    color: var(--dark);
}

.form-title p {
    color: var(--muted);
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    color: #334155;
    font-weight: 700;
    margin-bottom: 8px;
}

input,
select,
textarea {
    width: 100%;
    padding: 13px 14px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    font-size: 15px;
    font-family: inherit;
    outline: none;
    background: white;
}

input:focus,
select:focus,
textarea:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
}

textarea {
    resize: vertical;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.submit-btn {
    width: 100%;
    padding: 14px;
    border: none;
    border-radius: 8px;
    background: var(--primary);
    color: white;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
}

.submit-btn:hover {
    background: var(--primary-dark);
}

#message,
#loginMessage,
#signupMessage {
    margin-top: 15px;
    text-align: center;
    font-weight: 700;
}

/* PROBLEMS */

.problem-section {
    padding: 65px 7%;
}

.filters {
    max-width: 1100px;
    margin: 0 auto 35px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 15px;
}

.problem-grid {
    max-width: 1100px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
}

.problem-card {
    background: white;
    border: 1px solid var(--border);
    padding: 25px;
    border-radius: 14px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.04);
}

.problem-card h3 {
    color: var(--dark);
    margin: 15px 0 10px;
}

.problem-card p {
    color: var(--muted);
    margin-bottom: 15px;
}

.tag {
    display: inline-block;
    padding: 5px 11px;
    border-radius: 20px;
    background: #dbeafe;
    color: var(--primary);
    font-size: 12px;
    font-weight: 800;
}

.impact {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 800;
    margin-left: 5px;
}

.impact.high,
.impact.critical {
    background: #fee2e2;
    color: #b91c1c;
}

.impact.medium {
    background: #fef3c7;
    color: #92400e;
}

.card-location {
    color: #64748b;
    font-size: 14px;
}

.view-btn {
    display: inline-block;
    margin-top: 18px;
    color: var(--primary);
    text-decoration: none;
    font-weight: 700;
}

/* DETAILS */

.details-section {
    padding: 70px 20px;
}

.details-card {
    max-width: 850px;
    margin: auto;
    background: white;
    padding: 45px;
    border-radius: 15px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.06);
}

.details-card h1 {
    color: var(--dark);
    font-size: 40px;
    margin: 18px 0 5px;
}

.details-card h2 {
    color: var(--dark);
    margin-top: 30px;
    margin-bottom: 8px;
}

.details-card p {
    color: var(--muted);
}

.location {
    color: #64748b;
}

.status-box {
    margin: 25px 0;
    padding: 15px;
    background: #fff7ed;
    border-radius: 8px;
    color: #9a3412;
}

.details-card hr {
    border: none;
    border-top: 1px solid var(--border);
}

.detail-buttons {
    display: flex;
    gap: 12px;
    margin-top: 35px;
}

/* AUTH */

.auth-section {
    min-height: calc(100vh - 72px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 20px;
    background: #f1f5f9;
}

.auth-box {
    width: 100%;
    max-width: 450px;
    background: white;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 10px 35px rgba(0,0,0,0.08);
}

.auth-icon {
    font-size: 42px;
    text-align: center;
}

.auth-box h1 {
    text-align: center;
    color: var(--dark);
    margin-top: 10px;
}

.auth-box > p {
    text-align: center;
    color: var(--muted);
    margin-bottom: 25px;
}

.remember {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    font-size: 13px;
}

.remember label {
    display: flex;
    align-items: center;
    gap: 5px;
}

.remember input {
    width: auto;
}

.remember a,
.auth-link a {
    color: var(--primary);
    text-decoration: none;
}

.auth-link {
    margin-top: 20px;
}

/* ADMIN */

.admin-section {
    padding: 60px 7%;
}

.admin-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.admin-heading span {
    color: var(--primary);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 2px;
}

.admin-heading h1 {
    color: var(--dark);
    margin-top: 5px;
}

.admin-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 35px;
}

.admin-stat {
    background: white;
    padding: 25px;
    border-radius: 12px;
    border: 1px solid var(--border);
}

.admin-stat span {
    font-size: 25px;
}

.admin-stat h2 {
    color: var(--primary);
    font-size: 30px;
}

.admin-stat p {
    color: var(--muted);
}

.table-container {
    background: white;
    border-radius: 14px;
    padding: 25px;
    overflow-x: auto;
}

.table-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.table-title input {
    max-width: 250px;
}

table {
    width: 100%;
    border-collapse: collapse;
    min-width: 800px;
}

th,
td {
    padding: 15px;
    border-bottom: 1px solid var(--border);
    text-align: left;
}

th {
    color: var(--dark);
    background: #f8fafc;
}

.status {
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 700;
}

.status.pending {
    background: #fef3c7;
    color: #92400e;
}

.status.approved {
    background: #dcfce7;
    color: #166534;
}

.approve,
.reject {
    padding: 7px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 2px;
}

.approve {
    background: #dcfce7;
    color: #166534;
}

.reject {
    background: #fee2e2;
    color: #991b1b;
}

/* FOOTER */

footer {
    background: #111827;
    color: white;
    padding: 30px 7%;
    text-align: center;
}

footer h3 {
    margin-bottom: 5px;
}

footer p {
    color: #cbd5e1;
}

/* MOBILE */

@media (max-width: 900px) {

    .navbar {
        flex-direction: column;
        gap: 15px;
    }

    nav {
        flex-wrap: wrap;
        justify-content: center;
    }

    .hero h1 {
        font-size: 42px;
    }

    .stats,
    .process-grid,
    .problem-grid,
    .admin-stats {
        grid-template-columns: repeat(2, 1fr);
    }

    .category-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .filters {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 600px) {

    .hero {
        padding: 55px 20px;
    }

    .hero h1 {
        font-size: 34px;
    }

    .hero p {
        font-size: 16px;
    }

    .hero-buttons,
    .detail-buttons {
        flex-direction: column;
    }

    .stats,
    .process-grid,
    .problem-grid,
    .admin-stats,
    .category-grid,
    .form-row {
        grid-template-columns: 1fr;
    }

    .stat {
        border-right: none;
        border-bottom: 1px solid var(--border);
        padding: 15px;
    }

    .form-container,
    .auth-box,
    .details-card {
        padding: 25px;
    }

    .page-header h1 {
        font-size: 32px;
    }

    .details-card h1 {
        font-size: 30px;
    }

    .admin-heading {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }
}
