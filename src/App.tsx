
import './App.css';

const Calculator = () => {
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
                    <input type="text" placeholder="Wpisz swoje imię..." />
                </div>


                <div className="input-group">
                    <label>Wybierz jednostkę:</label>
                    <select className="select-style">
                        <option value="kajak">Kajak (20zł/h)</option>
                        <option value="rower">Rower wodny (35zł/h)</option>
                        <option value="omega">Omega (150zł/h) - WYMAGA PATENTU!</option>
                    </select>
                </div>


                <div className="input-group">
                    <label>Czas wynajmu: <span className="hours-badge">4h</span></label>
                    <input type="range" min="1" max="8" step="1" className="slider" />
                </div>


                <div className="extras-container">
                    <label className="checkbox-item">
                        <input type="checkbox" /> Kapok dla dziecka (+5zł)
                    </label>
                    <label className="checkbox-item">
                        <input type="checkbox" /> Opieka instruktora (+50zł/h)
                    </label>
                </div>


                <div className="price-summary">
                    <span>Do zapłaty:</span>
                    <span className="total-amount">0.00 zł</span>
                </div>

                <button type="submit" className="submit-btn" disabled>
                    Zarezerwuj i zapłać
                </button>
            </form>
        </div>
</div>
);
};

export default Calculator;
