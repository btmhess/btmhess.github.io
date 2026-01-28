---
layout: project
title: "Personal Portfolio Website"
project_slug: this-website

# Sorting metadata
favorite_order: 14
project_date: 2026-1
duration: 2
# status options: planning , active , paused , complete_in_use , complete_storage , complete_abandoned
status: complete_in_use
budget: 0

# organization options: Personal, FSAE, Sandia
organization: Personal

goal: "Design and implement a lightweight, self-hosted portfolio website to document and organize long-term technical projects."

requirements: |
  The site needed to be simple, fast, and maintainable without requiring a complex web stack or ongoing hosting costs. It had to support:<br>
  - A sortable index of projects<br>
  - Rich project pages with galleries, specifications, and materials lists<br>
  - Easy creation of new projects using a repeatable template<br>
  - Mobile usability<br>
  - Hosting via GitHub Pages without custom build tooling<br>

result: |
  The site is now live and actively used to document personal engineering projects. Projects can be added by creating a single Markdown file and dropping assets into a folder.<br>
  The result is intentionally minimal and utilitarian, inspired by catalog-style websites (e.g., McMaster-Carr): clean, functional, and content-first.<br>
  The development process relied heavily on AI-assisted "vibe-coding" to rapidly iterate on layout, Liquid logic, JavaScript behavior, and CSS styling.<br>
  Rather than replacing understanding, this accelerated experimentation and helped explore design options quickly while debugging edge cases manually.<br>
  This entire page (except this line) was generated using free ChatGPT use. This page contains the only AI generated content on the site.

specifications: |
  Overview:<br>
      - Static site built with Jekyll and GitHub Pages<br>
      - Project-driven architecture using Markdown + YAML front matter<br>
      - No backend, database, or build pipeline beyond GitHub Pages<br><br>

  Site features:<br>
      - Sortable project index (date, status, favorites, budget)<br>
      - Per-project pages with structured sections<br>
      - Automatically generated image/video galleries<br>
      - Lazy-loaded thumbnails with full-screen lightbox viewer<br>
      - CSV-based materials/parts lists embedded per project<br>
      - Related-project linking via project slugs<br><br>

  Technical stack:<br>
      - GitHub Pages (Jekyll)<br>
      - Liquid templates for content generation<br>
      - Vanilla JavaScript (no frameworks)<br>
      - Custom CSS with mobile-first layout considerations<br><br>

  Development process:<br>
      - Extensive AI-assisted iteration for layout, logic, and styling<br>
      - Manual debugging of Liquid edge cases and GitHub Pages behavior<br>
      - Incremental refinement driven by usability on desktop and mobile<br><br>

  Cost breakdown:<br>
      - $0 hosting (GitHub Pages)<br>
      - $0 software licenses<br>
      - Primary investment: time and iteration<br>

related_projects:

---