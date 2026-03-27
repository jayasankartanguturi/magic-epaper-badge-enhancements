# Google Summer of Code Proposal

## Project Title

Improving the Magic ePaper Badge App into a User-Friendly and Feature-Rich Application

## Organization

FOSSASIA

## Applicant

Jayasankar Tanguturi

---

# 1. Abstract

The Magic ePaper Badge is an innovative low-power display device used in conferences, hackathons, and personal identification. While the hardware is efficient and useful, the current application lacks usability, customization, and reliable connectivity.

This project aims to redesign the application into a modern, intuitive, and highly functional platform. The focus will be on improving UI/UX, stabilizing Bluetooth communication, and adding advanced features like live preview and reusable templates.

The goal is to make the application accessible even for beginners while maintaining flexibility for advanced users.

---

# 2. Problem Statement

Through analysis of the existing system, the following key issues were identified:

* The user interface is confusing and not beginner-friendly
* Bluetooth connection is unreliable and lacks feedback
* No preview before sending content to device
* Limited customization options
* No reusable templates
* Poor onboarding experience

These issues reduce usability and limit adoption.

---

# 3. Objectives

The main objectives of this project are:

* Simplify user interaction (reduce steps significantly)
* Improve Bluetooth connection success rate
* Provide real-time preview before sending data
* Enable template-based badge design
* Improve overall UI/UX and accessibility

---

# 4. Proposed Solution

The proposed solution focuses on building a modular and scalable system:

* Clean and responsive UI
* Robust Bluetooth communication system
* Interactive badge editor
* Real-time preview engine
* Template management system

---

# 5. System Architecture

## 🔷 High-Level Architecture

```
+----------------------+
|     Frontend UI      |
| (HTML, CSS, JS/React)|
+----------------------+
           ↓
+----------------------+
| Application Logic    |
| (State + Processing) |
+----------------------+
           ↓
+----------------------+
| Bluetooth Layer      |
| (Web Bluetooth API)  |
+----------------------+
           ↓
+----------------------+
| ePaper Badge Device  |
+----------------------+
```

---

## 🔷 Detailed Architecture

```
Frontend
 ├── UI Components
 ├── Editor Module
 ├── Preview Panel
 └── State Management

Logic Layer
 ├── Template Engine
 ├── Image Processor
 └── Data Formatter

Communication Layer
 ├── Device Discovery
 ├── Connection Manager
 └── Data Transfer Module
```

---

# 6. Data Flow Diagram

```
User Input
   ↓
UI Editor
   ↓
Preview Engine
   ↓
Bluetooth Module
   ↓
Device Display
```

---

# 7. Key Features

## Core Features

* Easy Bluetooth connection
* Real-time preview
* Text and image editing

## Advanced Features

* Template system
* Save and load designs
* Improved UI themes

---

# 8. Sample Code (Bluetooth Connection)

```javascript
async function connectBadge() {
  try {
    const device = await navigator.bluetooth.requestDevice({
      filters: [{ namePrefix: "EPD" }]
    });

    const server = await device.gatt.connect();
    console.log("Connected to badge!");
  } catch (error) {
    console.error("Connection failed:", error);
  }
}
```

---

# 9. Preview System Concept (Code Idea)

```javascript
function updatePreview(text) {
  const previewBox = document.getElementById("preview");
  previewBox.innerText = text;
}
```

---

# 10. Implementation Plan

## Community Bonding

* Understand codebase
* Discuss with mentors
* Setup environment

## Phase 1: UI/UX Redesign

* Design wireframes
* Implement responsive UI

## Phase 2: Bluetooth Module

* Improve connection logic
* Add retry mechanism

## Phase 3: Preview System

* Implement live preview
* Sync UI with device

## Phase 4: Templates

* Create reusable templates
* Add save/load functionality

## Phase 5: Testing

* Bug fixing
* Performance improvements

---

# 11. Timeline

* Week 1–2: Research
* Week 3–4: UI development
* Week 5–6: Bluetooth improvements
* Week 7–8: Preview system
* Week 9–10: Templates
* Week 11–12: Testing

---

# 12. Expected Outcomes

* Improved user experience
* Stable device connectivity
* Flexible customization system
* Increased adoption

---

# 13. Performance Metrics

* 40% reduction in connection failures
* 50% faster task completion
* Improved usability

---

# 14. Contribution Plan

## Before GSoC

* Submit 2–3 pull requests
* Fix UI issues
* Improve documentation

## During GSoC

* Weekly contributions
* Regular mentor communication
* Continuous improvement

---

# 15. Why Me

I have experience in HTML, CSS, JavaScript, C, C++, and Java, along with a strong interest in UI/UX design. I have already started working on this project by building a GitHub repository with UI design, proposal, and initial implementation.

I am committed to learning, contributing consistently, and delivering high-quality results.

---

# 16. Future Scope

* Mobile app version
* Cloud synchronization
* Multi-device support

---

# 17. Conclusion

This project will transform the Magic ePaper Badge application into a modern, user-friendly, and efficient system. It will improve usability, enhance functionality, and provide long-term value to the FOSSASIA community.
