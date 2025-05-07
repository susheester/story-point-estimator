# Story Point Estimator 🧠✨

This is a lightweight tool that estimates story points based on a Jira story description using simple heuristic logic — no AI required.

Built with just HTML + JavaScript, it's fast, portable, and perfect for grooming sessions or async backlog refinement.

## 🔗 Live Demo

Try it here: [https://susheester.github.io/story-point-estimator](https://susheester.github.io/story-point-estimator)

## 🛠 How It Works

- Paste a Jira story into the text box
- Click **Estimate**
- The tool analyzes keywords like `integration`, `database`, `external`, and assigns a point value from:  
  **1, 2, 3, 5, or 8**
- You get both a point estimate **and** a rationale

## ✅ Example

**Input:**
As a data analyst, I want to create a Power BI dashboard by integrating data from an external API. This requires building a new database schema and coordinating with other teams.

**Output:**

> Estimated Points: 5  
> Rationale: Includes integration, data work, and team coordination

## 📁 Files

- `index.html`: The main UI
- `app.js`: Contains the logic for keyword detection and scoring

## 🚀 Future Ideas

- GPT-powered estimation mode
- Export to Jira/CSV
- "Spike/Bug" detection

---

Feel free to fork or improve it! PRs welcome.

