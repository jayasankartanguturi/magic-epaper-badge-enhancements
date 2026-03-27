async function connectBadge() {
  try {
    const device = await navigator.bluetooth.requestDevice({
      filters: [{ namePrefix: "EPD" }]
    });

    const server = await device.gatt.connect();
    console.log("Connected to badge!");
  } catch (error) {
    console.log("Error:", error);
  }
}
