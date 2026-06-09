import React from "react";
import { ShieldCheck, FileText, Cookie, Mail, ExternalLink, AlertTriangle } from "lucide-react";
import { T } from "../theme.js";
import { Tag, Card, Chapter, P, B, Note, Disclaimer } from "../ui/primitives.jsx";

function Sect({ Icon, n, title, color = T.brand, children }) {
  return (
    <section style={{ marginBottom: 36 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 16 }}>
        <span style={{ flexShrink: 0, width: 38, height: 38, borderRadius: 11, background: `${color}1A`, border: `1px solid ${color}33`, color, display: "grid", placeItems: "center" }}>
          {Icon && <Icon size={18} strokeWidth={1.9} />}
        </span>
        <h2 style={{ fontFamily: T.serif, fontSize: "clamp(20px,3.2vw,26px)", fontWeight: 600, color: T.text, margin: 0, letterSpacing: -0.3 }}>
          <span style={{ color: T.textFaint, marginRight: 8, fontSize: 16 }}>{n}.</span>{title}
        </h2>
      </div>
      <div style={{ maxWidth: 800 }}>{children}</div>
    </section>
  );
}

export default function Conditions() {
  return (
    <div>
      <div style={{ marginBottom: 30, maxWidth: 800 }}>
        <Tag color={T.textDim} Icon={FileText}>Mentions légales & CGU</Tag>
        <h1 style={{ fontFamily: T.serif, fontWeight: 600, fontSize: "clamp(34px,6vw,52px)", lineHeight: 1.04, margin: "18px 0 14px", color: T.text, letterSpacing: -0.5 }}>
          Conditions d'utilisation
        </h1>
        <p style={{ fontSize: "clamp(16px,2.2vw,18px)", lineHeight: 1.65, color: T.textDim, margin: 0 }}>
          En utilisant EduFinance, tu acceptes les conditions ci-dessous. Elles sont volontairement courtes et claires —
          fidèles à l'esprit pédagogique du site.
        </p>
        <div style={{ fontSize: 13, color: T.textFaint, marginTop: 14 }}>Dernière mise à jour : 9 juin 2026</div>
      </div>

      <Sect n="1" title="Éditeur & hébergeur" Icon={FileText} color={T.brand2}>
        <Card style={{ padding: 22 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 18 }}>
            <div>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: T.textFaint, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6 }}>Éditeur</div>
              <div style={{ fontSize: 15, color: T.text, lineHeight: 1.6 }}>
                <B>Hugo HEYMES</B><br />
                Étudiant FISE A3 Info (CESI)<br />
                Projet Ingénieur Citoyen — non commercial<br />
                <a href="mailto:hugo.heymes@viacesi.fr" style={{ color: T.brand }}>hugo.heymes@viacesi.fr</a>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: T.textFaint, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6 }}>Hébergeur</div>
              <div style={{ fontSize: 15, color: T.text, lineHeight: 1.6 }}>
                <B>Netlify, Inc.</B><br />
                512 2nd Street, Suite 200<br />
                San Francisco, CA 94107, États-Unis<br />
                <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" style={{ color: T.brand }}>netlify.com</a>
              </div>
            </div>
          </div>
        </Card>
      </Sect>

      <Sect n="2" title="Vocation strictement éducative" Icon={ShieldCheck} color={T.brand}>
        <P>
          EduFinance est une plateforme <B>pédagogique et gratuite</B>. Son objectif est d'expliquer des notions de finance personnelle (budget, épargne,
          investissement, fiscalité, crédit, crypto) à un public débutant, principalement étudiants et jeunes actifs.
        </P>
        <P>
          Le site <B>ne fournit aucun conseil personnalisé</B>, aucune recommandation d'achat ou de vente d'un produit financier,
          ni aucune incitation à un placement spécifique. Aucun lien d'affiliation, aucune publicité, aucune commission n'est
          reçue de la part d'établissements financiers.
        </P>
        <Note color={T.coral} title="Avertissement clé">
          Tout investissement comporte un risque de perte, y compris du capital initial. Les performances passées ne préjugent
          jamais des performances futures. Pour toute décision financière importante, consulte un professionnel qualifié
          (conseiller en gestion de patrimoine, expert-comptable, notaire selon le cas).
        </Note>
      </Sect>

      <Sect n="3" title="Propriété intellectuelle" Icon={FileText} color={T.violet}>
        <P>
          Les textes, illustrations et visualisations originales de ce site sont la propriété de Hugo HEYMES. Le code source
          du site est <B>publiquement disponible</B> sur GitHub (<a href="https://github.com/HugoSKD/EF" target="_blank" rel="noopener noreferrer" style={{ color: T.brand }}>HugoSKD/EF</a>)
          et peut être consulté à des fins pédagogiques.
        </P>
        <P>
          Les icônes utilisées proviennent de <a href="https://lucide.dev" target="_blank" rel="noopener noreferrer" style={{ color: T.brand }}>Lucide</a> (licence ISC).
          Les polices Fraunces et Plus Jakarta Sans sont distribuées sous SIL Open Font License via Google Fonts.
        </P>
        <P>
          La réutilisation à des fins commerciales du contenu rédactionnel ou des visualisations n'est <B>pas autorisée</B> sans
          accord préalable de l'auteur.
        </P>
      </Sect>

      <Sect n="4" title="Données personnelles & cookies" Icon={Cookie} color={T.accent}>
        <P>
          EduFinance respecte ta vie privée. Le site <B>ne collecte aucune donnée personnelle</B> identifiante : pas de
          formulaire d'inscription, pas de profil utilisateur, pas de tracking publicitaire.
        </P>
        <Card style={{ padding: 22, background: T.bgSoft }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.brand, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 10 }}>
            Ce que le site stocke localement
          </div>
          <ul style={{ margin: 0, padding: "0 0 0 18px", fontSize: 15, color: T.textDim, lineHeight: 1.65 }}>
            <li>Ta <B>progression de lecture</B> par thématique (clé <code style={{ background: T.surface, padding: "1px 6px", borderRadius: 4, fontSize: 13 }}>ef_read_topics_v1</code>).</li>
            <li>Aucune autre donnée n'est conservée.</li>
          </ul>
          <div style={{ fontSize: 14, color: T.textDim, lineHeight: 1.65, marginTop: 14 }}>
            Ces informations sont stockées uniquement sur ton appareil via <B>localStorage</B>. Elles ne sont jamais transmises à
            un serveur. Tu peux les effacer à tout moment depuis les paramètres de ton navigateur (vider le cache /
            données de site).
          </div>
        </Card>
        <P>
          L'hébergeur Netlify peut conserver des logs techniques (adresse IP anonymisée, type de navigateur) à des fins de
          sécurité et de performance, conformément à sa propre politique de confidentialité.
        </P>
      </Sect>

      <Sect n="5" title="Limitation de responsabilité" Icon={AlertTriangle} color={T.coral}>
        <P>
          Le contenu d'EduFinance est fourni <B>« en l'état »</B>, sans garantie de complétude ou d'absence d'erreur. Les
          informations fiscales, en particulier, peuvent évoluer rapidement ; vérifie toujours auprès des sources officielles
          (impots.gouv.fr, service-public.fr) avant toute démarche.
        </P>
        <P>
          L'auteur ne peut être tenu responsable :
        </P>
        <ul style={{ margin: "0 0 16px", padding: "0 0 0 20px", fontSize: 15, color: "#C4D0E6", lineHeight: 1.75 }}>
          <li>des décisions financières prises à la suite de la lecture du site,</li>
          <li>des pertes en capital éventuellement subies sur un placement,</li>
          <li>de l'évolution de la législation fiscale ou financière française,</li>
          <li>d'une interruption temporaire du service liée à l'hébergement.</li>
        </ul>
      </Sect>

      <Sect n="6" title="Contact & contributions" Icon={Mail} color={T.brand}>
        <P>
          Pour toute question, suggestion d'amélioration ou signalement d'erreur factuelle : <a href="mailto:hugo.heymes@viacesi.fr" style={{ color: T.brand }}>hugo.heymes@viacesi.fr</a>.
        </P>
        <P>
          Le code étant ouvert, tu peux aussi proposer des corrections via GitHub :
        </P>
        <a href="https://github.com/HugoSKD/EF/issues" target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 16px", background: T.surface, border: `1px solid ${T.line}`, borderRadius: 10, color: T.text, fontSize: 14.5, fontWeight: 600, textDecoration: "none", transition: "all .2s" }}>
          Ouvrir une issue sur GitHub <ExternalLink size={14} />
        </a>
      </Sect>

      <Sect n="7" title="Droit applicable" Icon={FileText} color={T.textDim}>
        <P>
          Les présentes conditions sont régies par le <B>droit français</B>. Tout litige éventuel relèverait des tribunaux français
          compétents, après tentative de résolution amiable.
        </P>
      </Sect>

      <Disclaimer />
    </div>
  );
}
