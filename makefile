all: README.md

README.md: guessinggame.sh
	echo "# Jeu de devinettes de fichiers" > README.md
	echo "\nCréé le: $$(date)" >> README.md
	echo "\nNombre de lignes dans guessinggame.sh: $$(wc -l < guessinggame.sh)" >> README.md
