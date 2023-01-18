#penjdk:8-jre 为基础镜像，来构建此镜像，可以理解为运行的需要基础环境
FROM openjdk:8-jre

#将当前metabase.jar 复制到容器根目录下
ADD teaching-open-2.6.0.jar teaching-open-2.6.0.jar
#将依赖包 复制到容器根目录/libs下,metabase.jar已不再需要添加其它jar包
ADD config /config
#暴露容器端口为3000 Docker镜像告知Docker宿主机应用监听了3000端口
EXPOSE 8080
#容器启动时执行的命令
CMD java -jar teaching-open-2.6.0.jar
