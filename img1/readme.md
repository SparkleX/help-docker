# Build
sudo docker build -t sunxufei/img1 .

# Run Terminal
sudo docker run -it sunxufei/img1 bash

# Docker Hub
sudo docker image push

# Copy Files
scp -P 10022 /Users/i031684/github/note/docker/example01/*.*  sunxufei@localhost:/home/sunxufei/test