#!/usr/bin/env bash

function get_file_count {
    local count=$(ls -1 | wc -l)
    echo $count
}

function play_game {
    local file_count=$(get_file_count)
    local guess
    
    echo "Devinez combien de fichiers sont dans le répertoire actuel :"
    
    while true; do
        read -p "Votre estimation : " guess
        
        if [[ ! $guess =~ ^[0-9]+$ ]]; then
            echo "Veuillez entrer un nombre valide"
            continue
        fi
        
        if [ $guess -lt $file_count ]; then
            echo "Trop bas... Essayez encore!"
        elif [ $guess -gt $file_count ]; then
            echo "Trop haut... Essayez encore!"
        else
            echo "Félicitations! C'est le bon nombre!"
            break
        fi
    done
}

play_game
