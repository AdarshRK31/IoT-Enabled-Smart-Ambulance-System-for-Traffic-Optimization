#include <WiFi.h>
#include "ThingSpeak.h"
const char* ssid = "Namitha's Iphone";   
const char* password = "Namitha@071004";   
WiFiClient client;
unsigned long myChannelNumber = 2867826;
const char * myWriteAPIKey = "CHY2SFYLF6V43QGH";
unsigned long lastTime = 0;
unsigned long timerDelay = 30000;
float pulse = 10.0;
float ecg = 10.0;
float oxy_level = 10.0;
void setup() {
  Serial.begin(115200);  
  WiFi.mode(WIFI_STA);     
  ThingSpeak.begin(client);  
}
void loop() {
  if ((millis() - lastTime) > timerDelay) {  
    if(WiFi.status() != WL_CONNECTED){
      Serial.print("Attempting to connect");
      while(WiFi.status() != WL_CONNECTED){
        WiFi.begin(ssid, password); 
        delay(5000);     
      } 
      Serial.println("\nConnected.");
    }
    pulse = analogRead(36); 
    ecg = analogRead(36);
    oxy_level = analogRead(36);
    Serial.print("Pulse Rate: ");
    Serial.println(pulse);
    Serial.print("ECG level: ");
    Serial.println(ecg);
    Serial.print("Oxygen level: ");
    Serial.println(oxy_level);
    ThingSpeak.setField(1, pulse);
    ThingSpeak.setField(2, ecg);
    ThingSpeak.setField(3, oxy_level);    
    int x = ThingSpeak.writeFields(myChannelNumber, myWriteAPIKey);

    if(x == 200){
      Serial.println("Channel update successful.");
    }
    else{
      Serial.println("Problem updating channel. HTTP error code " + String(x));
    }

    lastTime = millis();
  }
}
