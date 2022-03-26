let handler = async(m, { conn }) => {
   conn.reply(m.chat,`“${pickRandom(global.quotes)}”`, m)
 }
 handler.help = ['quotes']
 handler.tags = ['quotes']
 handler.command = /^(quotes)$/i
 handler.owner = false
 handler.mods = false
 handler.premium = false
 handler.group = false
 handler.private = false

 handler.admin = false
 handler.botAdmin = false

 handler.fail = null

 module.exports = handler

 function pickRandom(list) {
   return list[Math.floor(list.length * Math.random())]
 }

 // https://jalantikus.com/tips/kata-kata-bucin/
 global.quotes = [
     "Everything has an end, that which is over let it pass and rest assured that everything will be fine",
     "Every second is precious because time knows many things, including the secrets of the heart.",
     "If you can't find the book you're looking for on the shelf, write it yourself."
     "If your heart feels a lot of pain, then learn from that pain not to give pain to others.",
     "Life is not always about boyfriends.",
     "Home is not just a place, it is a feeling.",
     "Which one do you choose: The person who dreams of success or the person who makes it come true?",
     "You may not be able to water a flower that has withered and hope it will bloom again, but you can plant a new flower with a better hope than before.",
     "It is not happiness that makes us grateful, but it is with gratitude that will make our lives happy.",
     "I am silent. But I am not blind.",
     "Faith is a knowledge of the heart, far beyond the reach of evidence.",
     "The feeling of happiness and unhappiness does not come from what you have, nor does it come from who you are, or what you do. Happiness and unhappiness come from your thoughts.",
     "Pain in the struggle is only temporary. You can feel it in a minute, an hour, a day, or a year. But if you give up, the pain will last forever.",
     "Only someone who is afraid can act bravely. Without that fear there is nothing that can be called brave.",
     "Be yourself. Who else can do it better than yourself?",
     "Your chances of success in every condition can always be measured by how much you believe in yourself.",
     "Our greatest glory is not in never failing, but in getting back up every time we fall."
     "The most unfinished job is the one that never started."
     "Your mind is like a fire that needs to be lit, not a vessel waiting to be filled."
     "Honesty is the cornerstone of all success. Recognition is the strongest motivation. Even criticism can build confidence when it's "inserted" between compliments.",
     "You only live once and that opportunity also comes once, both don't come twice."
     "Because struggle is a sign of your journey to success.",
     "The world is no longer the same, it's not always on our side, when we want to try that's where happiness will be beautiful in time.",
     "Life is not as easy as turning the palm of the hand, but with the palm of our hand we can change our lives for the better."
     "Be a person who challenges the future, not a coward who is safe in the comfort zone.",
     "Learn to be humble, humble your heart as low as possible so that no one can lower you.",
     "Faith is a knowledge of the heart, far beyond the reach of evidence.",
     "Pain in the struggle is only temporary. You can feel it in a minute, an hour, a day, or a year. But if you give up, the pain will last forever.",
     "Strength and development come only from continuous effort and struggle.",
     "Entrepreneurs are not smart people but they are smart to find smart people.",
     "Life is short. You have to be able to smile when you feel pain or we will never move on.",
     "What is cool is not young people who have a lot of style, but young people who do a lot of work.",
     "Only someone who is afraid can act bravely. Without that fear there is nothing that can be called brave.",
     "Anyone who tries to bring you down is already under you.",
     "Success and failure are both part of life. Both are temporary.",
     "He who does more than what he is paid for will one day be paid more than what he does.",
     "The secret of our success is that we never give up.",
     "Because life is a choice."
     "Forgiveness does not necessarily make us better or even feel better but it certainly opens the way for goodness.",
     "Forgiveness doesn't necessarily make us better or even feel better, but it certainly opens the way for goodness.",
     "The test of loyalty always comes every day, make sure you are loyal to the right person.",
     "I don't want to make you miss me. Because longing means sad. And I don't want to be the reason you are sad.",
     "I'd rather look at you than all the paintings in the world."
     "Relationships are like flowers that need water, they can dry up and die without communication.",
     "It is better to be patient waiting for someone to come say hello than to expect him who chose to leave to come back.",
     "Loving takes energy, don't waste your energy to run and give up.",
     "Believe me, if he really loves you, no matter how painful it is, no matter how difficult the twists and turns you have to go through, he will still be with you someday, someday.",
     "Love has a great ability. He can make animals into humans, and humans into animals.",
     "Long before I met you, I had known you in my prayers.",
     "Love is a beautiful thing, it is like a painting in the clouds, brightly framing the horizon of twilight.",
     "Hopefully one day my blanket will be you who always warms me when the cold attacks my body and soul.",
     "I want you completely, forever, you and me, every day.",
     "Love is a beautiful bird, which begs to be caught but refuses to be hurt."
     "Because of love, thorns become roses. Because of love, vinegar becomes fresh wine.",
     "Love is not looking at each other, but looking out together in the same direction."
     "Love is not seen with the eyes, but with the heart.",
     "You think I'm watching you? No, honey. I'm watching your surroundings, maybe someone will bother you, I beat him.",
     "Love never demands, love always gives. Love always suffers, without ever lamenting, without ever holding grudges.",
     "Love is like the wind, I can't see it but I can feel it."
     "Love is not how long it lasts. But how clear and in which direction.",
     "A good friend will not harm, but a good friend will advise, protect, and sincerely love.",
     "The most beautiful thing about friendship is understanding and being understood, without ever pushing and wanting to win alone.",
     "If you get a true friend who does not fade either in joy or sorrow. Promise in your heart to always be loyal to him.",
     "Friendship does not need to understand each other. Because friends will accept each other what is incomprehensible.",
     "Friends are not those who come to you when you need them, but those who stay with you when the whole world is away."
     "True friendship is like health, we only realize its value after we lose it.",
     "It's better for me to accompany a friend when I'm alone than to accompany a lover who doesn't have time for me when I'm alone in silence."
     "Friendship does not mean we trust him, but friendly how we can be trusted by him. Trust is important.",
     "Friends are people who will wake us from sleep even though we are dreaming.",
     "When in trouble they disappear, when in happiness they come cheerfully. No, they are not friends!",
     "Everyone is different, unique in their own way. You have to respect them, but that doesn't mean you have to like them all.",
     "Friends are like eyes and hands. When the eyes cry the hands wipe, when the hands are injured the eyes cry.",
     "Friendship based on sincerity and love will give birth to eternity in togetherness."
     "If you get a true friend who does not fade either in joy or sorrow. Promise in your heart to always be loyal to him.",
     "When tomorrow comes I want to be like the previous days. Days with friends and friends to be able to do positive positive things together.",
     "If you want glory then look for friends from people who fear Allah subhanahu wataa'la.",
     "It could be that all our friends go, but not with friends",
     "Friendship is motivation and inspiration, not just prestige and pleasantries.",
     "Nothing feels as terrible as it used to be when you already have a true friend.",
     "Friendship does not exist with special people. We are special because we are friends. It is friends who make us special."]
