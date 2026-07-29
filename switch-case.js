const classe = "Mago";

switch (classe) {
    case "Guerreiro":
        console.log("Classe: Guerreiro");
        console.log("O guerreiro é um combatente corpo a corpo, especializado em força e resistência.");
        console.log("habilidades: Ataque poderoso, Defesa sólida, Fúria de batalha");
        break;
    case "Mago":
        console.log("Classe: Mago");
        console.log("O mago é um conjurador de feitiços, especializado em magia ofensiva e suporte.");
        console.log("habilidades: Magia de fogo, Magia de gelo, Magia de cura");
        break;
     case "Arqueiro":
        console.log("Classe: Arqueiro");
        console.log("O arqueiro é um atirador de longa distâcia, especializado em precisão e agilidade.");
        console.log("habilidades: Magia de fogo, Magia de gelo, Magia de cura");
        break;
     case "Ladino":
        console.log("Classe: Ladino");
        console.log("O ladino é um especialista em furtividade e trapaças, utilizando para sabotagem e espionagem.");
        console.log("habilidades: Furtilidade, Trapaças, Assassinío");
        break;
    default:
        console.log("Classe desconhecida. Por favor, escolha entre guerreiro, mago, arqueiro ou ladino");
}