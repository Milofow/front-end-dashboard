# C4 model
A very simple way to show your sofware's architecture is through a so called C4 model. This model start with a broad perspective and "zooms in" to a less broader environment.

## C1: System context diagram
First we start of with the C1 model, which is a broad overview of the working of my application. As you can see, it's a simple application where a home owner uses the dashboard to control his/her devices and an external service to make sure this home owner can login safely.

<img width="571" src="https://user-images.githubusercontent.com/73555911/149661082-e48fa8ef-8993-4fd2-a89c-76af45d96aa7.png">

<br>

## C2: Container diagram
Next we dig a little bit deeper into this smart home system I'm working on. We see all the previous parts, but specified a little more on the smart home system. This system consists of a couple containers, like a service to store information about devices in and also a MQTT broker that communicates with IoT devices.

<img width="747" src="https://user-images.githubusercontent.com/73555911/149663209-8ab8618f-fafb-4c4a-b15b-a8eea503db09.png">

<br>

## C3: Component diagram
Lastly, I show how my device service works by expending it into the diagram below. We can see an API request arrives at the controller in the device service. From there on, the service takes over for handling the request through its business logic. The group controller may also use the device service for handling a request, because it might need to find a device by id for example.

<img width="584" src="https://user-images.githubusercontent.com/73555911/149663096-c64c4568-df15-4832-8365-a21a6dba931f.png">


## C4: Code
Because my application is rather simple, I chose not to dig deeper than the C3 diagram. My intention is to not use a lot of classes, so the C4 wouldn't tell me a lot more than the C3 would. But also because there aren't that many relations in my software. If I find it necessary to do so later on you will find it here.
