// Modern Language Switcher
let currentLanguage = 'en';

const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About', 
        'nav-team': 'Team',
        'nav-contact': 'Contact',
        'nav-donate': 'Donate',
        
        // Hero section
        'hero-title': 'THE PLACE',
        'hero-donate-btn': 'DONATE',
        'hero-subtitle': 'building a creative space that feels like home',
        
        // Vision section
        'vision-title': 'Our Vision',
        'vision-text': 'Creating a world-class action sports facility that serves as a hub for the Thai skateboarding, biking, and action sports community, fostering creativity, skill development, and cultural exchange.',
        
        // Vision section details
        'skatepark-title': 'Skatepark',
        'community-title': 'Community & Coworking',
        'cafe-title': 'Café & Retail',
        

        
        // Investment section

        
        // Team section
        'team-title': 'Our Team',
        'team-description': 'We are more than just a team — we are an International community-driven collective, united by our passion for action sports, event management, music, Food and creativity. Together, we\'re building something unique, with a vision to inspire and bring people together.',
        'member1-name': 'SEKI',
        'member1-role': 'Founder',
        'member1-desc': 'Proud dad, skateboarder, and multilingual entrepreneur with 20+ years in Thailand. Founder of The Place — a family-inspired space where skateboarding and community thrive.',
        'member2-name': 'ARTEM',
        'member2-role': 'Digital Architect',
        'member2-desc': 'Tech & design expert, and BMX enthusiast. Shapes The Place\'s online presence—visuals, websites, and content—with authentic energy.',
        'member3-name': 'KENJI',
        'member3-role': 'Skatepark Designer',
        'member3-desc': 'Skateboarding prodigy. Reached high level by age 12, rode at Jackalope Festival (Canada), Thai national team rider. Inspires young skaters and actively designs skateparks.',
        'member4-name': 'ANN',
        'member4-role': 'Café Manager & Chef',
        'member4-desc': 'Passionate mom with restaurant management experience. Creates a welcoming atmosphere at The Place, crafting delicious meals and unique menus that bring the community together.',
        
        // Funding section
        'funding-title': 'Funding Progress',
        'raised-amount': '฿1,438,999',
        'raised-label': 'Raised',
        'progress-label': 'Progress',
        'remaining-amount': '฿4,298,000',
        'remaining-label': 'Remaining',
        'progress-text': '33% of target reached',

        // Donate section
        'donate-title': 'Support Our Mission',
        'donate-text': 'Join us in building a creative space that feels like home. Every contribution brings us closer to our goal.',
        'donate-button': 'Make a Contribution',
        'payment-methods': 'Secure payments via PromptPay, Bank Transfer, or PayPal',
        
        // Contact section
        'contact-title': 'Get in Touch',
        
        // Social section
        'social-title': 'Follow Our Journey',
        
        // Footer
        'footer-text': '© 2024 THE PLACE. All rights reserved.',
        'lang-display': 'TH'
    },
    th: {
        // Navigation
        'nav-home': 'หน้าแรก',
        'nav-about': 'เกี่ยวกับ',
        'nav-team': 'ทีมงาน', 
        'nav-contact': 'ติดต่อ',
        'nav-donate': 'บริจาค',
        
        // Hero section
        'hero-title': 'THE PLACE',
        'hero-donate-btn': 'บริจาค',
        'hero-subtitle': 'สร้างพื้นที่สร้างสรรค์ที่รู้สึกเหมือนบ้าน',
        
        // Vision section
        'vision-title': 'วิสัยทัศน์ของเรา',
        'vision-text': 'การสร้างสิ่งอำนวยความสะดวกกีฬาเอ็กซ์ตรีมระดับโลกที่ทำหน้าที่เป็นศูนย์กลางของชุมชนสเก็ตบอร์ด จักรยาน และกีฬาเอ็กซ์ตรีมไทย ส่งเสริมความคิดสร้างสรรค์ การพัฒนาทักษะ และการแลกเปลี่ยนวัฒนธรรม',
        
        // Vision section details
        'skatepark-title': 'สเก็ตพาร์ค',
        'community-title': 'ชุมชนและทำงานร่วม',
        'cafe-title': 'คาเฟ่และร้านค้า',
        

        

        
        // Team section
        'team-title': 'ทีมงานของเรา',
        'team-description': 'เราไม่ใช่แค่ทีม — เราเป็นกลุ่มชุมชนนานาชาติที่ขับเคลื่อนด้วยชุมชน รวมตัวกันด้วยความหลงใหลในกีฬาเอ็กซ์ตรีม การจัดการอีเวนต์ ดนตรี อาหาร และความคิดสร้างสรรค์ ร่วมกันเรากำลังสร้างสิ่งที่ไม่ซ้ำใคร ด้วยวิสัยทัศน์ที่จะสร้างแรงบันดาลใจและนำผู้คนมารวมกัน',
        'member1-name': 'SEKI',
        'member1-role': 'ผู้ก่อตั้ง',
        'member1-desc': 'พ่อที่ภูมิใจ นักสเก็ต และผู้ประกอบการหลายภาษา 20+ ปีในประเทศไทย ผู้ก่อตั้ง The Place — พื้นที่ที่ได้รับแรงบันดาลใจจากครอบครัวที่สเก็ตบอร์ดและชุมชนเจริญรุ่งเรือง',
        'member2-name': 'ARTEM',
        'member2-role': 'สถาปนิกดิจิทัล',
        'member2-desc': 'ผู้เชี่ยวชาญด้านเทคโนโลยีและการออกแบบ และผู้หลงใหล BMX สร้างสรรค์การปรากฏตัวออนไลน์ของ The Place — ภาพ เว็บไซต์ และเนื้อหา — ด้วยพลังงานที่แท้จริง',
        'member3-name': 'KENJI',
        'member3-role': 'นักออกแบบสเก็ตพาร์ค',
        'member3-desc': 'อัจฉริยะสเก็ตบอร์ด บรรลุระดับสูงเมื่ออายุ 12 ปี ขี่ที่ Jackalope Festival (แคนาดา) นักขี่ทีมชาติไทย สร้างแรงบันดาลใจให้กับนักสเก็ตรุ่นเยาว์และออกแบบสเก็ตพาร์คอย่างแข็งขัน',
        'member4-name': 'ANN',
        'member4-role': 'ผู้จัดการคาเฟ่ & เชฟ',
        'member4-desc': 'แม่ที่หลงใหลพร้อมประสบการณ์การจัดการร้านอาหาร สร้างบรรยากาศที่เป็นมิตรที่ The Place สร้างสรรค์อาหารอร่อยและเมนูที่ไม่ซ้ำใครที่นำชุมชนมารวมกัน',
        
        // Funding section
        'funding-title': 'ความคืบหน้าเงินทุน',
        'raised-amount': '฿1,438,999',
        'raised-label': 'ได้รับ',
        'progress-label': 'ความคืบหน้า',
        'remaining-amount': '฿4,298,000',
        'remaining-label': 'ที่เหลือ',
        'progress-text': 'บรรลุ 33% ของเป้าหมาย',

        // Donate section
        'donate-title': 'สนับสนุนภารกิจของเรา',
        'donate-text': 'ร่วมกับเราในการสร้างพื้นที่สร้างสรรค์ที่รู้สึกเหมือนบ้าน ทุกการสนับสนุนทำให้เราใกล้เป้าหมายมากขึ้น',
        'donate-button': 'ร่วมสนับสนุน',
        'payment-methods': 'การชำระเงินที่ปลอดภัยผ่าน PromptPay, โอนธนาคาร หรือ PayPal',
        
        // Contact section
        'contact-title': 'ติดต่อเรา',
        
        // Social section
        'social-title': 'ติดตามการเดินทางของเรา',
        
        // Footer
        'footer-text': '© 2024 THE PLACE. สงวนลิขสิทธิ์',
        'lang-display': 'EN'
    }
};

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'th' : 'en';
    
    // Update all text elements with translations
    Object.keys(translations[currentLanguage]).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = translations[currentLanguage][key];
        }
    });

    // Update document language attribute
    document.documentElement.lang = currentLanguage;
    
    // Save language preference
    localStorage.setItem('preferredLanguage', currentLanguage);
}

// Initialize language on page load
function initLanguage() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && savedLanguage !== currentLanguage) {
        toggleLanguage();
    }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    initLanguage();
    
    // Add smooth scrolling to all navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active navigation link
                document.querySelectorAll('.nav-link').forEach(navLink => {
                    navLink.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    // Progress bar animation on scroll
    const progressFill = document.querySelector('.progress-fill');
    const progressSection = document.querySelector('.funding-progress');
    
    if (progressFill && progressSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        progressFill.style.width = '36%';
                    }, 500);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(progressSection);
    }

    // Modern hover effects for cards
    const cards = document.querySelectorAll('.team-member, .benefit-item, .zone-card, .gallery-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });

    // Modern navbar scroll effect
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(220, 38, 38, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#dc2626';
            header.style.backdropFilter = 'none';
        }
        
        // Update active navigation based on scroll position
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (currentScrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
        
        lastScrollY = currentScrollY;
    });

    // Modern gallery lightbox effect
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            // Create lightbox overlay
            const overlay = document.createElement('div');
            overlay.style.cssText = 
                'position: fixed;' +
                'top: 0;' +
                'left: 0;' +
                'width: 100%;' +
                'height: 100%;' +
                'background: rgba(0, 0, 0, 0.9);' +
                'display: flex;' +
                'align-items: center;' +
                'justify-content: center;' +
                'z-index: 10000;' +
                'opacity: 0;' +
                'transition: opacity 0.3s ease;' +
                'cursor: pointer;';
            
            const lightboxImg = document.createElement('img');
            lightboxImg.src = this.src;
            lightboxImg.style.cssText = 
                'max-width: 90%;' +
                'max-height: 90%;' +
                'object-fit: contain;' +
                'border-radius: 8px;' +
                'box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);';
            
            overlay.appendChild(lightboxImg);
            document.body.appendChild(overlay);
            
            // Animate in
            setTimeout(() => {
                overlay.style.opacity = '1';
            }, 10);
            
            // Close on click
            overlay.addEventListener('click', () => {
                overlay.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(overlay);
                }, 300);
            });
        });
    });

    // Add functionality to social media links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        if (!link.href || link.href === '#') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const platform = this.classList.contains('instagram') ? 'Instagram' : 
                               this.classList.contains('whatsapp') ? 'WhatsApp' : 'Telegram';
                alert(`${platform} coming soon! Please contact us directly at +66 891-891-777`);
            });
        }
    });

    // Contact link functionality
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        if (link.href.startsWith('mailto:') || link.href.startsWith('tel:')) {
            // These will work natively
        } else {
            link.addEventListener('click', function(e) {
                if (this.textContent.includes('Hua Hin')) {
                    e.preventDefault();
                    alert('Visit us in Hua Hin, Thailand!\nExact address will be announced soon.');
                }
            });
        }
    });
}); 