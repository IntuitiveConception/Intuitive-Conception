import React from "react";

function LegalNotice() {

    const legal = {
        siteName: "www.intuitive-conception.com",
        lastUpdated: "2026-03-02",

        editor: {
            type: "personne_physique", // "personne_morale" | "personne_physique"
            companyName: "Intuitive Conception",
            legalForm: "EI",
            capital: "",
            rcsCity: "Ville RCS (si applicable)",
            rcsNumber: "Numéro RCS (si applicable)",
            rmNumber: "Répertoire des métiers (si applicable)",
            siren: "1081116",
            vatNumber: "",
            address: "Lot N°4 lotissement les jammeloniers, 710 RT1 Dumbea",
            email: "contact@intuitive-conception.com",
            phone: "+687 805423",
        },

        publication: {
            directorName: "GENTY Sébastien",
            directorRole: "Gérant",
            editorialManagerName: "",
        },

        hosting: {
            providerName: "Amazon Web Service",
            legalEntity: "AWS",
            address: "Seattle, Wasington, États-Unis",
            phone: "",
        },

        conception: {
            companyName: "Intuitive Conception",
            directorName: "Sébastien Genty",
            contactEmail: "sebastien.genty@intuitive-conception.com",
            siteName: "www.intuitive-conception.com"
        },

        dataProtection: {
            privacyPolicyUrl: "/politique-de-confidentialite",
            cookiePolicyUrl: "/cookies",
            dpoEmail: "contact@job.nc",
            contactForRights: "contact@job.nc",
        },

        cookies: {
            usesCookies: true,
            consentTool: "",
            mainPurposes: [
                "Mesures d’audiences",
                "Fonctionnalités essentielles",
            ],
        },

        intellectualProperty: {
            owner: "Intuitive Conception",
            note:
                "Sauf mention contraire, l’ensemble des contenus (textes, images, logos, etc.) est protégé par le droit de la propriété intellectuelle.",
        },

        liability: {
            note:
                "L’éditeur s’efforce de fournir des informations exactes et à jour, sans garantir l’exhaustivité ni l’absence d’erreur. L’utilisation du site se fait sous la responsabilité de l’utilisateur.",
        },

        contact: {
            generalEmail: "contact@intuitive-conception.com",
        },
    }

    const isMoral = legal.editor.type === "personne_morale";

    return (
        <div className="container legal-container">
            <div className="row">
                <div className="col-12 col-lg-10">
                    <header className="py-4">
                        <h1 className="mb-2">Mentions légales</h1>
                        <p className="mb-0">
                            <strong>{legal.siteName}</strong>
                            {legal.lastUpdated ? (
                                <>
                                    {" "}
                                    - Dernière mise à jour : <strong>{legal.lastUpdated}</strong>
                                </>
                            ) : null}
                        </p>
                    </header>

                    <hr/>

                    {/* Éditor */}
                    <section className="py-3 legal-section">
                        <div className="row">
                            <div className="col-12">
                                <h2>Éditeur du site</h2>
                            </div>

                            <div className="col-12 col-md-6">
                                <p className="mb-1">
                                    <strong>{legal.editor.companyName}</strong>
                                </p>

                                {isMoral ? (
                                    <>
                                        {legal.editor.legalForm ? (
                                            <p className="mb-1"><span>Forme :</span> {legal.editor.legalForm}</p>
                                        ) : null}
                                        {legal.editor.capital ? (
                                            <p className="mb-1"><span>Capital social :</span> {legal.editor.capital}</p>
                                        ) : null}
                                        {legal.editor.siren ? (
                                            <p className="mb-1"><span>RIDET :</span> {legal.editor.siren}</p>
                                        ) : null}
                                        {legal.editor.vatNumber ? (
                                            <p className="mb-1"><span>TVA intracom :</span> {legal.editor.vatNumber}</p>
                                        ) : null}
                                        {legal.editor.rcsNumber ? (
                                            <p className="mb-1">
                                                <span>RCS</span> {legal.editor.rcsCity ? legal.editor.rcsCity : ""} :{" "}
                                                {legal.editor.rcsNumber}
                                            </p>
                                        ) : null}
                                        {legal.editor.rmNumber ? (
                                            <p className="mb-1"><span>RM</span> : {legal.editor.rmNumber}</p>
                                        ) : null}
                                    </>
                                ) : (
                                    <>
                                        {/* Personne physique (attention : en France, LCEN prévoit nom/prénom/domicile/téléphone dans certains cas) */}
                                        {legal.editor.siren ? (
                                            <p className="mb-1">RIDET : {legal.editor.siren}</p>
                                        ) : null}
                                    </>
                                )}
                            </div>

                            <div className="col-12 col-md-6">
                                {legal.editor.address ? <p className="mb-1"><span>Adresse :</span> {legal.editor.address}</p> : null}
                                {legal.editor.email ? <p className="mb-1"><span>Email :</span> {legal.editor.email}</p> : null}
                                {legal.editor.phone ? <p className="mb-1"><span>Téléphone :</span> {legal.editor.phone}</p> : null}
                            </div>
                        </div>
                    </section>

                    <hr/>

                    {/* Publication */}
                    <section className="py-3 legal-section">
                        <div className="row">
                            <div className="col-12">
                                <h2>Publication</h2>
                            </div>

                            <div className="col-12">
                                <p className="mb-1">
                                    <strong>{legal.publication.directorRole} :</strong>{" "}
                                    {legal.publication.directorName}
                                </p>

                                {legal.publication.editorialManagerName ? (
                                    <p className="mb-1">
                                        <strong>Responsable de rédaction :</strong>{" "}
                                        {legal.publication.editorialManagerName}
                                    </p>
                                ) : null}
                            </div>
                        </div>
                    </section>

                    <hr/>

                    {/* Web Hosting */}
                    <section className="py-3 legal-section">
                        <div className="row">
                            <div className="col-12">
                                <h2>Hébergement</h2>
                            </div>

                            <div className="col-12">
                                <p className="mb-1">
                                    <strong>{legal.hosting.providerName}</strong>
                                    {legal.hosting.legalEntity ? <> - {legal.hosting.legalEntity}</> : null}
                                </p>
                                {legal.hosting.address ?
                                    <p className="mb-1"><span>Adresse : </span>{legal.hosting.address}</p> : null}
                                {legal.hosting.phone ? <p className="mb-1">Téléphone : {legal.hosting.phone}</p> : null}
                            </div>
                        </div>
                    </section>

                    <hr/>

                    {/* Conception */}
                    <section className="py-3 legal-section">
                        <div className="row">
                            <div className="col-12">
                                <h2>Conception</h2>
                            </div>

                            <div className="col-12">
                                <p className="mb-1">
                                    <strong>{legal.conception.companyName}</strong>
                                </p>
                                <p className="mb-1"><span>Développeur : </span>{legal.conception.directorName}</p>
                                <p className="mb-1"><span>Email : </span>{legal.conception.contactEmail}</p>
                                <p className="mb-1"><span>site : </span>{legal.conception.siteName}</p>
                            </div>
                        </div>
                    </section>

                    <hr/>

                    {/* Personal Data */}
                    {/*
                    <section className="py-3 legal-section">
                        <div className="row">
                            <div className="col-12">
                                <h2>Données personnelles</h2>
                                <p className="mb-2">
                                    Pour les informations détaillées (finalités, bases légales, durées de conservation,
                                    destinataires, droits…), consultez la{" "}
                                    <a href={legal.dataProtection.privacyPolicyUrl}>Politique de confidentialité</a>.
                                </p>

                                <p className="mb-0">
                                    Exercice des droits (accès, rectification, effacement, opposition, limitation,
                                    portabilité) :{" "}
                                    <a href={`mailto:${legal.dataProtection.contactForRights}`}>
                                        {legal.dataProtection.contactForRights}
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr/>
                    */}
                    {/* Cookies */}
                    {/*
                    <section className="py-3 legal-section">
                        <div className="row">
                            <div className="col-12">
                                <h2>Cookies & traceurs</h2>

                                {legal.cookies.usesCookies ? (
                                    <>
                                        <p className="mb-2">
                                            Le site utilise des cookies et/ou traceurs. Pour les détails et la gestion
                                            de vos choix,
                                            consultez la <a href={legal.dataProtection.cookiePolicyUrl}>Politique
                                            cookies</a>.
                                        </p>

                                        {legal.cookies.consentTool ? (
                                            <p className="mb-2">
                                                Outil de gestion du consentement
                                                : <strong>{legal.cookies.consentTool}</strong>.
                                            </p>
                                        ) : null}

                                        {Array.isArray(legal.cookies.mainPurposes) && legal.cookies.mainPurposes.length > 0 ? (
                                            <>
                                                <p className="mb-1">Finalités principales :</p>
                                                <ul className="mb-0">
                                                    {legal.cookies.mainPurposes.map((p) => (
                                                        <li key={p}>{p}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        ) : null}
                                    </>
                                ) : (
                                    <p className="mb-0">Le site n’utilise pas de cookies/traceurs non essentiels.</p>
                                )}
                            </div>
                        </div>
                    </section>

                    <hr/>
                    */}

                    {/* Intelectual Property */}
                    <section className="py-3">
                        <div className="row">
                            <div className="col-12">
                                <h2>Propriété intellectuelle</h2>
                                <p className="mb-0">
                                    <strong>Titulaire :</strong> {legal.intellectualProperty.owner}
                                    <br/>
                                    {legal.intellectualProperty.note}
                                </p>
                            </div>
                        </div>
                    </section>

                    <hr/>

                    {/* Responsability */}
                    <section className="py-3">
                        <div className="row">
                            <div className="col-12">
                                <h2>Responsabilité</h2>
                                <p className="mb-0">{legal.liability.note}</p>
                            </div>
                        </div>
                    </section>

                    <hr/>

                    {/* Contact */}
                    <section className="py-3 mb-4">
                        <div className="row">
                            <div className="col-12">
                                <h2>Contact</h2>
                                <p className="mb-0">
                                    Pour toute question, vous pouvez écrire à :{" "}
                                    <a href={`mailto:${legal.contact.generalEmail}`}>{legal.contact.generalEmail}</a>.
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className="pb-4"/>
                </div>
            </div>
        </div>
    );
}

export default LegalNotice;