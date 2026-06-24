import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import TributesPage from "./pages/TributesPage";
import TributeDetails from "./pages/TributeDetails";



function App() {

 const defaultTributes = [
    { id: 1, name: "The Halliburton MVP Team", relation: "Colleague", message: "Two decades of watching you lead with discipline and brilliance. The MVP award was never enough to capture what you trully brought - vision, integrity and an unwavering work ethic. Here's is to 50 years of exellence!", time: "May,20th 2026" },
    { id: 2, name: "Onorbrakpor Family", relation: "Family", message: "Ochuko, fifty years of watching you grow from that fourth child on Nosamu street to the man you are today filled our minds with immeasurable pride. You have always made us believe that where you start is just the begining. Happy Golden Jubilee!", time: "May,22nd 2026" },
    { id: 3, name: "Wilmerconnect, Ajegunle.", relation: "Community Member", message: "You never forget where you came from, even as your career soared, you kept giving back to Ajegunle - the street that shaped you. You are a true son of the soil. Congratulations on 50 years of inspiring greatness!", time: "May,26th 2026" },
    { id: 4, name: "Ajero Alumni, Class of '93", relation: "Classmate / Alumni", message: "We remember the quiet determination that set you apart even back in school. Today, that same resolved has taken you around the world and back. We are proud to call you ours. Happy 50th, Shosho!", time: "May,26th 2026" },
    {
  id: 5,
  name: "Ejiro Onobrakpor",
  relation: "Family",
  message: `The Measure of a Son

Every family has a story.
Not the one written in photographs or told at celebrations, but the one quietly unfolding in kitchens, living rooms, shared bedrooms, and long conversations after the lights have gone out.

In our family, one of the central characters in that story has always been my brother, Ogheneochuko.

Not because he demanded attention.
Not because he was the loudest voice in the room.

But because even as a young boy, he carried a certain gravity—a quiet sense of purpose that seemed far beyond his years.

As the first son, he could easily have become a standard against which the rest of us were measured.

Instead, he became a shield.

I remember the moments when comparisons would come, as they often do in families.

"Why can't you be like Ochuko?"

But before those words could settle, he would step in.

He would remind everyone that we were different.
That each child carried a different gift.
That life was not a competition but a discovery.

Long before many of us understood ourselves, he was teaching us that our value was not found in becoming someone else.

It was found in becoming ourselves.

And perhaps that was his greatest gift.

He saw people.

Not for what they lacked, but for what they carried.

While others looked for weaknesses, he searched for strengths.

While others focused on shortcomings, he looked for possibilities.

He had a way of finding the hidden treasure in people and speaking to it until they began to believe it existed.

Many people build careers.
Many people build businesses.

But my brother has spent much of his life building people.

I often think about our childhood.

Seven children.
Different personalities.
Different dreams.
Different strengths.

Yet somehow, there was very little rivalry among us.

No camps.
No divisions.
No sibling politics.
No one being pitched against another.

And looking back now, I realize that didn't happen by accident.

It happened because there was someone among us who understood that families grow stronger when everyone is allowed to flourish.

Someone who believed there was enough room at the table for every gift.

Someone who refused to let comparison steal what God had uniquely placed inside each of us.

The values that define our family came from our parents.

They planted them.

But my brother became one of the first to water them.

He learned those lessons early and then spent decades passing them on—not through speeches, but through example.

Through consistency.

Through character.

Through the quiet leadership that often goes unnoticed until many years later.

And now, as he turns fifty, I find myself reflecting not only on what he has accomplished, but on what he has meant.

To the world, he may be an engineer, a leader, an entrepreneur, a husband, a father, and a respected professional.

To us, he has been something even greater.

He has been proof that strength can be gentle.

That leadership can be humble.

That success does not have to come at the expense of others.

And that the true measure of a first son is not how many people follow him, but how many people become more fully themselves because he walked beside them.

Fifty years ago, a boy was born in Ajegunle.

A boy who would one day travel the world.

A boy who would build a remarkable life.

But somewhere along the way, he did something even more important.

He helped build us.

And for that, dear brother, no achievement, no title, and no milestone could ever surpass the gratitude we feel today.

Happy 50th Birthday.

Your story is still being written.

But if legacy is measured by the lives touched along the way, then yours is already golden.

With love, admiration, and gratitude,

Love Always,
Ejiro Onobrakpor
for the Family ❤️`,
  time: "Family Tribute"
},

{
  id: 6,
  name: "Augusta Nwokoro",
  relation: "Classmate / Alumni",
  message: `To our dear friend and classmate, Engr. Ochuko Onobrakpor, on your 50th birthday,

Today we celebrate not just a milestone, but a man whose presence has been a steady anchor through so many seasons of life. From our days in the classroom—sharing notes, laughter, and big dreams—to the years that followed, you have remained the same: dependable, wise, humble, and kind. You’ve been a pillar of support to me and to many others, the one we call when the road is rough and the one we want beside us when there’s joy to share.

You have a gift for showing up—quietly, consistently, and with a full heart. You listen without judgment, advise without pride, and help without announcing it. Your strength is gentle, your faith unshaken, and your integrity unquestionable.

Even in your busiest moments, you make time for people; even in your own challenges, you find a way to lift others up. That’s rare. That’s admirable. That’s you.

Turning 50 looks good on you, not just because of what you’ve achieved, but because of who you’ve become. A devoted friend. A loving family man. A leader who leads by example. A man who keeps his word. You carry your blessings with grace, and you turn them into blessings for others.

As you step into this new chapter, I pray it brings deeper peace, vibrant health, and a greater measure of the joy you’ve freely given. May God crown your efforts with favour, enlarge your coast, and surround you with laughter, love, and long life. May your days be bright, your path clear, and your home always filled with warmth.

Thank you for the years of friendship, and for being a rock when it mattered most.

Here’s to 50 remarkable years—and to many more ahead.

Happy 50th birthday, Shosho. Your light shines bright, and we are all better for it.

Cheers to you and many more fruitful years ahead.`,
  time: "AIHS93 Set Tribute"
},

{
  id: 7,
  name: "Haruna Onuh",
  relation: "Friend",
  message: `To my dear friend,

Today, as you mark half a century of life, I find myself reflecting on what a rare gift you are. Fifty years—yet the warmth of your friendship feels as timeless as it did when our paths first crossed in Halliburton.

Your selfless, unpretentious, and humble personality took me off guard at the moment when we needed you most in 2017 for the Addax North Oron-10 (NOR-10HW) well intervention campaign. You have carved a niche in our upstream business and distinguished yourself as a highly admirable Well Intervention/Workover Professional.

You have been more than a friend; you have been a confidant, a compass, and a constant. Through life's quiet joys and its louder storms, you have stood firm—a safe harbor I never had to question. Your wisdom has guided me, your laughter has lifted me, and your loyalty has humbled me.

At 50, you wear your years with grace. The lines on your face tell stories of resilience, kindness, and a life lived with intention. You have built not just years, but meaning—touching lives, keeping promises, and showing up when it mattered most.

Here's to the next chapter: may it bring you the peace you give others, the joy you so freely share, and adventures worthy of your spirit. You deserve every good thing this world has to offer.

Happy 50th birthday, my Friend & Brodaly. I am profoundly grateful to walk this journey with you.

With love and admiration,

Haruna Onuh`,
  time: "Friendship Tribute"
},
{
  id: 8,
  name: "Sam Ikuku",
  relation: "Friend",
  message: `Today we celebrate not just a milestone, but a man who has made a lasting impact on everyone fortunate enough to live nearby. Turning 50 is a powerful reminder of a life filled with experiences, wisdom, and meaningful connections—and you embody all of that and more.

As a neighbor, you have been the kind of person who turns a street into a community. Your friendliness, generosity, and easygoing nature have made everyday interactions something to look forward to. Whether it’s a warm greeting, a shared laugh, or a simple act of kindness, you’ve consistently brought people together.

Over the years, you’ve shown what it means to be dependable and genuine. You’ve been someone others can count on, someone who listens, and someone who gives without expecting anything in return. That kind of character doesn’t go unnoticed—it leaves a mark that lasts.

Reaching 50 isn’t just about looking back; it’s about celebrating the person you are today and the many more moments ahead. If the past is any indication, the future will continue to be filled with laughter, good health, and the same positive spirit that defines you.

Thank you for being such a wonderful neighbor and an even better friend. Wishing you a joyful 50th birthday and many more years of happiness and fulfillment.`,
  time: "Friendship Tribute"
},
{
  id: 9,
  name: "Oghenerukevwe Onobrakpor",
  relation: "Family",
  message: `Good evening everyone,

First of all, thank you all for being here today to celebrate a very special milestone—my dad turning 50.

Dad, fifty years is not just a number. It’s a lifetime of stories, lessons, sacrifices, and moments that have shaped not only who you are, but who we are because of you.

When I think about you, I don’t just think about "Dad." I think about the person who has always been steady, dependable, and strong even when things weren’t easy, a person who is kind and likes to share his gifts from God. You’ve been the one we could all count on, no matter what.

You’ve taught me so many things in life—not just through words, but through your actions. You showed me what hard work looks like, what commitment means, and what it truly means to care for your family.

You’ve also taught me how to stay focused and grounded, and to be critical and sensible with my actions.

Thank you for your sacrifices.

Thank you for your patience.

Thank you for your love.

And thank you for being the kind of father that so many people look up to.

We’re all so proud of you, and we’re so lucky to have you in our lives.

So today, we don’t just celebrate your age—we celebrate you.

Here’s to 50 amazing years, and many more to come.

Happy 50th Birthday, Dad. We love you.`,
  time: "Family Tribute"
},

{
  id: 10,
  name: "Yoma",
  relation: "Family",
  message: `Happy 50th Birthday, Dad.

I appreciate all that you do and all the sacrifices that you and Mom have made for our family.

Today, I am grateful to have you as my father, and I hope this year brings you as much happiness as you have given to everyone around you.

Thank you for your love, guidance, and support. May this new chapter of your life be filled with joy, good health, peace, and countless blessings.

Happy Birthday, Dad. I love you.`,
  time: "Family Tribute"
},
{
  id: 11,
  name: "Ifeanyichukwu Onobrakpor",
  relation: "Family",
  message: `Today, we celebrate not just your birthday, but the incredible journey of fifty beautiful years filled with strength, wisdom, love, and grace.

Reaching this golden milestone is a reflection of a life well lived and a heart that has touched so many people in meaningful ways.

You have been a source of love, support, and inspiration to everyone privileged to know you, but especially to me. Your kindness, resilience, laughter, and unwavering spirit continue to light up every room and every life you encounter.

Through every season, you have shown what it means to love deeply, live purposefully, and face life with courage and dignity.

At fifty, you are not simply growing older—you are growing richer in experience, stronger in character, and even more beautiful in spirit.

Your life is a testimony of perseverance, faith, compassion, and achievement. Every lesson you have learned, every challenge you have overcome, and every joy you have shared has shaped the remarkable person you are today.

Thank you for being my partner, my confidant, my peace, and my greatest blessing. Loving you is one of the greatest gifts life has given me.

As you step into this new chapter, I pray that your days ahead will be filled with good health, endless happiness, renewed purpose, and countless moments of joy and fulfillment.

May this golden jubilee mark the beginning of even greater things ahead. You deserve every celebration, every smile, and every beautiful thing life has to offer.

Happy 50th Birthday, my Honey.

Here’s to you, to your legacy, and to many more wonderful years together.

I love you forever.`,
  time: "Family Tribute"
},

{
  id: 12,
  name: "Oghenemarho Onobrakpor",
  relation: "Family",
  message: `For the man who does so much to ensure that his family is safe, loved, and well taken care of, thank you.

A good father is not only someone who provides for his family, but someone who stands behind them through every season of life—the embodiment of love, strength, and sacrifice.

Even when tired, a devoted father finds the strength to show up, ready to give his best. He places the needs of his family above his own and carries responsibilities with quiet determination.

Dad, you have been that father and so much more. Your dedication, hard work, and unwavering love have created a foundation that allows us to grow, dream, and thrive. Your sacrifices have never gone unnoticed, and your example continues to inspire us every day.

Thank you for the countless ways you care for us, support us, and encourage us. Thank you for being our protector, our guide, and our source of strength.

As you celebrate this remarkable milestone, I pray that the love and kindness you have poured into others return to you many times over. May your years ahead be filled with good health, happiness, peace, and every blessing you deserve.

Happy 50th Birthday, Dad.

With love and gratitude,

Oghenemarho Onobrakpor`,
  time: "Family Tribute"
},
    {
  id: 13,
  name: "NET CORE INTEGRATED SERVICES NIG. LTD.",
  relation: "Colleague",
  message: `We celebrate a remarkable milestone in the life of an extraordinary leader, mentor, and Director as he marks his 50th birthday.

Fifty years represent a journey of experience, wisdom, resilience, and achievement. Throughout your career, you have demonstrated unwavering dedication, professionalism, and a commitment to excellence that have significantly contributed to the growth and success of our organization.

Your leadership has not only guided the company through challenges and opportunities but has also inspired those privileged to work alongside you. Your vision, integrity, and ability to bring out the best in people have earned you the respect and admiration of colleagues, partners, and employees alike.

Beyond your professional accomplishments, we appreciate your humility, compassion, and genuine concern for the well-being and development of others. You have created an environment where people are encouraged to grow, innovate, and excel.

As you celebrate this golden milestone, we honor the legacy you continue to build and the positive impact you make every day. May this new chapter bring you continued success, good health, happiness, and fulfillment in all your endeavors.

On behalf of the entire company, we extend our warmest congratulations and heartfelt appreciation. Thank you for your outstanding service, exemplary leadership, and invaluable contributions.

We also commend your drive for Safety, Service Quality, Health, and Environmental Excellence within our organization.

Happy 50th Birthday, Sir.

May the years ahead be filled with greater achievements, abundant blessings, and cherished moments with family, friends, and colleagues.`,
  time: "Corporate Tribute"
},

{
  id: 14,
  name: "Paul Williams",
  relation: "Other",
  message: "Dear Engr Ochuko Onobrakpo, On your birthday, may the Lord bless you and keep you; the Lord make his face to shine more upon you and be more gracious to you; the Lord lift his countenance more upon you and multiply your peace to be still in the midst of trouble. Happy Birthday Shosho!!!"
},

 {
  id: 15,
  name: "Noble Lady, Queen Chidinma Ezediniru",
  relation: "Other",
  message: "Today, I celebrate a brilliantly gifted, hardworking, yet wonderfully humble and humorous rare gem. Your 50th birthday is not just a milestone, but a celebration of a life filled with impact, excellence, and inspiration. Your life remains a shining example of diligence, vision, and service to humanity. Your commitment to empowering others is truly remarkable and admirable. As you mark this golden age, may God bless you with sound health, greater wisdom, overflowing joy, and continued success in all your endeavours. May the years ahead bring you peace and fulfillment. Happy birthday Engr. Ochuku, wishing you the very best today and always."
},

{
  id: 16,
  name: "Obi Ifeyinwa",
  relation: "Friend",
  message: "Happy 50th Birthday, Engr. Ochuko! Wishing you continued success, good health, happiness, and many more years of impactful achievements. May this new chapter bring greater fulfillment and abundant blessings. Have a wonderful celebration."
},

{
  id: 17,
  name: "Ifeanyi Ejikeme",
  relation: "Friend",
  message: "Happy 50th Birthday, Engr. Ochuko! May this special milestone usher in greater achievements, good health, peace, and abundant blessings. Wishing you many more years of success, happiness, and fulfillment. Have a wonderful celebration."
},

{
  id: 18,
  name: "From Odili Uchenna Jennifer",
  relation: "Colleague",
  message: "Wishing you a day as inspiring as your vision and a year filled with success and joy. Thanks for being a great boss and mentor. Cheers 🥂 Sir!"
},

{
  id: 19,
  name: "Raymond Lawani",
  relation: "Other",
  message: "Today, we celebrate Engr. Ochuko at 50—a remarkable milestone in a life defined by excellence and purpose. As a Director at Netco, a leading oil and gas services company in Nigeria, you have demonstrated outstanding leadership, professionalism, and dedication to national development. Your contributions to the industry and your commitment to excellence continue to inspire many. Beyond your achievements, your humility, integrity, and strength of character set you apart. You are a pillar to your family, a trusted leader to your colleagues, and a role model to all who know you. Happy 50th Birthday, Engr. Ochuko. May the years ahead bring you continued success, good health, and lasting fulfillment. Amen. From, Raymond Lawani."
},

{
  id: 20,
  name: "Charles Adelomo",
  relation: "Other",
  message: "I call him my great in-law for many reasons because of his humane nature. 'Sho-Sho Lapa,' as we call him, is not just a childhood friend but also a brother in need and indeed. I have known him for over 40 years and counting, as we grew up together in the same neighbourhood, Wilmer in Ajegunle to be precise. He is very intelligent, industrious, bold, unassuming, and caring to a fault. He sees your problems, no matter how gigantic, as his own and would go to any length to find a solution. One thing my 'great in-law' will never do is betray or backstab you. He always wants to lend a helping hand, no matter how inconvenient it may be for him. As he marks this Golden Jubilee, I pray that God's countenance will continue to shine upon him and his family. Happy Birthday, my 'great in-law.' Only you na full community. As you dey use hand do, na so you go dey use waist do ooo."
},

{
  id: 21,
  name: "Helen Davy Steven",
  relation: "Friend",
  message: "Ochuko is a man of humility; in fact, he is humility personified. For a man of his stature, I have never seen such humility. He is a generous giver who loves to share his resources with those around him. I admire the way he carries himself. Ochuko, remain blessed for life. I am proud of you."
},

{
  id: 22,
  name: "Favour George (FG)",
  relation: "Friend",
  message: "Today, I join family, friends, and loved ones to celebrate a truly remarkable man, my very good friend, Ogheneochuku Onobrakpor, as he marks his 50th birthday. Ogheneochuku, you are not just a friend to me; you are one of the people God used to encourage, support, and strengthen me at a very important stage of my life. I will never forget your kindness and generosity when you supported my tuition fees at the University of Lagos while I was pursuing my BSc. That act of love meant more to me than words can fully express. It was not just financial support; it was a reminder that someone believed in me, saw potential in me, and wanted me to succeed.\n\nBeyond the support you gave, your words have stayed with me over the years. You would always remind me, 'You are capable of achieving anything you set your mind on, regardless of where you are coming from.' Those words became more than encouragement; they became a source of strength, confidence, and hope. Whenever I reflect on my journey, I remember your voice, your belief in me, and the impact you made in my life.\n\nAs you celebrate this golden milestone, I want you to know that your kindness has not been forgotten. Your friendship, encouragement, and support have left a lasting mark on my heart. You are a man with a generous spirit, a kind heart, and a beautiful way of lifting others up.\n\nMy prayer for you today is that God will bless you beyond measure. May this new chapter of your life be filled with sound health, peace, joy, divine favour, long life, and greater fulfilment. May the same kindness you have shown to others return to you in countless ways.\n\nHappy 50th Birthday, dear Ogheneochuku. You are deeply appreciated, sincerely loved, and truly worth celebrating.\n\nWith heartfelt gratitude and warm wishes."
},

{
  id: 23,
  name: "Atafo Godwin",
  relation: "Friend",
  message: "Ochuko Onobrakpor, popularly known as 'Sho Sho,' has been my childhood friend since we were about 4 or 5 years old. We lived in the same compound on Silver Street, Olodi Apapa, Lagos. The nickname 'Sho Sho' was given to him by me because that was what my father and his friends called his father back then. In a way, the name was inherited from his father.\n\nAs you can see, we have been friends—indeed, brothers—for over 40 years, and our friendship continues to grow stronger with each passing year.\n\nSho Sho, I wish you God's abundant blessings and favour as you celebrate your 50th birthday. May He continue to guide, protect, and prosper you in all that you do. In Jesus' Name, Amen."
},

{
  id: 24,
  name: "Roseline Obi",
  relation: "Other",
  message: "My dear Ochuko, Happy 50th Birthday! On this special milestone, I celebrate you and thank God for your life, good health, and many achievements over the years. May this new chapter bring you even greater joy, peace, and fulfillment. I pray that God grants you many more beautiful years to celebrate, and that you live to see your children, grandchildren, and even great-grandchildren thrive. May your days be filled with happiness, love, and countless reasons to smile. Wishing you a wonderful 50th birthday and many more blessed years ahead. Happy Golden Jubilee!"
},

{
  id: 25,
  name: "Kenneth Ofor",
  relation: "Friend",
  message: "As you celebrate not just a milestone, but a remarkable man at 50, I want to honor the incredible person you are. You have always been a shining example of kindness, friendliness, and true generosity. Your life has touched so many through your helping hand, your warm spirit, and your unwavering willingness to show up for others. Countless people are better, stronger, and happier because of you. At 50, your legacy of compassion continues to grow, and your impact speaks louder than words ever could. May this new chapter bring you as much joy as you have given to the world. Happy 50th Birthday, Ochuko! You are deeply appreciated and sincerely celebrated."
},

{
  id: 26,
  name: "Jude Anele",
  relation: "Friend",
  message: "Shosho!! Today, I celebrate not just an accomplished engineer, but a childhood friend whose journey I have had the privilege to witness. Many of us started as young dreamers, sharing laughter, mischief, and endless banter. Even then, there was something remarkable about you—a curious mind, a steady determination, and a unique ability to see solutions where others saw problems. These qualities have shaped the exceptional person you are today. Your life is a bridge between dreams and reality, much like the structures and systems you build. You have shown in countless ways that success is not only about intelligence, but also about discipline, dedication, and hard work. Though we may have had our differences over the years, you have grown in maturity and humility, building meaningful relationships and a legacy of excellence that cannot be ignored. To many of us who started from ground zero, despite your status and profession, you remain the loyal, grounded, and dependable friend we have always known. The years may have added wisdom and experience, but they have never diminished your warmth, kindness, or sense of humor. At 50, you stand tall as a symbol of perseverance and achievement. Your journey continues to inspire those around you, and I have no doubt that the years ahead will bring even greater accomplishments, fulfillment, and joy for you and everyone whose life you touch. Happy 50th Birthday, my dear friend. May your days be filled with good health, continued success, and the satisfaction of seeing all your efforts bear even greater fruit. Let the celebration begin!"
},

{
  id: 27,
  name: "Essen",
  relation: "Friend",
  message: "Ochuko!!! Happy Birthday o! 🎊 Age is just a number, but yours comes with extra grace, wisdom, and glory. Thank you for being that special person who brings light, good sense, and plenty of laughter wherever you go. Your positive spirit and genuine heart make you a joy to be around. As you celebrate this milestone, I pray that everything you lay your hands on turns into a testimony of success, favor, and happiness. May this new chapter be filled with abundant blessings, good health, peace of mind, and countless reasons to smile. Today is your day, so let the cake, jollof, and enjoyment flow without limits! We celebrate you, appreciate you, and wish you many more wonderful years ahead. We love you dearly. Happy 50th Birthday, Ochuko!"
},

{
  id: 28,
  name: "Paul Morka",
  relation: "Other",
  message: "As you celebrate your special day, I join family, friends, and loved ones in wishing you a truly memorable and joyous birthday. May this milestone bring you pleasant memories to cherish and create new moments of happiness that will last a lifetime. I pray that the years ahead are filled with good health, peace of mind, fulfillment, and continued success in all your endeavors. May you enjoy God's favor, abundant blessings, and the reward of your hard work. Happy Birthday, Engr. Onobrakpor Ochuko. Wishing you many more wonderful and fulfilling years ahead."
},

{
  id: 29,
  name: "Edward Kanebi",
  relation: "Friend",
  message: "Happy Birthday, Ochuko! Today, I celebrate not just a friend, but a truly rare soul. You have shown me what it means to be selfless—always giving, always showing up, and always putting others before yourself without expecting anything in return. It is a quality I have experienced personally, and I know I am not the only one whose life has been touched and blessed by your kindness. From our days as classmates to the countless moments of laughter, support, and cherished memories we have shared, I am genuinely grateful to have you in my life. Your presence has a way of making every space warmer and every day brighter. On this special milestone, I pray that life rewards you abundantly with the same love, generosity, and goodness that you so freely give to others. May your path be filled with success, happiness, good health, and endless reasons to smile. Cheers to many more beautiful years ahead and to a future filled with even greater blessings. Happy 50th Birthday once again, my dear friend."
},

{
  id: 30,
  name: "Nwakaego",
  relation: "Classmate / Alumni",
  message: "My name is Nwakaego, and thinking back to our childhood in Ajegunle fills my heart with so much warmth. We practically grew up side by side, attending the same secondary school on Osho Drive, Sinclair Secondary School. Through our families—especially your sister Esther and my sister—we shared not just visits, but a bond built on friendship, laughter, and countless lasting memories. Looking back, I am grateful for those years and the wonderful experiences that shaped us. It has been inspiring to watch your journey over the years and to see the remarkable person you have become. As you celebrate this golden milestone, I pray that your life continues to be filled with joy, good health, peace, and fulfillment. May the years ahead bring even greater success, happiness, and blessings to you and your loved ones. Happy 50th Birthday, Ochuko! May this special celebration mark the beginning of an even more rewarding chapter in your life."
},

{
  id: 31,
  name: "Onuoha Vivian",
  relation: "Friend",
  message: "Ochuko, you are someone I deeply respect and admire. You have a kind and generous heart—one that I have experienced time and time again. Shosho is that one person I can always call upon, and you never turn me down. That level of loyalty, reliability, and goodness is rare, and I will always be grateful for it. As you celebrate this beautiful milestone, my heart is filled with gratitude for your life and the positive impact you have had on so many people. I pray that the lines continue to fall in pleasant places for you, that your days are filled with peace, joy, good health, and fulfillment, and that this new chapter brings you even greater blessings than you have ever known. May your future be brighter than your past, and may all your dreams and aspirations continue to come to fruition. Happy 50th Birthday, Shosho. You are truly special, deeply appreciated, and sincerely celebrated."
},

{
  id: 32,
  name: "Shade Martins",
  relation: "Friend",
  message: "Odogwu Chocho @ 50! Happy Birthday to my padi for life. Today, we celebrate 50 incredible years of wisdom, strength, resilience, and plenty of premium cruise. You have been an amazing friend, and your positive spirit, kindness, and sense of humor continue to make life brighter for everyone around you. As you mark this remarkable milestone, I pray that God continues to keep you in good health, bless the work of your hands, and fill your life with even greater joy, peace, and prosperity. May your years ahead be filled with new opportunities, beautiful memories, and countless reasons to celebrate. Enjoy every moment of your special day—you truly deserve it. Chop life today, my brother, you deserve am wella! Happy 50th Birthday, Odogwu Chocho! 😊🎉🎂"
},

{
  id: 33,
  name: "Ojeikere Ajorgbor",
  relation: "Friend",
  message: "There are friendships that pass through the seasons of life, and then there are those that quietly become part of your foundation. My brother and dear friend, Ochuko Onobrakpor, belongs firmly to the latter. I have known Ochuko for the better part of my life—long enough for our memories to be woven into the simplest, yet most meaningful moments of growing up. Some of my fondest recollections take me back to those carefree holidays between primary and secondary school, when the front of my house became our unofficial headquarters. It was where everything happened—where laughter echoed, rivalries were born, and friendships were strengthened. From dawn until dusk, we played endlessly, especially football, until the inevitable call to dinner came, often delivered by older siblings sent to retrieve us one by one. Even our disagreements were fleeting; arguments dissolved almost as quickly as they began, replaced again by camaraderie and friendship. Ochuko—fondly called 'Shosho,' a reflection of his striking resemblance to his father—stood out even then. He was always the neat, well-dressed one, carrying himself with a quiet sense of order that hinted at the man he would become. There was something unmistakable about him: a sense that he would never be misplaced, even in the midst of adventure. Beneath that calm exterior lies a subtle determination—not the loud kind, but the steady and resilient kind that drives a man to explore, push boundaries, and ultimately achieve. Through it all, he has always possessed a natural ease with people, drawing others in effortlessly with his warmth and sincerity. Beyond his education and accomplishments, Ochuko is a testament to the power of strong values and a solid upbringing. The firm guidance of a principled father, combined with the warmth, industry, and love of a devoted mother, clearly shaped the character we all admire today. It is evident in his discipline, his integrity, and the way he carries himself through life. To speak of Ochuko without mentioning his generosity would be incomplete. At his core, he is a giver—something anyone who has known him as a friend, colleague, or family member can readily attest to. It is not something he performs; it is simply who he is. Ochuko is a great man doing great things, but more importantly, he is a good man—and that is far rarer. As remarkable as his journey has already been, it feels very much like only the beginning. Cheers to you, my brother. Happy 50th Birthday. May the years ahead bring even greater fulfillment, success, happiness, and countless reasons to celebrate."
},

{
  id: 34,
  name: "Joy Ayomide Olise",
  relation: "Other",
  message: "Dear Engr. Ochuko, Happy 50th Birthday, Sir. It is a true privilege to celebrate a leader whose impact goes far beyond business success. Your kindness, generosity, and genuine concern for the well-being of your staff set you apart as an exceptional chairman. You lead with understanding, fairness, and a human touch that creates not just a workplace, but a family. Your consideration for others and the value you place on people continue to inspire loyalty, respect, and dedication in all of us who have the opportunity to work under your leadership. It is rare to find someone who balances excellence with such humility and compassion. As you mark this remarkable milestone, I pray that the years ahead bring you continued good health, greater achievements, and lasting fulfillment. May you continue touching lives, empowering others, and building a legacy that will be remembered for generations. Thank you for your leadership, guidance, and the positive influence you have on those around you. Happy 50th Birthday once again, Sir. Wishing you a joyous celebration and many more prosperous years ahead."
},

{
  id: 35,
  name: "Mboso-Owo Johnson",
  relation: "Classmate / Alumni",
  message: "My oldest friend, OCHUKO, I remember you from our days in Primary 1 at Kajola Primary School, when we proudly wore our white and red uniforms and began a journey of friendship that has stood the test of time. I am equally proud that we later joined the ranks of great achievers at the prestigious Ajeromi Ifelodun High School, under the leadership of the distinguished Principal, Laja Idowu Taiwo. Those years gave us memories and experiences that continue to shape our lives today. I can never forget your cheerful and generous mother, whose kindness and love extended to all of us. She welcomed us warmly and fed us with genuine care and affection. I also remember your handsome father and all your siblings, whose values and upbringing contributed greatly to the remarkable man you have become. Brother, as you celebrate your 50th birthday today, I join countless others in honoring a true AJ Achiever whose impact reaches far beyond the classroom and into the lives of many people. You have touched lives, inspired others, and achieved so much, yet I believe your greatest accomplishments are still ahead of you. May God continue to bless you and your family abundantly. May He perfect all that concerns you, keep you safe, healthy, happy, and prosperous, and grant you many more years of fulfillment and success. Cheers to you, my brother, and Happy 50th Birthday!"
},

{
  id: 36,
  name: "Monday Kouffo Herve",
  relation: "Other",
  message: "Happy 50th Birthday to the Chairman of PIO Suites. Today, we celebrate not only a remarkable milestone but also a leader whose vision, dedication, and commitment have shaped the direction and stability of the organization. Through your leadership, you have built systems that support growth, teamwork, and excellence. Your decisions consistently reflect clarity, responsibility, and a strong sense of purpose. Those around you see structure, order, and progress because of the standards you uphold. At 50, your journey stands as a reflection of experience gained through years of hard work, perseverance, and determination. You have demonstrated patience in developing people, wisdom in guiding teams, and strength in navigating challenges. Your leadership presence has inspired confidence and created opportunities for growth among those privileged to work with you. PIO Suites continues to flourish under your guidance. The quality of service, operational discipline, and continuous pursuit of improvement all bear the mark of your influence. Leadership of this caliber is never accidental—it is the product of consistency, accountability, and an unwavering commitment to excellence. As you enter this new chapter, may it bring even greater strength, wisdom, and fulfillment. May it offer deeper insight for decision-making, broader opportunities for impact, and continued success in all your endeavors. The foundation you have laid will undoubtedly continue to support future growth and lasting achievements. Wishing you good health, peace of mind, steady progress, and abundant success in leadership, business, and life. Happy 50th Birthday once again, Sir. Sincerely, Monday Kouffo Herve."
},

{
  id: 37,
  name: "Omoikere Ailakhu",
  relation: "Other",
  message: "Happy Birthday, Ochuko—a man with a heart of gold. Your warmth is the kind that turns strangers into friends and houses into homes. You have a remarkable way of making people feel welcomed, valued, and appreciated wherever you go. You celebrate others loudly, stand by them quietly, and carry a spirit of generosity that inspires everyone around you. Your kindness, compassion, and genuine care for people are gifts that have touched countless lives. As you celebrate this special milestone, I pray that this new year of your life returns to you the same goodness, love, and blessings that you so freely pour into the lives of others. May your days be filled with joy, good health, peace, fulfillment, and countless reasons to smile. Thank you for being such a wonderful person and for the positive impact you continue to make. I love you, I appreciate you, and I am truly grateful for you. Happy 50th Birthday, Ochuko, and may the years ahead be your very best yet."
},

{
  id: 38,
  name: "Nana Momoh",
  relation: "Friend",
  message: "Fifty years… what a remarkable journey, Ochuko. It feels like just yesterday we were young, running around without a care in the world, laughing over the smallest things and dreaming about the future as though it were something we could hold in our hands. Back then, we could never have imagined all that life would bring—the victories, the challenges, the lessons, and the growth. Yet through it all, one thing has remained constant: you. Ochuko, you have always been a pillar—steady, dependable, and true. In a world where so much changes, your character has remained something solid and reassuring. You have carried yourself with quiet strength, humility, and a generosity of spirit that continues to inspire everyone who knows you. You do not simply live life; you enrich it for others. As a childhood friend, I have had the privilege of witnessing your story from the very beginning. I have watched you grow, evolve, and rise into the remarkable man you are today. What stands out most is not only what you have achieved, but who you have become—a man of integrity, compassion, and unwavering loyalty. You have built relationships that matter, shown up for people when it counted most, and loved your family in ways that speak louder than words. These are the qualities that define a life well lived, and you embody them fully. At 50, you are not slowing down; rather, you stand at a powerful point of reflection, purpose, and renewed opportunity. There is wisdom in your years, strength in your experiences, and still so much greatness ahead of you. The road you have traveled has prepared you for even brighter days to come. Thank you for being Ochuko—authentic, grounded, dependable, and truly one of a kind. As you celebrate this golden milestone, may your heart be full, your home be filled with joy, and your path ahead be blessed beyond measure. May laughter never leave you, may peace always find you, and may you continue to shine in all that you do. Happy 50th Birthday, Ochuko. My brother, my friend, here’s to you and to many more years of greatness, fulfillment, and abundant blessings ahead. Yours faithfully, Nana Momoh."
},

{
  id: 39,
  name: "Comr. Anthony & Mrs. Priscilla Emeh",
  relation: "Other",
  message: "We came to know Ochuko through his parents, who lived in the same community as us. Over the years, we have watched him grow into a remarkable man of peace, integrity, and compassion. He is someone who deeply loves and cherishes his family, parents, siblings, and everyone privileged to come into contact with him. His kindness, humility, and genuine concern for others have made a lasting impression on all who know him. Ever since we met him, Ochuko has become a cherished part of our family. He is a philanthropist at heart and an astute gentleman whose generosity and goodwill continue to touch many lives. His character reflects strong values, respect for others, and a commitment to making a positive difference wherever he goes. As you celebrate this wonderful milestone of 50 years, we pray that God continues to bless and protect you in all your endeavors. May He grant you good health, greater success, peace of mind, and abundant prosperity. May your days be long, your joy be full, and your years ahead be even more beautiful and rewarding than those behind you. Happy 50th Birthday, Ochuko. We wish you many more years of happiness, fulfillment, and God's abundant blessings."
},

{
  id: 40,
  name: "Oboho Victor",
  relation: "Classmate / Alumni",
  message: "Happy Birthday, Ochuko Onobrakpor, a truly special old school mate and friend of over 30 years. It is amazing how time has flown, yet the memories from our school days remain as fresh as ever—the laughter, little adventures, shared challenges, and unforgettable moments that shaped our younger years. Though life has taken us on different paths and brought us new experiences, those memories remain priceless and continue to remind us of the bond we built so many years ago. For more than three decades, your friendship has been a beautiful testament to the enduring power of genuine connections. Through the years, you have remained a person of character, kindness, and integrity, and it has been a privilege to witness your journey and achievements. On this special milestone, I pray that the year ahead brings you abundant good health, peace of mind, happiness, and even greater success in all your endeavors. May your days be filled with joy, laughter, fulfillment, and countless reasons to smile. May every dream and aspiration find fulfillment, and may God's favor continue to rest upon you and your family. Here’s to many more beautiful years ahead, filled with blessings, prosperity, and memorable moments. Happy 50th Birthday once again, my dear old school mate and friend. Warm regards, Oboho Victor."
},

{
  id: 41,
  name: "Chidinma Aiyu",
  relation: "Other",
  message: "Some journeys are measured by years, while others are measured by the lives touched along the way. Today, as you celebrate your 50th birthday, your life stands as a testament to experience, growth, endurance, resilience, and grace. Fifty years is a remarkable milestone, reflecting not only the passage of time but also the impact you have made on those around you through your character, achievements, and relationships. Though life may have carried us beyond the classroom walls and onto different paths, it is truly a beautiful thing to witness you reach and celebrate this significant chapter of your journey. Half a century is no small accomplishment, and it deserves to be honored with gratitude, joy, and reflection. As you enter this golden season of your life, may it bring calmness where there has been stress, joy where there has been worry, and fulfillment in all that truly matters to you. May your days be enriched with good health, peace of mind, meaningful relationships, and continued success. May the years ahead be filled with purpose, happiness, and countless blessings that exceed your expectations. Happy 50th Birthday, and may you enjoy many more meaningful, prosperous, and rewarding years ahead."
}, 

{
  id: 42,
  name: "Eseka Uche Duke",
  relation: "Classmate / Alumni",
  message: "Ochuko is truly a special person. I remember having a conversation about him with one of our classmates, Dr. Hakeem Olabinjo, and we both agreed on the same thing—Ochuko remains one of the most humble and respectful individuals we know. What is even more remarkable is that his financial success and accomplishments in life have not changed him in any way. He continues to relate freely with everyone, regardless of status or background, and treats people with genuine warmth and respect. One quality that truly sets him apart is his generosity. Time and again, I have heard from classmates and friends about how Ochuko has supported others financially, not simply by giving temporary help, but by empowering them with opportunities and resources that enable them to build sustainable futures for themselves. He believes in helping people own a net to fish rather than merely giving them fish to eat, and that speaks volumes about the kind of person he is. My dear friend, Ochuko Onobrakpor, fondly known as 'The Olorogun 1 of AIHS,' as you climb the fifth ladder today and celebrate this wonderful milestone of 50 years, I pray that God grants you a long, healthy, and fulfilling life. May your days on earth extend well into your 90s in good health, sound mind, marital bliss, and increasing prosperity. May your impact continue to grow, and may your generosity and kindness return to you in countless blessings. Happy 50th Birthday, my dear friend. Wishing you many more years of joy, peace, success, and divine favor in Jesus' name."
},

{
  id: 43,
  name: "Hon. Kareem Abubakar Sidiq ACA, ACTI",
  relation: "Other",
  message: "Happy 50th Birthday, Engineer Ochuko! 🎉 Today, we celebrate 50 remarkable years of wisdom, impact, excellence, and purposeful living. Your dedication to your profession, unwavering integrity, and commitment to uplifting others have created a legacy that will continue to inspire generations. The positive influence you have had on colleagues, friends, family, and the wider community speaks volumes about the kind of man you are. At 50, you are not simply marking another year—you are celebrating a lifetime of achievements, valuable experiences, meaningful relationships, and countless contributions that have left lasting impressions on those around you. You stand as a shining example of leadership, resilience, and service. As you enter this new decade, may it bring you robust health, greater happiness, deeper fulfillment, and continued success in every area of your life. May the projects you undertake bring you pride and satisfaction, and may your efforts continue to yield abundant rewards. May God bless you with peace of mind, strength, and many more years of impactful living. Cheers to a golden jubilee that is truly well-earned. Enjoy your special day to the fullest, Sir, and may the years ahead be even more rewarding than those behind you. Warmest regards."
},

{
  id: 44,
  name: "Lady Chinyere Anujulu (Amadi)",
  relation: "Friend",
  message: "My Past President Emeritus, happy 50th birthday, my dear friend. Half a century of laughter, strength, and unforgettable memories—and somehow, the best of you is still unfolding. I am grateful for every moment we have shared and for the wonderful friendship that has stood the test of time. Your wisdom, kindness, and inspiring spirit continue to touch the lives of everyone around you. As you celebrate this golden milestone, may your days be filled with love, joy, good health, peace, and endless fulfillment. May the years ahead bring even greater blessings, cherished memories, and abundant happiness. Cheers to you—timeless, inspiring, and deeply loved. Happy 50th Birthday once again, my dear friend. With warmest love and best wishes. 💛"
},

{
  id: 45,
  name: "Olorogun and Mrs. Lawrence John O. Iriferigoma",
  relation: "Other",
  message: "A Tribute to Engr. Ogheneochuko Onobrakpor at 50. Congratulations on your new age, our dearly beloved Ochuko. Fifty years is not just a milestone—it is a testimony, and your journey is one of purpose, diligence, excellence, and lasting impact. Over the years, you have built more than structures; you have built a legacy defined by integrity, professionalism, and service. In engineering, your work reflects precision and excellence. In leadership, you exemplify wisdom, humility, and vision. In the community, you make a difference through generosity and selfless service, often without seeking recognition or the spotlight. At 50, you stand as living proof that consistency, hard work, and faith yield remarkable results. The young man who once dreamed big has become a man many look up to for guidance, solutions, encouragement, and inspiration. Yet through every achievement and accomplishment, you have remained grounded, approachable, and committed to uplifting those around you. Today, we celebrate not only your titles and achievements but also the character behind them—the discipline, resilience, perseverance, quiet strength, and unwavering faith that have carried you through life's journey. Your life reminds us that true success is measured not merely by accomplishments, but by the lives touched, the values upheld, and the standards set for those who follow behind. As you celebrate this golden milestone, we pray that God grants you continued good health, greater influence, peace of mind, and abundant fulfillment. May the years ahead bring even greater opportunities, deeper joy, and lasting rewards for all your labor. Here's to 50 years of remarkable impact and to many more years of purpose, prosperity, and meaningful service. Happy 50th Birthday, Engr. Ogheneochuko Onobrakpor. With lots of love, Olorogun and Mrs. Lawrence John O. Iriferigoma."
},

{
  id: 46,
  name: "Mrs. Gold C. Nwaukwa",
  relation: "Other",
  message: "Warmest birthday wishes to Engineer Ochuko Onobrakpor on the celebration of your Golden Jubilee. As you mark this significant milestone of 50 years, we celebrate a life defined by dedication, excellence, and meaningful contributions. Your remarkable achievements and impact within the oil and gas industry stand as a testament to your expertise, professionalism, and unwavering commitment to excellence. Through years of hard work and perseverance, you have earned the respect and admiration of colleagues, associates, and all who have had the privilege of working with you. As you begin this new chapter, may it bring even greater success, renewed strength, good health, peace of mind, and lasting fulfillment. May your experience continue to inspire others, and may your efforts yield even greater accomplishments in the years ahead. Here's to many more years of excellence, achievement, happiness, and God's abundant blessings. Happy 50th Birthday, and may your Golden Jubilee be filled with joy, gratitude, and beautiful memories. Happy Blessed Birthday! 🎁"
},

{
  id: 47,
  name: "Anayochukwu Anamege-Joshua",
  relation: "Friend",
  message: "As millions of people from different walks of life gather to celebrate your 50th birthday, Engr. Ochuko Onobrakpor, it stands as a powerful testament to a life built on hard work, resilience, purpose, and genuine impact. Your journey has been defined not only by professional achievements but also by the countless lives you have touched along the way. You have built more than structures—you have helped build people, values, opportunities, and lasting relationships. Your influence extends far beyond your profession, reaching into the hearts and lives of many who have had the privilege of knowing you. Today, time itself bears witness to the remarkable impact you have made through your generosity, leadership, and unwavering commitment to others. As you celebrate this golden milestone, may your heart be filled with deep joy, peace, gratitude, and fulfillment. May the years ahead bring even greater accomplishments, abundant blessings, good health, and continued opportunities to inspire those around you. Happy 50th Birthday, Sir. May your legacy continue to grow and your best years still lie ahead."
},

{
  id: 48,
  name: "Obiageli Eki-Allen",
  relation: "Friend",
  message: "To a Remarkable Soul, today we celebrate not just the passing of time, but the incredible person you are. Your presence in the lives of so many is a precious gift, and your dedication to excellence, kindness, and genuine care for others leaves a lasting impression on everyone you encounter. As you mark this special milestone of 50 years, I celebrate the impact you have made, the relationships you have nurtured, and the many lives you have touched through your generosity and character. My wishes for you are simple yet heartfelt. May the coming year bring continued growth and new opportunities to shine, enabling you to reach even greater heights in both your professional and personal endeavors. May your days be filled with abundant joy, laughter, and the same warmth and positivity that you so freely share with others. May you experience peace in every season, prosperity in all your endeavors, good health, and the fulfillment of your heart’s deepest desires. As you begin this exciting new chapter, may it be filled with memorable moments, meaningful achievements, and countless reasons to celebrate. Happy 50th Birthday to a truly remarkable soul. Wishing you many more years of happiness, success, and God's abundant blessings."
},

{
  id: 49,
  name: "Omos Okpere",
  relation: "Friend",
  message: "My dear friend and brother, Ochuko Onobrakpor, today we celebrate fifty remarkable years of grace, strength, resilience, and unforgettable memories. This milestone is a testament to God's faithfulness, your perseverance, and the positive impact you have made in the lives of so many people. As you step into this new chapter of life's journey, may God Almighty continue to preserve you in excellent health, surround you with His favor, and grant you the wisdom and strength to enjoy every blessing that lies ahead. May your days be filled with peace, happiness, fulfillment, and the joy of living life graciously. I pray that you experience the blessing of being surrounded by your children, grandchildren, and great-grandchildren, witnessing the fruits of your labor and the legacy you have built through love, dedication, and service. May your home continually be filled with laughter, unity, and abundant joy. Welcome to many more blissful and prosperous years ahead. Congratulations on this golden milestone, and Happy 50th Birthday! 🎉"
},

{
  id: 50,
  name: "ChiChi Police (AIHS 93)",
  relation: "Other",
  message: "On this special day, as you celebrate your 50th birthday, I want to take a moment to acknowledge the incredible impact you have made through your philanthropic endeavors and your unwavering commitment to helping others. Your business acumen, leadership qualities, and genuine desire to uplift people continue to inspire everyone around you. You have consistently demonstrated that true success is not only measured by personal achievements but also by the positive difference made in the lives of others. Your generosity, compassion, and willingness to support those in need have touched countless lives and created opportunities for many. As you celebrate this golden milestone, may this new year of your life bring even more opportunities to pursue your passion for serving others and making a meaningful impact in the world. May your efforts continue to bear lasting fruit, and may you experience greater joy, fulfillment, prosperity, and success in all your endeavors. Wishing you a year filled with happiness, good health, peace of mind, and the fulfillment of your heartfelt dreams and aspirations. Here's to many more years of purpose, influence, and positive impact. Happy 50th Birthday, Ochuko! And by the way, you're definitely the youngest 50-year-old I know! 🎉"
},

{
  id: 52,
  name: "Ikechukwu Osimiri",
  relation: "Friend",
  message: "Happy Birthday, Engr. Ochuko, AKA 'Man Like Shosho.' You are someone who has become much more than a friend to my older brother—you have truly become family to all of us. Your kindness, generosity, and genuine love for people never go unnoticed. You have a unique way of showing care and support that is never loud or attention-seeking, yet always meaningful, precise, and impactful. It is rare to find someone who balances friendship and family relationships so effortlessly, but you do so with grace, sincerity, and authenticity. Today, we celebrate you not only for reaching the incredible milestone of your Golden Jubilee but also for the countless lives you continue to influence positively through your actions, character, and generosity. Your presence brings comfort, your friendship brings value, and your example inspires others to be better. As you mark this special day, I pray that your life continues to be filled with success, good health, peace, and happiness that reflects all the goodness you so freely give to the world around you. May every seed of kindness you have sown return to you in abundance, and may the years ahead be your most rewarding yet. Thank you for being exactly who you are—a genuinely good human being whose impact reaches far and wide. Enjoy your special day, Baba; you truly deserve every celebration and every blessing that comes your way. Many happy returns of the day! Warmest regards."
},
{
  id: 53,
  name: "LOVETT B. ALUKO",
  relation: "Other",
  message: "Happy Birthday, dearest Chief Ochuko. On this special occasion of your 50th birthday, I join countless others in celebrating your life, your achievements, and the wonderful person you are. May the good Lord continually bless you, guide you, and preserve you in good health, peace, and happiness in Jesus' name. May His favor surround you and your family, and may every day of your life be filled with joy, prosperity, and fulfillment. As you step into this new chapter, I wish you all the very best that life has to offer—greater success, abundant blessings, lasting happiness, and the realization of your heart’s desires. May your future be brighter than ever, and may you continue to enjoy God's goodness and grace in every area of your life. Happy 50th Birthday, Chief Ochuko. Wishing you many more wonderful and blessed years ahead. 🙏🏻💖💖"
},

{
  id: 54,
  name: "Grace Abu",
  relation: "Family",
  message: "Engr. Ochuko Onobrakpor is my beloved nephew, and it has been a joy watching him grow from a disciplined, respectful, and God-fearing child into the remarkable man he is today. Throughout his life, he has demonstrated strong values, integrity, and a deep sense of responsibility. He is caring, supportive, and always willing to lend a helping hand to both family and friends whenever the need arises. His kindness, generosity, and commitment to those around him have earned him the love and respect of many. Today, as he celebrates his 50th birthday, my heart is filled with gratitude to God for His faithfulness over his life. I pray that God will continue to bless him abundantly with wisdom, good health, happiness, strength, and divine favor in all that he does. May his days be long, his home be filled with joy, and his future be even brighter than his past. Congratulations on this wonderful milestone, and Happy 50th Birthday, Ochuko. May God's blessings continue to rest upon you in Jesus' name."
},

{
  id: 55,
  name: "Ndidiamaka Olisakwe",
  relation: "Friend",
  message: "Happy Birthday, Ochuko. Today, we celebrate you and everything that makes you such a special and remarkable person. Throughout your life, you have consistently shown up for others with kindness, generosity, and unwavering support, touching countless lives along the way. Your strength of character, compassion, and willingness to help inspire not only me but everyone who has had the privilege of knowing you. As we honor this significant milestone, we celebrate not only your achievements but also the incredible person behind them. You have built a life to be proud of—one marked by meaningful relationships, positive impact, and enduring values. As you step into your 50th year, may it be the beginning of an even more exciting and fulfilling chapter filled with new opportunities, memorable experiences, and greater accomplishments. May your Golden 50th be filled with abundant joy, prosperity, good health, peace of mind, and all the happiness your heart can hold. Wishing you a wonderful celebration and many more years of blessings, success, and fulfillment ahead. Happy Golden 50th Birthday, Ochuko!"
},

{
  id: 56,
  name: "Taiwo Famakinde",
  relation: "Other",
  message: "Happy 50th Birthday, Boss! 🎉 Oga Ochuko, you don complete five full decades! That's 50 years of surviving, thriving, achieving, and somehow still looking much younger than the number says. At an age when some people are slowing down, you're still moving with energy, purpose, and determination as if you have a few extra lives in reserve. For 50 years, you've been a gentleman, a leader, a legend, and an inspiration to many. You've mastered the art of aging like fine wine—getting wiser, better, bolder, and perhaps just a little more expensive to maintain! Today, we celebrate not only your accomplishments but also your humor, resilience, and the positive impact you've made on everyone around you. As you step into this exciting new chapter, may it bring you strong knees, a sharp memory—especially for where you dropped your phone—abundant wealth, excellent health, zero hospital bills, and people who stress you less than Lagos traffic. Oga Ochuko, you're not old; you're a limited edition. Vintage. Classic. The kind of person we don't come across every day. Your experience, wisdom, and character make you truly priceless. So pop the champagne—or palm wine if you prefer—laugh loudly, celebrate fully, and enjoy every moment of this special milestone. The world still needs your wisdom, leadership, and premium vibes. Happy 50th Birthday, Legend! May you continue to age gracefully—or at the very least, age with plenty of style. With love, laughter, admiration, and plenty of respect."
},

{
  id: 57,
  name: "Okechukwu Okpara (Air Commodore, Air Component Commander)",
  relation: "Other",
  message: "To my dear friend and brother, Engr. Ochuko Onobrakpor, reaching the golden age of 50 is a milestone worthy of both reflection and celebration. As we approach the 4th of July, 2026, I find myself looking back on a journey that has spanned the better part of our lives. Our story began decades ago, rooted in the shared experiences of our primary and secondary school days. It feels like only yesterday that we were navigating school corridors together, two young students with limitless dreams and the world ahead of us. Those formative years were more than a season of academic learning; they were the years in which our character was shaped and a lifelong friendship was forged. Whether we were facing classroom challenges or sharing laughter during breaks, your steady nature, intelligence, and determination were always evident. Watching you grow from those early days into a distinguished engineer has been a source of immense pride. You have taken the curiosity, discipline, and resilience of our youth and transformed them into a career marked by integrity, professionalism, and technical excellence. You have not only built a respected professional reputation but also a life centered on purpose, service, and an unwavering commitment to excellence that inspires everyone around you. Ochuko, as you celebrate this remarkable milestone, my wishes for you are as deep as the history we share. I pray for continued health, strength, and vitality, that your energy remains as strong as your spirit and your passion remains as vibrant as ever. May this new decade bring even greater opportunities for impact, both in your profession and in the lives of those fortunate enough to know and work with you. Most importantly, may your life continue to be filled with the same joy, peace, and fulfillment that you have consistently brought to our friendship over the years. Thank you for being a constant presence through every stage of life—from our school uniforms to the professional heights you have achieved today. It is a rare privilege to have a friend whose journey has been intertwined with mine from the very beginning. Happy 50th Birthday, Ochuko. Here’s to a future that is every bit as bright, purposeful, and well-engineered as the remarkable fifty years behind you. With deep respect and enduring friendship. Yours faithfully, Okechukwu Okpara, Air Commodore, Air Component Commander."
},
{
  id: 58,
  name: "Uche Enyinnaya",
  relation: "Other",
  message: "Happy Birthday to you, Ochuko. On this special occasion, I join your family, friends, and well-wishers in celebrating a life filled with purpose, achievement, and impact. As you mark this wonderful milestone, I pray that God blesses you with long life, good health, peace of mind, and continued prosperity. May your days be filled with happiness, your efforts crowned with success, and your future brighter than ever before. May you continue to enjoy God's favor, protection, and abundant blessings in all that you do. Wishing you many more joyful and fulfilling years ahead. Happy 50th Birthday and congratulations on this remarkable milestone!"
},

  ];

  const [tributes, setTributes] = useState(defaultTributes);

  return (
    <BrowserRouter>
      <Routes>
        {/* The layout route acts as the state provider for everything inside it */}
        <Route element={<Outlet context={{ tributes, setTributes }} />}>
          <Route path="/" element={<Home />} />
          <Route path="/tributes" element={<TributesPage />} />
          <Route path="/tribute/:id" element={<TributeDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;