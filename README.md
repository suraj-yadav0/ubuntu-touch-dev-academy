# Ubuntu Touch Developer Academy

A self-contained educational website and instructor handbook covering Ubuntu Touch development, underlying Linux mobile technologies, system architecture, and hands-on teaching labs.

## Running the Website

The website is standalone and requires no build pipeline. You can open `index.html` directly in any modern browser, or run a local web server:

```bash
cd /home/suraj/ubuntu-touch-dev-academy

# Using Python
python3 -m http.server 3000

# Or using Node
npm start
```

Visit `http://localhost:3000` in your web browser.

## Course Structure & Contents

1. **Module 01 - History, Vision & Governance**: Canonical convergence vision, Ubuntu Edge crowdfunding, commercial BQ/Meizu hardware, Scopes experiment, UBports Foundation governance, and digital sovereignty.
2. **Module 02 - Underlying Technologies & OS Architecture**: Complete stack hierarchy, Halium hardware abstraction, libhybris dynamic linking, Mir 2.x Wayland compositor, core Linux daemons, and mobile Linux vs desktop Linux architecture thinking process.
3. **Module 03 - Security Model & Sandboxing**: Read-only root filesystem, AppArmor MAC profiles, Seccomp filtering, Content Hub secure inter-app data broker, and push notification architecture.
4. **Module 04 - The Clickable Toolchain**: Click package format, Docker/Podman sysroot isolation, CLI command reference (`create`, `desktop`, `build`, `launch`, `review`, `publish`), and `clickable.yaml` configuration.
5. **Module 05 - App Development with Qt, QML & Lomiri**: QML declarative structure, Grid Unit scaling (`units.gu`), `Lomiri.Components`, responsive convergence with `AdaptivePageLayout`, and Lomiri Human Interface Guidelines (HIG).
6. **Module 06 - Real-World Application Architectures & Production Code**: High-performance C++ backend plugins, GPS location tracking with `QtPositioning`, Content Hub import/export workflows, URL Dispatcher deep links, push notification client, and SQLite schema migrations.
7. **Module 07 - Practical Teaching Labs**:
   * Lab 1: Developer workstation setup and ADB device connection.
   * Lab 2: Hello Lomiri app dissection (`manifest.json`, `apparmor.json`, `.desktop`).
   * Lab 3: Building "TaskFlow" (convergent two-column SQLite database app with gestures).
   * Lab 4: Packaging, AppArmor validation, and OpenStore publishing.
8. **Module 08 - Device Porting & Bringup**: Halium prerequisites, kernel configuration (`check-kernel-config`), USB networking (RNDIS / Telnet), and real-world Snapdragon bringup case study with EGL and binder troubleshooting.
9. **Module 09 - Platform Limitations & The Modern Roadmap**: Technical critique of app ecosystem gaps, banking/DRM, VoLTE/IMS fragmentation, camera pipeline complexity, Ubuntu 24.04 Noble LTS rebase, Qt 6 migration, and PipeWire transition.
10. **Module 10 - Comprehensive Ecosystem Directory & Reference Links**: Curated directory of official documentation, GitLab code repositories, core apps source code, OpenStore tooling, community chat bridges, and hardware trackers.
11. **Module 11 - Instructor Kit & Classroom Resources**: 4-week university syllabus, lecture slide outlines, interactive student knowledge check quizzes, and printable lecture handouts.

## Key Features

* **Zero external runtime dependencies**: Pure standard HTML5, CSS3 with `color-scheme` support, and vanilla JavaScript.
* **Enhanced Markdown Engine**: In-browser parser supporting code blocks with copy buttons, interactive callouts (`[!NOTE]`, `[!WARNING]`, `[!TIP]`), data tables, and external documentation links.
* **Architecture Diagrams**: High-resolution vector diagrams for the system stack, libhybris bridge, Click sandboxing, and convergence layout reflow.
* **Interactive Quizzes**: Formative assessment questions with immediate technical feedback and explanations across all modules.
* **Instant Search**: In-memory full-text search across all modules, topics, and lab steps (press `/` or `Ctrl+K`).
* **Print / Handout Mode**: Optimized CSS media queries for printing clean lecture handouts and syllabus packets.

