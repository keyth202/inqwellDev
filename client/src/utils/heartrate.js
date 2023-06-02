// Check if the browser supports the Web Bluetooth API
if ('bluetooth' in navigator) {
    // Request access to Bluetooth devices
    navigator.bluetooth.requestDevice({
      filters: [{ services: ['heart_rate'] }]
    })
    .then(device => {
      // Connect to the selected device
      return device.gatt.connect();
    })
    .then(server => {
      // Get the Heart Rate Service
      return server.getPrimaryService('heart_rate');
    })
    .then(service => {
      // Get the Heart Rate Measurement Characteristic
      return service.getCharacteristic('heart_rate_measurement');
    })
    .then(characteristic => {
      // Start receiving heart rate data
      characteristic.addEventListener('characteristicvaluechanged', handleHeartRateData);
      return characteristic.startNotifications();
    })
    .catch(error => {
      console.error('Error:', error);
    });
  } else {
    console.error('Web Bluetooth API is not supported in this browser');
  }
  
  // Handle received heart rate data
  function handleHeartRateData(event) {
    const characteristic = event.target;
    const heartRateValue = characteristic.value.getUint8(1);
    console.log('Heart rate:', heartRateValue);
  }
  