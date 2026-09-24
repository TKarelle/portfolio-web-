"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/data/copy";
import {
  CONTACT_EMAIL,
  HAS_WHATSAPP,
  WHATSAPP_MESSAGE,
  WHATSAPP_NUMBER,
} from "@/data/site";

interface ContactFormProps {
  className?: string;
  idPrefix?: string;
}

const whatsappHref = HAS_WHATSAPP
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
  : "";

const fieldClass =
  "w-full px-4 py-3 rounded-2xl border-2 border-ink bg-bg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-pink";

export function ContactForm({ className, idPrefix = "" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("email") ?? "").trim();
    const metier = String(data.get("metier") ?? "").trim();
    const needs = String(data.get("needs") ?? "").trim();

    const subject = encodeURIComponent(`${CTA.primary} — ${name}`);
    const body = encodeURIComponent(
      `Prénom : ${name}\nContact : ${contact}\nMétier / ville : ${metier}\n\nBesoin :\n${needs}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={`bg-lime text-ink rounded-blob p-8 md:p-10 text-center border-2 border-ink ${className ?? ""}`}
      >
        <p className="text-2xl font-extrabold mb-2">Merci</p>
        <p className="font-medium opacity-80 leading-relaxed">
          Envoie le message depuis ton appli mail — je te réponds sous 24h.
        </p>
        {HAS_WHATSAPP && (
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 text-sm font-extrabold underline underline-offset-4"
          >
            Ou m&apos;écrire sur WhatsApp →
          </a>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor={`${idPrefix}name`}
              className="block text-xs font-extrabold mb-1.5 uppercase tracking-wider"
            >
              Prénom
            </label>
            <input
              id={`${idPrefix}name`}
              name="name"
              required
              autoComplete="given-name"
              placeholder="Jean"
              className={fieldClass}
            />
          </div>
          <div>
            <label
              htmlFor={`${idPrefix}email`}
              className="block text-xs font-extrabold mb-1.5 uppercase tracking-wider"
            >
              Téléphone ou email
            </label>
            <input
              id={`${idPrefix}email`}
              name="email"
              required
              autoComplete="email"
              placeholder="06… ou jean@email.com"
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}metier`}
            className="block text-xs font-extrabold mb-1.5 uppercase tracking-wider"
          >
            Ton métier / ta ville
          </label>
          <input
            id={`${idPrefix}metier`}
            name="metier"
            required
            placeholder="Ex. plombier à Lyon"
            className={fieldClass}
          />
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}needs`}
            className="block text-xs font-extrabold mb-1.5 uppercase tracking-wider"
          >
            Ce dont tu as besoin
          </label>
          <textarea
            id={`${idPrefix}needs`}
            name="needs"
            required
            rows={5}
            placeholder="Ex. être trouvé près de chez moi, montrer mes chantiers, un bouton pour m’appeler…"
            className={`${fieldClass} resize-y min-h-[8rem]`}
          />
        </div>

        <Button type="submit" size="lg" className="w-full sm:w-auto sm:min-w-[220px]" variant="secondary">
          {CTA.primary}
        </Button>
        {HAS_WHATSAPP && (
          <p className="text-xs text-muted font-medium">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-ink hover:text-pink transition-colors"
            >
              WhatsApp
            </a>
            {" · "}
            Réponse sous 24h
          </p>
        )}
      </div>
    </form>
  );
}
