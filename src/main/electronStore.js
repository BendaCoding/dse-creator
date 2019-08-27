import Store from 'electron-store';

const defaults = {
  windowBounds: { width: 1280, height: 1080 },
  store: {
    arrangement: {
      sections: [
        {
					"id": "147eff5e-490e-4343-918d-a9ac078845d3",
					"name": "Intro",
					"snippets": [
						{
							"data": {
								"blocks": [
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [],
										"key": "37eqm",
										"text": "Willkommen",
										"type": "header-one"
									},
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [],
										"key": "43eqg",
										"text": "Herzlich willkommen bei den Datenschutzinformationen von {name}.",
										"type": "unstyled"
									}
								],
								"entityMap": {}
							},
							"defaultOn": true,
							"id": "555fda2e-294e-4343-918d-a9ac07884123",
							"name": "Willkommen"
						},
						{
							"data": {
								"blocks": [
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [],
										"key": "5co54",
										"text": "Wer ist verantwortlich?",
										"type": "header-one"
									},
									{
										"data": {},
										"depth": 0,
										"entityRanges": [
											{
												"key": 0,
												"length": 12,
												"offset": 30
											}
										],
										"inlineStyleRanges": [],
										"key": "7bcdl",
										"text": "Für die Datenverarbeitung von @Produktname ist:",
										"type": "unstyled"
									},
									{
										"data": {},
										"depth": 0,
										"entityRanges": [
											{
												"key": 1,
												"length": 11,
												"offset": 0
											},
											{
												"key": 2,
												"length": 7,
												"offset": 12
											},
											{
												"key": 3,
												"length": 4,
												"offset": 21
											},
											{
												"key": 4,
												"length": 6,
												"offset": 26
											},
											{
												"key": 5,
												"length": 5,
												"offset": 33
											},
											{
												"key": 6,
												"length": 8,
												"offset": 45
											},
											{
												"key": 7,
												"length": 6,
												"offset": 62
											}
										],
										"inlineStyleRanges": [],
										"key": "14h2u",
										"text": "@Firmenname\n@Straße \n@PLZ @Stadt\n@Land\nTel.: @Telefon\nE-Mail: @Email",
										"type": "unstyled"
									},
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [],
										"key": "40tds",
										"text": "verantwortlich.",
										"type": "unstyled"
									}
								],
								"entityMap": {
									"0": {
										"data": {
											"text": "@Produktname",
											"value": "Produktname"
										},
										"mutability": "IMMUTABLE",
										"type": "MENTION"
									},
									"1": {
										"data": {
											"text": "@Firmenname",
											"value": "Firmenname"
										},
										"mutability": "IMMUTABLE",
										"type": "MENTION"
									},
									"2": {
										"data": {
											"text": "@Straße",
											"value": "Straße"
										},
										"mutability": "IMMUTABLE",
										"type": "MENTION"
									},
									"3": {
										"data": {
											"text": "@PLZ",
											"value": "PLZ"
										},
										"mutability": "IMMUTABLE",
										"type": "MENTION"
									},
									"4": {
										"data": {
											"text": "@Stadt",
											"value": "Stadt"
										},
										"mutability": "IMMUTABLE",
										"type": "MENTION"
									},
									"5": {
										"data": {
											"text": "@Land",
											"value": "Land"
										},
										"mutability": "IMMUTABLE",
										"type": "MENTION"
									},
									"6": {
										"data": {
											"text": "@Telefon",
											"value": "Telefon"
										},
										"mutability": "IMMUTABLE",
										"type": "MENTION"
									},
									"7": {
										"data": {
											"text": "@Email",
											"value": "Email"
										},
										"mutability": "IMMUTABLE",
										"type": "MENTION"
									}
								}
							},
							"defaultOn": true,
							"id": "212eff5e-490e-4343-918d-a9ac0788abab",
							"name": "Wer ist verantwortlich?"
						},
						{
							"data": {
								"blocks": [
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [],
										"key": "3jnl2",
										"text": "Welche Daten werden gesammelt und warum?",
										"type": "header-one"
									},
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [],
										"key": "dkm6i",
										"text": "Nachfolgend findest Du Informationen darüber, welche Daten wir von Dir verarbeiten und warum. Die Verarbeitung erfolgt streng nach den gesetzlichen Vorgaben zum Datenschutz. Wir verarbeiten Deine Daten daher nur für bestimmte Zwecke und auch nur für die Zwecke, zu denen Du uns Deine Daten zur Verfügung stellst. Jede Verarbeitung erfolgt dabei auf einer gesetzlichen Grundlage.",
										"type": "unstyled"
									}
								],
								"entityMap": {}
							},
							"defaultOn": true,
							"id": "80304994-b8e2-48fd-a071-b26aaf678d7d",
							"name": "Welche Daten werden gesammelt und warum?",
							"text": ""
						},
						{
							"data": {
								"blocks": [
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [],
										"key": "7q6hg",
										"text": "Beim Besuch einer Webseite hinterlässt jeder Nutzer Spuren. Es werden bei jedem Besuch einer Webseite Informationen über Deine IP-Adresse, Browserinformationen (der Browser, den Du nutzt, Dein Betriebssystem, Deine Spracheinstellungen, Deine installierten Browsererweiterungen, etc.), den genutzten Serverdienst, der Name der aufgerufenen Internetseite (URL), Datum und Uhrzeit des Zugriffs und die übertragene Datenmenge übertragen. Diese Informationen werden in einer Protokolldatei gespeichert und einen Tag nach Deinem Besuch automatisch wieder gelöscht. Die Daten dienen nicht dazu dich persönlich zu identifizieren und wir können aus diesen Daten auch keine Rückschlüsse auf Deine Person ziehen. Die Daten werden für statistische Zwecke genutzt und um den Betrieb der Webseite sicherzustellen.",
										"type": "unstyled"
									},
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [
											{
												"length": 134,
												"offset": 0,
												"style": "BOLD"
											}
										],
										"key": "dlgoq",
										"text": "Die Protokolldaten werden von uns auf Grundlage unserer berechtigten Interessen im Sinne des Art. 6 Abs. 1 Ziffer f DSGVO verarbeitet.",
										"type": "unstyled"
									}
								],
								"entityMap": {}
							},
							"defaultOn": true,
							"id": "fe6433d1-241b-445d-8ba6-d0dde5de81a0",
							"name": "Der Besuch einer Webseite",
							"text": ""
						},
						{
							"data": {
								"blocks": [
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [],
										"key": "3egq8",
										"text": "Wir möchten Dir natürlich eine besonders ansprechende und attraktive Webseite bieten. Daher verwenden wir Schriftarten eines externen Dienstanbieters. Konkret kommen die freien „Google-Fonts“ der Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (“Google”) zum Einsatz. Die Schriftarten werden bei Deinem Besuch unserer Webseite direkt von den Servern von Google heruntergeladen.",
										"type": "unstyled"
									},
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [],
										"key": "7nssa",
										"text": "",
										"type": "unstyled"
									},
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [],
										"key": "4k9mh",
										"text": "Durch den Download fallen bei Google Daten in dem Maße an, in dem sie anfallen würden, wenn Du direkt eine Webseite von Google besuchst. Google erklärt jedoch die Daten nicht mit Daten aus anderen Diensten zusammenzuführen oder zu verknüpfen und keine Cookies im Zusammenhang mit Google-Fonts einzusetzen.",
										"type": "unstyled"
									},
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [
											{
												"length": 115,
												"offset": 0,
												"style": "BOLD"
											}
										],
										"key": "et3a7",
										"text": "Diese Verarbeitung erfolgt auf Grundlage unserer berechtigten Interessen im Sinne des Art. 6 Abs. 1 Ziffer f DSGVO.",
										"type": "unstyled"
									}
								],
								"entityMap": {}
							},
							"defaultOn": true,
							"id": "3aa560ad-51d5-4bdb-9b1e-df4a3c0ddf32",
							"name": "Darstellung der Webseite",
							"text": ""
						}
					]
				},
				{
					"id": "55abd5e-0152-2352-123d-d5de078823cc",
					"name": "Tools",
					"snippets": [
						{
							"data": {
								"blocks": [
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [],
										"key": "breea",
										"text": "Gerne möchten wir wissen, wie Dir unsere Seite gefällt und was wir an unserer Seite verbessern können. Um Dich nicht ständig mit Umfragen oder Ähnlichem nerven zu müssen kommt daher im öffentlichen Bereich unserer Webseite ein Programm zur Analyse des Webseitenbesuchs zum Einsatz. Im Organisationstool selbst erfolgt jedoch keine Webseitenanalyse.",
										"type": "unstyled"
									}
								],
								"entityMap": {}
							},
							"defaultOn": true,
							"id": "3c8b32b9-4184-4116-a68b-9d032421ad66",
							"name": "Webseitenanalyse",
							"text": ""
						},
						{
							"data": {
								"blocks": [
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [],
										"key": "7hj6c",
										"text": "Als Programm für die Webseitenanalyse benutzen wir Google-Analytics. Das ist ein Programm von der Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (“Google”). Informationen über Deine Nutzung unserer Webseite geben wir an unsere Partner für soziale Medien, Werbung und Analysen, unter anderem Google weiter. Details zu unseren Partnern findest Du unter",
										"type": "unstyled"
									},
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [],
										"key": "6b27i",
										"text": "",
										"type": "unstyled"
									},
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [],
										"key": "7uurv",
										"text": "http://www.google.com/intl/de/policies/privacy/partners/\noder\nhttp://www.google.de/privacy_ads.html",
										"type": "unstyled"
									}
								],
								"entityMap": {}
							},
							"defaultOn": false,
							"id": "59a72dac-7ad3-4c50-96ad-cdc961cc3e67",
							"name": "Google Analytics",
							"text": ""
						},
						{
							"data": {
								"blocks": [
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [],
										"key": "ekk97",
										"text": "Bootz sind die schlimmsten",
										"type": "unstyled"
									}
								],
								"entityMap": {}
							},
							"defaultOn": false,
							"id": "a27d5678-05ad-4dbd-8115-3a64e6b8d448",
							"name": "BootzSpy",
							"text": ""
						}
					]
				},
				{
					"id": "687acc2d-123f-12af-634d-b2da238845d3",
					"name": "Infos zur Speicherdauer",
					"snippets": [
						{
							"data": {
								"blocks": [
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [],
										"key": "fkuql",
										"text": "Speicherdauer",
										"type": "header-one"
									},
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [],
										"key": "6amo",
										"text": "Personenbezogene Daten werden bei uns für einen bestimmten Zeitraum gespeichert. Ist der Zweck der Verarbeitung jedoch erreicht oder fällt der Zweck weg, löschen wir Deine Daten natürlich wieder. Bei einigen Daten müssen wir handels- und steuerrechtliche Aufbewahrungsfristen beachten. Bei solchen Daten kann die Speicherdauer bis zu 10 Jahren betragen.",
										"type": "unstyled"
									}
								],
								"entityMap": {}
							},
							"defaultOn": true,
							"id": "59ff534d-3a12-4975-8b0b-464d089a9cc4",
							"name": "Allgemein",
							"text": ""
						},
						{
							"data": {
								"blocks": [
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [],
										"key": "eb86h",
										"text": "Deine Rechte",
										"type": "header-one"
									},
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [],
										"key": "fa7su",
										"text": "Natürlich hast du auch bei der Verwendung unserer Webseite verschiedene Rechte, die wir achten und wahren.",
										"type": "unstyled"
									}
								],
								"entityMap": {}
							},
							"defaultOn": true,
							"id": "15a02eff-e484-4407-8504-eec2b6e15e52",
							"name": "Deine Rechte",
							"text": ""
						}
					]
				},
				{
					"id": "66e40e9b-8203-4f07-8d9a-d9ed55733364",
					"name": "Abschließend",
					"snippets": [
						{
							"data": {
								"blocks": [
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [],
										"key": "28ji5",
										"text": "So setzt Du Deine Rechte um",
										"type": "header-one"
									},
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [],
										"key": "2ic7b",
										"text": "Wir freuen uns jederzeit, wenn Du dich bei uns mit Fragen zu Deinem Datenschutz bei uns meldest. Schreibe uns einfach eine Mail mit deinen Fragen oder Wünschen oder wenn du deine obenstehenden Rechte durchsetzen willst.",
										"type": "unstyled"
									},
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [],
										"key": "6plu2",
										"text": "",
										"type": "unstyled"
									},
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [],
										"key": "8hm84",
										"text": "Wenn du dich an uns wendest, beachte bitte, dass es Daten gibt, bei denen wir nicht in der Lage sind die betroffene Person zu identifizieren – zum Beispiel, wenn die Daten anonymisiert wurden. In diesem Fall ist es uns natürlich nicht möglich die Auskunft über diese Daten zu geben oder die Daten für dich an ein anderes Unternehmen zu übertragen. Solche Daten sind daher nicht von den vorstehenden Rechten umfasst. Auskunft, Löschung, Sperrung, Korrektur oder Übertragung an ein anderes Unternehmen sind in Bezug auf diese Daten nur möglich, wenn Du uns zusätzliche Informationen, die uns eine Identifizierung Deiner Daten erlauben, bereitstellst.",
										"type": "unstyled"
									},
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [],
										"key": "9ckfo",
										"text": "",
										"type": "unstyled"
									},
									{
										"data": {},
										"depth": 0,
										"entityRanges": [],
										"inlineStyleRanges": [],
										"key": "ccktt",
										"text": "Sollten wir einmal nicht so handeln, wie Du das gerne hättest, hast du das Recht dich bei der zuständigen Aufsichtsbehörde zu beschweren. Eine Auflistung aller Datenschutzbehörden findest du hier: https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html",
										"type": "unstyled"
									}
								],
								"entityMap": {}
							},
							"defaultOn": true,
							"id": "88326432-c970-48c1-85bd-eec17dfd4dd8",
							"name": "So setzt Du Deine Rechte um",
							"text": ""
						}
					]
				}
      ]
    }
  }
};

export const electronStore = new Store({
  configName: 'dseCreator',
  defaults
});
