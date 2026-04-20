import { css } from 'lit';

export const darkMode = css`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

        :host {
            display: block;
            width: 340px;
            font-family: 'DM Sans', sans-serif;
            background: #0f0f13;
            padding: 24px;
            border-radius: 20px;
            box-shadow: 0 0 0 1px rgba(255,255,255,0.06), 0 24px 48px rgba(0,0,0,0.5);
            color: #e8e8f0;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .nav-btn {
            width: 32px;
            height: 32px;
            border: none;
            background: rgba(255,255,255,0.06);
            color: #e8e8f0;
            border-radius: 8px;
            cursor: pointer;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.15s, transform 0.1s;
        }

        .nav-btn:hover {
            background: rgba(255,255,255,0.12);
            transform: scale(1.08);
        }

        .nav-btn:active { transform: scale(0.95); }

        .selectors {
            display: flex;
            gap: 6px;
        }

        select {
            border: none;
            background: rgba(255,255,255,0.06);
            padding: 6px 10px;
            border-radius: 8px;
            font-family: 'DM Sans', sans-serif;
            font-weight: 600;
            font-size: 0.9rem;
            color: #e8e8f0;
            cursor: pointer;
            outline: none;
            transition: background 0.15s;
            appearance: none;
            -webkit-appearance: none;
        }

        select:hover { background: rgba(255,255,255,0.12); }

        option {
            background: #1a1a24;
            color: #e8e8f0;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 4px;
        }

        .weekday {
            text-align: center;
            font-size: 0.7rem;
            font-weight: 600;
            color: rgba(255,255,255,0.25);
            letter-spacing: 0.05em;
            text-transform: uppercase;
            padding-bottom: 8px;
        }

        .day {
            display: flex;
            justify-content: center;
            align-items: center;
            aspect-ratio: 1;
            border-radius: 8px;
            cursor: pointer;
            font-size: 0.85rem;
            font-weight: 400;
            color: rgba(255,255,255,0.7);
            transition: background 0.15s, color 0.15s, transform 0.1s;
        }

        .day:hover {
            background: rgba(255,255,255,0.08);
            color: #fff;
            transform: scale(1.1);
        }

        .day:active { transform: scale(0.95); }

        .day.empty {
            cursor: default;
            pointer-events: none;
            background: transparent;
        }

        .day.today {
            color: #cb94eb;
            font-weight: 700;
            position: relative;
        }

        .day.today::after {
            content: '';
            position: absolute;
            bottom: 4px;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: #cb94eb;
        }

        .day.selected {
            background: linear-gradient(135deg, #cb94eb, #7f3ca5) !important;
            color: #fff !important;
            font-weight: 600;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(244, 162, 97, 0.35);
            transform: scale(1.05);
        }

        .day.today.selected::after { display: none; }

        .today-container {
            margin-top: 16px;
            display: flex;
            justify-content: center;
        }

        .today-btn {
            border: none;
            background: rgba(255,255,255,0.06);
            color: rgba(255,255,255,0.5);
            padding: 7px 20px;
            border-radius: 8px;
            font-family: 'DM Sans', sans-serif;
            font-size: 0.8rem;
            font-weight: 600;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            cursor: pointer;
            transition: background 0.15s, color 0.15s;
        }

        .today-btn:hover {
            background: rgba(244, 162, 97, 0.15);
            color: #cb94eb;
        }
`;