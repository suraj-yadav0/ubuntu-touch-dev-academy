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

1. **Module 01 - History, Vision & Governance**: Canonical convergence vision (2011-2013), Ubuntu Edge campaign, commercial BQ/Meizu hardware, Scopes paradigm, 2017 cancellation, and UBports Foundation governance.
2. **Module 02 - Underlying Technologies & OS Architecture**: Complete stack overview, Halium hardware adaptation, libhybris dynamic linker bridging, Mir 2.x Wayland compositor, Lomiri shell, and core Linux daemons (oFono, PulseAudio/PipeWire, repowerd, Waydroid).
3. **Module 03 - Security Model & Sandboxing**: Read-only root filesystem, AppArmor MAC profiles, Seccomp filtering, Content Hub secure inter-app data broker, and push notification architecture.
4. **Module 04 - The Clickable Toolchain**: Click package format, Docker/Podman sysroot isolation, CLI command reference (`create`, `desktop`, `build`, `launch`, `review`, `publish`), and `clickable.yaml` configuration.
5. **Module 05 - App Development with Qt, QML & Lomiri**: QML declarative structure, Grid Unit scaling (`units.gu`), `Lomiri.Components`, and responsive convergence with `AdaptivePageLayout`.
6. **Module 06 - Practical Teaching Labs**:
   * Lab 1: Developer workstation setup and ADB device connection.
   * Lab 2: Hello Lomiri app dissection (`manifest.json`, `apparmor.json`, `.desktop`).
   * Lab 3: Building "TaskFlow" (convergent two-column SQLite database app with gestures).
   * Lab 4: Packaging, AppArmor validation, and OpenStore publishing.
7. **Module 07 - Device Porting & Bringup**: Halium prerequisites, kernel configuration (`check-kernel-config`), USB networking (RNDIS / Telnet), and troubleshooting `dmesg`/`logcat`.
8. **Module 08 - Instructor Kit & Classroom Resources**: 4-week university syllabus, lecture slide outlines, interactive student knowledge check quizzes, and printable lecture handouts.

## Key Features

* **Zero external runtime dependencies**: Pure standard HTML5, CSS3 with `color-scheme` support, and vanilla JavaScript.
* **Architecture Diagrams**: High-resolution vector diagrams for the system stack, libhybris bridge, Click sandboxing, and convergence layout reflow.
* **Interactive Quizzes**: Formative assessment questions with immediate technical feedback and explanations.
* **Instant Search**: In-memory full-text search across all modules, topics, and lab steps (press `/` or `Ctrl+K`).
* **Print / Handout Mode**: Optimized CSS media queries for printing clean lecture handouts and syllabus packets.
