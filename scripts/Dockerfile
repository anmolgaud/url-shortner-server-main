FROM  node:20-alpine
WORKDIR /app
COPY ../server /app
ENV PORT=5003
ENV DB_HOST=localhost
ENV DB_PORT=3306
ENV DB_USERNAME="dev_user"
ENV DB_PASSWORD="dev$mysql"
EXPOSE 5003
CMD [ "node", "app.js" ]