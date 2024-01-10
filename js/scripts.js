function scriptOne() {
    document.querySelector('.hamburger-icon').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
    document.querySelector('.contact-us').classList.toggle('active');
        });
}

function scriptTwo() {
    const hamburger = document.querySelector('.hamburger-icon');

    hamburger.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            this.classList.add('active');
            setTimeout(() => {
                this.classList.add('cross');
            }, 300); // Задержка перед добавлением класса 'cross'
        } else {
            setTimeout(() => {
                this.classList.remove('cross');
            }, 1000); // Задержка перед удалением класса 'cross'
            this.classList.remove('active');
        }
    });
}

function scriptThree() {
    document.querySelector('.hamburger-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
    });
}
function scriptFour(){
document.addEventListener('scroll', function() {
            var sectionOne = document.getElementById('section_one');
            var sectionTwo = document.getElementById('section_two');
            var sectionThree = document.getElementById('section_three');
            var screenPosition = window.innerHeight / 1.3;

            [sectionOne, sectionTwo, sectionThree].forEach(function(section) {
                if (section) {
                    var sectionPosition = section.getBoundingClientRect().top;

                    if (sectionPosition < screenPosition) {
                        section.classList.add('visible');
                    } else {
                        section.classList.remove('visible');
                    }
                }
            });
        });
}

function scriptFive() {
    document.getElementById('language-text').addEventListener('mouseover', function() {
            var languageTextPosition = this.getBoundingClientRect().right;
            var globePosition = document.querySelector('.globe').getBoundingClientRect().left;
            var svg = this.querySelector('svg');

            var distance = globePosition - languageTextPosition;
            svg.style.transform = 'translateX(' + distance + 'px)';
        });

        document.getElementById('language-text').addEventListener('mouseout', function() {
            var svg = this.querySelector('svg');
            svg.style.transform = 'translateX(0px)';
        });
}

function scriptSix() {
    document.addEventListener("DOMContentLoaded", function() {
        const cards = document.querySelectorAll('.card');

        function showCardOnScroll() {
            const triggerBottom = window.innerHeight / 1.3;

            cards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;

                if (cardTop < triggerBottom) {
                    card.classList.add('card-visible');
                } else {
                    card.classList.remove('card-visible');
                }
            });
        }

        window.addEventListener('scroll', showCardOnScroll);
    });
}




scriptOne();
scriptTwo();
scriptThree();
scriptFour();
scriptFive();
scriptSix();