// ===== SCROLL SUAVE PARA LINKS DE NAVEGAÇÃO =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== MENU RESPONSIVO (HAMBURGER) =====
function createHamburgerMenu() {
    const navbar = document.querySelector('.navbar .wrapper');
    const navMenu = document.querySelector('.nav-menu');
    
    // Criar botão hamburger
    const hamburger = document.createElement('button');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '☰';
    hamburger.setAttribute('aria-label', 'Menu de Navegação');
    
    // Inserir hamburger no navbar
    navbar.appendChild(hamburger);
    
    // Mostrar/esconder menu ao clicar
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em algum link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Executar quando a página carregar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createHamburgerMenu);
} else {
    createHamburgerMenu();
}

// ===== ANIMAÇÕES AO ENTRAR NA TELA =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar seções para animação
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    observer.observe(section);
});

// ===== DESTAQUE NO LINK ATIVO (NAVBAR) =====
function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.style.color = 'var(--light-text)';
            if (link.getAttribute('href') === '#' + current) {
                link.style.color = 'var(--primary-color)';
            }
        });
    });
}


updateActiveLink();

    // ====== EFEITO DE DIGITAÇÃO ====== 

    const elemento = document .querySelector ('.hero h1');
    elemento.textContent = '';

    function tempoAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function digitar (trecho,velocidade, callback) {
        let i = 0;
        function proximaLetra() {      
            if (i < trecho.length) {
                elemento.textContent += trecho[i];
                i++;
                setTimeout(proximaLetra, tempoAleatorio ( velocidade.min, velocidade.max));
            } else {
                callback();
            }
        }
        proximaLetra();
            }

            function apagar (quantidade, callback) {
                let q= quantidade;
                function proximoBackspace() {
                    if(q > 0) {
                        elemento.textContent = elemento.textContent.slice(0, -1);
                        q--;
                        setTimeout(proximoBackspace, tempoAleatorio(60, 90));
                    } else {
                        callback(); 
                    }
                    }
                    proximoBackspace();
                }  

                function pausar (tempo, callback) {
                    setTimeout(callback, tempo);
                }

const NORMAL = {min:30, max: 120};
const LENTO = {min: 200, max: 320};

function rodar() {
    digitar('Vict', NORMAL, () => {    
        digitar('r', LENTO, () => {
            pausar(700, () => {
                apagar(1, () => {
                    digitar('or Hugo Alves Nev', NORMAL, () => {
                        digitar('s', LENTO, () => {
                            pausar(700, () => { 
                                apagar(1, () => {
                                    digitar('es', NORMAL, () => {
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
    
}
setTimeout(rodar, 1000); // Iniciar após 1000ms

console.log('✅ Portfólio carregado com sucesso!');
