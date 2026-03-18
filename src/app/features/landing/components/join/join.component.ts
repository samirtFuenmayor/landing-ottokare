import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './join.component.html',
  styles: [`

.join-section{
  position:relative;
  background:#0e5f6e;
  padding:120px 20px 80px;
  overflow:hidden;
}

.join-bg{
  position:absolute;
  inset:0;
  background:url('/assets/images/hero/FondoCTAsection-Desktop.png') center/cover no-repeat;
  opacity:.35;
}

.join-container{
  position:relative;
  max-width:1200px;
  margin:auto;
  display:grid;
  grid-template-columns:1fr 520px;
  gap:60px;
  align-items:center;
}

.join-left{
  color:white;
}

.join-logo{
  width:60px;
  margin-bottom:20px;
}

.join-title{
  font-size:42px;
  font-weight:700;
  margin-bottom:20px;
}

.join-text{
  font-size:18px;
  opacity:.9;
  max-width:420px;
}

.form-card{
  background:#f3f3f3;
  border-radius:20px;
  padding:40px;
  box-shadow:0 10px 25px rgba(0,0,0,.2);
  text-align:center;
}

.form-title{
  font-size:32px;
  font-weight:700;
  color:#0e5f6e;
  margin-bottom:15px;
  line-height:1.3;
}

.form-sub{
  color:#6b7280;
  font-size:18px;
  margin-bottom:40px;
}

.pet-options{
  display:flex;
  justify-content:center;
  gap:40px;
}

.pet-card{
  border:2px solid #d1d5db;
  border-radius:18px;
  padding:25px;
  background:white;
  cursor:pointer;
  transition:all .3s ease;
}

.pet-card:hover{
  transform:translateY(-6px);
  background:#0e5f6e;
  border-color:#0e5f6e;
}

.pet-card img{
  width:100px;
  height:auto;
  display:block;
}

.pet-card span{
  font-weight:600;
  color:#374151;
}

.footer{
  background:#0e5f6e;
  border-top:1px solid rgba(255,255,255,.2);
  padding:20px 30px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  color:white;
}

.socials{
  display:flex;
  gap:15px;
}

.socials img{
  width:26px;
  cursor:pointer;
  opacity:.9;
}

label{
  display:block;
  text-align:left;
  font-weight:600;
  color:#374151;
  margin:15px 0 6px;
}

.input{
  width:100%;
  padding:14px;
  border-radius:10px;
  border:2px solid #e5e7eb;
  font-size:15px;
  outline:none;
  margin-bottom:20px;
}

.input:focus{
  border-color:#0e5f6e;
}

.small{
  width:90px;
}

.date-row{
  display:flex;
  gap:10px;
  margin-bottom:10px;
}

.link{
  background:#e0f2fe;
  border:none;
  padding:8px 14px;
  border-radius:8px;
  font-size:14px;
  cursor:pointer;
  margin:10px 0 25px;
}

.gender-options{
  display:flex;
  gap:15px;
  margin-bottom:25px;
}

.gender-options button{
  flex:1;
  padding:12px;
  border-radius:12px;
  border:2px solid #e5e7eb;
  background:white;
  font-weight:600;
  cursor:pointer;
  transition:.2s;
}

.gender-options button.active{
  background:#0e5f6e;
  color:white;
  border-color:#0e5f6e;
}

.plan-options{
  display:flex;
  justify-content:center;
  gap:20px;
  margin:30px 0;
}

.plan-card{
  border:2px solid #e5e7eb;
  border-radius:16px;
  padding:20px;
  background:white;
  cursor:pointer;
  transition:.2s;
}

.plan-card img{
  width:130px;
}

.plan-card.active{
  border-color:#0e5f6e;
  background:#eef7f8;
}

.grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:15px;
}

.btn-row{
  display:flex;
  justify-content:flex-end;
}

.btn-primary{
  background:#0e5f6e;
  color:white;
  border:none;
  padding:14px 26px;
  border-radius:10px;
  font-size:16px;
  font-weight:600;
  cursor:pointer;
}

.btn-primary:hover{
  transform:translateY(-2px);
}

.progress{
  width:100%;
  height:6px;
  background:#e5e7eb;
  border-radius:6px;
  margin-bottom:10px;
  overflow:hidden;
}

.progress-bar{
  height:100%;
  background:#0e5f6e;
  width:0%;
  transition:width .4s ease;
}

.step-label{
  font-size:14px;
  color:#6b7280;
  margin-bottom:20px;
}

.back-btn{
  cursor:pointer;
  font-size:22px;
  margin-bottom:10px;
  color:#0e5f6e;
  text-align:left;
}

.btn-image{
  width:200px;
  cursor:pointer;
  display:block;
  margin:20px auto;
  transition:.2s;
}

.btn-image:hover{
  transform:scale(1.05);
}

.footer {
  background: #0e5f6e;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-copy {
  color: white;
  font-size: 14px;
}

.footer-socials {
  display: flex;
  gap: 12px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 6px;
    transition: background 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    img {
      width: 18px;
      height: 18px;
      filter: brightness(0) invert(1);
    }
  }
}

/* MAX 900 — mobile */
@media (max-width: 900px) {
  .join-container {
    grid-template-columns: 1fr;
  }

  .form-card {
    background: #f2f2f2;
    border-radius: 20px;
    padding: 60px 70px;
    box-shadow: 0 20px 40px rgba(0,0,0,.25);
    text-align: center;
    width: 100%;
    max-width: 640px;
  }

  .footer {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}

@media (max-width: 600px) {
  .footer {
    flex-direction: column;
    gap: 16px;
    text-align: center;
    padding: 20px;
  }
}

/* TABLET — va al final para pisar los anteriores */
@media (min-width: 481px) and (max-width: 1024px) {

  .join-section {
    padding: 60px 24px 60px !important;
  }

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

  .join-logo {
    width: 52px !important;
    margin-bottom: 16px !important;
  }

  .join-title {
    font-size: 30px !important;
    line-height: 1.2 !important;
    text-align: center !important;
  }

  .join-text {
    font-size: 15px !important;
    max-width: 460px !important;
    text-align: center !important;
  }

  .form-card {
    width: 100% !important;
    max-width: 500px !important;
    padding: 36px 32px !important;
  }

  .form-title { font-size: 22px !important; }
  .form-sub { font-size: 14px !important; margin-bottom: 24px !important; }
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

  .footer-copy {
    font-size: 12px !important;
    text-align: left !important;
  }

  .footer-socials {
    display: flex !important;
    flex-direction: row !important;
    gap: 8px !important;
  }

  .footer-socials a {
    width: 30px !important;
    height: 30px !important;
  }

  .footer-socials img {
    width: 15px !important;
    height: 15px !important;
  }
}

/* Estilo base para el fondo móvil (puedes ajustarlo en el media query) */
.join-bg-mobile {
  display: none; /* Oculto por defecto en desktop */
}

/* --- VISTA MÓVIL (Basada en tu imagen) --- */
@media (max-width: 480px) {
  .join-section {
    padding: 40px 20px;
    background: #0e5f6e;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* Cambiamos el fondo por el de móvil */
  .join-bg {
    background: url('/assets/images/hero/FondoCTAsection-mobile.png') center top/cover no-repeat;
    opacity: 1; /* Ajusta según necesites */
  }

  .join-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    grid-template-columns: 1fr; /* Desactiva el grid */
  }

  .join-left {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .join-logo {
    width: 40px;
    margin-bottom: 25px;
  }

  .join-title {
    font-size: 32px;
    line-height: 1.1;
    margin-bottom: 20px;
  }

  .join-text {
    font-size: 16px;
    max-width: 280px;
    margin: 0 auto;
  }

  /* Ajuste de la tarjeta blanca para que se vea como la imagen */
  .form-card {
    background: white;
    padding: 40px 25px;
    border-radius: 20px;
    width: 100%;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }

  .form-title {
    font-size: 24px;
    color: #0e5f6e;
  }

  .form-sub {
    font-size: 15px;
    color: #4b5563;
  }

  .pet-options {
    gap: 15px;
  }

  .pet-card {
    padding: 15px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pet-card img {
    width: 70px;
  }

  /* Footer en móvil */
  .footer {
    flex-direction: column !important;
    background: #0e5f6e;
    padding: 30px 20px;
    border-top: 1px solid rgba(255,255,255,0.2);
  }

  .footer-socials {
    order: 1; /* Iconos arriba */
    margin-bottom: 20px;
  }

  .footer-copy {
    order: 2; /* Texto abajo */
    font-size: 13px;
    opacity: 0.8;
  }

  
}


`]
})
export class JoinComponent {

  step = 1
  selectedPet: string | null = null

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

  next(){
    this.step++
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
  
  }

}