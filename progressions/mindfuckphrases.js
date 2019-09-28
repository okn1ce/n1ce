var mind = [
    '| Votre estomac est toujours rempli de vomi rechauffé',
    "| Votre nez est toujours sur votre champ de vision, mais votre cerveau s'occupe de le supprimer :)",
    "| Les girafes ne dorment que 1.9h par jour.",
    "| Si le voyage dans le temps est vraiment possible, alors il existe déjà.",
    "| Il y a plus de 1 milliard de Chinois. Je n'ai jamais vu de chinoise enceinte.",
    "| Vous n'êtes pas vous. Vous n'êtes que des millions et des milliards de petites cellules.",
    "| Les baignoires sont des bateaux à l'envers.",
    "| La neuroscience est littéralement le cerveau qui étudie .. le cerveau.",
    "| Vous pouvez vivre jusqu'à la fin de votre vie sans respirer.",
    "| Il y a plus de tétons que d'humains."
    "| Vous êtes un fantôme, conduisant un squelette entouré de viande.",
    "| Le cerveau s'est nommé lui-même.", 
]
window.setinterval(function() {

	var randomNumber = Math.floor(Math.random() * (mind.length));
	document.getElementById('Mindfck').innerHTML = mind[randomNumber];
}, 3000);
