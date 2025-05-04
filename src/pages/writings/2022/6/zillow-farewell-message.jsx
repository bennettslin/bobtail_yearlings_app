import React from 'react'
import Page from '../../../../containers/Page'
import { pagesMap } from '../../../../content/writings/2022'
import Image from '../../../../components/Image'
import scenePhoto from '../../../../assets/images/writings/2022/6/zillow-farewell-message/scene.jpg'
import promoPhoto from '../../../../assets/images/writings/2022/6/zillow-farewell-message/promo.jpg'
import showPhoto from '../../../../assets/images/writings/2022/6/zillow-farewell-message/show.jpg'
import teamPhoto from '../../../../assets/images/writings/2022/6/zillow-farewell-message/team.jpg'
import ticketPhoto from '../../../../assets/images/writings/2022/6/zillow-farewell-message/ticket.jpg'

const id = 'zillow-farewell-message'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            metaDescription: `A parting message to my Zillow teammates.`,
            body: [
                `
*I worked as a frontend developer at Zillow for seven years. Before leaving, I followed in the same spirit of others who'd left before me, and wrote this farewell message to my teammates on the company's internal wiki.*

*Where you see a teammate's name, that was originally a hyperlink to their internal wiki page. Also, since this was meant for the workplace, I kept it lighthearted and left out all the depressing stuff, which is why there are noticeable gaps in my life's story.*

### Farewell

I wanted to personally reflect on my time at Zillow, and to express gratitude for all that my team and my colleagues have done for me. Since the path I took is kind of unusual, I provided some additional context to explain certain parts. So there's a bit of backstory here, which makes all of this a little more self-indulgent than I'd originally planned. Sorry! I've labeled the various parts, so feel free to jump in (or out) at any point.

### The band part

I spent my college years in the Bay Area, playing in a band with friends. We weren't big by any means, but people we didn't know would know who we were. I'd walk into a party and overhear, "Hey, that's the Yearlings singer." I thought this was the most amazing feeling ever, and I wanted more of it! Surprisingly, my friends didn't. So after years of going nowhere, I decided to strike out on my own. The plan was to spend five years making a demo so epic, it was guaranteed to get noticed.
                `, (
                    <Image
                        isPortrait
                        {...{
                            src: scenePhoto,
                            caption: `Our little East Bay art punk scene. No one really took photos back then, so this is all I've got.`,
                        }}
                    />
                ), `
It worked. The demo attracted some record labels. But they needed to see that I had a working band. And as I quickly found out, it's hard to get others to join when: they aren't your close friends; they didn't contribute to the demo themselves; and, the music is so complex that it's difficult to learn. I just couldn't keep a lineup together long enough, and the talks fizzled.
                `, (
                    <Image
                        isPortrait
                        {...{
                            src: promoPhoto,
                            caption: `Embarrassing promo photo for the demo.`,
                        }}
                    />
                ), `
### The grad school part

Not knowing what else to do, I moved to New York and got an MA in music composition. Still not knowing what to do, I decided to get a PhD in music theory. The choice was between FSU and UW. I was torn between the two, but my girlfriend at the time, who was from Little Rock, had no desire to live in the South again. So she chose for us: Seattle it was! (Chelsea Campbell and Stephens Jean-Jacques, feel free to confirm if Tallahassee is really part of the South.)
                `, (
                    <Image
                        {...{
                            src: showPhoto,
                            caption: `The New York lineup of the Bobtail Yearlings. Literally the only photo of us from that time.`,
                        }}
                    />
                ), `
Unfortunately, my advisor retired as soon as I arrived at UW, and no one else specialized in the [neo-Riemannian theory](https://en.wikipedia.org/wiki/Neo-Riemannian_theory) that I came to study. In fact, I later learned that it's a bit controversial among music theorists, and some of the other professors were openly indifferent to it.

### The tech meetup part

With no chance of getting a PhD, I wrapped up my studies with just another MA. Being in Seattle, I couldn't help but hear about the startup scene. Still stinging from my missed opportunity with the record labels, I had an idea for a startup of my own: a band incubator to connect ambitious musicians. Hoping to find a technical cofounder, I attended tech meetups. But no one wanted to join my startup. I mostly ended up just scoring free food.

However, through these meetups, I kept hearing about something called a coding bootcamp. It seemed too good to be true. I applied and was accepted into General Assembly's second cohort. One day, we took a field trip to a company called Zillow. The name sounded familiar. As I stepped into the office, I realized I'd been there before, for a tech meetup.
                `, (
                    <Image
                        {...{
                            src: ticketPhoto,
                            caption: `I scored a free Zillow mug that night. Little did I know, my cupboard would soon be filled with Zillow mugs.`,
                        }}
                    />
                ), `
### The Zillow part

We sat in the classroom on Floor 29, as Josh Ritter answered our questions. Everyone we met was so warm and friendly. I loved their energy and spirit. Admittedly, the free snacks and oceanside view also won me over! I vowed right then and there to work at Zillow. After applying, I spent every waking hour of the next few weeks preparing for the interview. I got the offer.
                `, (
                    <Image
                        {...{
                            src: teamPhoto,
                            caption: `The original Floor 29 teams.`,
                        }}
                    />
                ), `
I was the first developer on a new team called Rentals Revenue. To tackle my imposter syndrome, I decided to spend the first half year getting better at coding by working late. In the meantime, I would figure out what my next several years would look like. I was still committed to making it in a band, and there was no doubt I'd eventually come back to this lifelong ambition. It was just a question of how and when.

My friends advised me to play local shows, but I knew this wasn't feasible. As a dishwasher, I could switch hats easily because it wasn't a job I cared about. Whereas, as a developer, I would continue to think about coding after work. Which was a good thing: I liked feeling challenged and engaged. But this also meant I wasn't in the right headspace to write songs.

I needed an artistic project that could align with my Zillow work. So I decided to create an audio webcomic for my epic demo. For the next five years, I would put in forty hours a week at Zillow, and then another forty hours on this project. I've now logged more than 10,000 hours on this webcomic!

Over the years, everything I learned about frontend coding at Zillow would benefit my own project: Redux, React hooks, Jest mocking. And sometimes the reverse happened: After spending hours trying to fix a scrolling issue on my own project, I would discover the same issue in our team's code, and it would only take me minutes. After E.K. Yancy joined, the frontend best practices he introduced to our team improved my own skills by leaps and bounds.

I've often thought about Zillow's mission statement and core values. Once you do, it becomes obvious how much time and care went into choosing every single word. Everything important is included, and anything irrelevant or redundant is left out. They define who we are, and how we want to behave. They're the be-all and end-all of why we're here.

As someone who's been singularly focused on making it in a band my entire life, I realize now just how strange it is that I've never sat down and written out my band's mission statement and core values. I'll do this soon. I don't have it fully articulated yet, but I know what the first core value will be. It will be to achieve the same feeling of belonging and togetherness that I felt at Zillow.

I wasn't a good band leader, to be honest. I was passive-aggressive; I didn't make my bandmates feel valued. So at Zillow, whenever I had a constructive chat with a manager, or our team would swarm to meet a deadline and celebrate in the afterglow, I would try to reverse engineer in my head how it all came together. I wanted to capture that same dynamic with my band in the future.

As a band leader, it was also never clear to me how a group comes together to get a big project done. My intuition was that this should happen organically, and so I would get frustrated with the others when it didn't. But at Zillow, I saw how much time we spent on standups, ticket pointing, and retros. I now understand how much communication and planning is needed to build and release even a small feature.

And our team was always experimenting with different approaches, from Agile to Kanban. During Project Comet, we would break out into smaller subgroups, which Brittany Kohler named Groups of Friends. It was fun to work with different combinations of teammates for short periods of time, and it proved to be effective. I plan to use this idea for a large-scale project at some point.

A couple months ago, I took my R&R. For the first time in quite a while, I was able to devote every waking hour to my projects. Since I no longer had to context switch, I was logging a hundred hours each week. It was heaven! So when I came back to work after the six weeks was up… I found it really hard to break free from the gravity of my projects. Which wasn't fair to my teammates. So that's when I decided it was time to take the plunge and begin working on my music full-time.

### The closing part

I'll miss you all, and I wish each of you the best in your life's journey!
    `,
            ],
        }}
    />
)

export default Component
