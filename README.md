# Finance Dashboard

A personal finance dashboard built with React. Track income, expenses, and spending patterns with role-based access control.

![Dashboard Overview](./finance%20dashboard//src/assets/screenshots/dashboard.png)

---

## Setup
```bash
npm install
npm run dev:all
```

> `dev:all` starts both the React app and the json-server backend on port 3001.

---

## Features

- Stats cards — balance, total income, total expense
- Spending by category (pie chart)
- Monthly income vs expense trend (line chart)
- Live transaction table with search, type, and month filters
- Role-based UI — Admin / Viewer
- Dark / light mode toggle

![Transaction Table](./finance%20dashboard/src/assets/screenshots/table.png)

---

## Role-Based UI

Switch roles from the dropdown in the header.

| Role   | Access                              |
|--------|-------------------------------------|
| Viewer | Read-only — sees all data, no edits |
| Admin  | Can delete transactions             |

Role state lives in `FinanceContext` so any component can read it without prop drilling.

---

## State Management

No external library. Everything runs on React Context.

- **`FinanceContext`** — transactions, filter state, role, derived values (balance, totals, filtered list)
- **`ThemeContext`** — dark/light mode

Transactions are fetched once on mount via `useEffect`. Filtering and derived stats are computed directly from state — no redundant `useEffect` chains.