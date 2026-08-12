import { MapPin, Phone, Clock, Instagram } from 'lucide-react'
import restaurantConfig from './restaurantConfig'
import EmberTrail from './EmberTrail.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-charcoal-dark pb-28 pt-14 md:pb-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-gold to-ember text-base">
                {restaurantConfig.logoEmoji}
              </span>
              <span className="font-display text-lg font-semibold text-ink">
                {restaurantConfig.name}
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
              {restaurantConfig.tagline}. Fresh, made-to-order and delivered hot to your door.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
              Visit &amp; contact
            </h3>
            <ul className="mt-3 space-y-3 text-sm text-ink-muted">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-ember" />
                <span>{restaurantConfig.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-ember" />
                <a href={`tel:${restaurantConfig.phone}`} className="hover:text-ink">
                  {restaurantConfig.phone}
                </a>
              </li>
              {restaurantConfig.social?.instagram && (
                <li className="flex items-center gap-2">
                  <Instagram size={16} className="shrink-0 text-ember" />
                  <a
                    href={restaurantConfig.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ink"
                  >
                    Follow us on Instagram
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
              Opening hours
            </h3>
            <ul className="mt-3 space-y-3 text-sm text-ink-muted">
              {restaurantConfig.openingHours.map((slot) => (
                <li key={slot.days} className="flex items-start gap-2">
                  <Clock size={16} className="mt-0.5 shrink-0 text-ember" />
                  <span>
                    <span className="block text-ink">{slot.days}</span>
                    {slot.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <EmberTrail className="my-10" />

        <p className="text-center text-xs text-ink-muted">
          © {new Date().getFullYear()} {restaurantConfig.name}. All rights reserved. Orders placed via WhatsApp.
        </p>
      </div>
    </footer>
  )
}
