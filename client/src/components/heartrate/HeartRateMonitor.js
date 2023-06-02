import React, { useState, useEffect } from 'react';

const  HeartRateMonitor = () => {
  const [heartRate, setHeartRate] = useState(null);

  useEffect(() => {
    // Simulating data retrieval from the heart rate monitor
    const fetchHeartRateData = () => {
      // Replace this with the actual logic to retrieve heart rate data from the monitor
      const simulatedHeartRate = Math.floor(Math.random() * (150 - 60 + 1) + 60);
      setHeartRate(simulatedHeartRate);
    };

    // Fetch heart rate data every 2 seconds
    const intervalId = setInterval(fetchHeartRateData, 2000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Heart Rate Monitor</h2>
      {heartRate !== null ? (
        <p>Heart Rate: {heartRate} bpm</p>
      ) : (
        <p>Loading heart rate data...</p>
      )}
    </div>
  );
};


export default HeartRateMonitor;
