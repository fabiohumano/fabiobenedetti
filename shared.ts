
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Chaves de acesso ao Firebase (Seu depósito de dados)
export const firebaseConfig = { 
    apiKey: "AIzaSyDhSp-QPDZI2AbNrYdZO447NKTF2PMYjlQ", 
    authDomain: "humano-studio.firebaseapp.com", 
    projectId: "humano-studio", 
    storageBucket: "humano-studio.firebasestorage.app", 
    messagingSenderId: "938534325822", 
    appId: "1:938534325822:web:abf5443336ce3224190b6f" 
};

// Inicializa o banco de dados
export function initDB() {
    const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    return getFirestore(app);
}

// Configura o Menu Mobile (Hambúrguer)
export function setupMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const lines = [
        document.getElementById('line1'),
        document.getElementById('line2'),
        document.getElementById('line3')
    ];
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (!menuToggle || !mobileOverlay) return;

    let isMenuOpen = false;

    const toggle = () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileOverlay.classList.remove('opacity-0', 'pointer-events-none');
            if (lines[0]) lines[0].style.transform = 'translateY(8px) rotate(45deg)';
            if (lines[1]) lines[1].style.opacity = '0';
            if (lines[2]) lines[2].style.transform = 'translateY(-8px) rotate(-45deg)';
            document.body.style.overflow = 'hidden';
        } else {
            mobileOverlay.classList.add('opacity-0', 'pointer-events-none');
            if (lines[0]) lines[0].style.transform = 'none';
            if (lines[1]) lines[1].style.opacity = '1';
            if (lines[2]) lines[2].style.transform = 'none';
            document.body.style.overflow = '';
        }
    };

    menuToggle.addEventListener('click', toggle);
    mobileLinks.forEach(link => link.addEventListener('click', toggle));
}

// Configura o Rodapé e Slogan Dinâmicos
export function setupGlobalContent(db) {
    onSnapshot(doc(db, "site_content", "settings"), (snap) => {
        if (snap.exists()) {
            const d = snap.data();
            const footer = document.getElementById('dyn-footer-address');
            if (footer && d.footerAddress) {
                footer.innerHTML = d.footerAddress.replace(/\n/g, '<br>');
            }
            
            const slogan = document.getElementById('dyn-slogan');
            if (slogan && d.slogan) {
                slogan.innerHTML = d.slogan.replace(/\n/g, '<br>');
            }

            const desc = document.getElementById('dyn-seo-desc');
            if (desc && d.seoDesc) {
                desc.innerText = d.seoDesc;
            }
        }
    });
}

// Configura o Fundo Dinâmico da Página
export function setupBackground(db, pageKey) {
    onSnapshot(doc(db, "site_content", "backgrounds"), (snap) => {
        if (snap.exists()) {
            const bgs = snap.data();
            const bgUrl = bgs[pageKey] || bgs['home'] || '';
            const bgLayer = document.getElementById('dynamic-bg-layer') || document.getElementById('hero-bg') || document.getElementById('bg-layer');
            if (bgUrl && bgLayer) {
                bgLayer.style.backgroundImage = `url('${bgUrl}')`;
            }
        }
    });
}
