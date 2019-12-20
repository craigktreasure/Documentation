---
uid: Meadow.Foundation.Displays.ePaper.Il0376F
remarks: *content
---

| ePaper  |             |
|---------|-------------|
| Status  | Working     |
| Source code        | [GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.ePaper)            |
| NuGet package      | ![NuGet](https://img.shields.io/nuget/v/Meadow.Foundation.Displays.ePaper.svg?label=NuGet)
| | |

The **IL0376F** is a tri-color display controller for ePaper displays. Data is sent to the controller via SPI and only supports full screen updates.

The IL0376F is most commonly paired with a a tri-color 1.54" 200x200 pixel display.

[Sample projects available on GitHub](https://github.com/WildernessLabs/Meadow.Foundation/tree/master/Source/Meadow.Foundation.Peripherals/Displays.ePaper/Samples)

### Wiring Example

 To control a IL0376F from Meadow, connect the following:

| IL0376F  | Meadow Pin |
|---------|------------|
| BUSY    | Dxx        |
| RST     | Dxx        |
| DC      | Dxx        |
| CS      | Dxx        |
| CLK     | SCK        |
| DIN     | MOSI       |
| GND     | GND        |
| VCC     | 3V3        |

If your display does not include any of the above pins, they can be omitted. Pass `NULL` into the constructor for the missing pin(s).