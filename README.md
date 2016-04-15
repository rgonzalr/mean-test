# mean-test
Pruebas de un MEAN stack

Comandos Heroku:

# sube la rama git al heroku
git push heroku master

# asigna X dynos al portal
heroku ps:scale web=1

# para ver los logs
heroku logs --tail

# para ver info sobre la cuota de 18h
heroku ps

# para iniciar el server en local
heroku local web

# muestra variables del sistema
heroku config
