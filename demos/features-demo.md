# Features Demo

Welcome to this repository! You're probably wondering what it is and how it works. We will be working with this repository for the duration of this training, so it's important to find out what it's doing now!

Let's start off by learning the different modes.

## What You'll Learn
By the end of this demo, you will:
- [ ] Understand GitHub Copilot's core features
- [ ] Know how to use chat participants and slash commands
- [ ] Be able to generate code with AI assistance
- [ ] Know how to review and commit AI-generated code

**Estimated Time:** 15-20 minutes


## Features: Learn about the project

Mode: Ask

For this first demo, lets learn about the different features available in Ask mode. Specifically, chat participants, chat variables, and slash commands.

## 🎯 Step 1: Discover Available Features

**Goal:** Learn what GitHub Copilot can do for you in Ask mode.

**Action:** Type the following command in the Copilot chat:
Prompt
```
/help
```

**Expected Result:** You'll see a list of available commands and features.

---

## 📚 Step 2: Learn About the Project

### 2.1 Get Project Overview
**Prompt:**
```
@workspace Give me a summary of the project and give an overview of the most impactful files. 
```

**Follow-up Action:** 
- Select the first page in the "Most Impactful Files" 
- Highlight the first section

### 2.2 Explain Selected Code
**Prompt:**
```
@workspace /explain 
```

**What this does:** Copilot will explain the highlighted code section in detail.

### 2.3 Get Improvement Suggestions
**Prompt:**
```
Tell me about the improvements that can be made in this repo.
```

**💡 Pro Tip:** Copilot can help not only with learning but also with planning and ideas!

## 💻 Step 3: Generate Code with Copilot code completions

### Instructions:
1. **Navigate to file:** Open [`src/app/layout.tsx`](src/app/layout.tsx)
2. **Find location:** Go to line 51
3. **Add space:** Press `Enter` once to create a new line
4. **Add comment:** Type the following comment:

```tsx
{/* Create a footer for this section. It should contain the logo and copyright information. */}
```

5. **Wait for suggestion:** Copilot will suggest code automatically
6. **Accept suggestion:** Press `Tab` to accept or `Esc` to dismiss

## 📝 Step 4: Review and Commit Your Changes

### Option A: AI-Powered Review (Premium Feature)
If you have premium access:

1. **Select generated code:** Highlight the footer code that was created
2. **Open Copilot menu:** Right-click → Select "Copilot"
3. **Get review:** Choose "Review and Comment"
4. **Process feedback:** Review suggestions and accept/discard as needed

### Option B: Manual Review (Free Alternative)
If you don't have premium access:

1. **Read the code:** Review what was generated
2. **Check functionality:** Does it match the requirements?
3. **Verify style:** Does it follow the project's coding standards?

### Commit Your Changes
1. **Open Source Control:** Click the Source Control icon in the left sidebar
2. **Generate commit message:** Hover over the commit message box → Click "Generate Commit Message with Copilot"
3. **Review and edit:** Modify the generated message if needed
4. **Commit:** Click "Commit" then "Sync Changes" to push

**🎉 Success indicator:** You should see your changes in the git history!

## ✅ Completion Checklist

Mark off each item as you complete it:

- [ ] Used `/help` command successfully
- [ ] Got project summary with `@workspace`
- [ ] Explained code with `@workspace /explain`
- [ ] Generated footer code with AI
- [ ] Reviewed the generated code
- [ ] Committed changes to git

## 🚀 What's Next?

Congratulations! You've completed your first GitHub Copilot demo. 

👉 **[Start Engineering Practices Demo ](./engineering-practices.md)**
