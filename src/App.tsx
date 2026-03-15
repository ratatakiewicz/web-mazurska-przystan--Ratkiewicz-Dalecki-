
import './App.css';
import {useState} from "react";

type Jednostka = "kajak" | "rower" | "omega";
type Platnosc = "karta" | "blik";

const CENY = {kajak: 20, rower: 35, omega: 150};

const Calculator = () => {
    const [imie, setImie] = useState<string>("");
    const [jednostka, setJednostka] = useState<Jednostka>("kajak");
    const [czas, setCzas] = useState<number>(5);
    const [kapok, setKapok] = useState<boolean>(false);
    const [instruktor, setInstruktor] = useState<boolean>(false);
    const [platnosc, setPlatnosc] = useState<Platnosc>("karta");
    const [regulamin, setRegulamin] = useState<boolean>(false);

    const obliczCene = (): number => {
        let suma = CENY[jednostka] * czas;
        if (kapok) suma += 5;
        if (instruktor) suma += 50 * czas;
        return suma;
    };

    return (
        <div className="app-container">
            <div className="calc-card">
                <header className="calc-header">
                    <h2>⚓ Mazurska Przystań 2026</h2>
                    <p>Kalkulator rezerwacji sprzętu</p>
                </header>

            <form className="calc-form">

                <div className="input-group">
                    <label>Imię sternika:</label>
                    <input type="text" placeholder="Wpisz swoje imię..." value={imie} onChange={e => setImie(e.target.value)}/>
                </div>


                <div className="input-group">
                    <label>Wybierz jednostkę:</label>
                    <select className="select-style" value={jednostka} onChange={(e)=>{
                    if(e.target.value==="omega") {
                        alert("Uwaga! - Wymagany patent żeglarski!");
                    }
                    setJednostka(e.target.value as Jednostka);
                    }} >
                        <option value="kajak">Kajak (20zł/h)</option>
                        <option value="rower">Rower wodny (35zł/h)</option>
                        <option value="omega">Omega (150zł/h) - WYMAGA PATENTU!</option>
                    </select>
                </div>


                <div className="input-group">
                    <label>Czas wynajmu: <span className="hours-badge">{czas}h</span></label>
                    <input type="range" min="1" max="8" step="1" className="slider" value={czas} onChange={e => setCzas(Number(e.target.value))} />
                </div>


                <div className="extras-container">
                    <label className="checkbox-item">
                        <input type="checkbox" checked={kapok} onChange={(e)=>setKapok(e.target.checked)}/> Kapok dla dziecka (+5zł)
                    </label>
                    <label className="checkbox-item">
                        <input type="checkbox" checked={instruktor} onChange={(e)=>setInstruktor(e.target.checked)}/> Opieka instruktora (+50zł/h)
                    </label>
                </div>

                <div className="price-summary">
                    <span>Do zapłaty:</span>
                    <span className="total-amount">{obliczCene().toFixed(2) } zł</span>

                </div>
                <div className="extras-container">
                    <label className="radio-item">
                        <input type="radio" name="platnosc" value="karta" checked={platnosc === "karta"} onChange={(e) => setPlatnosc(e.target.value as Platnosc)} className="radio-input"
                        /> Karta płatnicza
                    </label>
                    <label className="radio-item">
                        <input type="radio" name="platnosc" value="blik" checked={platnosc === "blik"} onChange={(e) => setPlatnosc(e.target.value as Platnosc)} className="radio-input"
                        /> BLIK
                    </label>
                </div>

                <label className="checkbox-item">
                    <input
                        type="checkbox" checked={regulamin} onChange={(e) => setRegulamin(e.target.checked)}/> Akceptuję regulamin wypożyczalni
                </label>

                <button type="button" className="submit-btn" disabled={!regulamin || imie.trim()===""} onClick={()=>alert(`Dziękujemy, ${imie}! ${jednostka} jest przygotowywany/a.`)}>
                    Rezerwuję
                </button>
            </form>
        </div>
</div>
);
};

export default Calculator;
