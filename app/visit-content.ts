import { withBasePath } from "./base-path";

export type Edition = "now" | "future" | "sxsw";
type Itinerary = {
  label: string;
  time: string;
  title: string;
  description: string;
  moments: [string, string, string][];
};
type Content = {
  heading: string;
  headingEnd: string;
  heroCopy: string;
  heroCta: string;
  navCta: string;
  heroImage: string;
  heroAlt: string;
  heroCaption: string;
  status: string;
  invitationTitle: string;
  invitationLead: string;
  invitationCopy: string;
  experienceTitle: string;
  communityTitle: string;
  communityCopy: string;
  austinCopy: string;
  formTitle: string;
  formTitleEnd: string;
  requestIntro: string;
  faqs: [string, string][];
  stays?: Record<"day" | "weekend" | "week", Itinerary>;
};

const austinImage = {
  heroImage: withBasePath("/images/austin.jpg"),
  heroAlt: "Austin skyline and Lady Bird Lake at dusk",
  heroCaption: "Austin, Texas · Your trip starts here",
};

export const pageContent: Record<Edition, Content> = {
  now: {
    ...austinImage,
    heading: "Come for Austin.",
    headingEnd: "Meet what’s next.",
    heroCopy:
      "Make that Austin trip. Meet the people building Sanctuary. Get an early look at a different way to live in the Hill Country.",
    heroCta: "Plan my Austin visit",
    navCta: "Plan my visit",
    status:
      "Sanctuary is under construction. The community is already coming together. Come meet us.",
    invitationTitle: "A great trip. A new possibility.",
    invitationLead:
      "Maybe Austin is already on your list. Let’s give you one more reason to come.",
    invitationCopy:
      "Sanctuary is a visionary development taking shape in the Texas Hill Country. Before the homes are finished, there are people to meet, plans to explore, and conversations worth having. We’ll help shape an Austin visit around your interests, with a personal introduction to the community at its heart.",
    experienceTitle: "Make a little room for possibility.",
    communityTitle: "The buildings are coming. The connections can start now.",
    communityCopy:
      "This is an invitation to get to know the people behind the vision. Spend time with our community team, connect with future residents, and find out what being part of Sanctuary could mean for you.",
    austinCopy:
      "You don’t need to be planning a move to want a great Austin trip. Come for the food, the music, and the time outdoors. Make meeting Sanctuary one memorable part of it.",
    formTitle: "Austin is calling.",
    formTitleEnd: "Let’s make a plan.",
    requestIntro:
      "I’m interested in an Austin trip and an early introduction to the Sanctuary community while the development is under construction.",
    faqs: [
      [
        "What does early access mean?",
        "A personal introduction to the team, future residents, and the development vision while Sanctuary is taking shape. It is a chance to learn and connect, not a promise of priority purchasing, special pricing, or unrestricted construction-site access.",
      ],
    ],
    stays: {
      day: {
        label: "A day",
        time: "Already in Austin? Come say hello.",
        title: "A day that opens a door.",
        description:
          "Keep your Austin plans. Add a personal introduction to the people and ideas behind Sanctuary.",
        moments: [
          [
            "Morning",
            "Start with Austin",
            "Take a slow coffee or a walk by the lake. We’ll suggest a meeting time that works with the rest of your day.",
          ],
          [
            "Midday",
            "Meet the community",
            "Join our team for a conversation about Sanctuary and connect with future residents where schedules align.",
          ],
          [
            "Afternoon",
            "Explore what’s taking shape",
            "Look through the development plans and ask your questions. An accompanied site visit can be discussed if construction conditions allow.",
          ],
        ],
      },
      weekend: {
        label: "A weekend",
        time: "Your Austin getaway, with a new connection.",
        title: "A little Austin. A bigger possibility.",
        description:
          "A weekend built around discovering the city and meeting the community that could become part of your life.",
        moments: [
          [
            "Friday",
            "Make it an Austin weekend",
            "Settle into your local accommodation. Explore a neighborhood, find dinner, and leave a little room for live music.",
          ],
          [
            "Saturday",
            "Get in on the conversation",
            "Meet the Sanctuary team, explore the vision, and arrange a relaxed meal or coffee with future residents. Site access, if available, is coordinated in advance.",
          ],
          [
            "Sunday",
            "See how it feels",
            "Enjoy a morning outdoors and a final conversation about the community. Head home with new connections and a sense of what comes next.",
          ],
        ],
      },
      week: {
        label: "A week",
        time: "Explore the city. Get to know the people.",
        title: "Give Austin a little more time.",
        description:
          "Work some, wander some, and make space for a deeper introduction to the community.",
        moments: [
          [
            "Days 1–2",
            "Find your Austin rhythm",
            "Settle into a local stay and explore the neighborhoods, coffee spots, and outdoor places that interest you.",
          ],
          [
            "Days 3–5",
            "Meet the people behind the plans",
            "Arrange time with our team and future residents. Explore the vision for Sanctuary and discuss construction progress and possible accompanied site access.",
          ],
          [
            "Days 6–7",
            "Follow the connections",
            "Revisit a favorite place, continue a conversation, and talk about how you might stay involved as the development takes shape.",
          ],
        ],
      },
    },
  },
  future: {
    heading: "Some places you visit.",
    headingEnd: "Some places you feel.",
    heroCopy:
      "Come experience Sanctuary. A day, a weekend, a week. A personal invitation to discover what life here could be.",
    heroCta: "Find your kind of visit",
    navCta: "Plan your visit",
    heroImage: withBasePath("/images/sanctuary.webp"),
    heroAlt:
      "Sanctuary architectural rendering of a home opening onto a pool and native landscape",
    heroCaption: "A glimpse of the vision · Architectural rendering",
    status:
      "A look ahead: this is our future-facing invitation. Sanctuary is currently under construction.",
    invitationTitle: "You don’t find your place from a distance.",
    invitationLead:
      "You find it in a conversation that runs long. A walk that clears your head. That quiet feeling of “I could see myself here.”",
    invitationCopy:
      "Imagine a personal introduction to Sanctuary: time on the land, connections with future neighbors, and a taste of the Austin around us. This is the experience we’re working toward, planned around the things that matter to you.",
    experienceTitle: "How long can you stay?",
    communityTitle: "Come for the place. Stay curious about the people.",
    communityCopy:
      "The best part of a community is who you share it with. Your visit is a chance to have real conversations with the people helping Sanctuary take shape.",
    austinCopy:
      "Let the visit stretch beyond Sanctuary. A morning on the trail. A really good taco. Music that makes you stay for one more song.",
    formTitle: "Your first visit. The start of",
    formTitleEnd: "something good.",
    requestIntro:
      "I’m interested in the future Sanctuary visit experience and would love to discuss what might be possible.",
    faqs: [
      [
        "Is this experience available now?",
        "This page imagines a future Sanctuary visit. The development is currently under construction, and these itineraries are illustrative. To explore a community-focused visit today, choose Now at the top of the page.",
      ],
    ],
  },
  sxsw: {
    ...austinImage,
    heading: "Here for SXSW?",
    headingEnd: "Meet a different future.",
    heroCopy:
      "You’re already coming to Austin for new ideas. Make room for one you could live in. Add a personal introduction to Sanctuary to your trip.",
    heroCta: "Add Sanctuary to my trip",
    navCta: "Plan my visit",
    status:
      "An invitation to meet the community behind Sanctuary, currently under construction. Visits arranged around your trip.",
    invitationTitle: "The next big idea might feel like home.",
    invitationLead:
      "Between the conversations and the full calendar, leave room for a different kind of connection.",
    invitationCopy:
      "Sanctuary is a visionary community taking shape in the Texas Hill Country. While you’re in Austin, meet the team, connect with future residents, and explore the idea of a life rooted in community and nature. Tell us your free windows. We’ll help you find a fit.",
    experienceTitle: "Your trip. A little more possibility.",
    communityTitle: "New ideas. Future neighbors. One worthwhile detour.",
    communityCopy:
      "Step out of the event rhythm for a personal conversation about what we’re building. Explore the vision and meet people asking the same question: what could a more connected life look like?",
    austinCopy:
      "Keep the Austin plans you came for. We’ll help you make room for a coffee, a community conversation, or a longer exploration before or after your SXSW schedule.",
    formTitle: "You’ll already be here.",
    formTitleEnd: "Let’s meet.",
    requestIntro:
      "I’m coming to Austin for SXSW and would like to add a Sanctuary community introduction to my trip.",
    faqs: [
      [
        "How much time should I set aside?",
        "Share your free windows and where you’re staying. We’ll discuss a short community introduction or a longer outing, including travel time, before you commit. There are no fixed sessions to book on this page.",
      ],
      [
        "Is this an official SXSW event?",
        "No. This is an independent invitation from Sanctuary for people visiting Austin during SXSW. No SXSW badge access, festival admission, or official programming is included.",
      ],
      [
        "Can you arrange transportation?",
        "Tell us where you’ll be based. The team will discuss meeting locations and transport options with you; a shuttle or transfer is not included or guaranteed.",
      ],
    ],
    stays: {
      day: {
        label: "Before SXSW",
        time: "Arrive with room to explore.",
        title: "Start your trip with a connection.",
        description:
          "Come into Austin a little early and get to know the community before your calendar fills up.",
        moments: [
          [
            "Settle in",
            "Make Austin your base",
            "Arrive at your local accommodation and share the time you have available before your SXSW plans begin.",
          ],
          [
            "Meet up",
            "A personal introduction",
            "Meet our community team for a conversation about Sanctuary. We’ll coordinate a location and introductions around everyone’s availability.",
          ],
          [
            "Look ahead",
            "See what we’re imagining",
            "Explore the development vision and ask about life here. A visit to accessible areas of the site may be arranged if construction permits.",
          ],
        ],
      },
      weekend: {
        label: "Between plans",
        time: "Find a window in your calendar.",
        title: "A good conversation fits anywhere.",
        description:
          "A lighter introduction for a busy Austin trip. Tell us when you’re free and we’ll explore what works.",
        moments: [
          [
            "Your window",
            "Share the time you have",
            "Tell us your availability and where you’ll be. We’ll discuss a meeting that fits without assuming you have a whole day to spare.",
          ],
          [
            "A coffee",
            "Meet the people",
            "Make time for a focused conversation with the Sanctuary team and, where schedules align, a future resident.",
          ],
          [
            "Keep in touch",
            "Let the idea settle",
            "Take the vision with you. Continue your SXSW plans, and arrange a deeper conversation or a future visit if it feels right.",
          ],
        ],
      },
      week: {
        label: "After SXSW",
        time: "Stay a little longer. Slow down.",
        title: "Let the best part be the afterword.",
        description:
          "Add breathing room to the end of your trip, with community, nature, and a fresh perspective on Austin.",
        moments: [
          [
            "Exhale",
            "Trade the agenda for a slow morning",
            "Keep your local stay a little longer and make space for Austin at a different pace.",
          ],
          [
            "Connect",
            "Spend time with Sanctuary",
            "Meet the community team, explore the plans, and arrange introductions to future residents. Any construction-site visit is coordinated in advance.",
          ],
          [
            "Explore",
            "Imagine coming back",
            "Enjoy time outdoors or revisit a favorite Austin spot. Talk through what staying connected with the community could look like.",
          ],
        ],
      },
    },
  },
};
