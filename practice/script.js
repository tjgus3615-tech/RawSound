/**
 * Summer Portfolio & RawSound App JavaScript
 * Logic: Theme toggle, Mobile nav, Interactive Accent Simulator, Guestbook logic, Reveal animations
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. Dark / Light Theme Toggle
    // ----------------------------------------------------------------------
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;
    
    const savedTheme = localStorage.getItem('summer_portfolio_theme') || 'light';
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeIcon) themeIcon.className = 'fa-solid fa-sun';
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('summer_portfolio_theme', 'light');
                if (themeIcon) themeIcon.className = 'fa-solid fa-moon';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('summer_portfolio_theme', 'dark');
                if (themeIcon) themeIcon.className = 'fa-solid fa-sun';
            }
        });
    }

    // ----------------------------------------------------------------------
    // 2. Mobile Navbar Toggle
    // ----------------------------------------------------------------------
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isOpened = navLinks.classList.contains('active');
            mobileMenuBtn.querySelector('i').className = isOpened ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                if (mobileMenuBtn.querySelector('i')) {
                    mobileMenuBtn.querySelector('i').className = 'fa-solid fa-bars';
                }
            });
        });
    }

    // ----------------------------------------------------------------------
    // 3. Navbar Scroll Active Link Spy
    // ----------------------------------------------------------------------
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    });

    // ----------------------------------------------------------------------
    // 4. RawSound Accent Simulator Interactive Widget
    // ----------------------------------------------------------------------
    const accentChips = document.querySelectorAll('.accent-chip');
    const demoPhrase = document.getElementById('demoPhrase');
    const playDemoBtn = document.getElementById('playDemoBtn');
    const recordDemoBtn = document.getElementById('recordDemoBtn');
    const demoResultBox = document.getElementById('demoResultBox');

    const accentPhrases = {
        'uk-scouse': {
            phrase: '"A bottle of water, mate!"',
            tip: 'AI Tip: "Excellent execution of the Liverpool Scouse glottal stop and intonation pattern!"',
            lang: 'en-GB'
        },
        'us-southern': {
            phrase: '"Howdy y’all, nice to meet ya!"',
            tip: 'AI Tip: "92% match on US Southern drawl vowel elongation and relaxed tone!"',
            lang: 'en-US'
        },
        'au-outback': {
            phrase: '"G’day mate, how’s it going today?"',
            tip: 'AI Tip: "Accurately reproduced the Australian Outback rising inflection pattern!"',
            lang: 'en-AU'
        },
        'ie-dublin': {
            phrase: '"Grand day out, isn’t it now?"',
            tip: 'AI Tip: "Great catch on the Irish Dublin vowel melody and crisp rhythm!"',
            lang: 'en-IE'
        }
    };

    let selectedAccent = 'uk-scouse';

    accentChips.forEach(chip => {
        chip.addEventListener('click', () => {
            accentChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            selectedAccent = chip.getAttribute('data-accent');
            const data = accentPhrases[selectedAccent];

            if (demoPhrase && data) {
                demoPhrase.innerText = data.phrase;
            }
            if (demoResultBox) {
                demoResultBox.style.display = 'none';
            }
        });
    });

    // Play TTS speech simulation
    if (playDemoBtn) {
        playDemoBtn.addEventListener('click', () => {
            const data = accentPhrases[selectedAccent];
            if (!data) return;

            // Animate waveform
            const waveAnim = document.getElementById('pixelWaveAnim');
            if (waveAnim) {
                waveAnim.style.opacity = '1';
            }

            // Web Speech API
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(data.phrase.replace(/"/g, ''));
                utterance.lang = data.lang;
                utterance.rate = 0.9;
                window.speechSynthesis.speak(utterance);
            }

            showNotification(`🔊 Playing ${selectedAccent.toUpperCase()} accent demo...`);
        });
    }

    // Record & AI Evaluation simulation
    if (recordDemoBtn) {
        recordDemoBtn.addEventListener('click', () => {
            showNotification('🎙️ Recording voice... (AI is analyzing accent accuracy)');
            
            setTimeout(() => {
                if (demoResultBox) {
                    const data = accentPhrases[selectedAccent];
                    const score = Math.floor(Math.random() * 15) + 85; // 85~99
                    demoResultBox.querySelector('.score-num').innerText = score;
                    demoResultBox.querySelector('.result-text').innerHTML = `<p>${data.tip}</p>`;
                    demoResultBox.style.display = 'flex';
                }
            }, 1200);
        });
    }

    // Notification Toast Helper
    function showNotification(msg) {
        const toast = document.createElement('div');
        toast.style.position = 'fixed';
        toast.style.bottom = '30px';
        toast.style.right = '30px';
        toast.style.background = 'var(--accent-mint)';
        toast.style.color = '#1B1F3B';
        toast.style.border = '3px solid #1B1F3B';
        toast.style.padding = '0.9rem 1.4rem';
        toast.style.boxShadow = 'var(--pixel-shadow-sm)';
        toast.style.zIndex = '9999';
        toast.style.fontFamily = 'var(--font-pixel)';
        toast.style.fontSize = '0.95rem';
        toast.style.transition = 'all 0.2s ease';
        toast.innerText = msg;

        document.body.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            setTimeout(() => toast.remove(), 200);
        }, 3000);
    }
});
