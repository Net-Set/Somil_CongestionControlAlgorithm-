// Simulated network congestion control algorithm
class CongestionControlAlgorithm {
  constructor() {
    this.windowSize = 1; // Initial congestion window size
    this.threshold = 16; // Threshold to enter congestion avoidance phase
  }

  // Called when a packet is acknowledged
  handlePacketAcknowledgment() {
    if (this.windowSize < this.threshold) {
      // Slow start phase
      this.windowSize *= 2;
    } else {
      // Congestion avoidance phase
      this.windowSize += 1 / this.windowSize;
    }
  }

  // Called when a packet loss is detected
  handlePacketLoss() {
    this.threshold = Math.max(Math.floor(this.windowSize / 2), 1);
    this.windowSize = 1;
  }
}

// Usage example
const congestionControl = new CongestionControlAlgorithm();
console.log(`Initial window size: ${congestionControl.windowSize}`);
congestionControl.handlePacketAcknowledgment();
console.log(`Window size after ACK: ${congestionControl.windowSize}`);
congestionControl.handlePacketLoss();
console.log(`Window size after packet loss: ${congestionControl.windowSize}`);
