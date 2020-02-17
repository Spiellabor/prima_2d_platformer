# Curse of the dawn

## Checkliste für Leistungsnachweis
© Prof. Dipl.-Ing. Jirka R. Dell'Oro-Friedl, HFU

| Nr | Bezeichnung           | Inhalt                                                                                                                                                                                                                                                                         |
|---:|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    | Titel                 |
|    | Name                  |Christian Capa, Jonas Kern und Sascha Könninger
|    | Matrikelnummer        |
|  1 | Nutzerinteraktion     | Der Nutzer kann mit der Applikation interagieren: er hat die Möglichkeit sich nach rechts und links zu bewegen, zu springen und anzugreifen. Dies wird mithilfe von KeyBoard Events umgesetzt. Es werden lediglich 4 Tasten benötigt: A und D zum laufen, SPACE zum springen und E um einen Angriff auszuführen.                                                                                                            |
|  2 | Objektinteraktion     | Mit Hilfe von Kollisionsprüfung interagieren Objekte miteinander. Grundlegend reagiert unser Charakter auf jegliche Kollisionen, mit den im Spiel eingebunden Objekten: Auf Platformen kann der Charakter (und auch die Gegner) stehen. Bei einer Kollision mit Gegnern bekommt der Spieler Schaden. Wenn der Spieler mit Items kollidiert, werden diese eingesammelt.                                            |
|  3 | Objektanzahl variabel | Eine variable Anzahl von Objekten wird zur Laufzeit generiert. Das beste Beispiel hierfür sind Items. Diese werden zufällig (mit einer bestimmten Dropchance) zur Laufzeit erzeugt.                                                                                   |
|  4 | Szenenhierarchie      | Die Szenenhierarchie ist sinnvoll aufgebaut. Wer ist wessen Parent, wie sind Elemente in anderen gruppiert und warum?                                                                                                                                                          |
|  5 | Sound                 | Sounds sind eingebunden und unterstützen oder ermöglichen die Wahrnehmung der Aktionen. Es gibt für jede wichtige Interaktion einen passenden Sound (Sprung, Attacke, Aufheben von Items und wenn man Schaden bekommt). Hinzu kommt entspannte Musik im Hauptmenü und verschiedene actionreiche Themes in den unterschiedlichen Levels.                                                                              |
|  6 | GUI                   | Ein grafisches Interface gibt dem Nutzer die Möglichkeit, Einstellungen beim Programmstart vorzunehmen. Er kann hier entweder ein neues Spiel starten oder einen gespeicherten Spielstand laden. Zu dem kann er in den Einstellung die Lautstärke der Soundeffekte und der Musik ändern.                                                                                  |
|  7 | Externe Daten         | Spielparameter sind extern in einer Datei veränderbar, so dass das Spiel nur neu gestartet, aber nicht neu kompiliert werden muss. Jedes Level wird extern aus einer JSON-Datei geladen. Paramter, die man hier verändern kann sind: Länge des Levels (in unserer Einheit), Theme des Levels, Postition und Scaling des Spielers, Position und Scaling sämtlicher Platformen, Hintergrund des Levels, Ende des Levels, Gegner und Items.                                                                           |
|  8 | Verhaltensklassen     | Das Verhalten von Objekten ist in den Methoden von Klassen definiert, die in externen Dateien abgelegt sind. Welche Klassen sind dies und welches Verhalten wird dort beschrieben?                                                                                             |
|  9 | Subklassen            | Es existiert eine Klassenhierarchie, einige Objekte sind Instanzen von einer oder mehreren abgeleiteten Subklassen mit gegenüber den anderen Objekten speziellem Verhalten und besonderen Eigenschaften. Die Vaterklasse des Spielers und auch der Gegner ist die Character Klasse. Sie reagiert auf Kollisionen und beschreibt den grundlegenden Umgang mit der Umgebung. Des Weiteren bietet sie Funktionen, wie "walk" und "jump", womit sich der Spieler, sowie die Gegner fortbewegen können. Auch das Laden und Vergeben von Sprites und Animationen ist in der Charakter Klasse enthalten. |
| 10 | Maße & Positionen     | Maße, Skala und Positionen sind gut durchdacht. Wie groß sind Spielfiguren, wie ist die Welt angeordnet bezogen auf den Ursprung, wie sind Spielelemente bezogen auf ihre lokalen Koordinatensysteme definiert?                                                                |
| 11 | Event-System          | Das Event-System wird verwendet. Da wir bisher nur wenig Erfahrung mit dem Event-System hatten, haben wir es nur beim Laden, bei den Sprites, bei den Tastaturinteraktionen und bei sämtlichen UI-Interaktionselementen verwendet.                                                                       |
