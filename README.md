# 🧱 RegexBlocks

**RegexBlocks** is a visual, drag-and-drop regex builder that lets you create regular expressions like LEGO blocks — no memorization, no syntax headaches.

Instead of writing complex regex by hand, you drag blocks, snap them together on a canvas, and instantly get the generated regex code.

---

## ✨ Why RegexBlocks?

- 🧠 **Beginner-friendly regex learning**
- 🧱 **Visual, LEGO-style building**
- 🎨 **Color-coded blocks by category**
- ⚡ **Live regex generation**
- 📋 **One-click copy**

**Perfect for:**
- Developers who hate remembering regex syntax
- Beginners learning regex
- Quick prototyping & testing

---

## 🖥️ How It Works

1. **Choose** a regex block from the sidebar.
2. **Drag** it onto the canvas.
3. **Arrange** blocks from left → right.
4. **Regex is generated** automatically.
5. **Copy** and use anywhere.

---

## 🧩 Regex Blocks Explained (Sidebar Guide)

Each block represents a real regex concept, explained in plain English.

### 🔵 Character Blocks
*These match single characters.*

| Block | Meaning | Example |
| :--- | :--- | :--- |
| `\d` | Any digit (0–9) | `5`, `9` |
| `\w` | Letter, number, or `_` | `a`, `Z`, `_` |
| `\s` | Whitespace | space, tab |
| `.` | Any character | `a`, `@`, `9` |
| `\D` | Not a digit | `a`, `#` |
| `\W` | Not a word character | `@`, `!` |
| `\S` | Not whitespace | `a`, `5` |

### 🟣 Quantifier Blocks
*These describe how many times something should appear.*

| Block | Meaning | Example |
| :--- | :--- | :--- |
| `*` | Zero or more | `aaa`, empty |
| `+` | One or more | `a`, `aaa` |
| `?` | Optional (0 or 1) | `a` or empty |
| `{n}` | Exactly n times | `\d{3}` → `123` |
| `{n,m}` | Between n and m times | `\w{2,4}` |

### 🟢 Anchor Blocks
*These control position, not characters.*

| Block | Meaning |
| :--- | :--- |
| `^` | Start of string |
| `$` | End of string |
| `\b` | Word boundary |

### 🟠 Group Blocks
*These help combine or organize patterns.*

| Block | Meaning |
| :--- | :--- |
| `( )` | Capturing group |
| `(?: )` | Non-capturing group |

### 🟡 Character Set Blocks
*These match one character from a set.*

| Block | Meaning |
| :--- | :--- |
| `[abc]` | `a` OR `b` OR `c` |
| `[^abc]` | Anything except `a`, `b`, `c` |
| `[a-z]` | Any lowercase letter |

### 🌸 Literal Block

| Block | Meaning | Example |
| :--- | :--- | :--- |
| `text` | Exact text you type | `hello` matches only "hello" |

---

## 🧪 5 Practical Regex Examples

### 1️⃣ Match a 3-digit number
**Blocks:** `\d` → `{3}`
**Regex:** `\d{3}`
**Matches:** `123`, `999`

### 2️⃣ Match a username (letters + numbers)
**Blocks:** `\w` → `+`
**Regex:** `\w+`
**Matches:** `john123`, `user_1`

### 3️⃣ Match a phone number like 123-456
**Blocks:** `\d` → `{3}` → `-` → `\d` → `{3}`
**Regex:** `\d{3}-\d{3}`

### 4️⃣ Match text that starts with a digit and ends with a letter
**Blocks:** `^` → `\d` → `.` → `*` → `\w` → `$`
**Regex:** `^\d.*\w$`

### 5️⃣ Match either cat or dog
**Blocks:** `(` → `cat` → `|` → `dog` → `)`
**Regex:** `(cat|dog)`

---

## 🚀 Tech Stack

- ⚛️ **React (Vite)**
- 🎨 **Tailwind CSS**
- 🧠 **TypeScript**
- 🧲 **Native Drag & Drop**

---

## 🔮 Planned Features

- [ ] Editable blocks (`{n}`, `{n,m}`, literals)
- [ ] Drag to reorder blocks
- [ ] Nested groups
- [ ] Regex tester with live matches
- [ ] Export / share regex

---

## 🏁 Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   pnpm dev
   ```

---

> **RegexBlocks** turns confusing symbols into visual building blocks — simple, intuitive, and powerful.
