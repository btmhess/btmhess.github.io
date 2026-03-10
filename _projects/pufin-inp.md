---
layout: project
title: "PUFIN INP Collector"
project_slug: pufin-inp

# Sorting metadata
favorite_order: 25
project_date: 2024-11
duration: 16
# status options: planning , active , paused , complete_in_use , complete_storage , complete_abandoned
status: complete_in_use
budget: 7500

# organization options: Personal, FSAE, Sandia
organization: Sandia

goal: "Design and build a lightweight airborne instrument capable of collecting vertically resolved atmospheric aerosol samples for ice nucleating particle (INP) analysis using tethered balloon systems."

requirements: |
  Collect aerosol samples at multiple altitudes during a single tethered balloon flight.<br>
  Operate reliably in harsh environmental conditions including low temperature, low pressure, and high UV exposure.<br>
  Remotely monitor system status and sensor data from the ground during flight.<br>
  Maintain a lightweight payload (<7 kg) compatible with ARM Tethered Balloon System payload limits.<br>
  Provide controlled airflow through multiple filters with accurate flow measurement.<br>
  Support sample collection sufficient for detecting INP concentrations as low as ~10^-3 L^-1.<br>
  Operate on battery power for at least 3 hours to match typical balloon flight durations.<br>
  Integrate with ARM instrumentation and operational procedures.

result: |
  <a href="https://egusphere.copernicus.org/preprints/2025/egusphere-2025-5000/" target="_blank">Article Documenting Instrument</a><br>
  PUFIN (Profiling Upper altitudes For Ice Nucleation) successfully demonstrated routine airborne sampling of atmospheric ice nucleating particles across multiple altitude layers during tethered balloon flights.<br>
  The system collects up to three aerosol samples plus a field blank during a single flight, enabling vertically resolved measurements of INP concentrations.<br>
  Deployments during Atmospheric Radiation Measurement (ARM) campaigns in Maryland and Alabama demonstrated reliable operation and the ability to detect INPs down to approximately 10^-3 L^-1 within sampling periods of roughly 30–60 minutes.<br>
  The instrument improved substantially over the previous "IcePuck" system by increasing airflow and sample volume, allowing shorter sampling times and more altitude measurements per flight.<br>
  Data collected with PUFIN are now publicly available through the ARM Data Center and are being used to study vertical variability in aerosol-cloud interactions.

specifications: |
  Weight (flight-ready): ~6.1 kg<br>
  Power system: 28.8 V 14 Ah lithium battery pack (8S4P configuration)<br>
  Battery life: ~3.5 hours depending on flow rate and environmental conditions<br>
  Pump: ScrollLabs SVF-E0-50P dry scroll pump<br>
  Maximum airflow: ~11 standard liters per minute with filter installed<br>
  Flow sensor: Sensirion SFM4300 (0–50 sL/min range)<br>
  Sampling filters: 47 mm 0.2 μm polycarbonate membrane filters<br>
  Filter capacity: 3 sampling filters + 1 field blank per flight<br>
  Valves: 4 stainless steel solenoid valves (individually controlled)<br>
  Control system: Teensy 4.1 microcontroller with analog pump control via DAC<br>
  Communications: NRF24L01 2.4 GHz RF transceiver with 9 dBi antenna<br>
  Sensors: iMet-XQ2 atmospheric sensor (pressure, temperature, humidity, GPS)<br>
  Data logging: onboard SD card plus real-time telemetry to ground station<br>
  Enclosure: UV-resistant ASA 3D-printed housing with integrated cooling fan<br>
  Structural backing: aluminum ground distribution plate for mechanical mounting<br>
  Operating platform: DOE ARM tethered balloon system (TBS), typically flown up to ~1 km altitude

related_projects:
- goldwing
---