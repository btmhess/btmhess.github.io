---
layout: project
title: "Goldwing Tractive Battery"
project_slug: goldwing-battery

# Sorting metadata
favorite_order: 6
project_date: 2023-1
duration: 28
# status options: planning , active , paused , complete_in_use , complete_storage , complete_abandoned
status: complete_in_use
budget: 2337

# organization options: Personal, FSAE, Sandia
organization: Personal

goal: "Custom tractive battery for electric conversion of a 1985 Honda Goldwing."

requirements: |
  This battery was built to serve as the main power source for the Goldwing conversion. It needed the capacity and discharge capibility to support the needs of the motorcycle tractive system.

result: |
  After 6000 miles of use, the battery is showing no signs of degradation, and still achieves around 50 miles of range.

specifications: |
  Overview: <br>
      - 28s28p configuration of EVE 2200mAh 18650 lithium battery cells.<br>
	  - Total pack 103.6v 61.6ah nominal. 6.4kWh capacity.<br>
      - 1200W charger: charges from standard outlet in 6 hours<br>
  Architecture: <br>
      - 4x 14s14p modules, 2 in paralel 2 in series
	  - Each set of paralell modules has 1 bms, both bms coordinate control of system.
	  - Precharge handled externally, bms can disconnect contactors for safety.

related_projects:
  - goldwing
---