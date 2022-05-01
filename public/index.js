// !SCROLL REVEAL
const sr = ScrollReveal({
    distance: '500px',
    duration: 1800,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    // easing: 'ease-in-out',
    reset: true
});
    
sr.reveal('.scroll-reveal-bottom-header', {origin: 'bottom'});
sr.reveal('.scroll-reveal-left-header', {origin: 'left'});
sr.reveal('.scroll-reveal-right-header', {origin: 'right'});
sr.reveal('.scroll-reveal-top', {origin: 'top', duration: 1000, easing: 'ease-out', distance: '250px'})
sr.reveal('.scroll-reveal-left', {origin: 'left', duration: 1000, easing: 'ease-out', distance: '250px'})
sr.reveal('.scroll-reveal-right', {origin: 'right', duration: 1000, easing: 'ease-out', distance: '250px'})
sr.reveal('.scroll-reveal-bottom', {origin: 'bottom', duration: 1000, easing: 'ease-out', distance: '250px'})