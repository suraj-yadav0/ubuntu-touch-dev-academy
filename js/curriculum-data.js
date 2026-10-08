// Ubuntu Touch Educational Curriculum Data Store
// Comprehensive documentation, architecture guides, code examples, and student labs

const CURRICULUM = {
  metadata: {
    title: "Ubuntu Touch Developer Academy",
    subtitle: "Complete Course, Underlying Architecture & Development Handbook",
    targetAudience: "Instructors, Computer Science Students, and Linux Mobile Developers",
    version: "2026.1 - Focal & Noble LTS",
    baseSystem: "Ubuntu Touch (UBports Foundation)"
  },
  modules: [
    {
      id: "module-1-history",
      number: "01",
      title: "History, Vision & Governance",
      summary: "The origins of Ubuntu Touch, Canonical convergence vision, crowdfunding, commercial hardware, cancellation, and UBports Foundation governance.",
      readTime: "25 min read",
      topics: [
        {
          id: "convergence-vision",
          title: "The Vision of Convergence (2011 - 2013)",
          content: `
### The Core Concept of Convergence

In October 2011, Mark Shuttleworth announced Canonical's ambitious vision: **Ubuntu as a single unified operating system across phones, tablets, television sets, and desktop computers**. 

At the time, mobile computing was sharply bifurcated between Apple iOS and Google Android. Both treated mobile devices as closed appliances divorced from traditional desktop computing. Canonical argued that modern smartphones possessed enough CPU and GPU compute to function as personal computers if docked with a monitor, keyboard, and mouse.

Convergence rested on three technical pillars:
1. **One Operating System Core**: A standard Linux kernel with a single GNU userspace, standard systemd/upstart, standard network stacks, and Debian packaging roots.
2. **One UI Toolkit with Adaptive Layouts**: Applications written once in Qt/QML that automatically reflow between single-column mobile views, dual-pane tablet views, and free-floating desktop windows.
3. **Seamless Form-Factor Transition**: When connected to an external display via HDMI, Slimport, or wireless casting, the phone would transform into a full Ubuntu desktop interface without rebooting or launching an emulator.

\`\`\`
+-------------------------------------------------------+
|                 Lomiri Shell / Unity8                 |
+---------------------------+---------------------------+
| Phone Mode (Edge Swipes)  | Desktop Mode (Multi-window)|
+---------------------------+---------------------------+
|           AdaptivePageLayout (Qt/QML UI)              |
+-------------------------------------------------------+
|          Mir Display Server / Wayland Protocol        |
+-------------------------------------------------------+
|             GNU/Linux Base (glibc, systemd)           |
+-------------------------------------------------------+
\`\`\`
`
        },
        {
          id: "canonical-era",
          title: "The Canonical Era & Commercial Launches (2013 - 2017)",
          content: `
### Key Milestones of the Canonical Era

* **January 2013**: Canonical formally announced Ubuntu Phone at a keynote in London, presenting the Unity8 interface and "Scopes".
* **July 2013 - The Ubuntu Edge Crowdfunding Campaign**:
  * Canonical launched a campaign on Indiegogo seeking $32 million to build the "Ubuntu Edge", a high-end dual-boot smartphone (Android + Ubuntu Desktop).
  * The campaign reached **$12,814,216**, setting a crowdfunding record at the time. Although it fell short of the $32M goal and hardware production did not occur, it demonstrated immense consumer appetite for an open mobile alternative.
* **February 2015 - BQ Aquaris E4.5 Ubuntu Edition**:
  * The world's first commercially sold Ubuntu Touch phone, launched in Europe in partnership with Spanish manufacturer BQ.
  * Specifications: MediaTek MT6582 quad-core 1.3 GHz, 1 GB RAM, 8 GB flash, dual micro-SIM.
* **June 2015 - Meizu MX4 Ubuntu Edition**:
  * Higher-performance device launched in China and Europe with Chinese OEM Meizu.
  * Specifications: MediaTek MT6595 octa-core, 2 GB RAM, 5.36-inch 1152x1920 display.
* **April 2016 - BQ Aquaris M10 Ubuntu Edition Tablet**:
  * The first commercially available convergent device. Connecting a Bluetooth mouse and keyboard dynamically flipped the tablet from touch-tablet mode to a windowed desktop environment.
* **May 2016 - Meizu PRO 5 Ubuntu Edition**:
  * Flagship device powered by Samsung Exynos 7420, 3GB/4GB RAM, AMOLED display.

### The Scopes Experiment

Canonical designed "Scopes" to replace traditional app icons with categorized home screens streaming live data (News, Music, Nearby, Photos, Today). 

While conceptually elegant, Scopes suffered from architectural limitations:
* Users preferred standalone applications with dedicated workflows over generalized information feeds.
* Content providers refused to write specialized Scopes APIs when native Android/iOS apps were their priority.
* High background battery draw caused by polling multiple web services.
* In later releases, the UBports community deprioritized Scopes in favor of a standard application drawer.
`
        },
        {
          id: "cancellation-rescue",
          title: "The April 2017 Pivot & UBports Rescue",
          content: `
### Canonical Strategic Withdrawal (April 5, 2017)

On April 5, 2017, Mark Shuttleworth published a blog post announcing Canonical's decision to end commercial investment in Ubuntu Phone, Unity8, Mir, and convergence. Canonical refocused its capital and engineering exclusively on enterprise cloud, server, IoT, and desktop Ubuntu (switching default desktop back to GNOME on Wayland).

The mobile code repository faced abandonment.

### The UBports Community Stepping Up

Marius Gripsgård, a Norwegian developer who had founded the UBports community in 2015 to port Ubuntu Touch to devices like the OnePlus One and Nexus 5, announced that the community would take over maintenance and continued development of the operating system.

Key milestones of the community era:
1. **Foundation Establishment**: Formation of the **UBports Foundation** (*UBports gemeinnützige UG*), an officially recognized non-profit entity based in Germany, ensuring governance and legal protection.
2. **Transition from Canonical Servers**: Migrated build farms, rootfs images, and git trees to self-hosted GitLab infrastructure.
3. **Xenial LTS Maintenance (16.04)**: Upgraded legacy Ubuntu 15.04 (Vivid) bases to Ubuntu 16.04 (Xenial Xerus), providing security updates for five years.
4. **Renaming Unity8 to Lomiri**: Canonical retained the "Unity" trademark. The UBports community rebranded Unity8 to **Lomiri** (pronounced *Low-mee-ree*). This permitted Lomiri to be packaged cleanly into upstream distributions like Debian, Arch Linux, Fedora, and postmarketOS.
5. **Focal Fossa Transition (20.04)**: Rebased the entire operating system from 16.04 to Ubuntu 20.04 LTS, replacing Upstart with modern systemd, upgrading Qt from 5.9 to Qt 5.15, adopting 64-bit arm64 as standard, and enabling modern Waydroid container support.
6. **Noble Numbat Migration (24.04)**: Active porting and stabilization work targeting Ubuntu 24.04 LTS base.
`
        },
        {
          id: "motivation-sovereignty",
          title: "Core Motivation: Digital Sovereignty, Privacy & Hardware Longevity",
          content: `
### Why Ubuntu Touch Exists and Matters

Smartphones have become the primary computing device for humanity, storing personal correspondence, banking credentials, biometric data, and real-time physical locations. However, the contemporary mobile ecosystem is entirely controlled by a commercial duopoly: Apple iOS and Google Android.

Ubuntu Touch exists to provide a viable, fully open, independent third alternative rooted in the traditions of GNU/Linux and software freedom.

### The Mobile Duopoly Crisis

| Vector | The Duopoly Model (iOS / Android) | The Ubuntu Touch Model |
|---|---|---|
| User Privacy | Telemetry, device fingerprinting, ad identifiers | Zero telemetry, no analytics, no ad tracking |
| Cloud Dependence | Mandatory Apple ID or Google Play Services account | Zero account required to boot, use, or install apps |
| System Access | Locked bootloaders, root access forbidden or penalized | True root access available via developer mode |
| Application Store | Arbitrary app review rules, 15-30% platform rent | OpenStore: open, community-curated, no platform tax |
| Hardware Lifespan | Forced obsolescence after 2 to 4 years | Community LTS support extending hardware to 8+ years |
| System Control | Remote app revocation, forced cloud backups | Local filesystem control, local backup via standard tar/rsync |

### Digital Sovereignty & Privacy by Design

Digital sovereignty is the right of individuals, organizations, and states to control their digital destiny, data, and compute infrastructure without unilateral third-party surveillance or dependency.

Ubuntu Touch enforces privacy by design:
1. **Zero Corporate Account Gatekeeping**: You can pull a fresh Ubuntu Touch phone out of the box, skip every setup screen, connect to Wi-Fi or cellular networks, and install software immediately without giving an email address or credit card.
2. **Transparent Networking**: No background daemons continuously ping corporate servers with location pings, device diagnostics, or app usage metrics. All outbound traffic can be inspected and verified with standard Linux networking tools (\`tcpdump\`, \`wireshark\`, \`iptables\`, \`nftables\`).
3. **App Confinement by Default**: Even native apps installed from OpenStore are constrained by AppArmor profiles that prevent silent access to camera, microphone, contacts, or location without explicit user permission.

### Combating Planned Obsolescence and E-Waste

Global electronic waste is an ecological crisis. Millions of functional smartphones are discarded each year because manufacturers stop releasing security updates and new OS versions, rendering them insecure or unsupported by commercial app stores.

Modern smartphone hardware from 2017 onward contains 6 to 8 core 64-bit ARM processors, 4 to 8 gigabytes of RAM, and fast UFS or eMMC flash storage. This hardware is more powerful than the desktop computers used to land rovers on Mars or develop early Linux kernels.

> [!NOTE]
> By decoupling the operating system from commercial OEM support cycles, Ubuntu Touch breathes a second life into discarded hardware. Devices like the Google Pixel 3a, OnePlus 5, Xiaomi Redmi Note 7, and Fairphone 2 continue to receive modern, patched Linux updates years after commercial OEM abandonment.

### The True Convergence Paradigm

Desktop computers and mobile phones have traditionally been treated as mutually exclusive device classes. Users carry a smartphone for quick tasks and sit down at a desktop or laptop for real productivity.

Ubuntu Touch approaches convergence not as a remote desktop stream or a blown-up phone app screen, but as a **single unified Unix computer**:
* When held in the hand, the Lomiri interface provides touch edge swipes, single-column lists, and mobile ergonomics.
* When connected to a monitor, keyboard, and mouse via USB-C or wireless display, the same running processes dynamically transition into free-floating, multi-window desktop applications.
* The device contains real GNU coreutils, standard \`bash\`, \`ssh\`, \`git\`, \`python3\`, \`gcc\`, and system daemons. It is a portable workstation that fits into a pocket.

### The UBports Foundation Governance

Unlike corporate projects that can be canceled by executive committee, Ubuntu Touch is governed by the **UBports Foundation** (*UBports gemeinnützige UG*), an officially recognized non-profit entity based in Berlin, Germany.

Foundation governance ensures:
* **Legal Stewardship**: Intellectual property, domains, trademarks, and server infrastructure belong to the community and cannot be seized or bought out.
* **Financial Transparency**: Donations, grants, and hardware sponsorships are audited under German non-profit foundation laws and dedicated entirely to developer bounties, infrastructure, and hardware test labs.
* **Open Decision Making**: Technical steering committee meetings, bi-weekly community Q&A livestreams, and GitLab merge requests are public and accessible to anyone.
`
        }
      ]
    },
    {
      id: "module-2-architecture",
      number: "02",
      title: "Underlying Technologies & OS Architecture",
      summary: "Hardware abstraction, Halium, libhybris dynamic linking, Mir display server, Lomiri shell, and low-level Linux daemons.",
      readTime: "40 min read",
      topics: [
        {
          id: "system-stack-overview",
          title: "System Stack Overview: From Silicon to Display",
          content: `
### Complete Architectural Stack

Unlike Android, which runs all applications inside the Android Runtime (ART/Dalvik) on top of a custom Bionic libc, Ubuntu Touch is a **true GNU/Linux operating system**.

\`\`\`
+---------------------------------------------------------------+
| Lomiri User Interface & Applications (Qt/QML, C++, Python)   |
+---------------------------------------------------------------+
| Lomiri Shell / Window Compositor (Mir 2.x Wayland Protocol)   |
+---------------------------------------------------------------+
| GNU Middleware (systemd, PulseAudio/PipeWire, oFono, ConnMan) |
+---------------------------------------------------------------+
| libhybris Linker Wrapper (Translates GNU glibc <-> Bionic)   |
+---------------------------------------------------------------+
| Halium / Android Hardware Abstraction Layer (HAL / Blobs)     |
+---------------------------------------------------------------+
| Linux Kernel (Android Common Kernel / Mainline Linux)         |
+---------------------------------------------------------------+
| Device Hardware (Qualcomm Snapdragon, MediaTek, Unisoc, ARM)  |
+---------------------------------------------------------------+
\`\`\`

Teaching Note: Stress to students that Ubuntu Touch is not a skin over Android. It uses the standard GNU C Library (\`glibc\`), standard Linux command line utilities, systemd process supervisor, and standard networking daemons. Android components are used solely for low-level device driver access.
`
        },
        {
          id: "halium-and-libhybris",
          title: "The Halium Project & libhybris Deep Dive",
          content: `
### The Android Driver Problem

Modern smartphone silicon (GPUs, modems, cameras, Wi-Fi chips, DSPs) ships with proprietary driver binaries supplied by chipmakers (Qualcomm, MediaTek, Broadcom). 

These drivers have two characteristics:
1. They are closed-source binary shared objects (\`.so\` files).
2. They are compiled against Google's **Bionic C Library** (\`libc.so\`) and Android's internal HAL interfaces.

A standard GNU/Linux distribution runs the GNU C Library (\`glibc\`). If a GNU program attempts to load an Android Bionic library directly via \`dlopen()\`, the process crashes instantly due to incompatible ABIs, conflicting thread-local storage (TLS) structures, and mismatched memory management implementations.

### What is Halium?

**Halium** is a collaborative open-source project shared between Ubuntu Touch, postmarketOS, Sailfish OS, and Droidian. It standardizes the hardware adaptation layer:
* It packages Android's \`/system\` and \`/vendor\` partitions into an unprivileged LXC container or minimal chroot.
* It standardizes the Linux kernel configuration across smartphone targets.
* It abstracts hardware drivers so that any mobile Linux distribution can boot on Android-first hardware.

### How libhybris Solves the ABI Barrier

Written by Carsten Munk and maintained by the mobile Linux community, **libhybris** is the foundational bridge.

\`\`\`
+-------------------------+
| glibc Process (Qt/Mir)  |
+------------+------------+
             |
             v
+-------------------------+
|  libhybris Front-end    |  <-- Exposes standard POSIX / Khronos EGL
+------------+------------+
             | Dynamic Linker Interception
             v
+-------------------------+
| libhybris Linker Wrapper|  <-- Loads Android Bionic Linker (linker/linker64)
+------------+------------+
             |
             v
+-------------------------+
|  Android Vendor Blobs   |  <-- /vendor/lib64/egl/libGLES_mali.so
|   (Compiled for Bionic) |
+-------------------------+
\`\`\`

#### The libhybris Mechanism:
1. **Dynamic Linker Wrapper**: libhybris implements its own custom dynamic linker that understands both ELF glibc conventions and Android Bionic linker quirks.
2. **Hooking System Calls**: When an Android library makes calls to Bionic routines, libhybris resolves them within an isolated Bionic address space without corrupting the host glibc process memory.
3. **Bridge Libraries**: libhybris provides shim implementations of standard graphics and hardware APIs:
   * \`libEGL.so\`: Standard Khronos EGL on top, redirects calls to Android's \`libhardware\` and vendor EGL driver underneath.
   * \`libGLESv2.so\`: Standard OpenGL ES 2.0/3.0 translation.
   * \`libhardware\`: Wrapper around Android HAL modules (sensors, lights, camera, audio).
   * \`libsync\`: Bridges Android synchronization fences to Linux dma-buf fences.
`
        },
        {
          id: "mir-and-wayland",
          title: "Mir Display Server & Wayland Compositor",
          content: `
### The Evolution of Mir

In 2013, Canonical announced Mir as a high-performance alternative to X11 and Wayland. Mir originally used a custom, proprietary Canonical IPC protocol.

When UBports took over, Mir underwent an architectural rewrite:
* **Mir 2.x as a Wayland Compositor**: Modern Mir discarded the proprietary IPC protocol and became a fully conforming **Wayland display server and compositor library**.
* Applications connect to Mir using standard Wayland protocols (\`xdg-shell\`, \`wlr-layer-shell\`, \`zwp_linux_dmabuf_v1\`).
* Qt applications run natively using the standard \`qtwayland\` platform plugin without requiring X11.

### Display Buffer Pipeline

\`\`\`
[QML Application] 
       | (Draws UI primitives via Qt Quick Scene Graph)
       v
[OpenGL ES / EGL Context]
       | (Allocates graphic buffers via Android gralloc via libhybris)
       v
[Wayland Client (qtwayland)]
       | (Passes buffer file descriptor over Unix Domain Socket)
       v
[Mir Compositor / Lomiri]
       | (Composes window surfaces, applies edge gesture animations)
       v
[Hardware Composer (HWC)]
       | (Direct scanout to smartphone display panel via DRM/KMS or libhybris)
       v
[Physical OLED / LCD Panel]
\`\`\`
`
        },
        {
          id: "core-subsystems",
          title: "Core Operating System Daemons & Services",
          content: `
### Telephony: oFono and RILD

Ubuntu Touch handles cellular phone calls, SMS, and mobile data through **oFono**, a mobile telephony daemon originally developed by Intel and Nokia for MeeGo.

* **ofono-ril plugin**: Connects oFono to Android's Radio Interface Layer Daemon (\`rild\`) via local IPC sockets.
* **Telepathy-ofono**: Bridges oFono events to the freedesktop Telepathy D-Bus specification, allowing the Lomiri Dialer and Messaging apps to initiate calls and send SMS without accessing radio hardware directly.

### Audio: PulseAudio, PipeWire, and droidmedia

* **PulseAudio with \`module-droid-sink\`**: Uses libhybris to connect to Android's \`audio.primary.default.so\` HAL. This ensures proper routing between earpiece, loud speaker, wired 3.5mm headset, and Bluetooth A2DP.
* **PipeWire**: Active transition underway in modern releases to reduce latency and improve resource sharing.
* **droidmedia**: A minimal C++ library compiled against Android Bionic that exposes camera video capture, hardware media encoding (H.264/HEVC), and decoding to GNU/Linux GStreamer pipelines.

### Power & Display: repowerd

Power consumption is critical on mobile hardware. Standard desktop Linux power managers are insufficient.
* **repowerd**: The power daemon in Ubuntu Touch. It coordinates:
  * Screen timeouts and ambient brightness adjustments via \`sensorfw\`.
  * Proximity sensor integration: Turns off the display when the phone is held against the ear during an active call.
  * Wake locks: Prevents the CPU from entering deep sleep while downloading updates or playing audio in background.

### Android Application Compatibility: Waydroid

To address the "app gap", Ubuntu Touch integrates **Waydroid**:
* Waydroid runs an entire LineageOS Android system inside an isolated LXC container.
* Android renders its GUI directly to shared memory buffers and hands them to the host Mir Wayland compositor.
* Zero hardware emulation penalty: Android apps run on the native ARM CPU with native GPU acceleration.
`
        },
        {
          id: "thinking-process-mobile-linux",
          title: "Engineering Thinking Process: Mobile Linux vs Desktop Linux",
          content: `
### The Fundamental Architectural Divergence

A common misconception among software engineers entering mobile Linux is that a mobile operating system is simply a desktop Linux distribution with an onscreen keyboard and larger buttons.

In reality, mobile hardware imposes severe physical, thermal, and electrical constraints that dictate entirely different architectural decisions:

| Vector | Desktop Linux Workstation | Mobile Linux (Ubuntu Touch) |
|---|---|---|
| Power Source | Continuous AC mains (45W - 350W) | Limited Li-ion cell (12Wh - 18Wh, 0.2W idle target) |
| Process Scheduling | Standard CFS fair scheduling | Cgroups freezer: non-active apps are suspended in memory |
| Display Server | Xorg / standard desktop Wayland | Mir Wayland with mobile touch gestures and screen rotation |
| Touch Ergonomics | 1-pixel mouse pointer precision | Coarse touch contacts (minimum 6gu / 48dp targets) |
| Memory Management | Swap on fast NVMe SSD | ZRAM swap in RAM; aggressive low-memory killing (LMK) |
| Audio Routing | Static ALSA / PipeWire desktop sinks | Dynamic routing: earpiece, loud speaker, mic beamforming, BT SCO |
| Connectivity | Static Wi-Fi or Ethernet | Cellular radio handovers, SIM switching, roaming |

### Power Management: The Microampere Budget

On a desktop computer, a background daemon waking up 20 times per second to check for network updates causes imperceptible CPU load (0.1%).

On a smartphone, that same background daemon keeps the CPU cores awake, preventing the SoC (System on Chip) from dropping into deep sleep C-states. Instead of drawing 15 mA in standby (lasting 3 to 4 days), the device draws 250 mA to 400 mA, draining the entire battery in 6 to 8 hours without user interaction.

> [!WARNING]
> Unmodified desktop Linux software (such as Electron apps or continuous polling daemons) rapidly drains mobile batteries. Mobile Linux software must rely on event-driven kernel epoll/inotify notifications or system push daemons rather than polling loops.

#### The Suspend-to-RAM Lifecycle

When the screen turns off, the system executes a coordinated sleep flow:
1. **Screen Inactivity**: \`repowerd\` registers display timeout or user tap on power button.
2. **Backlight & Compositor Blanking**: Display panel backlight is powered down; Mir compositor stops scheduling frame swaps.
3. **Cgroups Freezing**: The systemd user session signals the cgroups freezer subsystem. All user-space application threads are halted in place without saving or exiting.
4. **Wake Lock Verification**: \`repowerd\` checks whether any privileged system services hold active kernel wake locks (such as active audio playback or ongoing package download).
5. **SoC Low-Power State**: If no wake locks exist, the Linux kernel writes to \`/sys/power/state\` (\`mem\` or \`s2idle\`), shutting down CPU clock trees, turning off memory controller high-frequency clocks, and placing the ARM cores into low-leakage sleep.
6. **Hardware Wake Interrupts**: Only baseband modem (incoming phone calls/SMS), real-time clock (RTC alarms), and power button GPIO interrupts can wake the system.

### The Packaging Trade-Off: Why Click Over Snaps and Flatpaks

Engineers frequently ask why Ubuntu Touch uses the **Click** packaging format instead of canonical Snaps or desktop Flatpaks.

The decision stems directly from mobile storage and memory constraints:
* **Snaps on Mobile**: Snaps mount each package as a read-only SquashFS image on a loop device. Having 40 installed apps requires 40 active loopback mounts, each consuming kernel memory and slowing system boot times on resource-limited eMMC flash storage.
* **Flatpaks on Mobile**: Flatpaks rely on bubblewrap and desktop XDG desktop portal services designed for full desktop sessions, which historically carried higher memory footprints and lacked mobile lifecycle hooks.
* **Click Packaging**: A Click package is a simple gzip/xz archive that unpacks into a single versioned directory (\`/opt/click.ubuntu.com/app.name/version\`).
  * Zero loop device mounts.
  * Static AppArmor profile generated once at installation.
  * Fast sub-second launch times directly from flash storage.

### The Hardware Compromise: Halium vs Pure Mainline Linux

Mobile Linux projects face an engineering dilemma:
1. **The Purist Approach**: Support only devices that run pure upstream mainline Linux kernels with open-source graphics and modem drivers (e.g., PinePhone, Librem 5).
   * Advantage: Fully open, standard Linux toolchain, clean upstream kernel updates.
   * Disadvantage: Extremely limited hardware availability; older, slower, and more power-hungry processors.
2. **The Pragmatic Approach (Halium / libhybris)**: Support commercially available consumer smartphones by reusing Android vendor binary blobs via libhybris.
   * Advantage: Instantly opens up dozens of powerful, power-efficient commercial smartphones with fast cameras and modern displays.
   * Disadvantage: Technical debt of maintaining libhybris dynamic linker wrappers and Android kernel driver trees.

Ubuntu Touch embraces both: using Halium to provide accessible hardware to tens of thousands of users today, while collaborating closely with the postmarketOS and Linux kernel communities to transition devices to pure mainline Linux whenever open drivers become viable.

### The Post-Mortem of the Scopes Paradigm

When Canonical launched Ubuntu Touch, they replaced the traditional grid of application icons with **Scopes**—horizontal panels streaming live internet data (Nearby, News, Music, Weather).

Why did this model fail?
1. **Cognitive Ergonomics**: Humans mentally map their computing activities into distinct "tools" and "rooms" (e.g., "I want to open my calculator", "I want to compose an email"). Aggregating everything into a stream broke task boundaries and created cognitive fatigue.
2. **Battery and Bandwidth Cost**: Continuously polling dozens of web services across multiple scopes in the background drained battery and wasted mobile data plans.
3. **Ecosystem Resistance**: Third-party services were unwilling to maintain specialized REST endpoints for Scopes when users simply wanted full native applications.

The UBports community learned from this experiment: mobile operating systems must prioritize **fast, responsive, standalone native applications** with clear boundaries and deterministic lifecycles.
`
        }
      ]
    },
    {
      id: "module-3-security",
      number: "03",
      title: "Security Model, Sandboxing & Storage",
      summary: "Read-only system images, AppArmor MAC profiles, Seccomp filtering, Content Hub isolation, and push notifications.",
      readTime: "30 min read",
      topics: [
        {
          id: "immutable-rootfs",
          title: "Immutable Read-Only Root Filesystem",
          content: `
### System Integrity by Design

Traditional desktop Linux distributions allow root processes to modify any file in \`/usr\`, \`/bin\`, or \`/lib\`. On a mobile device, corrupted system files or bad package upgrades can leave the device unbootable ("bricked").

Ubuntu Touch solves this using an **immutable root filesystem**:
1. The root partition (\`/\`) is mounted **Read-Only** (\`ro\`).
2. System directories cannot be altered by users or applications.
3. User data, configurations, and downloaded applications reside on the \`/userdata\` partition, mounted at \`/home/phablet\`.
4. Over-The-Air (OTA) updates are distributed as cryptographic image deltas via \`system-image-cli\`. Updates are downloaded, verified with GPG signatures, and applied atomically in recovery mode.

Teaching Note: Developers who need temporary write access for debugging can execute:
\`\`\`bash
sudo mount -o remount,rw /
\`\`\`
However, this should be discouraged in student environments because the next OTA update will overwrite changes.
`
        },
        {
          id: "apparmor-and-sandboxing",
          title: "AppArmor MAC & Seccomp Sandboxing",
          content: `
### Mandatory Access Control (MAC)

Every application installed from the OpenStore runs inside a strict confinement boundary enforced by **Linux AppArmor** and **Seccomp**.

When an app is launched:
1. \`lomiri-app-launch\` assigns the application process to a dedicated cgroups slice.
2. The kernel attaches an AppArmor profile specifically compiled for that package (e.g., \`com.ubuntu.developer.appname_appname\`).
3. If the application attempts an unauthorized file read or forbidden system call, the kernel immediately terminates or blocks the operation with an \`EPERM\` audit log.

### Anatomy of an apparmor.json Profile

\`\`\`json
{
  "policy_groups": [
    "networking",
    "audio",
    "camera",
    "location",
    "sensors"
  ],
  "policy_version": 20.04
}
\`\`\`

#### Standard Policy Groups:
* **networking**: Grants access to outgoing and incoming TCP/UDP network sockets.
* **audio**: Grants access to PulseAudio/PipeWire sockets for recording and playback.
* **camera**: Permits access to video capture buffers.
* **location**: Connects to \`location-service\` over D-Bus for GPS coordinates.
* **sensors**: Connects to \`sensorfw\` for accelerometer and gyroscope feeds.
* **keep-display-on**: Grants power management override to prevent screen sleep (useful for video players and GPS navigation).
`
        },
        {
          id: "content-hub",
          title: "Content Hub: Secure Inter-App Communication",
          content: `
### Why Direct File Browsing Is Forbidden

In desktop operating systems, applications prompt users with a file dialog that has read-access to the entire home directory. In a secure mobile operating system, an app must never be allowed to inspect other applications' files or browse private folders.

Ubuntu Touch implements **Content Hub**, a D-Bus mediated inter-app communication protocol.

\`\`\`
+---------------------+                      +---------------------+
| Requester App       |                      | Source App (Gallery)|
| (e.g., Chat Client) |                      | (Confined Sandbox)  |
+----------+----------+                      +----------+----------+
           |                                            ^
           | 1. Request Content (Pictures)              |
           v                                            |
+-------------------------------------------------------+--+
|               Lomiri Content Hub Service                 |
|       (System Compositor Displays Trusted File Picker)   |
+-------------------------------------------------------+--+
           |                                            |
           +--------------------------------------------+
             2. User taps photo; Hub copies/links file 
                into Requester's sandbox container
\`\`\`

#### Content Hub Workflow:
1. App A requests a picture using \`ContentPeerPicker\`.
2. The Lomiri system compositor pauses App A and draws a secure system dialog asking the user which source app to choose (e.g., Gallery, Camera, Nextcloud).
3. The user picks an image inside the trusted Gallery UI.
4. Content Hub copies the selected file into App A's private sandbox folder (\`~/.local/share/chatapp/\`) or passes a read-only file descriptor.
5. App A receives the file without ever having access to the rest of the user's gallery.
`
        }
      ]
    },
    {
      id: "module-4-clickable",
      number: "04",
      title: "The Clickable Build System & Toolchain",
      summary: "Understanding Click packages, Clickable CLI, containerized cross-compilation, and device deployment.",
      readTime: "30 min read",
      topics: [
        {
          id: "clickable-overview",
          title: "What is Clickable?",
          content: `
### The Challenge of Mobile Cross-Compilation

Compiling native C++ or packaging Python applications for ARM devices (\`armhf\` 32-bit or \`arm64\` 64-bit) from an x86_64 development workstation historically required complex multi-arch toolchains, sysroots, and cross-compilers.

**Clickable** is the official build system and CLI for Ubuntu Touch. It eliminates environment discrepancy by executing all builds inside standardized **Docker / Podman containers** containing exact Ubuntu Touch sysroots.

### Installing Clickable

\`\`\`bash
# Install pipx if not already installed
sudo apt update
sudo apt install pipx docker.io
sudo usermod -aG docker $USER

# Install Clickable via pipx
pipx install clickable

# Verify installation
clickable --version
\`\`\`
`
        },
        {
          id: "clickable-commands",
          title: "Essential Clickable CLI Commands",
          content: `
### Command Reference

| Command | Action | Use Case |
|---|---|---|
| \`clickable create\` | Interactively scaffolds a new app from templates | Project initialization |
| \`clickable desktop\` | Builds and runs the app natively on host desktop PC | Rapid UI development |
| \`clickable build\` | Compiles binaries for specified target architecture | CI and compilation check |
| \`clickable launch\` | Packages, transfers, installs, and runs app on phone via ADB | On-device testing |
| \`clickable logs\` | Streams systemd/app stdout and stderr from phone | Live debugging |
| \`clickable review\` | Runs AppArmor and Click package linters | Pre-submission verification |
| \`clickable publish\` | Uploads compiled \`.click\` package to OpenStore | Distribution |

### Target Architectures:
* \`--arch amd64\`: 64-bit desktop PC (for local testing).
* \`--arch arm64\`: 64-bit ARM (modern devices: Volla Phone, Pixel 3a, Fairphone 4, JingPad).
* \`--arch armhf\`: 32-bit ARM (legacy devices: Nexus 5, BQ E4.5).
`
        },
        {
          id: "clickable-yaml",
          title: "Configuring clickable.yaml",
          content: `
### Configuration Structure

The file \`clickable.yaml\` at the root of a project instructs Clickable how to build, test, and package the software.

\`\`\`yaml
format: 1
project_name: "quicktask"

# Builder type: qmake, cmake, pure-qml, python, cargo, custom
builder: "cmake"

# Build dependencies inside the container
dependencies_host:
  - "qtbase5-dev"
  - "qtdeclarative5-dev"

# Runtime libraries to bundle into the Click package
dependencies_target:
  - "libsqlite3-0"

build_args:
  - "-DCMAKE_BUILD_TYPE=Release"

scripts:
  postbuild: "echo 'Compilation complete'"
\`\`\`
`
        }
      ]
    },
    {
      id: "module-5-app-dev",
      number: "05",
      title: "App Development with Qt, QML & Lomiri",
      summary: "Declarative UI design with QML, Lomiri.Components, AdaptivePageLayout for convergence, and backend integration.",
      readTime: "35 min read",
      topics: [
        {
          id: "qml-fundamentals",
          title: "QML & Qt Quick Fundamentals",
          content: `
### Why QML for Mobile?

QML (Qt Modeling Language) is a declarative programming language that describes the user interface structure, styling, and animations. QML is parsed into a tree of C++ objects rendered via the hardware-accelerated **Qt Quick Scene Graph**.

Key advantages for students:
1. **Separation of Concerns**: Visual layout and state bindings are written in declarative QML; business logic can be written in JavaScript, Python, C++, or Rust.
2. **Reactive Property Binding**: When a dependent variable changes, all bound UI properties update automatically without manual DOM manipulation.
3. **60 FPS Fluidity**: Animations and transitions run on the GPU render thread.

### Reactive Binding Example:

\`\`\`qml
import QtQuick 2.15
import Lomiri.Components 1.3

Rectangle {
    width: 300
    height: 200
    color: mouseArea.pressed ? "#e95420" : "#2c3e50"

    Text {
        anchors.centerIn: parent
        text: "Tap counter: " + clickCount
        color: "white"
        font.pixelSize: units.gu(2)
    }

    property int clickCount: 0

    MouseArea {
        id: mouseArea
        anchors.fill: parent
        onClicked: clickCount += 1
    }
}
\`\`\`
`
        },
        {
          id: "lomiri-components",
          title: "Lomiri Components & The Grid Unit System",
          content: `
### The Grid Unit (\`units.gu\`)

Mobile screens vary wildly in physical dimension and pixel density (DPI). Specifying layout in raw pixels causes UI elements to appear tiny on high-density displays.

Ubuntu Touch uses the **Grid Unit** (\`units.gu(n)\`):
* 1 Grid Unit represents roughly 8 physical pixels on a standard baseline 160 DPI display.
* On a 480 DPI display, \`units.gu(1)\` automatically scales to 24 pixels.
* **Golden Rule**: Never hardcode pixel values in QML layouts. Always wrap dimensions in \`units.gu()\`.

\`\`\`qml
// Bad practice:
width: 64; height: 64

// Correct practice for Ubuntu Touch:
width: units.gu(8); height: units.gu(8)
\`\`\`

### Lomiri Core Components:
* **MainView**: The application root window. Handles header styling, window resizing, and theme switching.
* **Page**: A distinct screen containing an optional header, actions, and content.
* **PageStack**: Stack-based navigation controller implementing push, pop, and replace transitions.
* **AdaptivePageLayout**: Dynamic multi-column layout engine for responsive convergence.
* **ListItem**: Touch-optimized list row supporting swipe-to-delete, leading actions, and trailing actions.
`
        },
        {
          id: "convergence-layouts",
          title: "Implementing Convergence with AdaptivePageLayout",
          content: `
### Responsive Adaptive Layouts

Convergence means an app must feel like a native mobile app on a 5-inch phone screen, and immediately feel like a desktop workstation app when plugged into a 27-inch 4K monitor.

The Lomiri component for this is \`AdaptivePageLayout\`.

\`\`\`qml
import QtQuick 2.15
import Lomiri.Components 1.3

MainView {
    id: root
    width: units.gu(50)
    height: units.gu(80)

    AdaptivePageLayout {
        id: layout
        anchors.fill: parent

        // Set primary page
        primaryPage: listPage

        // Define column count based on available window width
        layouts: [
            PageColumnsLayout {
                when: root.width > units.gu(100)
                // Desktop / Tablet mode: Show 2 columns simultaneously
                PageColumn {
                    fillWidth: true
                }
                PageColumn {
                    fillWidth: true
                }
            },
            PageColumnsLayout {
                when: true
                // Phone mode: Single column stack
                PageColumn {
                    fillWidth: true
                }
            }
        ]

        Page {
            id: listPage
            title: "Tasks"
            // List of items
        }

        Page {
            id: detailPage
            title: "Task Details"
            // Details view
        }
    }
}
\`\`\`

When \`root.width\` exceeds 100 Grid Units, the second column displays alongside the first. On narrower screens, \`AdaptivePageLayout\` automatically pushes the detail view onto the single-column navigation stack with a slide animation.
`
        }
      ]
    },
    {
      id: "module-6-labs",
      number: "06",
      title: "Hands-on Practical Labs (Teaching Curriculum)",
      summary: "Step-by-step student exercises: Environment setup, Hello Lomiri anatomy, building a full convergent database app, and OpenStore packaging.",
      readTime: "45 min practice",
      topics: [
        {
          id: "lab-1-setup",
          title: "Lab 1: Developer Workstation Setup",
          content: `
### Lab Objectives
* Configure host operating system (Ubuntu/Debian/Fedora/Arch).
* Install Docker/Podman and Clickable.
* Put a physical device into Developer Mode or configure desktop runner.

### Step 1: Install Clickable
\`\`\`bash
# Install Docker and add your user to the docker group
sudo apt update
sudo apt install -y docker.io python3-pip pipx
sudo usermod -aG docker $USER
newgrp docker

# Install Clickable
pipx install clickable
clickable --version
\`\`\`

### Step 2: Preparing a Physical Device
1. Open **System Settings** on the Ubuntu Touch phone.
2. Navigate to **About** -> **Developer Mode**.
3. Toggle Developer Mode **ON**.
4. Connect phone via USB cable to host PC.
5. In your host terminal, execute:
\`\`\`bash
adb devices
# Output should list: <device-serial-number>   device
\`\`\`
`
        },
        {
          id: "lab-2-hello-lomiri",
          title: "Lab 2: Anatomy of a Lomiri Application",
          content: `
### Lab Objectives
* Scaffold an application using \`clickable create\`.
* Dissect every configuration and manifest file.
* Run the project natively on desktop and deploy to device.

### Step 1: Create Project
\`\`\`bash
clickable create
# Select: QML Only
# App Name: QuickTask
# Namespace: student
# Target Framework: ubuntu-sdk-20.04
\`\`\`

### Step 2: Key File Dissection

#### 1. \`manifest.json\`
The packaging metadata parsed by Click installer:
\`\`\`json
{
    "name": "quicktask.student",
    "description": "Student demonstration task manager",
    "architecture": "all",
    "title": "QuickTask",
    "hooks": {
        "quicktask": {
            "apparmor": "quicktask.apparmor",
            "desktop": "quicktask.desktop"
        }
    },
    "version": "1.0.0",
    "maintainer": "Student Developer <student@example.org>",
    "framework": "ubuntu-sdk-20.04"
}
\`\`\`

#### 2. \`quicktask.apparmor\`
Defines security policy groups:
\`\`\`json
{
    "policy_groups": [
        "networking"
    ],
    "policy_version": 20.04
}
\`\`\`

#### 3. \`quicktask.desktop\`
Lomiri launcher entry:
\`\`\`ini
[Desktop Entry]
Name=QuickTask
Exec=qmlscene qml/Main.qml
Icon=assets/logo.svg
Terminal=false
Type=Application
X-Ubuntu-Touch=true
\`\`\`

### Step 3: Run the Application
\`\`\`bash
# Run locally on your PC
clickable desktop

# Or deploy directly to connected phone
clickable
\`\`\`
`
        },
        {
          id: "lab-3-convergent-app",
          title: "Lab 3: Building a Complete Convergent Database App",
          content: `
### Lab Objectives
* Implement an offline SQLite database using QtQuick LocalStorage.
* Build a responsive two-column list/detail convergent layout.
* Implement swipe-to-delete gestures on \`ListItem\`.

### Complete \`qml/Main.qml\` Source Code

\`\`\`qml
import QtQuick 2.15
import QtQuick.LocalStorage 2.15
import Lomiri.Components 1.3

MainView {
    id: root
    objectName: "mainView"
    applicationName: "quicktask.student"
    width: units.gu(100)
    height: units.gu(75)

    // Storage DB handle
    property var db: null
    property var selectedTask: null

    ListModel {
        id: taskModel
    }

    Component.onCompleted: {
        // Initialize SQLite Database
        db = LocalStorage.openDatabaseSync("QuickTaskDB", "1.0", "Tasks Storage", 100000);
        db.transaction(function(tx) {
            tx.executeSql("CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, done INT)");
        });
        loadTasks();
    }

    function loadTasks() {
        taskModel.clear();
        db.transaction(function(tx) {
            var rs = tx.executeSql("SELECT * FROM tasks ORDER BY id DESC");
            for (var i = 0; i < rs.rows.length; i++) {
                taskModel.append({
                    taskId: rs.rows.item(i).id,
                    title: rs.rows.item(i).title,
                    done: rs.rows.item(i).done === 1
                });
            }
        });
    }

    function addTask(text) {
        if (!text.trim()) return;
        db.transaction(function(tx) {
            tx.executeSql("INSERT INTO tasks (title, done) VALUES (?, 0)", [text]);
        });
        loadTasks();
    }

    function deleteTask(id) {
        db.transaction(function(tx) {
            tx.executeSql("DELETE FROM tasks WHERE id = ?", [id]);
        });
        loadTasks();
    }

    AdaptivePageLayout {
        id: layout
        anchors.fill: parent
        primaryPage: listPage

        layouts: [
            PageColumnsLayout {
                when: root.width > units.gu(80)
                PageColumn { fillWidth: true }
                PageColumn { fillWidth: true }
            },
            PageColumnsLayout {
                when: true
                PageColumn { fillWidth: true }
            }
        ]

        Page {
            id: listPage
            title: "Quick Tasks"

            header: PageHeader {
                id: pageHeader
                title: listPage.title
                trailingActionBar.actions: [
                    Action {
                        iconName: "add"
                        text: "Add Task"
                        onTriggered: PopupUtils.open(dialogComponent)
                    }
                ]
            }

            ListView {
                anchors {
                    top: pageHeader.bottom
                    left: parent.left
                    right: parent.right
                    bottom: parent.bottom
                }
                model: taskModel

                delegate: ListItem {
                    id: itemDelegate
                    width: parent.width
                    height: units.gu(7)

                    Label {
                        anchors.verticalCenter: parent.verticalCenter
                        anchors.left: parent.left
                        anchors.leftMargin: units.gu(2)
                        text: model.title
                        font.strikeout: model.done
                        color: model.done ? "#888888" : "#222222"
                    }

                    // Swipe-to-delete action
                    trailingActions: ListItemActions {
                        actions: [
                            Action {
                                iconName: "delete"
                                onTriggered: deleteTask(model.taskId)
                            }
                        ]
                    }

                    onClicked: {
                        root.selectedTask = model;
                        layout.addPageToCurrentColumn(listPage, detailPage);
                    }
                }
            }
        }

        Page {
            id: detailPage
            title: "Task Details"
            visible: false

            header: PageHeader {
                title: "Details"
            }

            Column {
                anchors.centerIn: parent
                spacing: units.gu(2)

                Label {
                    text: root.selectedTask ? root.selectedTask.title : "No task selected"
                    font.pixelSize: units.gu(3)
                }

                Button {
                    text: "Mark Complete"
                    color: "#10b981"
                    onClicked: {
                        if (root.selectedTask) {
                            db.transaction(function(tx) {
                                tx.executeSql("UPDATE tasks SET done = 1 WHERE id = ?", [root.selectedTask.taskId]);
                            });
                            loadTasks();
                        }
                    }
                }
            }
        }
    }

    Component {
        id: dialogComponent
        Dialog {
            id: addDialog
            title: "New Task"
            TextField {
                id: inputField
                placeholderText: "Enter task name..."
            }
            Button {
                text: "Save"
                color: "#e95420"
                onClicked: {
                    addTask(inputField.text);
                    PopupUtils.close(addDialog);
                }
            }
        }
    }
}
\`\`\`
`
        },
        {
          id: "lab-4-packaging-openstore",
          title: "Lab 4: Packaging, Quality Linting & OpenStore",
          content: `
### Packaging & Linting Workflow

Before an application can be published to the OpenStore, it must pass strict automated security audits.

\`\`\`bash
# 1. Run automated AppArmor and Click metadata linter
clickable review

# Common review checks:
# - Valid JSON formatting in manifest.json and apparmor.json
# - No unauthorized unconfined permissions
# - Correct icon resolution (minimum 256x256 SVG/PNG)
# - Framework version compatibility (ubuntu-sdk-20.04)

# 2. Build production Click package
clickable build --arch arm64

# Output artifact: quicktask.student_1.0.0_arm64.click
\`\`\`

### OpenStore Distribution
1. Register developer account at \`open-store.net\`.
2. Generate API Key in user settings.
3. Publish package via Clickable:
\`\`\`bash
clickable publish --api-key YOUR_API_KEY
\`\`\`
`
        }
      ]
    },
    {
      id: "module-7-porting",
      number: "07",
      title: "Device Porting & Halium Bringup (Advanced)",
      summary: "Kernel configuration, vendor blob extraction, Halium ramdisk construction, and troubleshooting early boot.",
      readTime: "30 min read",
      topics: [
        {
          id: "porting-prerequisites",
          title: "Hardware Porting Prerequisites",
          content: `
### Target Device Requirements

To port Ubuntu Touch to an unported Android device:
1. **Unlockable Bootloader**: The manufacturer must allow flashing custom \`boot.img\` and \`recovery.img\`.
2. **Kernel Source Availability**: GPL compliance kernel source code released by the OEM.
3. **Android Base Version**:
   * Android 9 (Pie): Halium 9
   * Android 10 (Q): Halium 10
   * Android 11+ (R/S/T): Generic System Image (GSI) via Halium 11
4. **Working LineageOS / AOSP Build**: Having a working LineageOS tree provides known-good vendor blobs and device tree configurations.
`
        },
        {
          id: "kernel-configuration",
          title: "Configuring the Linux Kernel for Ubuntu Touch",
          content: `
### Running check-kernel-config

Ubuntu Touch requires specific kernel options (cgroups, namespaces, AppArmor, devtmpfs, binderfs) that standard Android kernels often disable.

The Halium project provides the \`check-kernel-config\` validation utility:

\`\`\`bash
git clone https://github.com/Halium/check-kernel-config.git
cd check-kernel-config
./check-kernel-config path/to/arch/arm64/configs/vendor_defconfig -w
\`\`\`

#### Critical Kernel Config Options:
* \`CONFIG_NAMESPACES=y\` (Required for container isolation and AppArmor)
* \`CONFIG_USER_NS=y\`
* \`CONFIG_SECURITY_APPARMOR=y\` (Mandatory for Click sandboxing)
* \`CONFIG_DEVTMPFS=y\`
* \`CONFIG_OVERLAY_FS=y\` (Used for writable filesystem overlays)
* \`CONFIG_ANDROID_BINDER_IPC=y\`
* \`CONFIG_VT=y\` (Virtual terminal for console debugging)
`
        },
        {
          id: "debugging-early-boot",
          title: "Early Boot Debugging via USB Networking",
          content: `
### Diagnosis over RNDIS / Telnet

When a new port fails to show the Lomiri lockscreen, developers debug via USB networking.

1. Halium init scripts bring up a virtual USB Ethernet adapter (RNDIS) with static IP \`10.15.19.82\`.
2. Connect to the device via Telnet or SSH from host PC:
\`\`\`bash
# Configure host USB network interface
sudo ip addr add 10.15.19.100/24 dev usb0
sudo ip link set usb0 up

# Connect via Telnet during early init
telnet 10.15.19.82
# Or SSH once userspace is active:
ssh phablet@10.15.19.82
\`\`\`

### Key Diagnostic Logs:
\`\`\`bash
# 1. Kernel ring buffer (hardware driver faults)
dmesg | grep -i -E "hybris|binder|mali|kgsl|drm"

# 2. Android system log (vendor HAL crashes)
/system/bin/logcat

# 3. Lomiri user session supervisor
journalctl -u lomiri --no-pager
\`\`\`
`
        }
      ]
    },
    {
      id: "module-8-classroom",
      number: "08",
      title: "Instructor Kit, Syllabus & Quizzes",
      summary: "Course syllabus for university/bootcamp classes, lecture slide outlines, interactive quizzes with explanations, and grading rubrics.",
      readTime: "20 min read",
      topics: [
        {
          id: "syllabus",
          title: "4-Week Intensive Course Syllabus",
          content: `
### Course Description
This course provides a comprehensive hands-on introduction to mobile operating system architecture, the Linux mobile stack, and application development targeting Ubuntu Touch.

#### Week 1: Linux Mobile Architecture & History
* Lecture 1.1: Mobile computing duopoly and the open-source alternative.
* Lecture 1.2: The Canonical convergence vision and UBports governance.
* Lecture 1.3: Architectural anatomy: Linux kernel vs Android Bionic vs GNU glibc.
* Lab 1: Developer environment setup, Clickable CLI, and Docker sysroots.

#### Week 2: Graphics, Display & Hardware Adaptation
* Lecture 2.1: The driver barrier: Why closed-source mobile GPU blobs clash with Linux.
* Lecture 2.2: libhybris in depth: Linker hooking and EGL/GLES wrapping.
* Lecture 2.3: Mir as a modern Wayland display compositor.
* Lab 2: Hello Lomiri app dissection and native desktop simulation.

#### Week 3: Sandboxing, Security & Platform APIs
* Lecture 3.1: Immutable rootfs, OTA delta updates, and system integrity.
* Lecture 3.2: AppArmor MAC profiles, Seccomp filtering, and Click confinement.
* Lecture 3.3: Content Hub: Secure cross-application data exchange.
* Lab 3: Developing a convergent two-column SQLite database application.

#### Week 4: Packaging, Porting & Distribution
* Lecture 4.1: Anatomy of Click packages and lifecycle states (cgroups freezing).
* Lecture 4.2: Device porting overview: Halium, kernel defconfigs, and bringup logs.
* Lecture 4.3: OpenStore quality reviews and publishing pipelines.
* Final Project: Build, sandbox, and package a fully functional convergent utility.
`
        }
      ]
    }
  ],
  quizzes: [
    {
      id: "q1",
      moduleId: "module-1-history",
      question: "Which phone was the world's first commercially sold Ubuntu Touch smartphone in 2015?",
      options: [
        "Meizu PRO 5 Ubuntu Edition",
        "BQ Aquaris E4.5 Ubuntu Edition",
        "Ubuntu Edge Prototype",
        "Nexus 4 Community Port"
      ],
      correctAnswer: 1,
      explanation: "The BQ Aquaris E4.5 Ubuntu Edition was released in February 2015 in Europe as the first commercially available phone running Ubuntu Touch."
    },
    {
      id: "q2",
      moduleId: "module-2-architecture",
      question: "What is the primary role of libhybris in the Ubuntu Touch system stack?",
      options: [
        "It translates iOS Objective-C code to C++",
        "It allows standard glibc Linux programs to load and call Android Bionic binary driver blobs without ABI crashes",
        "It acts as an emulator for running Windows executables on ARM",
        "It replaces the Linux kernel with a microkernel"
      ],
      correctAnswer: 1,
      explanation: "libhybris wraps Android's Bionic dynamic linker inside a GNU/Linux glibc process, translating ABIs so that native Linux software (like Qt and Mir) can use proprietary Android GPU, camera, and radio drivers."
    },
    {
      id: "q3",
      moduleId: "module-2-architecture",
      question: "What display server protocol does modern Mir 2.x implement in Ubuntu Touch?",
      options: [
        "Wayland protocol",
        "Legacy X11 protocol only",
        "DirectFB protocol",
        "Android SurfaceFlinger IPC"
      ],
      correctAnswer: 0,
      explanation: "While Mir originally used a proprietary Canonical IPC protocol, modern Mir (Mir 2.x) was re-architected as a standard, compliant Wayland display server and compositor library."
    },
    {
      id: "q4",
      moduleId: "module-3-security",
      question: "How does an Ubuntu Touch application securely access a user's picture without global filesystem permissions?",
      options: [
        "By asking for root sudo permission",
        "By using Content Hub, where the trusted system compositor displays a file picker on behalf of the user",
        "By reading the entire /userdata partition directly",
        "By disabling AppArmor in clickable.yaml"
      ],
      correctAnswer: 1,
      explanation: "Content Hub is a secure inter-app broker. The system compositor handles the file selection UI, granting the application access strictly to the single chosen file descriptor."
    },
    {
      id: "q5",
      moduleId: "module-4-clickable",
      question: "Why does Clickable use Docker or Podman containers during app builds?",
      options: [
        "To compile code inside Windows virtual machines",
        "To run complete Android emulator instances",
        "To provide isolated, pre-configured Ubuntu Touch sysroots for clean cross-compilation across architectures",
        "To bypass AppArmor security rules"
      ],
      correctAnswer: 2,
      explanation: "Clickable uses Docker/Podman containers so developers don't have to manually configure cross-compilation sysroots, toolchains, or Qt libraries on their host machine."
    },
    {
      id: "q6",
      moduleId: "module-5-app-dev",
      question: "What unit of measurement must always be used when designing responsive QML interfaces for Ubuntu Touch?",
      options: [
        "Raw physical pixels (px)",
        "Inches (in)",
        "Grid Units via units.gu(n)",
        "Points (pt)"
      ],
      correctAnswer: 2,
      explanation: "Grid Units (units.gu) automatically scale layout dimensions across varying screen densities and form factors, ensuring consistent physical size on all screens."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CURRICULUM;
}
