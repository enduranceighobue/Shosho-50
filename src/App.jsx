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