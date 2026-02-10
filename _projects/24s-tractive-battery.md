---
layout: project
title: "24s Tractive Battery"
project_slug: 24s-tractive-battery

# Sorting metadata
favorite_order: 20
project_date: 2024-12
duration: 16
# status options: planning , active , paused , complete_in_use , complete_storage , complete_abandoned
status: complete_in_storage
budget: 1143

# organization options: Personal, FSAE, Sandia
organization: Personal

goal: "Design and Build a new tractive battery for the goldwing conversion"

requirements: |
  Drop-in replacemen tractive battery for use on the goldwing conversion. Higher capacity and dischcharge capability as an upgrade.

result: |
  The tractive battery pack is complete and functional, but not integrated into any vehicle.<br>
  The resulting assembly is slightly too large to fit in the motorcycle without modifying the bike frame, and the additional range was not needed.

specifications: |
  24s tractive battery built from surplus Suwonda 4s 150ah lithium-ion battery modules.<br>
  Cells: 150ah 3.7v. Continuous charge/discharge 150a. Pulse discharge (10s) 450a. Voltage 4.2v to 2.8v per cell.<br>
  4s Module: 26lbs, 14"x6"x4.5". M6 bus-bar terminals.<br>
  BMS: Daly/100Balance 300a 24s smart bms with serial/can/bluetooth/rs485 communication.<br>
  Pack: 88.8v 150ah nominal, 13.3kWh capacity. 67.2v min 100.8v max. 13.2kw continuous discharge, 45kw max discharge. 164lbs total.<br>
  Structure plates: Laser cut 0.25in aluminum 5052 plates.<br>
  Temperature monitoring: 4x ads1115 analog-to-digital converters attached to thermistors integrated in modules. Central control from a teensy 4.1.<br>
  Charger: 100.8v 40a dumb charger. Charge limit internal to charger, safety shutoff by bms.

related_projects:
- goldwing
---