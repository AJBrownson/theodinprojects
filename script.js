const truth = [
    'What is the weirdest place that you made love with someone in?',
    'When was the last time you felt like you were not yourself?',
    'What is your most favorite position for yoga?',
    'When was the last time you had a crazy one-night stand and why was it crazy?',
    'What is your most favorite memory of sex?',
    'What was your most electrifying touch in your life and why?',
    'What is the weirdest thing you have done with your partner?',
    'Is there any late-night incident that you think can never happen to anyone else?',
    'Do you have any sexual memory that you believe nothing can beat ever?',
    'What is your most favorite foreplay?',
    'Is there anything stranger you have done with your partner?',
    'What do you do when you think about the person you love?',
    'Have you ever caught someone you know having sex?',
    'Have you ever dated someone you actually hate?',
    'Which date do you prefer the most, breakfast date or dinner date?',
    'Have you ever dated someone just for sex?',
    'Have you ever taken money from someone for having sex?',
    'Do you prefer to keep the light on or off?',
    'Have you ever made out in a smelly bathroom?',
    'How was your first time dating experience?',
    'Have you ever had it so loud that someone complained about it?',
    'Have you ever talked dirty with someone of the same gender?',
    'Have you ever paid to watch porn?',
    'How frequently do you watch porn?',
    'Have you ever caught someone nude by mistake?',
    'Is there anything that you are afraid to tell me?',
    'Which one of my personality traits do you like the most in me?',
    'Is there any wild fantasy that you have?',
    'When was the first time that you were attracted to someone?',
    'Which body part do you like the most in a girl/boy?',
    'What do you think is the hottest thing that anyone has ever done for you?',
    'At what age did you first taste alcohol?',
    'Have you ever had any dark thoughts about me?',
    'Have you ever had a crush on someone’s parents?',
    'When was the last time you sent nudes to someone?'

]


const dare = [
    'Kiss someone from the opposite gender.',
    'Send the link to your favorite porn site to your partner.',
    'Call your partner and try to seduce him/ her.',
    'Tell us your darkest sexual desire.',
    'Show us your favorite sex position.',
    'Tell us your favorite pick up line.',
    'Pretend to be a stripper for a few minutes. ',
    'Pretend to seduce someone from this group.',
    'Send your partner a nude picture of yours.',
    'Tell us what you would like to do at your bachelor party.',
    'Call your crush and try to turn him/ her on.',
    'Record a video explaining your thoughts about having sex with some random stranger.',
    'Make a kinky video of yourself and send it to your partner.',
    'Show us your favorite porn video.',
    'Pretend to have the foreplay you like the most.',
    'Ask your partner to send you a video of him/ her masturbating.',
    'Show us the last conversation you had with your partner.',
    'Pretend to sleep in your favorite sex position. ',
    'Ask your partner to buy you a sex toy.',
    'Send a seductive message to your crush',
    'Gift your partner a sex toy and write a turn-on message to him/ her.',
    'Ask your crush to go on a date with you.',
    'Describe your last intercourse in detail.',
    'Call a random person and pretend that you have called your partner.',
    'Act your favorite sex move.',
    'Turn off the light and try to turn me on.',
    'Look into my eyes and tell me how you truly feel about me.',
    'Tell me a secret fantasy of yours that you want to experience in real life.',
    'Do whatever I ask you to do for ten minutes.',
    'Do a lap dance for me.',
    'Tell us about your recent sexual encounter in detail.',
    'Show me the least sexy part of your body.',
    
]


const para = document.querySelector('#para');
const btn1 = document.querySelector('#truth');
const btn2 = document.querySelector('#dare');



btn1.addEventListener('click', getTruth);
btn2.addEventListener('click', getDare);




function getTruth() {
    const randTruth = Math.floor(Math.random() * truth.length )
    para.textContent = (randTruth, truth[randTruth])
}



function getDare() {
    const randDare = Math.floor(Math.random() * dare.length )
    para.textContent = (randDare, dare[randDare])
}