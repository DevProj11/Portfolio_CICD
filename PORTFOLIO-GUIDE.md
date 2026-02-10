# Portfolio Customization Guide

Welcome to your interactive portfolio! This guide will help you replace all placeholder content with your personal information.

## Quick Start

All placeholders are clearly marked with square brackets `[like this]` throughout the code. Simply search for `[` in the `src/App.tsx` file to find all places where you need to add your information.

## Where to Add Your Information

### 1. **Personal Details** (Top of page & throughout)
- `[Your Name]` - Your full name
- `[Your Professional Title]` - e.g., "Full-Stack Developer", "Software Engineer", "Frontend Developer"
- `[Brief tagline about yourself]` - A one-line description of what you do

### 2. **Social Links** (Hero section & Contact section)
Replace the `#` in href attributes with your actual links:
- GitHub: `https://github.com/yourusername`
- LinkedIn: `https://linkedin.com/in/yourprofile`
- Email: `mailto:your.email@example.com`

### 3. **About Section** (`src/App.tsx` lines 195-203)
Replace the three paragraph placeholders with:
- Paragraph 1: Introduction about yourself, background, what drives you
- Paragraph 2: Professional journey and approach to technology
- Paragraph 3: Current focus and what you're looking for

**Quick Facts** (lines 207-235):
- `[Your City, Country]` - Your location
- `[X] Years` - Years of experience
- `[Your Degree/Certification]` - Education details
- `[Open to opportunities / Currently employed]` - Current availability

### 4. **Skills Section** (lines 37-42)

Update the skills arrays with your actual skills:

```typescript
const skills = [
  { category: "Frontend", items: ["Your", "Frontend", "Skills"] },
  { category: "Backend", items: ["Your", "Backend", "Skills"] },
  { category: "Tools", items: ["Your", "Tools"] },
  { category: "Soft Skills", items: ["Your", "Soft", "Skills"] }
];
```

### 5. **Work Experience** (lines 44-66)

Replace the experience objects with your actual work history:

```typescript
{
  title: "Your Job Title",
  company: "Company Name",
  period: "Jan 2020 - Present",
  description: "Describe your role and impact...",
  achievements: [
    "Key achievement or responsibility #1",
    "Key achievement or responsibility #2",
    "Key achievement or responsibility #3"
  ]
}
```

Add or remove experience entries as needed!

### 6. **Projects Section** (lines 68-90)

Update with your actual projects:

```typescript
{
  title: "Project Name",
  description: "What the project does and the problem it solves...",
  tech: ["Tech1", "Tech2", "Tech3"],
  link: "https://project-demo-url.com",
  github: "https://github.com/yourusername/project"
}
```

Add or remove project entries as needed!

### 7. **Contact Section** (lines 359-421)
- `[Add a call-to-action message]` - Message about being open to opportunities
- `[your.email@example.com]` - Your email address
- `[linkedin.com/in/yourprofile]` - Your LinkedIn URL
- `[github.com/yourusername]` - Your GitHub username
- `[Your City, Country]` - Your location
- `[link-to-your-resume.pdf]` - Link to your resume PDF

### 8. **Page Metadata** (`index.html` lines 7-15)
- Replace `[Your Name]` in the title tags
- Update meta descriptions with your personal information

## Tips for Adding Resume Content

When you're ready to add your full resume content:

1. **Work backwards** - Start with your most recent position
2. **Be specific** - Use numbers and metrics where possible (e.g., "Improved performance by 40%")
3. **Use action verbs** - Led, Built, Designed, Implemented, Optimized
4. **Focus on impact** - What difference did you make?
5. **Keep it scannable** - Use bullet points for achievements

## Design Features

Your portfolio includes:
- Smooth scrolling navigation
- Active section highlighting in nav
- Hover effects and transitions
- Mobile-responsive design
- Dark theme with cyan accents
- Interactive elements

## Color Scheme

The portfolio uses a professional dark theme with:
- Primary: Slate/Gray (`slate-900`, `slate-800`, `slate-700`)
- Accent: Cyan (`cyan-400`, `cyan-500`)
- Background: Gradient from slate tones
- Text: White and gray tones for hierarchy

## Need to Change Colors?

Search for these colors in `src/App.tsx` and replace:
- `cyan-400` / `cyan-500` - Main accent color
- `slate-900` / `slate-800` - Background colors
- `slate-700` - Border colors

## Adding More Sections

To add a new section:
1. Add the section ID to the navigation array (line 106, 131)
2. Create a new `<section id="new-section">` following the existing pattern
3. Update the `sections` array in the scroll handler (line 13)

## Questions?

Simply search for `[` in your code editor to find any remaining placeholders!

Good luck with your portfolio!
