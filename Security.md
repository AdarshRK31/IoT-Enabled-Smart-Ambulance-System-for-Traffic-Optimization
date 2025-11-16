# 24CYS333 - Internet of Things
![](https://img.shields.io/badge/Batch-22CYS-lightgreen) ![](https://img.shields.io/badge/UG-blue) ![](https://img.shields.io/badge/Subject-IoT-blue)
<br/>
![](https://img.shields.io/badge/Lecture-2-orange) ![](https://img.shields.io/badge/Practical-3-orange) ![](https://img.shields.io/badge/Credits-3-orange) <br/>

## IoT#01 - IoT-Driven Smart Ambulance System for Real-Time Traffic Management and Emergency Response Optimization

![](https://img.shields.io/badge/Member-Adarsh_R_K-gold) ![](https://img.shields.io/badge/Member-Namitha_Sudhishkumar_Nair-gold) ![](https://img.shields.io/badge/Member-Anagh_Shaji-gold) <br/> 

A Smart Ambulance IoT application requires secure and confidential communication to protect patient data, ensure real-time monitoring, and enable seamless coordination between medical devices, ambulances, and hospitals.

## Application Layer Protocols (Secure Data Exchange)
- *MQTTS* – Secure real-time patient vitals monitoring with encrypted communication between medical sensors and cloud/hospital servers.
- *CoAP with DTLS* – Lightweight protocol ensuring secure communication between IoT medical devices and emergency servers over low-power networks.
- *AMQP (Advanced Message Queuing Protocol)* – Ensures secure and reliable message delivery between ambulance devices and hospital servers.
- *HTTPS (Hypertext Transfer Protocol Secure)* – Secure access to EMRs (Electronic Medical Records) for doctors receiving patient data from the ambulance.

## Network Layer Security (Ensuring Secure Data Routing)
- *6LoWPAN with AES-CCM* – Secure communication for low-power medical sensors inside the ambulance.

## Link Layer Security (Protecting Wireless Connections)
- *Wi-Fi WPA3* – Encrypts hospital and ambulance Wi-Fi networks, preventing unauthorized access to sensitive medical data.

## Key Management & Authentication (Access Control)
- *OAuth 2.0 + OpenID Connect* – Ensures secure access to patient data by authenticated doctors and hospital staff.
- *Zero Trust Model for IoT* – Every device in the ambulance (medical sensors, GPS trackers, cameras) must be continuously authenticated before communication.

## Emergency-Specific Security Considerations
- *End-to-End Encryption (E2EE)* – Ensures complete confidentiality from ambulance sensors to hospital systems.
- *Resilient Communication* – Secure fallback mechanisms using LoRaWAN or Satellite Communication in case of network failures.
- *Tamper Detection* – Ensures integrity of patient data through cryptographic checksums.
