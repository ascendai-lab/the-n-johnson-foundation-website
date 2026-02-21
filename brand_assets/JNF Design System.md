# **The N Johnson Foundation (JNF) \- Design System**

## **1\. Typography**

The logo uses a very friendly, rounded sans-serif font. To match this vibe while ensuring readability, here is a recommended font pairing:

* **Heading Font: Poppins Bold**  
  * *Why:* Poppins offers a bold, modern, and highly legible appearance, providing strong emphasis for headlines.  
* **Body Font: Figtree**  
  * *Why:* Figtree is a clean, highly legible font that pairs excellently with Poppins for long paragraphs.

### **Font Scale & Sizing**

*Base size: 16px (1rem)*

* **Heading 1 (Hero sections, Page titles):** 2.5rem (40px), Bold (700)  
* **Heading 2 (Section titles):** 2rem (32px), Semi-Bold (600)  
* **Heading 3 (Card titles, sub-sections):** 1.5rem (24px), Semi-Bold (600)  
* **Body Text (Paragraphs):** 1rem (16px), Regular (400), Line-height: 1.6  
* **Small Text (Footers, captions):** 0.875rem (14px), Regular (400)

## **2\. Color Palette**

Based on the exact hues in your logo, here is an expanded color palette tailored for web and print design.

### **Brand Colors (From Logo)**

* 🟢 **JNF Teal:** \#2EA99B (Used in the 'J') \- Represents growth, healing, and harmony.  
* 🔵 **JNF Slate Blue:** \#668A9F (Used in the text and figure icon) \- Represents trust, stability, and professionalism.  
* 🟣 **JNF Purple:** \#7E62A7 (Used in the 'F') \- Represents compassion, dignity, and ambition.

### **Neutral Colors (For Text and Backgrounds)**

* **Text Primary (Very Dark Slate):** \#334155 (Softer than pure black, easier on the eyes)  
* **Text Secondary (Muted Gray):** \#64748B (For dates, captions, subtle text)  
* **Background Base (Off-White):** \#F8FAFC (A very light, cool grey/blue tint to make white cards pop)  
* **Pure White:** \#FFFFFF (For cards and main content areas)

## **3\. UI Component Applications**

### **Buttons**

Buttons should be pill-shaped or have heavily rounded corners (e.g., border-radius: 9999px or 24px) to match the roundness of the logo.

* **Primary Button (Call to Action / Donate):** \* Background: **JNF Teal** (\#2EA99B)  
  * Text: White  
  * Hover state: A slightly darker teal (\#248A7E)  
  * *Note:* Teal is an excellent, high-converting color for "Donate" or "Volunteer" buttons.  
* **Secondary Button (Learn More / Read):**  
  * Background: Transparent  
  * Border: 2px solid **JNF Slate Blue** (\#668A9F)  
  * Text: **JNF Slate Blue** (\#668A9F)  
  * Hover state: Background filled with very light blue (\#EEF2F6)

### **Cards (For Events, Blog Posts, Team Members)**

* **Background:** Pure White (\#FFFFFF)  
* **Border Radius:** 16px (Keep them friendly and rounded)  
* **Shadow:** A very soft, diffuse drop shadow (e.g., box-shadow: 0 4px 20px rgba(102, 138, 159, 0.1))  
* **Top Accent:** You could use a 4px colored border at the very top of your cards using the JNF Purple (\#7E62A7) to tie the brand colors together.

### **Background Colors**

* **Main Website Background:** \#F8FAFC (Light Slate off-white)  
* **Section Alternation:** When alternating sections on a page (e.g., "About Us" then "Our Impact"), use Pure White (\#FFFFFF) for one, and a very pale tint of your teal (\#EAF6F5) or slate (\#EEF3F6) for the next to create visual separation without harsh lines.

## **4\. Quick CSS Variables Reference**

If you are passing this to a web developer, they can use these exact variables:

:root {  
  /\* Brand Colors \*/  
  \--color-brand-teal: \#2EA99B;  
  \--color-brand-slate: \#668A9F;  
  \--color-brand-purple: \#7E62A7;

  /\* Neutrals \*/  
  \--color-text-main: \#334155;  
  \--color-text-muted: \#64748B;  
  \--color-bg-main: \#F8FAFC;  
  \--color-bg-card: \#FFFFFF;

  /\* Typography \*/  
  \--font-heading: 'Poppins', sans-serif;  
  \--font-body: 'Figtree', sans-serif;

  /\* Border Radius \*/  
  \--radius-card: 16px;  
  \--radius-button: 9999px;  
}  
