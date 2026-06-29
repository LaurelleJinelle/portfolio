export const profile = {
  name: "Laurelle Jinelle Nformi",
  roles: [
    "Reinforcement Learning",
    "LLM Fine-Tuning",
    "Computer Vision (CNN)",
    "Time-Series Forecasting",
    "MLOps",
  ],
  location: "Kigali, Rwanda",
  email: "j.nformi1@alustudent.com",
  github: "https://github.com/LaurelleJinelle",
  linkedin: "https://www.linkedin.com/in/laurelle-jinelle-nformi/",
  blurb:
    "Software engineering student building machine-learning systems for problems that matter. I like the whole arc: from a custom training environment to a deployed, load-tested API someone can actually use.",
};

// Email controls open the visitor's Gmail compose in a new tab, pre-addressed to LJ.
const EMAIL_SUBJECT = "Hello LJ";
export const gmailComposeUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=" +
  encodeURIComponent(profile.email) +
  "&su=" +
  encodeURIComponent(EMAIL_SUBJECT);

export const projects = [
  {
    id: "01",
    title: "Adaptive Smart Grid Energy Allocation",
    domain: "Reinforcement Learning",
    metric: "PPO agent",
    metricLabel: "5 NERC service bands",
    summary:
      "A PPO agent that decides how to ration limited electricity across IKEDC distribution feeders by service band (A–E), trained on real Q4 2022 Nigerian regulatory data inside a custom Gymnasium environment and reward function.",
    detail:
      "Benchmarked against four heuristic baselines, hardened with domain randomization and multi-seed training, and wrapped in a FastAPI + React dashboard for live policy inspection.",
    stack: ["Python", "Stable-Baselines3", "Gymnasium", "FastAPI", "React"],
    links: [{ label: "GitHub", url: "https://github.com/LaurelleJinelle/Mission-capstone-" }],
  },
  {
    id: "02",
    title: "Medical Emergency Assistant",
    domain: "LLM · NLP",
    metric: "TinyLlama-1.1B",
    metricLabel: "supervised fine-tuning",
    summary:
      "Fine-tuned TinyLlama-1.1B to give structured, safety-aware guidance for medical emergencies, using supervised fine-tuning on a first-responder triage dataset.",
    detail:
      "Evaluated with ROUGE and BLEU, then served through an interactive Gradio chat interface for real-time inference on modest hardware.",
    stack: ["Hugging Face", "PyTorch", "Transformers", "Gradio"],
    links: [
      { label: "GitHub", url: "https://github.com/LaurelleJinelle/Medical-Emergency-Assistant" },
      { label: "Demo", url: "https://drive.google.com/file/d/1gy1Ag7xMAy6F2pj6nyP_bflXS8V1n6qm/view" },
    ],
  },
  {
    id: "03",
    title: "Pneumonia Detection — End-to-End MLOps",
    domain: "Computer Vision · MLOps",
    metric: "~81%",
    metricLabel: "fine-tuned accuracy",
    summary:
      "A MobileNetV2 transfer-learning classifier for chest X-rays, taken from ~74% frozen to ~81% fine-tuned, wrapped in a full retraining loop: upload new data, retrain, hot-reload the model.",
    detail:
      "Shipped as a FastAPI inference API on Render plus a Streamlit UI, load-tested with Locust, with uptime, prediction-count and model-version monitoring.",
    stack: ["TensorFlow", "MobileNetV2", "FastAPI", "Streamlit", "Docker", "Locust"],
    links: [
      { label: "GitHub", url: "https://github.com/LaurelleJinelle/Pnuemonia-Detection-Model" },
      { label: "Live API", url: "https://pnuemonia-detection-model.onrender.com" },
      { label: "Live UI", url: "https://pnuemonia-detection-model.streamlit.app/" },
    ],
  },
  {
    id: "04",
    title: "Air Quality Forecasting",
    domain: "Time-Series Deep Learning",
    metric: "LSTM",
    metricLabel: "15 experiments",
    summary:
      "Forecasting Beijing PM2.5 concentrations with stacked LSTM networks, across 15 controlled experiments varying depth, sequence window, dropout and optimizer.",
    detail:
      "Systematic tuning drove validation RMSE below the competition target; predictions were submitted to the Kaggle leaderboard.",
    stack: ["TensorFlow", "Keras", "Pandas", "NumPy"],
    links: [{ label: "GitHub", url: "https://github.com/LaurelleJinelle/Time-series-forecasting" }],
  },
  {
    id: "05",
    title: "Human Activity Recognition",
    domain: "Probabilistic ML",
    metric: "78%",
    metricLabel: "Gaussian HMM accuracy",
    summary:
      "A Gaussian Hidden Markov Model with Viterbi decoding that classifies human activity from 32,000+ smartphone accelerometer and gyroscope readings.",
    detail:
      "Engineered 83 time- and frequency-domain features (FFT, spectral entropy, statistical moments) from sliding sensor windows; trained with Baum-Welch.",
    stack: ["hmmlearn", "scikit-learn", "SciPy", "NumPy"],
    links: [
      { label: "GitHub", url: "https://github.com/LaurelleJinelle/Hidden-Markov-Models---ML-Techniques-II" },
    ],
  },
  {
    id: "06",
    title: "Student Performance Prediction",
    domain: "Classical vs Deep Learning",
    metric: "RF · XGB · NN",
    metricLabel: "head-to-head",
    summary:
      "A study pitting Logistic Regression, Random Forest and XGBoost against neural networks (Keras & PyTorch) to predict academic outcomes from student data.",
    detail:
      "Handled class imbalance with SMOTE and tuned models with RandomizedSearchCV to compare where classical methods still beat deep learning.",
    stack: ["scikit-learn", "XGBoost", "TensorFlow", "PyTorch"],
    links: [{ label: "GitHub", url: "https://github.com/LaurelleJinelle/Intro-to-ML-Summative" }],
  },
];

export const skills = [
  { group: "Machine Learning", items: ["PyTorch", "TensorFlow / Keras", "scikit-learn", "XGBoost", "Hugging Face Transformers", "Stable-Baselines3", "Gymnasium", "hmmlearn"] },
  { group: "Engineering", items: ["Python", "JavaScript", "TypeScript", "React", "Node.js", "FastAPI", "Streamlit", "Gradio"] },
  { group: "MLOps & Tooling", items: ["Docker", "Locust", "Render", "Vercel", "Git", "Jupyter / Colab", "Pandas", "NumPy"] },
];

export const experience = [
  {
    role: "Web Developer",
    org: "Hakeela",
    place: "Remote",
    period: "Sep 2025 — Mar 2026",
    note: "Built and maintained a full-stack app: Node.js REST APIs, a MongoDB data layer, and responsive React interfaces, owning features from design to deployment.",
  },
  {
    role: "Front-End Developer Intern",
    org: "Beam Social Hub",
    place: "Remote",
    period: "Jan 2025 — Apr 2025",
    note: "Worked with a backend developer to improve user experience using React and TypeScript.",
  },
  {
    role: "Front-End Web Developer",
    org: "New Media Technologies — Christ Embassy",
    place: "Remote",
    period: "Jun 2024 — Present",
    note: "Designed the UI/UX and built the site front-end in HTML, CSS and JavaScript with full cross-device functionality.",
  },
  {
    role: "Cyber Security Intern",
    org: "FiberTrain",
    place: "Lagos, Nigeria",
    period: "Aug 2024 — Oct 2024",
    note: "Studied networking, server administration and cloud computing alongside security professionals on real client problems.",
  },
];

export const education = {
  degree: "B.Eng (Hons) Software Engineering",
  school: "African Leadership University",
  period: "2023 — 2027",
};
