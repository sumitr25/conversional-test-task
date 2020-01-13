
SHELL:=/bin/bash

# install docker
install-docker:
	@echo "Installing Docker"

	@sudo apt-get update

	@sudo apt-get install \
		apt-transport-https \
		ca-certificates \
		curl \
		software-properties-common -y

	@curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

	@sudo add-apt-repository \
		"deb [arch=amd64] https://download.docker.com/linux/ubuntu \
		$$(lsb_release -cs) \
		stable"

	@sudo apt-get update

	@sudo apt-get --yes --no-install-recommends install docker-ce

	@sudo usermod --append --groups docker "$$USER"

	@sudo systemctl enable docker

	@echo "Waiting for Docker to start..."

	@sleep 3

	@sudo curl -L https://github.com/docker/compose/releases/download/1.22.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

	@sudo chmod +x /usr/local/bin/docker-compose
	@sleep 5
	@echo "Docker Installed successfully"

# check and install docker
install-docker-if-not-already-installed:
	@if [ -z "$$(which docker)" ]; then\
		make install-docker;\
	fi

# wipe all docker containers volumes and images
wipe-all: down remove_stopped_containers wipe-volumes wipe-images wipe-containers

# wipe all docker volumes
wipe-volumes:
	@if [[ -n "$$(docker volume ls -qf dangling=true)" ]]; then\
		docker volume rm -f $$(docker volume ls -qf dangling=true);\
  fi
	@docker volume ls -qf dangling=true | xargs -r docker volume rm

# wipe all docker images
wipe-images:
	@if [[ -n "$$(docker images --filter "dangling=true" -q --no-trunc)" ]]; then\
		docker rmi -f $$(docker images --filter "dangling=true" -q --no-trunc);\
	fi
	@if [[ -n "$$(docker images | grep "none" | awk '/ / { print $3 }')" ]]; then\
		docker rmi -f $$(docker images | grep "none" | awk '/ / { print $3 }');\
	fi

# wipe all docker containers
wipe-containers:
	@if [[ -n "$$(docker ps -qa --no-trunc --filter "status=exited")" ]]; then\
		docker rm -f $$(docker ps -qa --no-trunc --filter "status=exited");\
	fi

# kill server
down:
	@docker-compose down
	@docker-compose kill

# remove stopped containers
remove_stopped_containers:
	@docker-compose rm -v

# build docker images for dev mode
build-all-dev-images:
	@docker-compose build --force-rm

# setup development environment
set-up-dev: install-docker-if-not-already-installed build-all-dev-images

start-dev:
	@docker-compose up

stop-dev:
	@docker-compose stop

reset: wipe-all set-up-dev down

# build production image
build-prod-image:
	@docker build -t component-builder .

# remove production image
wipe-prod-image:
	@docker rmi component-builder

# start new container with production image
spin-up-prod-server:
	@docker run --rm -d -p 3000:3000 --name component-builder-app component-builder

# start production server
start: build-prod-image spin-up-prod-server

# stop production server
stop:
	@docker stop component-builder-app

# remove production docker image
clear: wipe-prod-image
