import { LitElement, html, css } from 'lit';
import { darkMode } from './styles/dark.js';

export class CalendarView extends LitElement {
    static properties = {
        currentYear: {type: Number},
        currentMonth: {type: Number},
        selectedDay: { type: Number },
        selectedMonth: { type: Number },
        selectedYear: { type: Number }
    }

    static styles = darkMode;

    constructor(){
        super();
        const today = new Date();
        this.todayDay = today.getDate();
        this.todayMonth = today.getMonth();
        this.todayYear = today.getFullYear();

        this.currentYear = this.todayYear;
        this.currentMonth = this.todayMonth;

        // default selected day is today
        this.selectedDay = this.todayDay;
        this.selectedMonth = this.todayMonth;
        this.selectedYear = this.todayYear;
    }

    _generateGrid(){
        const calendarDays = [];

        const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate(); // number of days in the month = last day of the current month
        let firstDayIndex = new Date(this.currentYear, this.currentMonth, 1).getDay(); // on which weekday lands the 1st of the month
        firstDayIndex = (firstDayIndex === 0) ? 6 : firstDayIndex - 1;

        for(let i = 0; i < firstDayIndex; i++){
            calendarDays.push("");
        }

        for(let i = 1; i <= daysInMonth; i++){
            calendarDays.push(i);
        }

        while(calendarDays.length < 42){
            calendarDays.push("");
        }

        return calendarDays;
    }

    _prevMonth(){
        if(this.currentMonth === 0){
            if(this.currentYear > 2020){
                this.currentMonth = 11;
                this.currentYear--;
            }
        }else{
            this.currentMonth--;
        }
    }

    _nextMonth(){
        if(this.currentMonth === 11){
            if(this.currentYear < 2030){
                this.currentMonth = 0;
                this.currentYear++;
            }
        }else{
            this.currentMonth++;
        }
    }

    _selectDay(day){
        if(day !== ""){
            this.selectedDay = day;
            this.selectedMonth = this.currentMonth;
            this.selectedYear = this.currentYear;
        
            const month = String(this.currentMonth + 1).padStart(2, "0");
            const dayStr = String(day).padStart(2, "0");
            const dateStr = `${this.currentYear}-${month}-${dayStr}`; // "2026-04-21"

            // dispatch custom event
            this.dispatchEvent(new CustomEvent("date-selected", {
                detail: { date: dateStr },
                bubbles: true,
                composed: true
            }));
        }
    }

    _getToday(){
        const today = new Date();
        this.currentMonth = today.getMonth();
        this.currentYear = today.getFullYear();
        this.selectedDay = today.getDate();
        this.selectedMonth = this.currentMonth;
        this.selectedYear = this.currentYear;
    }

  render() {
    const calendarDays = this._generateGrid();
    const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const monthNames = ["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"];

    const years = []
    for(let i = 2020; i <= 2030; i++){
        years.push(i);
    }

    return html`
            <div class="header">
                <button class="nav-btn" 
                        @click="${this._prevMonth}" 
                        ?disabled="${this.currentYear === 2020 && this.currentMonth === 0}"> < </button>

                <div class="selectors">
                    <select .value="${this.currentMonth}" 
                            @change="${(e) => this.currentMonth = Number(e.target.value)}">
                                    ${monthNames.map((name, index) => 
                                        html`<option value="${index}" ?selected="${index === this.currentMonth}">${name}</option>`)}
                    </select>

                    <select .value="${this.currentYear}" 
                            @change="${(e) => this.currentYear = Number(e.target.value)}">
                                    ${years.map(year => html`<option value="${year}" ?selected="${year === this.currentYear}">${year}</option>`)}
                    </select>
                </div>
                
                <button class="nav-btn" @click="${this._nextMonth}"
                        ?disabled="${this.currentYear === 2030 && this.currentMonth === 11}"> > </button>
            </div>

            <div class="grid">
                ${weekdays.map(day => html`<div class="weekday">${day}</div>`)}
                ${calendarDays.map(day => {
                            const isToday = day === this.todayDay 
                                        && this.currentMonth === this.todayMonth 
                                        && this.currentYear === this.todayYear;
                            const isSelected = day === this.selectedDay 
                                            && this.currentMonth === this.selectedMonth 
                                            && this.currentYear === this.selectedYear;
                            return html`
                                <div class="day ${day === '' ? 'empty' : ''} ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}"
                                    @click="${() => this._selectDay(day)}">
                                    ${day}
                                </div>`;
                        })}
            </div>

            <div class="today-container">
                <button class="today-btn" @click="${this._getToday}">Today</button>
            </div>
            `;
  }
}

customElements.define('calendar-view', CalendarView);