#include <TinyGPS++.h>
#include <HardwareSerial.h>

static const int RXPin = 16, TXPin = 17;
static const uint32_t BaudRate = 9600;

TinyGPSPlus gps;
HardwareSerial gpsSerial(2); // Using Serial2 for GPS

void setup() {
  Serial.begin(115200);
  gpsSerial.begin(BaudRate, SERIAL_8N1, RXPin, TXPin);
}

void loop() {
  while (gpsSerial.available() > 0) {
    gps.encode(gpsSerial.read());
    
    if (gps.location.isUpdated()) {
      Serial.print("Latitude: ");
      Serial.println(gps.location.lat(), 6);
      Serial.print("Longitude: ");
      Serial.println(gps.location.lng(), 6);
    }
  }
}