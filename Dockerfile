# Run the application
FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /app
COPY . /app
