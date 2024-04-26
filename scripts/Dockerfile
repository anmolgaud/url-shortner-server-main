FROM  node:20-alpine
WORKDIR /app
COPY server/ /app
ENV PORT=5003
ENV DB_HOST=localhost
ENV DB_PORT=3306
ENV DB_USERNAME="dev_user"
ENV DB_PASSWORD="devmysql"
EXPOSE 5003
RUN npm install
CMD [ "node", "app.js" ]