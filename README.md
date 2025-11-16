# 24CYS333 - Internet of Things
![](https://img.shields.io/badge/Batch-22CYS-lightgreen) ![](https://img.shields.io/badge/UG-blue) ![](https://img.shields.io/badge/Subject-IoT-blue)
<br/>

## IoT#01 - IoT-Driven Smart Ambulance System for Real-Time Traffic Management and Emergency Response Optimization 

![](https://img.shields.io/badge/Member-Adarsh_R_K-gold) ![](https://img.shields.io/badge/Member-Namitha_Sudhishkumar_Nair-gold) ![](https://img.shields.io/badge/Member-Anagh_Shaji-gold) <br/> 
![](https://img.shields.io/badge/SDG-3-darkgreen) ![](https://img.shields.io/badge/SDG-9-darkgreen) <br/> 
![](https://img.shields.io/badge/AIC_Raise_Hackathon-GM-gold) <br/>
![](https://img.shields.io/badge/Anokha_TechFair-Recommended-black) ![](https://img.shields.io/badge/Publication-In_Progress-gold) <br/>
![](https://img.shields.io/badge/IA-13944-purple) ![](https://img.shields.io/badge/NIR-IR2025--997967-purple)  

------

### Problem Statement
Emergency ambulances face delays due to traffic congestion and lack of efficient communication with hospitals and traffic systems, significantly impacting patient outcomes. For instance, studies estimate that in urban areas, ambulance response times can be delayed by 10-30 minutes due to traffic, with a 2019 report from the World Health Organization noting that such delays contribute to a 10% increase in mortality rates for critical cases like cardiac arrests, where every minute of delay reduces survival chances by 7-10%.  Additionally, poor coordination with hospitals often leads to unprepared staff and equipment, further worsening outcomes—research from India in 2022 showed that 25% of ambulance arrivals faced hospital-side delays due to lack of prior communication. This project aims to design an IoT-based Smart Ambulance System for optimized routing, real-time traffic management, and seamless communication with hospitals to address these critical challenges.

*Objective:*  
To develop a Smart Ambulance System using IoT technologies to:  
- Optimize ambulance routing with real-time traffic updates.  
- Facilitate seamless communication with hospitals for patient data sharing and arrival notifications.  

*Impact and Metrics:*  
- Reduce average ambulance response time by *20%*.  
- Improve patient survival rates in emergencies by *15%*.  
- Enhance the efficiency of emergency medical services while ensuring data security and scalability.
   
-----
### Hardware Requirements

| Available | Components               | Purpose                                                                                         |
|:---------:|---------------|:-----------------------------------------------------------------------------------------------|
|   ✅      | Arduino ESP32 [ASC-CSE IoT 2.0]             | Acts as the central microcontroller for interfacing sensors and modules.     |
|           | Heart Rate Sensor (PPG) - MAX30100/MAX30102 | Measures heart rate and oxygen levels.                                      |
|   ✅      | Camera Module - PiCam    | Provides real-time visual feedback for monitoring traffic conditions and patient status.       |
|           | IoT-Enabled Traffic Lights (RGY LED Indicators) | Simulates dynamic signal prioritization.                                |
|           | GPS Module - NEO-6M      | Enables accurate real-time location tracking.                                                 |
|   ✅     |   ESP8266 Wi-Fi Module     | Ensures low-latency communication with IoT servers.                                           |
|          | LiPo Battery             | Portable power source ensuring system operation during transit.                               |
|          | GSM/GPRS Module          | Facilitates reliable long-distance communication with hospitals and traffic systems.          |

###  Software Requirements

| ✅ Available | Components                         | Purpose                                                                 |
|-------------|------------------------------------|-------------------------------------------------------------------------|
| ✅          | **Arduino IDE**                    | For writing, compiling, and uploading code to the Arduino/GPS modules. |
| ✅          | **Google Firebase / AWS IoT Core** | For real-time data storage and cloud communication.                     |
| ✅          | **MQTT Protocol / HTTP APIs**      | For sending sensor data between ambulance, traffic signals, and hospitals. |
| ✅          | **React Native**                   | For developing the ambulance tracking mobile app.                       |
| ✅          | **React.js**                       | For creating a hospital dashboard to monitor patient vitals.           |
| ✅          | **Node.js (Express)**              | Backend for handling real-time communication between ambulances and hospitals. |
| ✅          | **Google Maps API**                | For real-time GPS tracking and route optimization.                      |

-----
### Literature Survey 
#### *Existing Solutions and Challenges*  

1. *IoT-Enabled Emergency Response Systems:*  
   - *Features:* Integrated technologies such as GPS, GSM, and health monitoring sensors for automated emergency call generation and patient vitals tracking.  
   - *Strengths:* Quick detection of emergencies and basic communication with emergency response teams.  
   - *Challenges:* Struggles with scalability, particularly in urban areas with dense traffic. Resource optimization for multiple ambulances operating simultaneously remains unaddressed.  
   - *Case Study:* A 2021 implementation in a metropolitan city demonstrated a 15% reduction in response times but failed to adapt to increased traffic loads during peak hours.  

2. *Smart Ambulance Technologies:*  
   - *Features:* Advanced routing algorithms using real-time sensors, robust communication protocols, and AI-based navigation to prioritize ambulance paths.  
   - *Strengths:* Enhanced efficiency in route optimization and emergency alerts.  
   - *Challenges:* Interoperability with existing traffic management systems and hospitals is limited, leading to delays. System complexity often requires high maintenance costs.  
   - *Statistics:* Research shows a 20% improvement in patient survival rates in controlled environments, but only a 5% improvement in real-world scenarios due to interoperability issues.  

3. *Telemedicine and Remote Monitoring:*  
   - *Features:* Wearable devices and sensors transmit patient vitals to hospitals in real time, enabling pre-hospital preparation.  
   - *Strengths:* Facilitates better hospital preparedness and faster triage upon arrival.  
   - *Challenges:* Highly dependent on stable and high-speed communication networks, which are unreliable in many regions. Data security concerns arise due to the sensitive nature of health information.  
   - *Example:* A pilot project in rural areas improved early diagnosis rates by 30% but faced frequent interruptions due to network instability.  

#### *Identified Gaps*  
- *Dynamic Traffic Prioritization:* Existing systems lack real-time integration with traffic management infrastructure to dynamically prioritize ambulances at traffic signals.  
- *Secure, Real-Time Communication:* Most solutions do not address secure, low-latency communication between ambulances, hospitals, and traffic authorities.  
- *Scalability and Interoperability:* Current technologies often fail to scale across urban and rural settings or integrate seamlessly with legacy systems.  
- *Energy Efficiency:* Battery-powered devices in these systems are not optimized for prolonged operations, leading to frequent downtime.  

#### *How Our Approach Fills These Gaps*  
- *IoT-Enabled Traffic Lights:* Real-time signal prioritization to ensure ambulances face minimal delays at intersections.  
- *Enhanced Communication Protocols:* Integration of ESP8266 and GSM modules for secure, low-latency data exchange between all stakeholders.  
- *Blockchain Integration (Future Enhancement):* Ensures secure handling of sensitive patient and system data hwhich will be integrated in the mobile interface.  
- *Scalable and Modular Design:* Hardware and software are designed to integrate easily with existing traffic systems and public emergency services like the 108 network.
-----  
### Proposed Solution: Smart Ambulance System

#### *Overview*  
The Smart Ambulance System leverages IoT technologies to optimize emergency medical services by addressing navigation inefficiencies, enhancing real-time communication, and dynamically prioritizing ambulances at traffic signals. The system incorporates secure data transmission, scalability, and seamless integration with existing public services.  

*Key Components in the Architecture:*  
- *Sensors and Modules:* GPS, heart rate sensor, and camera module collect real-time data.  
- *Communication Layer:* ESP8266 and GSM modules transmit data between ambulances, traffic signals, and hospitals.  
- *Traffic Management System:* IoT-enabled traffic lights prioritize ambulances at intersections.  
- *Hospital Server:* Receives patient data and estimated arrival times, enabling preparedness for incoming emergencies.  
- *Cloud Server:* Central hub for data storage, processing, and analytics, ensuring scalability and seamless integration.
   
#### *Security Measures*  
To ensure the confidentiality, integrity, and availability of data:  
1. *Encryption Protocols:*  
   - All data transmissions are encrypted using Transport Layer Security (TLS).  
   - Sensitive patient and location data are stored securely on cloud servers with AES-256 encryption.  
2. *Authentication and Access Control:*  
   - Only authorized personnel can access the system via secure authentication mechanisms.  
3. *Regular Security Audits:*  
   - Continuous vulnerability assessments and penetration testing to safeguard against cyber threats.  

#### *Scalability*  
1. *Modular Design:*  
   - The system is designed with modular hardware and software components, enabling easy addition of new ambulances, sensors, or devices.  
2. *API Integration:*  
   - Supports APIs for public emergency services like 108, allowing real-time synchronization and resource allocation across multiple ambulances.  
3. *Dynamic Traffic Management:*  
   - Scalable algorithms dynamically adapt to traffic conditions, handling multiple ambulances simultaneously in urban environments.  
4. *Cloud-Based Data Processing:*  
   - Utilizes cloud computing to process large volumes of data, enabling efficient scaling without hardware constraints.  

#### *Advantages of the Proposed Solution*  
- *Enhanced Response Times:* Real-time data collection and dynamic traffic prioritization minimize delays.  
- *Improved Communication:* Secure and reliable data exchange between ambulances, traffic systems, and hospitals ensures better coordination.  
- *Future-Ready:* Scalable design and advanced technologies like blockchain (future enhancement) make the system adaptable to evolving needs.  
- *Sustainability:* Energy-efficient hardware and optimization algorithms reduce the environmental impact.
-----  
### *Implementation Plan*  

#### *1. Setup:*  
   - *Hardware Integration:*  
     - Connect and configure key components such as the PiCam for real-time monitoring, GPS module for location tracking, and LiPo battery for portable power.  
     - Ensure proper interfacing of sensors (e.g., heart rate sensor) with the Arduino Uno and communication modules (ESP8266 and GSM).  

#### *2. Software Configuration:*  
   - *Communication Protocols:*  
     - Install and configure Mosquitto MQTT broker to enable low-latency and reliable data exchange between ambulances, traffic management systems, and hospitals.  
   - *Alerts and Routing:*  
     - Integrate Twilio API for real-time SMS alerts to hospitals and traffic authorities.  
     - Configure Waze Maps API for optimized navigation, considering real-time traffic data and ambulance-specific priorities.  
   - *Data Management:*  
     - Set up cloud infrastructure for data storage, analysis, and retrieval to ensure seamless scalability and operational efficiency.  

#### *3. Testing:*  
   - *Controlled Environment Tests:*  
     - Simulate high-traffic scenarios by introducing virtual congestion points on routes to evaluate routing algorithms.  
     - Test sensor reliability under varying conditions, such as:  
       - *High Traffic Density:* Validate the system's ability to dynamically prioritize ambulances at simulated intersections.  
       - *Sensor Failures:* Simulate GPS or heart rate sensor malfunctions to ensure fail-safe mechanisms (e.g., fallback routes or manual overrides).  
       - *Network Latency:* Measure system performance under low-connectivity conditions to ensure reliable communication via GSM modules.  
     - Measure metrics such as response time improvement, routing accuracy, and system reliability.  

#### *4. Deployment:*  
   - *Prototype Development:*  
     - Deploy the system on a functional prototype ambulance with fully integrated hardware and software components.  
     - Option 1: Use a scaled-down model to demonstrate proof of concept and operational flow in simulated urban environments.  
     - Option 2: Implement on a fully operational vehicle for live trials in real-world conditions, in collaboration with local traffic management and healthcare facilities.  
   - *Field Trials:*  
     - Conduct real-world testing in collaboration with emergency response teams to validate system effectiveness in reducing delays and improving communication.  
     - Collect data on performance metrics such as time saved, patient outcomes, and system scalability.

### *5.Case study*
* A 56-year-old male experiences a sudden cardiac arrest at a public park. Bystanders immediately call emergency services, and an IoT-enabled smart ambulance is dispatched to the scene.*
 -The smart ambulance is equipped with real-time monitoring sensors that collect the patient’s vital signs, including ECG, heart rate, oxygen saturation, and blood pressure. 
 -Collected data is transmitted to a cloud/web based platform and alert hospital
 specialists.
 -GPS tracking and Route Optimization determine the fastest route to the hospital based on real-time traffic conditions.
 - The hospital receives real-time patient vitals, allowing staff to prepare the necessary
 medical team before arrival.
 - Optimized ambulance routing reduces response time, increasing survival chances.

### *Architectural Diagram*

<p align="center">
   <img src="https://github.com/user-attachments/assets/c00dc8f2-cdee-4c8c-acb4-ef9cde73364f" width=800 />
</p>

#### *Future Steps:*  
- Gather feedback from field trials to refine the system further.  
- Expand testing to different geographic regions with diverse traffic and communication conditions.  
-----
### Future Enhancements

1. *Vehicle-to-Vehicle (V2V) Communication:*  
   - *Feasibility:* V2V communication can improve traffic navigation and ambulance prioritization. It requires a robust network infrastructure and collaboration with traffic authorities.  
   - *Timeline:* Expected implementation within 12-18 months after prototype testing, dependent on network and regulatory factors.  
   - *Priority:* High, as it directly impacts real-time ambulance coordination and response time optimization.

2. *Advanced Image Recognition for Pedestrians and Traffic Lights:*  
   - *Feasibility:* This technology requires machine learning algorithms and camera systems with adequate processing power. It may need substantial resources and fine-tuning to operate in real-time.  
   - *Timeline:* Implementation in 6-12 months, after initial tests on traffic management and navigation systems.  
   - *Priority:* Medium, as it enhances response time, but can be introduced after V2V communication is integrated.

3. *Blockchain Integration for Secure Data Handling:*  
   - *Feasibility:* Blockchain offers secure, transparent data handling but demands significant computational resources, especially for real-time systems. Integration with existing infrastructure needs careful planning.  
   - *Timeline:* Blockchain integration could be part of a long-term plan, taking 18-24 months to fully implement.  
   - *Priority:* Low for initial rollout, but important for scalability and long-term data security.

4. *Scalability to Public Services (e.g., 108 Emergency Systems):*  
   - *Feasibility:* This enhancement involves connecting the system with public emergency services, requiring API integrations and collaboration with government agencies.    
   - *Priority:* High, as it would allow the system to scale to wider public service applications, benefiting more people.
This solution ensures timely emergency response, optimized navigation, and improved patient care while leveraging cutting-edge technologies. {Refer to the document for more detailed explanations}
-----
### Modules
#### Module 1 – Driver Module (Web App)
This module is a web application used by ambulance drivers to receive route guidance, and hospital details. It fetches optimized routes based on the patient’s location and the nearest hospital. The app also enables the driver to update the status of the trip (en route, arrived, etc.) and continuously transmits GPS coordinates to the admin dashboard.

#### Module 2 – Patient Monitoring Systems Module in Ambulance
This system integrates medical sensors (like heart rate, SpO2, and blood pressure monitors) within the ambulance. It captures and transmits patient vitals in real-time to the hospital dashboard. It ensures critical data is monitored during transit and provides alerts for abnormal conditions, supporting better readiness upon hospital arrival.

#### Module 3 – Admin Web Dashboard (Live Location & Ambulance Info)
The admin panel is a web-based dashboard that displays live tracking of all ambulances and hospital destinations. It allows authorized personnel to monitor the status of each emergency trip, including driver details, ambulance ID, and route history. It helps coordinate emergency responses and facilitates communication between ambulances and hospitals.

-----


#### Deliverables
*Mobile Interface (Used by Paramedics & Drivers)*  
- Real-time patient vitals monitoring (ECG, heart rate, oxygen levels).  
- GPS-based navigation with AI-powered route optimization.  
- Hospital communication module for seamless data sharing and arrival notifications.

 *Hospital Communication and Data Integration(web based if required)* 
- Cloud-based patient data transmission: Shares real-time patient vitals and medical history.  
- Automated hospital alerts: Notifies emergency staff of incoming patients.

*Hardware Used by Driver and Paramedic*  
- GPS and location tracking: Sends real-time updates to emergency services and hospitals.    
- IoT-enabled medical sensors: Tracks heart rate, ECG, blood pressure, and oxygen levels.    
- Telemedicine support(Future Enchancement): Allows real-time consultation with specialists via video or audio.

------

### Mapping the Project to Relevant Sustainable Development Goals (SDGs)

| SDG                                      | Alignment                                                                                                                                                 |
|:-----------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
| *Goal 3 - Good Health and Well-Being*  | Reduces delays caused by traffic congestion, improving response times and lowering fatalities from accidents. Enhances universal access to timely emergency medical care. |
| *Goal 9 - Industry, Innovation, and Infrastructure* | Supports sustainable and resilient infrastructure through the integration of IoT for emergency medical services. Advances innovation in IoT-enabled emergency response systems. |

### Collaboration 
| Team | Module & Scope | Contribution |
|:----:|:--------------------------|:-------------|
| [IoT#05](https://github.com/Amrita-TIFAC-Cyber-Blockchain/24CYS333-Internet-of-Things/blob/main/Assets/Projects/IoT05/README.md) | GPS-Enabled Passenger Safety and Route Monitoring in Taxis with Office Alert Integration | Popping notification (future contribution) |
| [IoT#07](https://github.com/Amrita-TIFAC-Cyber-Blockchain/24CYS333-Internet-of-Things/blob/main/Assets/Projects/IoT07/README.md) | Real-Time IoT-Driven Public Transport Scheduling and Tracking System | We contributed by providing the route optimization codes |

-----

### References
1. Dumka, A., & Sah, A. (2019). **Smart ambulance system using concept of big data and internet of things**. _In Healthcare data analytics and management_ (pp. 155-176). Academic Press.

2. Godwin, J. J., Krishna, B. S., Rajeshwari, R., Sushmitha, P., & Yamini, M. (2021). **IoT based intelligent ambulance monitoring and traffic control system.** _Further Advances in Internet of Things in Biomedical and Cyber Physical Systems_, 269-278.  

3. Sakthidevi, I., Megha, S.,Hindhu Shree, G.,ABARNA, U.,Ruba, V., **IOT Smart Ambulance: Revolutionizing Emergency Response & Patient Care**, _International Journal of Creative Research Thoughts (IJCRT)_, ISSN:2320-2882, Volume.12, Issue 3



