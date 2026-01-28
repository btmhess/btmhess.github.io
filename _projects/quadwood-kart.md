---
layout: project
title: "Quadwood Go-Kart"
project_slug: quadwood-kart

# Sorting metadata
favorite_order: 15
project_date: 2025-7
duration: 8
# status options: planning , active , paused , complete_in_use , complete_storage , complete_abandoned
status: complete_in_storage
budget: 3786

# organization options: Personal, FSAE, Sandia
organization: Personal

goal: "Design and build a fun go-kart to study and implement 4-wheel-drive control algorithms."

requirements: |
  Four independant motors with controllers advanced enough for real-time traction-control, torque vectoring, and regenerative braking.

result: |
  The project is currently complete and in storage. After implementing traction control, torque vectoring, and live user configuration of driving behavior the project reached the bounds of its usefulness for the time being.

specifications: |
  Overview:<br>
      - Fully electric, four-wheel-drive vehicle<br>
      - Hubmotor based drivetrain with independent wheel control<br>
      - VESC-based motor control network with CANBus communication<br>
      - Custom battery system assembled from recycled cells<br>
      - Purpose-built chassis<br>
      - Fully independent suspension<br><br>

  Drivetrain:<br>
      - Four 48v three phase permanent magnet brushless DC hub motors (20 in e-bike conversion motors)<br>
      - Integrated hall-effect sensors for rotor position feedback<br>
      - Four Flipsky 75100 Pro V2.0 VESC-based motor controllers with canbus communication<br>
      - Field-oriented control (FOC) with per-wheel torque and speed control<br>
      - Controllers networked over CANBus for synchronized control and telemetry<br>
      - Foot-operated throttle pedal used as primary driver input<br>
      - DOT-rated Shinko SR 714 moped tires<br><br>

  Tractive battery:<br>
      - Battery system assembled from recycled modules <br>
      - Primary pack constructed from 2x 12s4p A123 26650 LiFePO cells<br>
      - Active-balancing BMS rated for up to 150 A continuous current<br>
      - BMS with serial, canbus, bluetooth, and wifi communication for cell monitoring and diagnostics<br>
      - XT-90s connectors used throughout for high-current connections<br><br>

  Chassis:<br>
      - Primary structure constructed from standard hardware-store dimensional lumber (2×6 boards)<br>
      - Fastened using common construction screws and steel corner brackets<br>
      - Layout and dimensions optimized around a single driver (myself) with no adjustability<br>
      - Chassis prioritizes ease of modification and rebuild over weight or aesthetics<br>
      - Cobra Suzka racing bucket seat mounted directly to wooden frame<br><br>

  Suspension:<br>
      - Fully independent suspension at all four corners<br>
      - Suspension arms fabricated from adjustable steel heim-joint tensioning rods<br>
      - Custom laser-cut and bent aluminum suspension mounting brackets<br>
      - Use of automotive-grade fasteners, washers, and nylon-insert locknuts throughout<br>
      - Rear suspension damped using 320 mm motorcycle/go-kart shock absorbers<br>
      - Suspension geometry adjustable via threaded rod ends for alignment and experimentation<br><br>

  Steering:<br>
      - Rack-and-pinion steering system adapted from a small go-kart steering kit<br>
      - Steel steering shaft with direct mechanical linkage (no assist)<br>
      - Magnetic steering angle sensor for control system input<br><br>

  Electrical and controls:<br>
      - CANBus used for inter-controller communication between VESCs and Teensy 4.1 control board<br>
      - Arduino-based control system planned for higher-level vehicle logic<br>
      - JST, XT90S, MT60, and Micro-Fit connectors used for modular wiring<br><br>

  Design philosophy:<br>
      - Built using readily available parts, surplus components, and online marketplace finds<br>
      - Design choices favor learning, iteration, and repairability over efficiency<br>
      - Intentionally “rough but functional” construction aesthetic<br>
      - Project serves as a rolling test platform rather than a finished product<br><br>

  Cost breakdown:<br>
      - Total project cost (parts used in final iteration): ~$3,786<br>
      - $1,820  (48%) Drivetrain and power<br>
      - $660    (17%) Battery and charging<br>
      - $1,430  (38%) Suspension and steering<br>
      - $230    (6%)  Chassis and structure<br>
      - $190    (5%)  Electrical and miscellaneous<br>

related_projects:
- formula-sae
- goldwing
---