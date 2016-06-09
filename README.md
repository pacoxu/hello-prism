# hello-prism
This is a sample app which can be used to get start with developing applications for Nutanix Platform.

License: MIT

### Pull docker image
> docker pull codervinod/hello-prism

### Run docker image
> docker run -d \
	-e CLUSTER_IP='x.x.x.x' \
	-e CLIENT_ID='test_client_app' \
	-e CLIENT_SECRET='test_client_secret' \
	-e CONTAINTER_VM_IP='localhost' \
	-e PORT='3000' \
	-p 3000:3000 \
	codervinod/hello-prism

### Build docker image
> docker build -t codervinod/hello-prism .

#### Environment variables:
	CLUSTER_IP : Nutanix cluster ip address
	CLIENT_ID : Client_id for Oauth2.0 generated for the container instance of app
	CLIENT_SECRET: Client_secret for Oauth2.0 generated for the container instance of app
	CONTAINTER_VM_IP: IP address on which the containter instance is running
	PORT: Port at which app server needs to be hosted
