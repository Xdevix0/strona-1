"use client";
import { useState } from "react";

function formatPLN(value) {
  return new Intl.NumberFormat("pl-PL").format(Math.round(value)) + " PLN";
}

export default function CalcSection() {
  const [machineValue, setMachineValue] = useState(500000);
  const [ownContrib, setOwnContrib] = useState(10);
  const [period, setPeriod] = useState(48);
  const [buyout, setBuyout] = useState(1);

  const rate = 0.07;
  const financed = machineValue * (1 - ownContrib / 100);
  const monthlyRate = rate / 12;
  const n = period;
  const monthlyPayment = (financed * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
  const totalCost = monthlyPayment * n + machineValue * (buyout / 100);
  const interestCost = totalCost - financed;
  const ownContribPLN = machineValue * (ownContrib / 100);

  return (
    <section className="section-calc" id="kalkulator">
      <div className="container">
        <div className="section-header">
          <span className="section-tag section-tag-light">Kalkulator</span>
          <h2 className="section-title section-title-light">Oblicz ratę leasingu maszyny</h2>
          <p className="section-subtitle section-subtitle-light">
            Orientacyjne wyliczenie dla ciężkiego sprzętu. Dokładną ofertę przygotujesz po wysłaniu zapytania.
          </p>
        </div>

        <div className="calc-grid">
          <div className="calc-inputs">
            <SliderGroup
              label="Wartość netto maszyny"
              display={formatPLN(machineValue)}
              min={50000} max={5000000} step={50000}
              value={machineValue}
              onChange={setMachineValue}
              minLabel="50 000 PLN"
              maxLabel="5 000 000 PLN"
            />
            <SliderGroup
              label="Wkład własny"
              display={ownContrib + "%"}
              min={0} max={50} step={1}
              value={ownContrib}
              onChange={setOwnContrib}
              minLabel="0%"
              maxLabel="50%"
            />
            <SliderGroup
              label="Okres leasingu"
              display={period + " mies."}
              min={24} max={84} step={12}
              value={period}
              onChange={setPeriod}
              minLabel="24 mies."
              maxLabel="84 mies."
            />
            <SliderGroup
              label="Wartość wykupu"
              display={buyout + "%"}
              min={1} max={20} step={1}
              value={buyout}
              onChange={setBuyout}
              minLabel="1%"
              maxLabel="20%"
            />
          </div>

          <div className="calc-result-card">
            <div className="calc-result-header">
              <CalcIcon />
              <span>Orientacyjne wyliczenie</span>
            </div>

            <div className="calc-monthly">
              <span className="calc-monthly-label">Szacunkowa rata miesięczna</span>
              <span className="calc-monthly-value">{formatPLN(monthlyPayment)}</span>
              <span className="calc-monthly-sub">netto + VAT</span>
            </div>

            <div className="calc-breakdown">
              <div className="calc-breakdown-row">
                <span className="calc-breakdown-label">Wkład własny</span>
                <span className="calc-breakdown-value">{formatPLN(ownContribPLN)}</span>
              </div>
              <div className="calc-breakdown-row">
                <span className="calc-breakdown-label">Liczba rat</span>
                <span className="calc-breakdown-value">{period} × {formatPLN(monthlyPayment)}</span>
              </div>
              <div className="calc-breakdown-row">
                <span className="calc-breakdown-label">Łączny koszt finansowania</span>
                <span className="calc-breakdown-value">{formatPLN(totalCost)}</span>
              </div>
              <div className="calc-breakdown-row">
                <span className="calc-breakdown-label">Koszt odsetek</span>
                <span className="calc-breakdown-value">{formatPLN(interestCost)}</span>
              </div>
            </div>

            <p className="calc-disclaimer">
              * Wyliczenie orientacyjne. Rzeczywista rata zależy od oferty banku, rodzaju maszyny i historii firmy.
            </p>

            <a href="#kontakt" className="calc-cta-btn">
              <SendIcon />
              <span>Wycena usługi leasingowej</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SliderGroup({ label, display, min, max, step, value, onChange, minLabel, maxLabel }) {
  return (
    <div className="calc-input-group">
      <div className="calc-input-header">
        <label className="calc-label">{label}</label>
        <span className="calc-value-display">{display}</span>
      </div>
      <input
        type="range"
        min={min} max={max} step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="calc-slider"
      />
      <div className="calc-range-labels">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

function CalcIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(145 62% 42%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>;
}
function SendIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>;
}
