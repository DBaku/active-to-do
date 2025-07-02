# active to do list

### Willkommen zu einer kleiner aufgabe ich brauche eine active to-do liste die ich fortlaufend bearbeiten kann und auch mal schnell ans handy senden

Für mich ist besonders wichtig dass ich unteraufgaben erstellen kann und abhaken ohne das die erldigten sachen verschwinden sondern entweder in der erledigt spalte gesammelt werden oder einfach durchgestricghen nach unten geschoben werden

Als React komponente kann sie daher relativ leicht eingeschoben werden und überall nutzbar gemacht werden

In der bla.jsx ist der code nun untergebracht.
Wir starten jetzt mit einer anleitung um unser projekt anzulegen oder zu überprüfen ob es richtig angelegt ist:

folge diesen Schritten:

1. **Projektverzeichnis vorbereiten**

    Lege einen Ordner für dein Projekt an (z.B. `active-to-do`) und platziere deine Datei bla.jsx dort.

2. **Node.js & npm installieren**

    Stelle sicher, dass [Node.js](https://nodejs.org/) und npm installiert sind. Prüfe das im Terminal mit:

    node -v
    npm -v

3. **Neues React-Projekt erstellen**  
   Erstelle ein neues Projekt mit [Vite](https://vitejs.dev/) (empfohlen für moderne React-Projekte):

    npm create vite@latest

    Wähle `React` und `JavaScript` als Optionen.

    Alternativ kannst du auch `npx create-react-app .` im Projektordner nutzen.

4. **Dateien einfügen**

    Ersetze die `App.jsx` im `src`-Ordner durch den Inhalt deiner bla.jsx.  
    Passe ggf. die Importe an, falls du Komponenten wie `Card`, `Button`, `Input`, `Checkbox` aus einer UI-Bibliothek verwendest.  
    Falls diese Komponenten aus einer eigenen Datei stammen, stelle sicher, dass sie im Projekt vorhanden sind.

5. **Abhängigkeiten installieren**

    Installiere alle benötigten Pakete:

    npm install

    Falls du z.B. [shadcn/ui](https://ui.shadcn.com/) oder eine andere UI-Bibliothek nutzt, installiere diese ebenfalls:

    npm install @radix-ui/react-checkbox

    # oder andere, je nach Bedarf

6. **Projekt starten**

    Starte die Entwicklungsumgebung:

    npm run dev

    oder bei Create React App:

    npm start

7. **Im Browser öffnen**

    Öffne die angezeigte lokale Adresse (meist http://localhost:5173 oder http://localhost:3000) im Browser.

**Hinweis:**  
Die Komponenten `Card`, `Button`, `Input`, `Checkbox` werden in deinem Code von `@/components/ui/...` importiert. Stelle sicher, dass diese Komponenten im Projekt vorhanden sind oder passe die Importe an eine installierte UI-Bibliothek an.

**Zusammenfassung:**

-   Node.js & npm installieren
-   Neues React-Projekt anlegen
-   bla.jsx als Komponente einfügen
-   Abhängigkeiten installieren
-   `npm run dev` ausführen

Wenn du Fragen zu den UI-Komponenten hast oder Fehler auftreten, sag Bescheid!
