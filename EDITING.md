# Customer Editing Guide — Piyush & Bhumika (saga-of-love)

This invitation features floral motifs, royal archways, live countdown, the official wedding card with modal viewer, multi-event directions for all wedding venues, Vedic blessing quote, interactive RSVP contact cards with Call and WhatsApp buttons, and family footer.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ `editable/wedding-data.js`

### Couple Information
Edit `couple` in `editable/wedding-data.js`:
- `groom` & `groomShort`: `"Piyush"`
- `bride` & `brideShort`: `"Bhumika"`
- `hashtag`: `"#PIYUSHANDBHUMIKA"`

### Invitation Wording
Edit `invite` in `editable/wedding-data.js`:
- `kicker`: Header line on the door cover and hero section (left blank per customer request)
- `line`: Invitation line in hero section (left blank per customer request)

### Reception & Countdown
Edit `event` in `editable/wedding-data.js`:
- `title`: Main event title (`"Reception"`)
- `startsAt` & `endsAt`: ISO timestamps (`"2026-12-01T19:00:00+05:30"`). Directly drives the live countdown timer.
- `dateLabel`: `"01 . 12 . 2026"`
- `dayLabel`: `"Tuesday"`
- `timeLabel`: `""` (time removed from countdown per customer request)
- `note`: Subtitle or note

### Reception Event Arched Card
Edit `events` array in `editable/wedding-data.js` (configured for Reception only):
- **Reception**: Tuesday, 01 . 12 . 2026, Dinner: 7:00 PM Onwards at *The Weddings Dot (Hall Darbar)*, Opp. Sparsh Global School, Noida Greater Noida Link Road, Dadri.

*(Note: All other event details — Lagan Sagai Ceremony and Wedding Ceremony — were removed per customer request; venue and direction links are directly integrated into the Reception event card above).*

### The Wedding Card (Replaces Itinerary)
Edit `weddingCard` in `editable/wedding-data.js`:
- `subtitle`: `"OFFICIAL WEDDING INVITATION"`
- `title`: `"THE WEDDING CARD"`
- `buttonText`: `"VIEW ORIGINAL SCANNED CARD"` (opens modal displaying the scanned card)
- `scannedCardImage`: `"./editable/assets/card-invitation.jpg"`
- `shlokaHeader`: `"॥ श्री गणेशाय नमः ॥"`
- `shlokaLine1` & `shlokaLine2`: Sanskrit Ganesh shlokas
- `grandparents`: Blessings of grandparents (*Late Smt. Dayawati & Late Sh. Balram Singh Kasana*)
- `inviteLine`: Invitation phrasing (*Solicit your gracious presence...*)
- `groom` & `groomParents`: Groom name and parents (*Piyush*, *Son of Mrs. Madhu Kasana & Mr. Harish Kasana*)
- `withWord`: `"WITH"`
- `bride` & `brideParents`: Bride name and parents (*Bhumika*, *Daughter of Mrs. Anita Poswal & Late Mr. Kuldeep Poswal*)
- `brideRelation`: Niece relation (*and (Beloved Niece of Mrs Deepanjali Nagar & Mr. Vijay Nagar) (Residence : Dehradun)*)

### Sacred Blessing
Edit `blessing` in `editable/wedding-data.js`:
- `quote`: `"May your intentions be one, may your hearts beat as one."`
- `translation`: `"Two families, one thread of gold — and a lifetime of happiness made luminous together."`
- `source`: `"A BLESSING FROM BOTH FAMILIES"`

### Interactive RSVP
Edit `rsvp` in `editable/wedding-data.js`:
- `contacts`: Array of contact cards with `name`, `phone`, `phoneLink` (`tel:...`), and `whatsappLink` (`https://wa.me/...`):
  - SATISH KASANA (+91 99119 66888)
  - HARISH KASANA (+91 98101 70905)

### Footer
Edit `footer` in `editable/wedding-data.js`:
- `coupleTitle`: `"PIYUSH & BHUMIKA"`
- `message`: `"With love & warm wishes from both the families"`
- `hashtag`: `"#PIYUSHANDBHUMIKA"`
- `instagramText`: `"FOLLOW @INVITESTORY.IN ON INSTAGRAM"`

### Background Music (BGM)
- Audio file located at `editable/assets/bgm.mp3`
- Configured track: Jashn-E-Bahaaraa (Instrumental Music) - Jodhaa Akbar
- Automatically begins upon opening the invitation; floating button allows play/pause toggle.

### Open Graph (OG) & Social Sharing Cards
- Primary Landscape Banner (1200x630): `og-image.jpg` (saved at root `/og-image.jpg`, `editable/assets/og-image.jpg`, `external/media.invitestory.in/saga-of-love/og-image.jpg`, and `assets/og-image.jpg`)
- Compact Square Card (600x600): `og-image-square.jpg` (saved at root `/og-image-square.jpg`, `editable/assets/og-image-square.jpg`, and `assets/og-image-square.jpg`)
- Open Graph Monogram Logo (512x512): `og-logo.png` (`og:logo`, saved at root `/og-logo.png`, `editable/assets/og-logo.png`, `external/media.invitestory.in/saga-of-love/og-logo.png`, and `assets/og-logo.png`)
- Metadata configured with absolute HTTPS preview links, `og:logo`, WhatsApp/Facebook `og:image:secure_url`, and Twitter `summary_large_image` cards in both `index.html` and router config.

---

## Rules for Future Agents

1. Make customer content edits in `editable/wedding-data.js` and swap assets in `editable/assets/`.
2. Keep ISO date strings with proper timezone offsets (e.g. `+05:30`).
3. Validate changes with `node --check editable/wedding-data.js`.
