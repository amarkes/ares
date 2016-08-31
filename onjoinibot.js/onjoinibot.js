//Função que verifica se script carregou
function onLoad()
{
	// Aqui aparece a mensagem no display do chat -> Não trocar
	print("\x0310Carregado script greet para ibot By səʞɹ[ɐ]ɯ~ҳ√");
}

//Função executado quando alguem entra na sala
function onJoin(userobj) {

	//Verifica se é ibot
	if(userobj.webClient == true) {
		//Aqui aparece a mensagem no display do chat -> Trocar como deseja que aparece
		print("\x0301Bem vindo \x07" + userobj.name + "\x07 você está usando ibot");
	
	}
	//Retorna um valor para a função
	return true;
}