/**
 * wedding-data.js — Customer-facing editable data layer for saga-of-love
 * Groom & Bride: Piyush & Bhumika
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Piyush",
    groomShort: "Piyush",
    bride: "Bhumika",
    brideShort: "Bhumika",
    hashtag: "#PIYUSHANDBHUMIKA",
  },

  invite: {
    kicker: "",
    line: "",
  },

  // Primary event (for countdown timer and meta tags)
  event: {
    title: "Reception",
    startsAt: "2026-12-01T19:00:00+05:30",
    endsAt: "2026-12-01T23:59:00+05:30",
    dateLabel: "01 . 12 . 2026",
    dayLabel: "Tuesday",
    timeLabel: "",
    dressCode: "",
    note: "",
  },

  // Event arched card (Reception only)
  events: [
    {
      title: "Reception",
      dateLabel: "01 . 12 . 2026",
      dayLabel: "Tuesday",
      timeLabel: "Dinner: 7:00 PM Onwards",
      venueName: "The Weddings Dot (Hall Darbar)",
      venueAddress: "Opp. Sparsh Global School, Noida Greater Noida Link Road, Dadri",
      dressCode: "",
      note: "",
      calendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Reception+%E2%80%94+Piyush+%26+Bhumika&dates=20261201T133000Z%2F20261201T183000Z&details=Wedding+Reception&location=The+Weddings+Dot+%28Hall+Darbar%29%2C+Opp.+Sparsh+Global+School%2C+Noida+Greater+Noida+Link+Road%2C+Dadri",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=The+Weddings+Dot%2C+Opp+Sparsh+Global+School%2C+Dadri",
    },
  ],

  // Event venue with Google Maps directions (Reception only)
  venues: [
    {
      eventTitle: "Reception",
      date: "Tuesday, 01 December 2026",
      time: "Dinner: 07:00 PM Onwards",
      name: "The Weddings Dot (Hall Darbar)",
      address: "Opp. Sparsh Global School, Noida Greater Noida Link Road, Dadri",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Weddings+Dot%2C+Opp+Sparsh+Global+School%2C+Dadri",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=The+Weddings+Dot%2C+Opp+Sparsh+Global+School%2C+Dadri",
    },
  ],

  venue: {
    name: "The Weddings Dot (Hall Darbar)",
    address: "Opp. Sparsh Global School, Noida Greater Noida Link Road, Dadri",
    mapsQuery: "The Weddings Dot, Opp. Sparsh Global School, Dadri",
    lat: 28.5679,
    lng: 77.5295,
  },

  weddingCard: {
    subtitle: "OFFICIAL WEDDING INVITATION",
    title: "THE WEDDING CARD",
    buttonText: "VIEW ORIGINAL SCANNED CARD",
    scannedCardImage: "./editable/assets/card-invitation.jpg",
    shlokaHeader: "॥ श्री गणेशाय नमः ॥",
    shlokaLine1: "वक्रतुण्ड महाकाय, सूर्यकोटि समप्रभः ।",
    shlokaLine2: "निर्विघ्नं कुरु मे देव, सर्व कार्येषु सर्वदा ॥",
    grandparents: "Late Smt. Dayawati & Late Sh. Balram Singh Kasana",
    inviteLine: "Solicit your gracious presence on the auspicious occasion of the wedding ceremony of their beloved Grand Son",
    groom: "Piyush",
    groomParents: "(Son of Mrs. Madhu Kasana & Mr. Harish Kasana)",
    withWord: "WITH",
    bride: "Bhumika",
    brideParents: "(Daughter of Mrs. Anita Poswal & Late Mr. Kuldeep Poswal)",
    brideRelation: "and\n(Beloved Niece of Mrs Deepanjali Nagar & Mr. Vijay Nagar)\n(Residence : Dehradun)",
  },

  blessing: {
    quote: "May your intentions be one, may your hearts beat as one.",
    translation: "Two families, one thread of gold — and a lifetime of happiness made luminous together.",
    source: "A BLESSING FROM BOTH FAMILIES",
  },

  rsvp: {
    kicker: "KINDLY RESPOND",
    title: "RSVP",
    subtitle: "We look forward to celebrating with you. For any queries or assistance, please reach out to:",
    contacts: [
      {
        name: "SATISH KASANA",
        phone: "99119 66888",
        phoneLink: "tel:+919911966888",
        whatsappLink: "https://wa.me/919911966888",
      },
      {
        name: "HARISH KASANA",
        phone: "98101 70905",
        phoneLink: "tel:+919810170905",
        whatsappLink: "https://wa.me/919810170905",
      },
    ],
  },

  footer: {
    coupleTitle: "PIYUSH & BHUMIKA",
    message: "With love & warm wishes from both the families",
    hashtag: "#PIYUSHANDBHUMIKA",
    instagram: "https://www.instagram.com/invitestory.in/",
    instagramText: "FOLLOW @INVITESTORY.IN ON INSTAGRAM",
  },

  images: {
    heroArch: "./editable/assets/hero-arch.webp",
    gatePanel: "./editable/assets/gate-panel.webp",
    mapPreview: "./editable/assets/map-preview.webp",
    footerFloral: "./editable/assets/footer-floral.webp",
    scannedCard: "./editable/assets/card-invitation.jpg",
    ganeshaIcon: "./editable/assets/ganesha-icon.png",
    groomIcon: "./editable/assets/groom-icon.png",
    brideIcon: "./editable/assets/bride-icon.png",
    ogImage: "./editable/assets/og-image.jpg",
    ogImageSquare: "./editable/assets/og-image-square.jpg",
    ogLogo: "./editable/assets/og-logo.png",
  },
};
