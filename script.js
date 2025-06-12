const content = document.getElementById('content');
const quotes = [
  "Freedom is nothing but a chance to be better.",
  "And it's inside myself that I must create someone who will understand.",
  "The human heart has a tiresome tendency to label as fate only what crushes it. But happiness likewise, in its way, is without reason, since it is inevitable.",
  "I have spent all my life resisting the desire to end it.",
  "I miss you deeply, unfathomably, senselessly, terribly. – Franz Kafka",
  "In the midst of winter, I found there was within me an invincible summer.",
  "You are allowed to be both a masterpiece and a work in progress at the same time.",
  "Some feelings you will never find the words for; you will learn to name them after the ones who gave them to you.",
  "It’s okay to be soft. It’s okay to rest. Growth is quiet too.",
  "Healing is not linear, but you are healing.",
  "Be proud of how you’ve been handling these past months — silently fighting battles, healing, and growing.",
  "Sometimes showing up is the most courageous thing you can do.",
  "It is enough to do your best, even when it goes unnoticed.",
  "Even the moon goes through phases; you don’t have to be full all the time.",
  "Let it hurt. Let it heal. Let it go.",
  "You are not behind. You’re exactly where you need to be.",
  "Trust the timing of your life — you’re growing even when it feels like you’re standing still.",
  "Give yourself permission to slow down today.",
  "Rest is productive too.",
  "A small step forward is still a step forward.",
  "You are more than what is hurting you.",
  "You survived 100% of your worst days. That’s not nothing.",
  "You are not alone in how you feel. Even when it feels like it.",
  "Grief is a form of love too. Don’t rush it.",
  "There’s no shame in beginning again.",
  "Let today be a soft place to land.",
  "It’s okay if all you did today was breathe.",
  "You don’t have to be perfect to be worthy of love.",
  "You're allowed to outgrow people, places, and patterns.",
  "You're doing better than you think.",
  "You're still here. That matters more than you know."
];

const quoteIndex = new Date().getDate() - 1;
const quoteOfTheDay = quotes[quoteIndex] || "You’re doing your best. That’s enough.";
document.getElementById("quote").innerText = quoteOfTheDay;
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

