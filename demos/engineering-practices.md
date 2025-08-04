# Engineering Practices Demo

Welcome to the GitHub Copilot engineering practices demo! Here we're going to get comfortable with the professional tools and features in GitHub Copilot. We'll start in the VS Code IDE and then move to github.com for additional collaboration features.

## What You'll Learn
By the end of this demo, you will:
- [ ] Understand how to debug and inspect Copilot's decision-making process
- [ ] Know how to share chat conversations with team members
- [ ] Be familiar with system prompts and their importance
- [ ] Understand collaboration features on GitHub.com

**Estimated Time:** 10-15 minutes

## 🔧 IDE Features for Engineering Teams

GitHub Copilot has many features designed to help engineering teams understand AI decision-making and collaborate effectively on code generation.

### 🐛 Step 1: Inspect Copilot's Decision Process

**Why this matters:** Understanding how Copilot makes suggestions helps you write better prompts and trust the AI's recommendations.

#### Method 1: Using Keyboard Shortcut
1. Press `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (Mac)
2. Type "Copilot Chat Debug" 
3. Select **"Copilot Chat Debug: Focus on Copilot Chat Debug View"**

#### Method 2: Using the Menu
1. Go to **View** → **Command Palette**
2. Type "Copilot Chat Debug"
3. Select **"Copilot Chat Debug: Focus on Copilot Chat Debug View"**

#### What You'll See
Once the debug panel opens, you can explore:
- **Prompts:** The actual prompts sent to the AI
- **System Prompts:** Background instructions given to Copilot
- **Metadata:** Context information and settings
- **Response Details:** How Copilot formulated its suggestions

**💡 Pro Tip:** Use this when Copilot's suggestions seem unexpected - you can see exactly what context it's using!

---

### 💬 Step 2: Share Chat Conversations with Your Team

**Why this matters:** Sharing successful prompts and conversations helps your team learn effective AI collaboration patterns.

#### Export a Chat Conversation

**Method 1: Keyboard Shortcut**
1. Press `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (Mac)
2. Type "Chat: Export"
3. Select **"Chat: Export Chat..."**

**Method 2: Menu Navigation**
1. Go to **View** → **Command Palette**
2. Type "Chat: Export"
3. Select **"Chat: Export Chat..."**

**What happens:** This creates a file containing your entire chat history that you can share with teammates.

#### Import a Chat Conversation

**Method 1: Keyboard Shortcut**
1. Press `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (Mac)
2. Type "Chat: Import"
3. Select **"Chat: Import Chat..."**

**Method 2: Menu Navigation**
1. Go to **View** → **Command Palette**
2. Type "Chat: Import"
3. Select **"Chat: Import Chat..."**

**Use case:** Import conversations shared by teammates to see their successful prompting strategies.

---

## 🌐 GitHub.com Collaboration Features

GitHub.com provides additional tools for managing Copilot at the organizational level and sharing knowledge across teams.

### 🎛️ Step 3: Explore System Prompts

**Why this matters:** System prompts define how Copilot behaves across your organization. Understanding these helps ensure consistent, high-quality code generation that follows your team's standards.

#### Instructions:
1. **Navigate to GitHub Copilot:** Go to [https://github.com/copilot](https://github.com/copilot)
2. **Access settings:** Click the **[...]** menu button in the top-right corner
3. **Open system prompts:** Select **"System prompt"**

#### What to Explore:
- **Available Prompts:** Browse the library of pre-built system prompts
- **Personal instructions:** See if your organization has created custom instructions

**🔍 Things to Look For:**
- How do system prompts influence code style?
- What coding standards are enforced?
- How do prompts vary by programming language?

---

### 🤝 Step 4: Manage Shared Conversations

**Why this matters:** Shared conversations create a knowledge base of effective AI interactions that your entire team can learn from and build upon.

#### Instructions:
1. **Navigate to GitHub Copilot:** Go to [https://github.com/copilot](https://github.com/copilot)
2. **Access sharing options:** Click the **[...]** menu button in the top-right corner
3. **Open conversation management:** Select **"Manage shared conversations"**

#### What to Explore:
- **Shared Conversations:** Browse conversations shared by your team
- **Categories:** See how conversations are organized by topic
- **Usage Patterns:** Notice which types of conversations are shared most often

**💼 Best Practices for Sharing:**
- Share conversations that solved complex problems
- Include context about when and why certain approaches work
- Tag conversations with relevant keywords for easy discovery

## 🚀 What's Next?

Congratulations! Second demo has been complete.

👉 **[Start Customize Copilot Demo ](./customize-copilot.md)**
