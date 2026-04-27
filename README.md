# Real Estate Analyzer 🏠

أداة تحليل سوق العقارات المتقدمة - Advanced Real Estate Market Analysis Tool

## المميزات الرئيسية | Key Features

✨ **تحليل البيانات العقارية** - Real Estate Data Analysis
📊 **Dashboard تفاعلية** - Interactive Analytics Dashboard
🤖 **التنبؤ بالأسعار** - Price Prediction using ML
📍 **تحليل جغرافي** - Geographic Analysis & Heatmaps
📈 **اتجاهات السوق** - Market Trends & Insights
💼 **إدارة العقارات** - Property Portfolio Management

## التقنيات المستخدمة | Tech Stack

### Backend
- **FastAPI** - Python Web Framework
- **PostgreSQL** - Database
- **SQLAlchemy** - ORM
- **Pandas & NumPy** - Data Analysis
- **Scikit-learn** - Machine Learning
- **Docker** - Containerization

### Frontend
- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Chart.js/Plotly** - Data Visualization
- **Redux Toolkit** - State Management

### DevOps
- **Docker Compose** - Local Development
- **GitHub Actions** - CI/CD Pipeline
- **PostgreSQL** - Database

## البنية | Project Structure

```
real-estate-analyzer/
├── backend/                 # FastAPI Backend
│   ├── app/
│   │   ├── main.py
│   │   ├── models/          # Database Models
│   │   ├── schemas/         # Pydantic Schemas
│   │   ├── api/             # API Routes
│   │   ├── services/        # Business Logic
│   │   └── ml/              # Machine Learning
│   ├── requirements.txt
│   ├── Dockerfile
│   └── .env.example
├── frontend/                # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── store/
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## التثبيت السريع | Quick Start

### باستخدام Docker
```bash
# Clone
git clone https://github.com/omarzayd/real-estate-analyzer.git
cd real-estate-analyzer

# Run
docker-compose up -d

# Access
# Backend: http://localhost:8000
# Frontend: http://localhost:3000
# Docs: http://localhost:8000/docs
```

### التطوير المحلي | Local Development

**Backend:**
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

**Frontend:**
```bash
cd frontend
npm install
npm start
```

## API Documentation

بعد تشغيل Backend، زر: `http://localhost:8000/docs`

## المساهمة | Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## الترخيص | License

MIT License

## التواصل | Contact

👤 **Omar Zayd**
- GitHub: [@omarzayd](https://github.com/omarzayd)

---

**Built with ❤️ for Real Estate Professionals**
