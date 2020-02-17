![Image of Background](https://github.com/SaschaK13/prima_2d_platformer/blob/master/Game/Assets/menu/Curse_of_the_dawn_title_image.png)
[Spiele jetzt: "Curse of the Dawn"](https://saschak13.github.io/prima_2d_platformer/Game/index)

## Links: 



## Checkliste für Leistungsnachweis
© Prof. Dipl.-Ing. Jirka R. Dell'Oro-Friedl, HFU

| Nr | Bezeichnung           | Inhalt                                                                                                                                                                                                                                                                         |
|---:|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    | Titel                 |Curse of the Dawn
|    | Name                  |Christian Capa | Jonas Kern | Sascha Könninger
|    | Matrikelnummer        |257670 | 257896 | 257120
|  1 | Nutzerinteraktion     | Der Nutzer kann mit der Applikation interagieren: er kann auf den Play-Button im Startscreen drücken um in das Hauptmenüs des Spiels zu gelangen. Danach hat er fünf Auswahlmöglichkeiten: New Game, Load Game, Story, Settings und Controls. In den Controls sieht er die Steuerung, also welche Taste was macht. Im Story Tab kann man sich bei Interesse die kleine Hintergrundgeschichte des Spiels durchlesen. In den Einstellungen (Settings) hat er die Möglichkeit die Soundeffekte und die Musik leiser und lauter zu stellen. Mit New Game startet man ein neues Spiel. Im Spiel selber kann der Nutzer sich nach rechts und links bewegen, springen und anzugreifen. Dies wird mithilfe von KeyBoard Events umgesetzt. Es werden lediglich 4 Tasten benötigt: A und D zum laufen, SPACE zum springen und E um einen Angriff auszuführen. Schafft man es ans Ende eines Levels hat man die Möglichkeit zu speichern oder ins nächste Level zu gehen. Sollte der Nutzer nun sterben kann er entweder von vorne anfangen (Restart) oder Zurück zum Menü gehen. Im Menü kann man (nachdem man gespeichert hat) nun auch die letze Option (Load Game) nutzen und einen gespeicherten Spielstand laden.                                                                                                           |
|  2 | Objektinteraktion     | Mit Hilfe von Kollisionsprüfung interagieren Objekte miteinander. Grundlegend reagiert unser Charakter auf jegliche Kollisionen, mit den im Spiel eingebunden Objekten: Jeder Charakter ist mit einem Collider ausgestattet, der bei jedem Update prüft ob man mit etwas kollidiert. Auf Platformen kann der Charakter (und auch die Gegner) stehen. Bei einer Kollision mit Blobs (einer einfachen Gegnerform) bekommt der Spieler Schaden. Grundlegend ist jeder Charakter auch mit einer Hitbox ausgestattet. Bei ihr handelt es sich um einen weiteren Collider, der die Angriffsreichsweite des Charakters beschreibt. Greift zum Beispiel ein Spieler oder ein Goblin an, prüft die Hitbox ob sich eine Instanz eines Gegners oder ggf. eines Spielers darin befindet. Ist das der Fall, so erhält dieser Schaden. Wenn der Spieler mit Items kollidiert, werden diese eingesammelt. Kollidiert der Spieler mit dem Spiegel, welcher unser Levelende darstellt, bekommt er die Möglichkeit zu speichern oder ins nächste Level zu gehen.                                            |
|  3 | Objektanzahl variabel | Eine variable Anzahl von Objekten wird zur Laufzeit generiert. Das beste Beispiel hierfür sind Items. Diese werden zufällig (mit einer bestimmten Dropchance) zur Laufzeit erzeugt.                                                                                   |
|  4 | Szenenhierarchie      | Die Szenenhierarchie ist sinnvoll aufgebaut. Wer ist wessen Parent, wie sind Elemente in anderen gruppiert und warum?                                                                                                                                                          |
|  5 | Sound                 | Sounds sind eingebunden und unterstützen oder ermöglichen die Wahrnehmung der Aktionen. Es gibt für jede wichtige Interaktion einen passenden Sound (Sprung, Attacke, Aufheben von Items und wenn man Schaden bekommt). Hinzu kommt entspannte Musik im Hauptmenü und verschiedene actionreiche Themes in den unterschiedlichen Levels.                                                                              |
|  6 | GUI                   | Ein grafisches Interface gibt dem Nutzer die Möglichkeit, Einstellungen beim Programmstart vorzunehmen. Er kann hier entweder ein neues Spiel starten oder einen gespeicherten Spielstand laden. Zu dem kann er in den Einstellung die Lautstärke der Soundeffekte und der Musik ändern.                                                                                  |
|  7 | Externe Daten         | Spielparameter sind extern in einer Datei veränderbar, so dass das Spiel nur neu gestartet, aber nicht neu kompiliert werden muss. Jedes Level wird extern aus einer JSON-Datei geladen. Paramter, die man hier verändern kann sind: Länge des Levels (in unserer Einheit), Theme des Levels, Postition und Scaling des Spielers, Position und Scaling sämtlicher Platformen, Hintergrund des Levels, Ende des Levels, Gegner und Items.                                                                           |
|  8 | Verhaltensklassen     | Das Verhalten von Objekten ist in den Methoden von Klassen definiert, die in externen Dateien abgelegt sind. Welche Klassen sind dies und welches Verhalten wird dort beschrieben?                                                                                             |
|  9 | Subklassen            | Es existiert eine Klassenhierarchie, einige Objekte sind Instanzen von einer oder mehreren abgeleiteten Subklassen mit gegenüber den anderen Objekten speziellem Verhalten und besonderen Eigenschaften. Die Vaterklasse des Spielers und auch der Gegner ist die Character Klasse. Sie reagiert auf Kollisionen und beschreibt den grundlegenden Umgang mit der Umgebung. Des Weiteren bietet sie Funktionen, wie "walk" und "jump", womit sich der Spieler, sowie die Gegner fortbewegen können. Auch das Laden und Vergeben von Sprites und Animationen ist in der Charakter Klasse enthalten. |
| 10 | Maße & Positionen     | Maße, Skala und Positionen sind gut durchdacht. Wie groß sind Spielfiguren, wie ist die Welt angeordnet bezogen auf den Ursprung, wie sind Spielelemente bezogen auf ihre lokalen Koordinatensysteme definiert?                                                                |
| 11 | Event-System          | Das Event-System wird verwendet. Da wir bisher nur wenig Erfahrung mit dem Event-System hatten, haben wir es nur beim Laden, bei den Sprites, bei den Tastaturinteraktionen und bei sämtlichen UI-Interaktionselementen verwendet.                                                                       |
