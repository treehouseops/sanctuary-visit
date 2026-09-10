"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { pageContent, type Edition } from "./visit-content";

type Stay = "day" | "weekend" | "week";
const stays: Record<
  Stay,
  {
    label: string;
    time: string;
    title: string;
    description: string;
    moments: [string, string, string][];
  }
> = {
  day: {
    label: "A day",
    time: "A little time. A real connection.",
    title: "An introduction, naturally.",
    description:
      "A first hello, a walk on the land, and space to ask the questions that brought you here.",
    moments: [
      [
        "Morning",
        "Meet us on the land",
        "Walk Sanctuary with the community team and get a feel for the vision, the landscape, and what’s taking shape.",
      ],
      [
        "Midday",
        "A table, a conversation",
        "Make time for a relaxed meal and an introduction to future neighbors, coordinated around availability.",
      ],
      [
        "Afternoon",
        "Follow your curiosity",
        "Explore a corner of Austin or linger over your questions about homes, community, and next steps.",
      ],
    ],
  },
  weekend: {
    label: "A weekend",
    time: "Two or three days to settle in.",
    title: "Stay a little. Feel a lot.",
    description:
      "Enough time to slow down, meet some of your people, and discover your own version of Austin.",
    moments: [
      [
        "Friday",
        "Arrive. Exhale.",
        "Settle into your local stay, get your bearings, and ease into Austin with a favorite neighborhood spot.",
      ],
      [
        "Saturday",
        "Find your people",
        "Explore Sanctuary with our team, talk about life here, and make room for a meal with future residents.",
      ],
      [
        "Sunday",
        "Make the morning yours",
        "A walk by Lady Bird Lake, a slow coffee, or another conversation on the land. Leave with a clearer sense of what feels right.",
      ],
    ],
  },
  week: {
    label: "A week",
    time: "Room to imagine your everyday.",
    title: "Try on a different rhythm.",
    description:
      "Go beyond a first impression. Make space for work, nature, new connections, and ordinary moments.",
    moments: [
      [
        "Days 1–2",
        "Get to know the place",
        "Arrive in Austin, explore Sanctuary with the team, and share what you’re hoping to find in a community.",
      ],
      [
        "Days 3–5",
        "Find your everyday",
        "Build in your workday, discover local places, spend time outdoors, and arrange conversations with future residents.",
      ],
      [
        "Days 6–7",
        "See what stays with you",
        "Revisit the land, gather around a table, and talk through your questions before heading home.",
      ],
    ],
  },
};

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
  );
}
function Pin() {
  return (
    <svg
      aria-hidden="true"
      width="15"
      height="18"
      viewBox="0 0 20 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M17 9c0 6-7 12-7 12S3 15 3 9a7 7 0 1 1 14 0Z" />
      <circle cx="10" cy="9" r="2.5" />
    </svg>
  );
}

export default function VisitPage({
  edition = "future",
}: {
  edition?: Edition;
}) {
  const content = pageContent[edition];
  const options = content.stays || stays;
  const [stay, setStay] = useState<Stay>(
    edition === "sxsw" ? "day" : "weekend",
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [interests, setInterests] = useState<string[]>([]);
  const [summary, setSummary] = useState("");
  const [copied, setCopied] = useState(false);
  const [draft, setDraft] = useState<Record<string, string>>({});
  const summaryRef = useRef<HTMLDivElement>(null);
  const itinerary = options[stay];
  const interestOptions = [
    "Meeting future residents",
    "Time in nature",
    "Homes & the vision",
    "Exploring Austin",
    "Family life",
    "Wellness & movement",
  ];
  const toggleInterest = (item: string) =>
    setInterests((current) =>
      current.includes(item)
        ? current.filter((x) => x !== item)
        : [...current, item],
    );

  function prepareInquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setDraft(
      Object.fromEntries(
        Array.from(data.entries()).map(([key, value]) => [key, String(value)]),
      ),
    );
    setSummary(
      `Hi Sanctuary team,\n\n${content.requestIntro}\nVisit preference: ${options[stay].label}\n\nName: ${String(data.get("name")).trim()}\nEmail: ${String(data.get("email")).trim()}\nPreferred timing: ${String(data.get("timing")).trim() || "Flexible"}\nTraveling with: ${data.get("guests")}\nInterests: ${interests.join(", ") || "Open to your suggestions"}\n\n${String(data.get("notes")).trim() || "I’d love your help planning a personal introduction to Sanctuary and Austin."}\n\nLooking forward to connecting!`,
    );
    setCopied(false);
    requestAnimationFrame(() => summaryRef.current?.focus());
  }

  useEffect(() => {
    if (!summary && Object.keys(draft).length) {
      for (const [name, value] of Object.entries(draft)) {
        const field = document.querySelector<
          HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >(`[name="${name}"]`);
        if (field && name !== "duration") field.value = value;
      }
      document.querySelector<HTMLInputElement>('[name="name"]')?.focus();
    }
  }, [summary, draft]);

  return (
    <div className={`edition edition-${edition}`}>
      <nav className="edition-nav" aria-label="Explore the three invitations">
        <span>Visit Sanctuary</span>
        <a href="/now" aria-current={edition === "now" ? "page" : undefined}>
          Now
        </a>
        <a
          href="/future"
          aria-current={edition === "future" ? "page" : undefined}
        >
          Future
        </a>
        <a href="/sxsw" aria-current={edition === "sxsw" ? "page" : undefined}>
          SXSW
        </a>
      </nav>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="header">
        <a href="#" aria-label="Sanctuary home" className="wordmark">
          <Image
            src="/images/logo.svg"
            width={180}
            height={40}
            priority
            alt="Sanctuary"
          />
        </a>
        <nav
          className={menuOpen ? "navigation open" : "navigation"}
          aria-label="Main navigation"
        >
          <a href="#invitation" onClick={() => setMenuOpen(false)}>
            The invitation
          </a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Your experience
          </a>
          <a href="#austin" onClick={() => setMenuOpen(false)}>
            A little Austin
          </a>
        </nav>
        <a className="nav-cta" href="#visit">
          {content.navCta} <Arrow diagonal />
        </a>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <Image
            src={content.heroImage}
            alt={content.heroAlt}
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <h1 id="hero-title">
              {content.heading}
              <br />
              <span>{content.headingEnd}</span>
            </h1>
            <p>{content.heroCopy}</p>
            <a className="button light" href="#experience">
              {content.heroCta} <Arrow />
            </a>
          </div>
          <div className="hero-bottom">
            <span>
              <Pin /> Austin, Texas · Hill Country
            </span>
            <span className="render-note">{content.heroCaption}</span>
            <a
              href="#invitation"
              aria-label="Explore the invitation"
              className="scroll-down"
            >
              <Arrow />
            </a>
          </div>
        </section>

        <div className="edition-status">
          <span className="status-dot" aria-hidden="true" />
          <p>{content.status}</p>
        </div>
        <section id="invitation" className="invitation section-pad">
          <div className="invitation-title">
            <span className="sun-mark" aria-hidden="true" />
            <h2>{content.invitationTitle}</h2>
          </div>
          <div className="invitation-copy">
            <p>{content.invitationLead}</p>
            <p>{content.invitationCopy}</p>
            <a className="text-link" href="#experience">
              Consider this your invitation <Arrow diagonal />
            </a>
          </div>
        </section>

        <section id="experience" className="experience section-pad">
          <div className="section-heading">
            <h2>{content.experienceTitle}</h2>
            <p>
              Bring your curiosity.
              <br />
              We’ll make room for the rest.
            </p>
          </div>
          <div
            className="stay-tabs"
            role="tablist"
            aria-label="Length of visit"
          >
            {(Object.keys(stays) as Stay[]).map((key, index) => (
              <button
                key={key}
                id={`tab-${key}`}
                role="tab"
                aria-selected={stay === key}
                aria-controls="itinerary"
                tabIndex={stay === key ? 0 : -1}
                onClick={() => setStay(key)}
                onKeyDown={(event) => {
                  const keys: Stay[] = ["day", "weekend", "week"];
                  let target: Stay | undefined;
                  if (event.key === "ArrowRight")
                    target = keys[(index + 1) % 3];
                  if (event.key === "ArrowLeft") target = keys[(index + 2) % 3];
                  if (event.key === "Home") target = "day";
                  if (event.key === "End") target = "week";
                  if (target) {
                    event.preventDefault();
                    setStay(target);
                    document.getElementById(`tab-${target}`)?.focus();
                  }
                }}
                className={stay === key ? "stay-tab active" : "stay-tab"}
              >
                <span>{options[key].label}</span>
                <small>{options[key].time}</small>
                <Arrow diagonal />
              </button>
            ))}
          </div>
          <div
            id="itinerary"
            role="tabpanel"
            aria-labelledby={`tab-${stay}`}
            className="itinerary"
          >
            <div className="itinerary-image">
              <Image
                src={
                  edition === "future"
                    ? "/images/trails.webp"
                    : "/images/sanctuary.webp"
                }
                alt={
                  edition === "future"
                    ? "A sunlit garden path featured in Sanctuary’s vision"
                    : "Architectural rendering illustrating the future vision for Sanctuary"
                }
                fill
                sizes="(max-width: 760px) 100vw, 40vw"
              />
              <span>
                {edition === "future"
                  ? "Make a little room to wander."
                  : "A first look at what’s ahead."}
              </span>
              <small>
                {edition === "future"
                  ? "Sanctuary vision imagery"
                  : "Future vision · Architectural rendering"}
              </small>
            </div>
            <div className="itinerary-body" key={stay}>
              <div className="itinerary-intro">
                <h3>{itinerary.title}</h3>
                <p>{itinerary.description}</p>
              </div>
              <ol className="moments">
                {itinerary.moments.map(([time, title, description]) => (
                  <li key={time}>
                    <span className="moment-time">{time}</span>
                    <div>
                      <h4>{title}</h4>
                      <p>{description}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="itinerary-bottom">
                <a href="#visit" className="button dark">
                  {edition === "sxsw"
                    ? "Add Sanctuary to my trip"
                    : `Plan ${stay === "day" ? "my day" : `my ${stay}`}`}{" "}
                  <Arrow />
                </a>
                <p>
                  A starting point, not a set schedule.
                  <br />
                  We’ll tailor the details together.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="belong section-pad">
          <div className="belong-top">
            <h2>{content.communityTitle}</h2>
            <p>{content.communityCopy}</p>
          </div>
          <div className="belong-columns">
            <div>
              <span className="little-line" />
              <h3>
                {edition === "future"
                  ? "Walk the possibility."
                  : "See the vision up close."}
              </h3>
              <p>
                {edition === "future"
                  ? "Explore the land with our team. Ask about the homes, the vision, and how it’s all coming together."
                  : "Meet the team behind Sanctuary. Explore the plans and, when construction access allows, get an accompanied look at the land."}
              </p>
            </div>
            <div>
              <span className="little-line" />
              <h3>Meet a future neighbor.</h3>
              <p>
                Tell us who you’d love to connect with. We’ll help arrange
                introductions around shared interests and availability.
              </p>
            </div>
            <div>
              <span className="little-line" />
              <h3>Get in on the conversation.</h3>
              <p>
                Early access starts with people: hear what’s taking shape, ask
                your questions, and explore whether you want to be part of it.
              </p>
            </div>
          </div>
        </section>

        <section id="austin" className="austin section-pad">
          <div className="austin-photo">
            <Image
              src="/images/austin.jpg"
              alt="Austin skyline above Lady Bird Lake"
              fill
              sizes="(max-width: 760px) 100vw, 55vw"
            />
            <span>
              <Pin /> A little city. A lot of possibility.
            </span>
          </div>
          <div className="austin-copy">
            <h2>
              Austin, at
              <br />
              your own pace.
            </h2>
            <p>{content.austinCopy}</p>
            <p>
              We’ll help you explore the places that could become your places,
              with space to follow whatever catches your eye.
            </p>
            <ul className="austin-list">
              <li>
                Walk by Lady Bird Lake <span>Fresh air</span>
              </li>
              <li>
                Find your neighborhood coffee <span>Slow mornings</span>
              </li>
              <li>
                Make an evening of live music <span>Austin after dark</span>
              </li>
            </ul>
            <a
              className="text-link"
              href="#visit"
              onClick={() =>
                setInterests((current) =>
                  current.includes("Exploring Austin")
                    ? current
                    : [...current, "Exploring Austin"],
                )
              }
            >
              Make Austin part of my visit <Arrow diagonal />
            </a>
          </div>
        </section>

        <section className="practical section-pad">
          <h2>
            A few things
            <br />
            you might be wondering.
          </h2>
          <div className="questions">
            {[
              ...content.faqs,
              [
                "Do I need to be ready to move?",
                "No. This is an invitation to explore. Bring your curiosity, your questions, and an open mind. The visit is about finding out whether Sanctuary feels right for you.",
              ],
              [
                "Where would I stay?",
                "We’ll talk through local lodging options that suit your plans. Overnight accommodation at Sanctuary is not promised; lodging, costs, and arrangements will be confirmed with you before you book.",
              ],
              [
                "Can I bring my partner or family?",
                "Absolutely. Tell us who’s coming, the ages of any children, and what everyone enjoys. We’ll shape the proposed itinerary around your group.",
              ],
              [
                "What’s included, and what does it cost?",
                "Each visit is planned individually. The team will confirm what can be arranged and any costs for lodging, meals, transport, or activities before you commit. Sample itineraries are inspiration, not bookable packages.",
              ],
              [
                "What will I be able to see at Sanctuary?",
                "Sanctuary is under construction. Visits focus on meeting the community and understanding the vision. Any site access must be arranged with the team and depends on construction conditions. Renderings show the future vision, not completed or available amenities.",
              ],
            ].map(([question, answer]) => (
              <details key={question}>
                <summary>
                  {question}
                  <span aria-hidden="true" className="plus" />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="visit" className="visit section-pad">
          <div className="visit-copy">
            <span className="sun-mark" aria-hidden="true" />
            <h2>
              {content.formTitle}
              <br />
              <em>{content.formTitleEnd}</em>
            </h2>
            <p>
              Tell us a little about yourself. We’ll help imagine a visit that
              feels like you.
            </p>
            <div className="host-note">
              <p>
                “You shouldn’t have to figure out how to belong before you’ve
                even arrived. Let us make the introduction.”
              </p>
              <span>An invitation from your Sanctuary community team</span>
            </div>
          </div>
          <div className="form-wrap">
            {!summary ? (
              <form onSubmit={prepareInquiry}>
                <div className="form-row">
                  <label>
                    Your name
                    <input
                      autoComplete="name"
                      name="name"
                      placeholder="First and last name"
                      required
                      maxLength={100}
                    />
                  </label>
                  <label>
                    Email address
                    <input
                      type="email"
                      autoComplete="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      maxLength={254}
                    />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    {edition === "sxsw"
                      ? "Where it fits in my trip"
                      : "I’m thinking of staying"}
                    <select
                      name="duration"
                      value={stay}
                      onChange={(e) => setStay(e.target.value as Stay)}
                    >
                      {(Object.keys(options) as Stay[]).map((key) => (
                        <option key={key} value={key}>
                          {options[key].label}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Who’s coming?
                    <select name="guests">
                      <option>Just me</option>
                      <option>Me and my partner</option>
                      <option>My family</option>
                      <option>A few friends</option>
                    </select>
                  </label>
                </div>
                <label>
                  When would you like to visit?
                  <input
                    name="timing"
                    placeholder={
                      edition === "sxsw"
                        ? "Your Austin dates and any free windows"
                        : "A date, a month, or “I’m flexible”"
                    }
                    maxLength={150}
                  />
                </label>
                <fieldset>
                  <legend>What would you love to explore?</legend>
                  <div className="interest-options">
                    {interestOptions.map((item) => (
                      <button
                        key={item}
                        type="button"
                        aria-pressed={interests.includes(item)}
                        className={
                          interests.includes(item)
                            ? "interest selected"
                            : "interest"
                        }
                        onClick={() => toggleInterest(item)}
                      >
                        {item}
                        <span aria-hidden="true">
                          {interests.includes(item) ? "−" : "+"}
                        </span>
                      </button>
                    ))}
                  </div>
                </fieldset>
                <label>
                  Anything else we should know?{" "}
                  <span className="optional">Optional</span>
                  <textarea
                    name="notes"
                    rows={3}
                    maxLength={2000}
                    placeholder="What draws you here? What would make this visit meaningful?"
                  />
                </label>
                <button type="submit" className="button dark full">
                  Prepare my visit request <Arrow />
                </button>
                <p className="form-note">
                  You’ll review your request before sending. Nothing is
                  submitted automatically.
                </p>
              </form>
            ) : (
              <div className="request-preview" tabIndex={-1} ref={summaryRef}>
                <h3>Your invitation starts here.</h3>
                <p>
                  Your request is ready to review. No message has been sent.
                  Copy the details below to share with the Sanctuary team.
                </p>
                <pre>{summary}</pre>
                <div className="preview-actions">
                  <button
                    className="button dark"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(summary);
                        setCopied(true);
                      } catch {
                        setCopied(false);
                      }
                    }}
                  >
                    {copied ? "Copied to clipboard" : "Copy my request"}
                    <Arrow />
                  </button>
                  <button
                    className="text-button"
                    onClick={() => setSummary("")}
                  >
                    Edit details
                  </button>
                </div>
                <p role="status" className="form-note">
                  {copied
                    ? "Ready to paste into an email to connect@sanctuary.co."
                    : "Contact: connect@sanctuary.co"}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <footer>
        {edition === "sxsw" && (
          <p className="sxsw-note">
            An independent invitation from Sanctuary for people visiting Austin
            during SXSW. Not affiliated with or endorsed by SXSW. This is not an
            official SXSW event.
          </p>
        )}
        <div className="footer-top">
          <a href="#" aria-label="Back to top">
            <Image
              src="/images/logo.svg"
              width={210}
              height={45}
              alt="Sanctuary"
            />
          </a>
          <p>A place to feel more like yourself.</p>
          <a href="https://sanctuary.co" target="_blank" rel="noreferrer">
            Explore Sanctuary <Arrow diagonal />
          </a>
        </div>
        <div className="footer-bottom">
          <span>Sanctuary · Hill Country, Austin, Texas</span>
          <span>Come curious. Leave connected.</span>
          <a
            href="https://sanctuary.co/legal/privacy"
            target="_blank"
            rel="noreferrer"
          >
            Privacy
          </a>
        </div>
      </footer>
    </div>
  );
}
