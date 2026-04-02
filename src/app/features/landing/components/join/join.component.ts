import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './join.component.html',
  styles: [`/* ===== FUENTES ===== */
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap');

.age-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px 0;
}

.broken-heart-icon {
  width: 80px;
  height: auto;
  margin-bottom: 24px;
}

.age-error-title {
  font-size: 22px;
  font-weight: 700;
  color: #005871;
  font-family: 'Quicksand', sans-serif;
  line-height: 1.3;
  margin-bottom: 16px;
}

.age-error-text {
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  color: #6b7280;
  line-height: 20px;
  margin-bottom: 32px;
  max-width: 320px;
}

.btn-back-home {
  background: #005871;
  color: white;
  border: none;
  padding: 14px 40px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  transition: transform 0.2s;
}

.btn-back-home:hover {
  transform: translateY(-2px);
}

.join-section {
  position: relative;
  background: #005871; /* ← #005871 en lugar de #0e5f6e */
  padding: 120px 20px 80px;
  overflow: hidden;
  font-family: 'Quicksand', sans-serif;
}

.join-bg {
  position: absolute;
  inset: 0;
  background: url('/assets/images/hero/FondoCTAsection-Desktop.png') center/cover no-repeat;
  opacity: .35;
}

.input-error {
  border-color: #e53e3e !important;
}

.input-select.input-error {
  border-color: #e53e3e !important;
}

.error-msg {
  display: block;
  color: #e53e3e;
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  margin-top: -14px;
  margin-bottom: 10px;
  text-align: left;
}
  
.join-container {
  position: relative;
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 520px;
  gap: 60px;
  align-items: center;
}

.join-left { color: white; }

.join-logo {
  width: 60px;
  margin-bottom: 20px;
}

/* TÍTULO: 40px desktop */
.join-title {
  font-size: 40px; /* ← antes 42px */
  font-weight: 700;
  margin-bottom: 20px;
  font-family: 'Quicksand', sans-serif;
}

/* TEXTO: 18px desktop */
.join-text {
  font-size: 18px;
  opacity: .9;
  max-width: 420px;
  font-family: 'Quicksand', sans-serif;
}

.form-card {
  background: #f3f3f3;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 25px rgba(0,0,0,.2);
  text-align: center;
  
}

/* ===== TÍTULO FORMULARIO ===== */
.step-header {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
  margin-top: 8px;
}

.arrow-back {
  width: 20px;
  height: 20px;
  cursor: pointer;
  flex-shrink: 0;
  position: absolute;
  left: 0;
}

.form-title {
  font-size: 32px;           /* Quicksand Bold 32px desktop/tablet */
  font-weight: 700;
  color: #005871;
  margin-bottom: 15px;
  line-height: 1.3;
  font-family: 'Quicksand', sans-serif;
}

/* SUBTÍTULO: 20px */
.form-sub {
  color: #6b7280;
  font-size: 18px;           /* P - Textos: Montserrat 18px */
  line-height: 26px;
  margin-bottom: 40px;
  font-family: 'Montserrat', sans-serif;
}

.pet-options {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.pet-card {
  border: 2px solid #d1d5db;
  border-radius: 18px;
  padding: 25px;
  background: white;
  cursor: pointer;
  transition: all .3s ease;
}

.pet-card:hover {
  transform: translateY(-6px);
  background: #005871; /* ← #005871 */
  border-color: #005871;
}

.pet-card img { width: 100px; height: auto; display: block; }
.pet-card span { font-weight: 600; color: #374151; }

.footer {
  background: #005871; /* ← #005871 */
  border-top: 1px solid rgba(255,255,255,.2);
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.socials { display: flex; gap: 15px; }
.socials img { width: 26px; cursor: pointer; opacity: .9; }

label {
  display: block;
  text-align: left;
  font-weight: 700;          /* Quicksand Bold */
  font-size: 16px;           /* Labels: 16px */
  line-height: 20px;
  color: #374151;
  margin: 15px 0 6px;
  font-family: 'Quicksand', sans-serif;
}

.gender-options button:hover img {
  filter: brightness(0) invert(1);
}

.input {
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: 2px solid #e5e7eb;
  font-size: 14px;           /* Inputs: Montserrat 14px */
  line-height: 20px;
  outline: none;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;          /* Medium */
}

.input:focus { border-color: #005871; }

.small { width: 90px; }

.date-row {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.link {
  background: #e0f2fe;
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  margin: 10px 0 25px;
}

.gender-options {
  display: flex;
  gap: 12px;
}



.gender-options button {
  flex: 0; /* ← IMPORTANTE: ya no ocupa todo */
  padding: 10px 20px; /* ← más pequeño */
  border-radius: 10px;
  border: 2px solid #005871;
  background: transparent;
  font-size: 14px;
  font-weight: 500;
  color: #005871;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 6px;

  transition: all 0.2s ease;
}
  .gender-options button img {
  width: 20px; /* ← icono pequeño como en diseño */
  height: 16px;
  filter: none;
}



.gender-options button:hover {
  transform: translateY(-4px);
  background: #005871; /* ← #005871 */
  border-color: #005871;
  color: white;
}

.gender-options button.active {
  background: #005871;
  color: white;
}

.gender-options button.active img {
  filter: brightness(0) invert(1) !important;
}

.plan-options {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;
}

.plan-card {
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  padding: 20px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.plan-card img {
  width: 130px;
  transition: filter 0.3s ease;
}

.plan-card.otto-plan:hover,
.plan-card.otto-plan.active {
  background-color: #834f96;
  border-color: #834f96;
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(131, 79, 150, 0.2);
}


/* Ícono blanco al seleccionar */
.plan-card.otto-plan:hover img,
.plan-card.otto-plan.active img {
  filter: brightness(0) invert(1); /* ← íconos blancos */
}

.plan-card.otto-plus:hover,
.plan-card.otto-plus.active {
  background-color: #ffb400;
  border-color: #ffb400;
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(255, 180, 0, 0.2);
}

.plan-card.otto-plus:hover img,
.plan-card.otto-plus.active img {
  filter: brightness(0) invert(1); /* ← íconos blancos */
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.btn-row {
  clear: both;
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
}

.btn-primary {
  background: #005871; /* ← #005871 */
  color: white;
  border: none;
  padding: 14px 26px;
  border-radius: 10px;
  font-size: 18px; /* ← texto 18px */
  font-weight: 600;
  cursor: pointer;
  font-family: 'Quicksand', sans-serif;
}

.btn-primary:hover { transform: translateY(-2px); }

.progress {
  width: 100%;
  height: 6px;
  background: #e5e7eb;
  border-radius: 6px;
  margin-bottom: 10px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: #005871; /* ← #005871 */
  width: 0%;
  transition: width .4s ease;
}

/* SUBTÍTULO paso label: 20px */
.step-label {
  flex: 1;
  text-align: center;           /* centrado respecto a toda la fila */
  font-size: 11px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  color: #00B0C8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.back-btn {
  cursor: pointer;
  font-size: 22px;
  margin-bottom: 10px;
  color: #005871; /* ← #005871 */
  text-align: left;
}

.btn-image {
  width: 200px;
  cursor: pointer;
  display: block;
  margin: 20px auto;
  transition: .2s;
}

.btn-image:hover { transform: scale(1.05); }

.footer-copy {
  color: white;
  font-size: 18px; /* ← texto 18px */
  font-family: 'Quicksand', sans-serif;
}

.footer-socials {
  display: flex;
  gap: 12px;
  align-items: center;
}

.footer-socials a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(255,255,255,0.15);
  border-radius: 6px;
  transition: background 0.2s;
}

.footer-socials a:hover { background: rgba(255,255,255,0.3); }

.footer-socials a img {
  width: 18px;
  height: 18px;
  filter: brightness(0) invert(1);
}

.form-sub-detail {
  color: #005871;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  margin-bottom: 30px;
  font-family: 'Montserrat', sans-serif;
}

/* LABEL PRINCIPAL: subtítulo 20px */
.label-main {
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 700 !important;
  color: #005871 !important;
  margin-bottom: 5px !important;
  font-family: 'Quicksand', sans-serif !important;
}

.label-instruction {
  font-size: 13px;           /* Textos auxiliares: 13px */
  line-height: 18px;
  color: #6b7280;
  margin-bottom: 20px;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}

.date-row {
  display: flex;
  gap: 12px;
  margin-bottom: 25px;
}

.select-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.select-group span {
  text-align: left;
  font-size: 16px;           /* Label */
  line-height: 20px;
  color: #4b5563;
  margin-bottom: 6px;
  font-weight: 700;
  font-family: 'Quicksand', sans-serif;
}

.input-select {
  width: 100%;
  padding: 12px 15px;
  border: 1.5px solid #005871;
  border-radius: 8px;
  background-color: white;
  font-size: 14px;           /* Items dropdown: 14px */
  line-height: 16px;
  color: #6b7280;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23005871'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 18px;
  cursor: pointer;
  outline: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;          /* Regular */
}

.select-wrapper { position: relative; width: 100%; }

.btn-toggle-date {
  background: #e0f2fe;
  color: #005871; /* ← #005871 */
  border: none;
  padding: 12px 18px;
  border-radius: 10px;
  font-size: 18px; /* ← texto 18px */
  font-weight: 500;
  cursor: pointer;
  margin-top: 10px;
  display: inline-block;
  float: left;
  font-family: 'Quicksand', sans-serif;
}

.btn-toggle-date:hover { background: #bfdbfe; }

.btn-primary-next {
  background: #005871;
  color: white;
  border: none;
  padding: 14px 45px;
  border-radius: 10px;
  font-size: 16px;           /* Botones: 16px SemiBold */
  line-height: 24px;
  font-weight: 600;
  cursor: pointer;
  float: right;
  font-family: 'Montserrat', sans-serif;
}


.label-instruction-blue {
  font-size: 13px;           /* Textos auxiliares: 13px */
  line-height: 18px;
  color: #005871;
  font-weight: 400;
  margin-bottom: 20px;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
}


/* Animaciones */
.fade-in { animation: fadeIn 0.5s ease-in-out; }
.approx-fade { animation: fadeIn 0.4s ease-out; }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ===== TABLET (481px - 1024px) ===== */
@media (min-width: 481px) and (max-width: 1024px) {

  .join-section { padding: 60px 24px 60px !important; }

  .join-container {
    grid-template-columns: 1fr !important;
    gap: 32px !important;
    justify-items: center !important;
  }

  .join-left {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
    width: 100% !important;
  }

  /* TÍTULO tablet: 40px (igual que desktop) */
  .join-title { font-size: 40px !important; line-height: 1.2 !important; }

  /* SUBTÍTULO tablet: 20px */
  .join-text { font-size: 18px !important; max-width: 460px !important; }

  .form-card {
    width: 100% !important;
    max-width: 500px !important;
    padding: 36px 32px !important;
  }

  /* TÍTULO formulario tablet: 40px */
  .form-title { font-size: 40px !important; }

  /* SUBTÍTULO formulario tablet: 20px */
  .form-sub { font-size: 20px !important; margin-bottom: 24px !important; }

.step-label {
  font-size: 11px;           /* Barra de progreso: 11px SemiBold */
  font-weight: 600;
  color: #6b7280;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}



  .form-sub-detail { font-size: 20px !important; }
  .label-main { font-size: 20px !important; }
  .label-instruction { font-size: 18px !important; }

.btn-toggle-date {
  background: #e0f2fe;
  color: #005871;
  border: none;
  padding: 12px 18px;
  border-radius: 10px;
  font-size: 13px;           /* Auxiliar */
  line-height: 18px;
  font-weight: 400;
  cursor: pointer;
  margin-top: 10px;
  display: inline-block;
  float: left;
  font-family: 'Montserrat', sans-serif;
}


  .footer-copy { font-size: 18px !important; }

  .pet-options { gap: 24px !important; }
  .pet-card { padding: 20px !important; }
  .pet-card img { width: 80px !important; }

  .footer {
    flex-direction: row !important;
    justify-content: space-between !important;
    align-items: center !important;
    padding: 16px 24px !important;
    gap: 0 !important;
  }

  .footer-socials {
    display: flex !important;
    flex-direction: row !important;
    gap: 8px !important;
  }

  .footer-socials a { width: 30px !important; height: 30px !important; }
  .footer-socials img { width: 15px !important; height: 15px !important; }
}

/* ===== MÓVIL (max 480px) ===== */
@media (max-width: 480px) {

  .form-title { font-size: 24px; }   /* Título formulario móvil: 24px */
  .form-sub { font-size: 16px; }
  .form-sub-detail { font-size: 16px !important; }
  .label-instruction { font-size: 11px; line-height: 18px; }
  .label-instruction-blue { font-size: 11px; line-height: 18px; }
  .btn-toggle-date { font-size: 11px; }
  .step-label { font-size: 11px; }

  .join-section {
  padding: 40px 16px !important;
    background: #005871; /* ← #005871 */
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .join-bg {
    background: url('/assets/images/hero/FondoCTAsection-mobile.png') center top/cover no-repeat;
    opacity: 1;
  }

  .join-container {
  padding: 0 !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .join-left {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .join-logo { width: 40px; margin-bottom: 25px; }

  /* TÍTULO móvil: 32px */
  .join-title { font-size: 32px; line-height: 1.1; margin-bottom: 20px; }

  /* TEXTO móvil: 16px */
  .join-text { font-size: 16px; max-width: 280px; margin: 0 auto; }

  .form-card {
    background: white;
    padding: 30px 20px !important;
    border-radius: 20px;
    width: 100%;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }

  .label-main { font-size: 14px !important; }
  /* TEXTO móvil: 16px */
  .gender-options button { font-size: 16px; }

.btn-primary {
  background: #005871;
  color: white;
  border: none;
  padding: 14px 26px;
  border-radius: 10px;
  font-size: 16px;           /* Botones: Montserrat SemiBold 16px */
  line-height: 24px;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
}

.btn-primary-next {
  background: #005871;
  color: white;
  border: none;
  padding: 14px 45px;
  border-radius: 10px;
  font-size: 16px;           /* Botones: 16px SemiBold */
  line-height: 24px;
  font-weight: 600;
  cursor: pointer;
  float: right;
  font-family: 'Montserrat', sans-serif;
}

  .footer-copy { font-size: 16px; }
  .label-instruction-blue { font-size: 16px; }

  .pet-options { gap: 15px; }
  .pet-card { padding: 15px; flex: 1; display: flex; flex-direction: column; align-items: center; }
  .pet-card img { width: 70px; }

  .footer {
    flex-direction: column !important;
    background: #005871; /* ← #005871 */
    padding: 30px 20px;
    border-top: 1px solid rgba(255,255,255,0.2);
  }

  .footer-socials { order: 1; margin-bottom: 20px; }
  .footer-copy { order: 2; font-size: 13px; opacity: 0.8; }
}

/* ===== MAX 900 ===== */
@media (max-width: 900px) {
  .join-container { grid-template-columns: 1fr; }

  .form-card {
    background: #f2f2f2;
    border-radius: 20px;
    padding: 36px 32px; 
    box-shadow: 0 20px 40px rgba(0,0,0,.25);
    text-align: center;
    width: 100%;
    max-width: 640px;
  }

  .footer { flex-direction: column; gap: 10px; text-align: center; }
}

@media (max-width: 600px) {
  .footer { flex-direction: column; gap: 16px; text-align: center; padding: 20px; }
}

.join-bg-mobile { display: none; }`]
})
export class JoinComponent {

  submitted = false;

emailValido(): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(this.user.email);
}

celularValido(): boolean {
  return /^\d{7,15}$/.test(this.user.celular);
}

soloNumeros(event: KeyboardEvent): boolean {
  return /[0-9]/.test(event.key);
}

  step = 1
  selectedPet: string | null = null
  ageOutOfRange = false;

  selectPet(pet:string){
    this.selectedPet = pet
    this.step = 2
  }
  petName = ''
  gender = ''
  
  knowExactDate = true
  
  day = ''
  month = ''
  year = ''
  
  approxMonth = ''
  approxYear = ''
  
  plan = ''
  
  months=[1,2,3,4,5,6,7,8,9,10,11,12]
  years=[2024,2023,2022,2021,2020,2019,2018]
  
  user={
    nombres:'',
    apellidos:'',
    email:'',
    celular:''
  }

  next() {
    this.submitted = true;
  
    if (this.step === 2) {
      if (!this.petName.trim() || !this.gender) return;
    }
  
    if (this.step === 3) {
      if (this.knowExactDate) {
        if (!this.day || !this.month || !this.year) return;
      } else {
        if (!this.approxMonth || !this.approxYear) return;
      }
      this.validateAge();
      if (this.ageOutOfRange) return;
    }
  
    if (this.step === 4) {
      if (!this.plan) return;
    }
  
    if (this.step === 5) {
      if (!this.user.nombres.trim() || !this.user.apellidos.trim() ||
          !this.emailValido() || !this.celularValido()) return;
    }
  
    this.submitted = false;
    this.step++;
  }
  prev(){
    if(this.step > 1){
      this.step--
    }
  }
  
  reset(){
  
    this.step = 1
    this.selectedPet = null
    this.petName = ''
    this.gender = ''
    this.plan = ''
  
    this.user={
      nombres:'',
      apellidos:'',
      email:'',
      celular:''
    }
    this.ageOutOfRange = false;
  
  }
  daysList = Array.from({length: 31}, (_, i) => i + 1);
  monthsList = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  yearsList = Array.from({length: 20}, (_, i) => 2026 - i);

  validateAge(): void {
    let birthDate: Date;
  
    if (this.knowExactDate) {
      if (!this.year || !this.month) return;
      birthDate = new Date(parseInt(this.year), parseInt(this.month) - 1, parseInt(this.day) || 1);
    } else {
      if (!this.approxYear || !this.approxMonth) return;
      birthDate = new Date(parseInt(this.approxYear), parseInt(this.approxMonth) - 1, 1);
    }
  
    const today = new Date();
    const ageInMonths =
      (today.getFullYear() - birthDate.getFullYear()) * 12 +
      (today.getMonth() - birthDate.getMonth());
  
    this.ageOutOfRange = ageInMonths < 12 || ageInMonths > 24;
  }
}