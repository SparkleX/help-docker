cd img1
sudo docker build -t sunxufei/img1 .
cd ../img2
sudo docker build -t sunxufei/img2 .
cd ..
sudo docker-compose up

curl http://localhost:3001
curl http://localhost:3001/svc2
