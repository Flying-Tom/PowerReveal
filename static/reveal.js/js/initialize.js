Reveal.initialize({
    width: 1024,
    height: 768,
    margin: 0,
    slideNumber: 'c/t',
    controls: true,
    controlsLayout: 'edges',
    // Visibility rule for backwards navigation arrows; "faded", "hidden"
    // or "visible"
    controlsBackArrows: 'faded',
    // Display a presentation progress bar
    progress: true,
    maxScale: 10,
    fragments: true,
    hash: true,
    transition: 'slide',
    transitionSpeed: 'fast',
    backgroundTransition: 'slide',
    hideCursorTime: 1000,
    navigationMode: 'default',
    dependencies: [
        { src: 'static/reveal.js/plugin/chalkboard/chalkboard.js' },
    ],
    keyboard: {
        13: 'next',
        48: function () { Reveal.slide(10) },
        49: function () { Reveal.slide(0) },
        50: function () { Reveal.slide(1) },
        51: function () { Reveal.slide(2) },
        52: function () { Reveal.slide(3) },
        53: function () { Reveal.slide(4) },
        54: function () { Reveal.slide(5) },
        55: function () { Reveal.slide(6) },
        56: function () { Reveal.slide(7) },
        57: function () { Reveal.slide(8) },
        58: function () { Reveal.slide(9) },
        67: function () { RevealChalkboard.toggleNotesCanvas() },	// toggle notes canvas when 'c' is pressed
        66: function () { RevealChalkboard.toggleChalkboard() },	// toggle chalkboard when 'b' is pressed
        46: function () { RevealChalkboard.clear() },	// clear chalkboard when 'DEL' is pressed
        8: function () { RevealChalkboard.reset() },	// reset chalkboard data on current slide when 'BACKSPACE' is pressed
        68: function () { RevealChalkboard.download() },	// downlad recorded chalkboard drawing when 'd' is pressed
    },
    chalkboard: {
        toggleChalkboardButton: { left: "60px", bottom: "30px", top: "auto", right: "auto" },
        toggleNotesButton: { left: "90px", bottom: "30px", top: "auto", right: "auto" },

    }
});
