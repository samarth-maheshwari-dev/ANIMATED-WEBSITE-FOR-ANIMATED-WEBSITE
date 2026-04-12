export const WHATSAPP_NUMBER = '917000359623'
export const WHATSAPP_BASE   = `https://wa.me/${WHATSAPP_NUMBER}`
import corporateImg from '@assets/images/ambiance/corporate-dinners.png'
import birthdayImg from '@assets/images/ambiance/birthday-event.png'

export const EVENTS = [
  {
    id: 1,
    emoji: '🎂',
    title: 'Birthday & Anniversary',
    image: birthdayImg,
    subtitle: 'We set the scene. You bring the love.',
    description:
      'Celebrate your special day with exclusive cabana decor, ambient fairy lights, and marquee numbers (10, 25, 50). Let us make your milestone unforgettable.',
    whatsappMessage:
      'Hi! I want to book a Birthday/Anniversary special dinner at The Waterfall Restaurant, Indore.',
  },
  {
    id: 2,
    emoji: '💼',
    title: 'Corporate Dinners',
    image: corporateImg,
    subtitle: 'Premium setting for your business moments.',
    description:
      'Impress clients and teams with an extraordinary venue. Private seating available right beside the waterfall with long-table arrangements.',
    whatsappMessage:
      'Hi! I want to enquire about Corporate Dinner arrangements at The Waterfall Restaurant, Indore.',
  },
  {
    id: 3,
    emoji: '🌙',
    title: 'Poolside Special Evening',
    subtitle: '₹500/person · Redeemable in bill',
    description:
      'Exclusive poolside access with ambient lighting, floating tray service, and a curated evening menu.',
    whatsappMessage:
      'Hi! I want to book the Poolside Special Evening at The Waterfall Restaurant, Indore.',
  },
]
