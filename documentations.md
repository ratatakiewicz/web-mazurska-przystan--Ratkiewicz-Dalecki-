# 📄 Dokumentacja Techniczna – Projekt "Mazurska Przystań"

**Zespół:** Michal Ratkiewicz, Jakub Dalecki
**Klasa:** 3 Technikum
**Data:** 15.03.2026

---
## 1. Analiza wymagań klienta
(Opisz własnymi słowami, jakie funkcjonalności musiały znaleźć się w aplikacji na podstawie e-maila od klienta).
* Obliczanie ceny, 
* walidacja przycisku,
* ostrzeżenie przy wyborze omegi,
* działający formularz - responsywny,

---
## 2. Architektura rozwiązania
(Wyjaśnij, dlaczego zdecydowaliście się na jeden komponent App.ts i
 jak podzieliliście w nim kod na sekcje).

Łatwość pisania w jednym pliku bez potrzeby latania po całym projekcie. 
Podział na div'y - łatwość sterowania nimi oraz ich modyfikacji

---
## 3. Zarządzanie stanem (`useState`)
(Wypełnij poniższą tabelę wszystkimi hookami useState, których użyliście w kodzie).

| Nazwa zmiennej stanu | Typ danych                   | Za co odpowiada?                        |
|:---------------------|:-----------------------------|:----------------------------------------|
| imie                 | string                       | Przechowuje imię klienta                |
| jednostka            | Jednostka(kajak,rower,omega) | Przechowuje jedną z trzech opcji        |
| czas                 | number                       | Przechowuje wybraną liczbę godzin       |
| kapok                | boolean                      | Sprawdza czy kapok jest zaznaczony      |
| instruktor           | boolean                      | Sprawdza czy instruktor jest zaznaczony |
| platnosc             | Platnosc(karta,blik)         | Przechowuje wybrany środek płatności    |
| regulamin            | boolean                      | Sprawdza czy regulamin jest zaznaczony  |


---
## 4. Algorytm obliczania ceny
(Opisz krok po kroku, w jaki sposób Twoja aplikacja wylicza cenę końcową.
Możesz użyć pseudokodu lub wzoru matematycznego).

* **Cena bazowa:** suma+=jednostka
* **Wpływ godzin:** suma+=jednostka*czas
* **Opcje dodatkowe:** jeżeli kapok=true to suma=+5, jeżeli instruktor=true to suma+=50*czas
---
## 5. Layout i Stylizacja (`Flexbox`)
(Opisz, jakich właściwości `Flexbox` użyliście, aby formularz był responsywny i wyśrodkowany.
Wymień co najmniej 3 właściwości CSS).
1. `display: flex` - układa elementy po kolei
2. `justify-content: center` - centruje w poziomie
3. `align-items: center` - centruje w pionie
---
## 6. Wnioski z realizacji projektu (SDLC)
(Krótka autorefleksja zespołu).
* **Co było najtrudniejsze?** ustawienie useState'ów - czasochłonne i bardzo podatne na błędy składniowe
* **Czego nowego się nauczyliście?** pracy w zespole przy projekcie, tworzenia własnych obiektów i typów
* **Co byście zmienili, gdybyście mieli więcej czasu?** ewentualnie tło i rozwinięcie strony pomijając formularz
---
## 7. Checklisty (Zaznacz [x])
- [x] Aplikacja uruchamia się bez błędów (npm start).
- [x] Konsola przeglądarki jest czysta (brak "red errors").
- [x] Wszystkie commity są widoczne na kanale #github-feed.
- [x] Pull Requesty zostały zaakceptowane przez partnera.
