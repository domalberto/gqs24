# Use a imagem base do Nginx
FROM nginx:alpine

# Copie os arquivos da pasta Páginas para o diretório padrão do Nginx
COPY Páginas /usr/share/nginx/html

# Copie a pasta css para o diretório padrão do Nginx
COPY css /usr/share/nginx/html/css

# Copie a pasta Recursos e seus ícones para o diretório padrão do Nginx
COPY Recursos /usr/share/nginx/html/Recursos

# Exponha a porta 7070
EXPOSE 7070