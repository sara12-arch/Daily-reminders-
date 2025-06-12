const content = document.getElementById('content');

    const quotes = [
  "Freedom is nothing but a chance to be better.",
  "And it's inside myself that I must create someone who will understand.",
  "The human heart has a tiresome tendency to label as fate only what crushes it.",
  "I have spent all my life resisting the desire to end it.",
  "I miss you deeply, unfathomably, senselessly, terribly. – Franz Kafka, Letters to Milena",
  "Maybe home is nothing but two arms holding you tight when you're at your worst.",
  "You are not too much. You were never too much. You are enough.",
  "Sometimes the right path is not the easiest one. – Grandmother Willow",
  "In the depths of winter, I found there was, within me, an invincible summer. – Camus",
  "It's okay to be a glowstick: sometimes we have to break before we shine.",
  "Nothing ever goes away until it has taught us what we need to know. – Pema Chödrön",
  "You deserve a love that feels like quiet mornings and gentle understanding.",
  "Be patient where you sit in the dark. The dawn is coming. – Rumi",
  "Even the softest soul can be a storm in disguise.",
  "She was unstoppable not because she did not have failures or doubts, but because she continued on.",
  "Sometimes, the bravest thing you can do is ask for help.",
  "To love and be loved is to feel the sun from both sides. – David Viscott",
  "Your broken pieces are still part of your masterpiece.",
  "You are allowed to outgrow people, places, and versions of yourself.",
  "Healing is not linear, and that’s okay.",
  "There’s a crack in everything. That’s how the light gets in. – Leonard Cohen",
  "Rest is not a reward. It’s a necessity.",
  "Your worth is not measured by your productivity.",
  "It’s okay to restart and rebuild. You’re not behind.",
  "Sometimes, soft is strong.",
  "Let yourself be silently drawn by the strange pull of what you really love. – Rumi",
  "You are not a burden. You are a human being with needs.",
  "Breathe. This moment is for you.",
  "Let go of who you think you should be. Embrace who you are.",
  "Give yourself the same grace you offer to others.",
  "You’re doing better than you think.",
  "You’re still here. That matters more than you know."
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

