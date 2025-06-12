const content = document.getElementById('content');

const quotes = [
    "Freedom is nothing but a chance to be better.",
    "And it's inside myself that I must create someone who will understand.",
    "The human heart has a tiresome tendency to label as fate only what crushes it.",
    "I have spent all my life resisting the desire to end it.",
    "I miss you deeply, unfathomably, senselessly, terribly.",
    "Quote of the day 6",
    "Quote of the day 7",
    "Quote of the day 8",
    "Quote of the day 9",
    "Quote of the day 10",
    "Quote of the day 11",
    "Quote of the day 12",
    "Quote of the day 13",
    "Quote of the day 14",
    "Quote of the day 15",
    "Quote of the day 16",
    "Quote of the day 17",
    "Quote of the day 18",
    "Quote of the day 19",
    "Quote of the day 20",
    "Quote of the day 21",
    "Quote of the day 22",
    "Quote of the day 23",
    "Quote of the day 24",
    "Quote of the day 25",
    "Quote of the day 26",
    "Quote of the day 27",
    "Quote of the day 28",
    "Quote of the day 29",
    "Quote of the day 30",
    "Quote of the day 31"
];

function showSection(section) {
    if (section === 'quotes') {
        const date = new Date();
        const day = date.getDate();
        content.innerHTML = `<h3>Quote for Today:</h3><p>${quotes[day - 1]}</p>`;
    } else if (section === 'work') {
        content.innerHTML = `
            <h3>Work Tasks</h3>
            <ul>
                <li>📌 Attend morning meeting</li>
                <li>📌 Complete daily report</li>
                <li>📌 Plan for tomorrow</li>
            </ul>`;
    } else if (section === 'selfcare') {
        content.innerHTML = `
            <h3>Self Care Tips</h3>
            <ul>
                <li>🌿 Take a 10-minute walk</li>
                <li>🌿 Listen to music you love</li>
                <li>🌿 Journal your thoughts</li>
            </ul>`;
    } else if (section === 'health') {
        content.innerHTML = `
            <h3>Health Tracker</h3>
            <ul>
                <li>💧 Drink 8 glasses of water</li>
                <li>💊 Take vitamins or medication</li>
                <li>🛏️ Get 7-8 hours of sleep</li>
            </ul>`;
    }
}
