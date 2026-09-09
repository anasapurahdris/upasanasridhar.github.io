# Goal

Integrate selected coursework projects, technical investigations, and exploratory essays into the existing **Writing** page.

Do not create a separate coursework or projects page.

The purpose is to make the Writing page a broader record of things I have written or explored, while using the existing tag system to distinguish technical, humanities, research-adjacent, and course-based work.

# Core Design Principle

Treat all entries as part of one shared writing collection.

Do not visually separate:
- technical projects
- course essays
- exploratory writing
- research notes

Instead, use tags and filters so visitors can browse the collection according to topic or type.

The variety should feel intentional rather than random.

# Writing Page Intro

Update or add a short introduction at the top of the Writing page:

> This page collects essays, course projects, technical investigations, and other writing that sit alongside my primary research. Some are exploratory, some are interdisciplinary, and some are simply questions I found interesting enough to pursue.

Keep this short and visually secondary to the page title.

# Entries to Add

## Graph Analytics for Hardware-Aware Microservice Colocation

Description:

> Explored graph-based repartitioning of microservice call graphs to co-locate hot request paths and reduce high-overhead RPC communication through hardware-aware service placement.

Suggested tags:
- Systems
- Graph Analytics
- Hardware–Software Co-design
- Course Project

## Processing-in-Memory Architectures for Sparse Graph Workloads

Description:

> Studied the architecture/workload fit of processing-in-memory systems for sparse graph analytics, focusing on irregular memory access, limited locality, and workload structure.

Suggested tags:
- Computer Architecture
- Graph Analytics
- Processing-in-Memory
- Course Project

## Computer Architects and System-Level Programmers: A Historical Review

Description:

> Reviewed the evolving relationship between computer architects and system-level programmers, focusing on how abstraction boundaries, hardware visibility, and software responsibility have shaped performance engineering.

Suggested tags:
- Computer Architecture
- Systems
- History of Computing
- Performance Engineering
- Course Essay

## A Call to Action for a Practical Quantum Internet

Description:

> Developed a position-style project examining the gap between theoretical quantum-networking protocols and the systems infrastructure required to build a practical quantum internet.

Suggested tags:
- Networking
- Systems
- Quantum Computing
- Position Essay
- Course Project

## The Silk Road Symbol Exchange

Description:

> An essay examining the role of the Silk Routes in the exchange and transformation of artistic symbols and visual culture across Eurasia.

Suggested tags:
- Art History
- Cultural Exchange
- Silk Road
- Course Essay

## Cli-Fi in the Visual Arts

Description:

> An essay exploring climate-centered science fiction in visual culture, from dystopian futures to more hopeful traditions such as solarpunk.

Suggested tags:
- Climate Fiction
- Visual Culture
- Futurism
- Course Essay

# Tag and Filter System

Use the existing tag system rather than introducing a separate hierarchy.

Each entry should support multiple tags.

If the page already supports tag filtering, reuse that implementation.

If not, add lightweight filtering that:
- shows all entries by default
- allows visitors to click a tag to filter
- supports multiple entries sharing the same tag
- makes it easy to add future tags without changing page structure

Do not hard-code a fixed set of top-level categories unless the existing site already does so.

The tag system should be data-driven.

# Suggested Tag Vocabulary

Reuse existing site tags where possible.

Potential tags include:

### Technical topics
- Systems
- Computer Architecture
- Graph Analytics
- Performance Engineering
- Hardware–Software Co-design
- Processing-in-Memory
- Networking
- Quantum Computing
- History of Computing

### Humanities / interdisciplinary topics
- Art History
- Cultural Exchange
- Silk Road
- Climate Fiction
- Visual Culture
- Futurism

### Writing type
- Course Project
- Course Essay
- Position Essay
- Research Note
- Technical Writing
- Exploratory Writing

Do not add duplicate tags that mean nearly the same thing.

Prefer consistent capitalization and naming across the site.

# Entry Design

Use the same visual component for all writing entries.

Each entry should support:

- Title
- Short description
- Year, if known
- Course, if known
- Tags
- Link to full writeup or PDF, if available
- Optional note about the status of the piece

Do not visually privilege technical writing over humanities writing.

Do not create separate card designs for different categories.

# Links to Course Writeups

Where a full course writeup is available, add a link such as:

**Read writeup**

or

**View course paper**

Do not call these peer-reviewed papers or publications.

If a writeup is rough or essentially the original course submission, add a small secondary note.

Examples:

> Exploratory course project, shared in its original form.

or

> Course essay, lightly edited for the web.

Do not apologize for the work being rough.

Do not label it as "unfinished" unless it is genuinely incomplete.

# Handling the PDFs

Do not rewrite or redesign the original PDFs as part of this task.

If the PDFs already exist in the repository:
- link them correctly
- use the existing file organization conventions

If they are not yet available:
- add a nullable or optional `pdf` / `url` field
- leave the link hidden when the field is empty
- do not invent filenames

Make it easy for me to add PDFs later.

# Data Model

Represent writing entries as structured data rather than hard-coding individual cards.

Use the site's existing data format if one already exists.

Each entry should support fields conceptually equivalent to:

```ts
{
  title: string,
  description: string,
  year?: string,
  course?: string,
  tags: string[],
  url?: string,
  pdf?: string,
  note?: string
}
```

Adapt this to the existing codebase rather than introducing unnecessary new infrastructure.

# Sorting

Use the site's existing sorting convention if one exists.

Otherwise:
- sort newest first when a year is available
- place undated pieces after dated pieces
- do not sort alphabetically unless that is already the site's pattern

# Relationship to Publications and Research

Keep the Writing page clearly distinct from the Publications page.

These entries should not appear in:
- peer-reviewed publications
- research publications
- citation lists
- scholarly-output counts

The Writing page is for:
- essays
- exploratory investigations
- course work
- technical reflections
- interdisciplinary writing

The Publications page remains the authoritative record of peer-reviewed and formal scholarly output.

# Visual Style

Preserve the existing site aesthetic:

- clean and minimal
- EB Garamond for titles/headings
- sans-serif for body text
- Okabe–Ito color palette
- generous whitespace
- restrained borders and cards
- responsive layout
- no decorative gradients or oversized UI elements

Tags should be visually lightweight.

If tags use color, use existing Okabe–Ito palette conventions and ensure contrast remains accessible.

# Mobile Behavior

Make sure:
- titles wrap cleanly
- tag rows wrap rather than overflow
- filter controls remain usable on narrow screens
- PDF/writeup links remain easy to tap
- cards do not become overly tall because of tag layout

# Implementation Steps

1. Inspect the current Writing page and identify the existing content model, entry component, and tag/filter implementation.
2. Reuse those components wherever possible.
3. Extend the Writing page data model only if needed to support course, note, and PDF metadata.
4. Add the six entries listed above.
5. Add or update the introductory copy.
6. Ensure every entry uses the same card/list component.
7. Wire the entries into the existing tag-filter system.
8. Add PDF links only where valid files already exist.
9. Keep missing metadata optional rather than inventing values.
10. Verify desktop and mobile layouts.
11. Do not alter the rest of the site's navigation or visual hierarchy unless required for consistency.

# Success Criteria

The Writing page should make it easy for a visitor to understand that I write and think across a wide range of technical and non-technical subjects without making the site feel unfocused.

A visitor interested in systems should be able to filter to systems-oriented writing.

A visitor interested in humanities or interdisciplinary work should be able to discover those pieces through tags.

The page should feel like a coherent archive of intellectual exploration rather than a miscellaneous coursework dump.
