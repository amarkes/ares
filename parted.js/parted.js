//Função que verifica se script carregou
function onLoad()
{
	// Aqui aparece a mensagem no display do chat -> Não trocar
	print("\x0310Carregado script parted By səʞɹ[ɐ]ɯ~ҳ√");
}

//Função executado quando alguem sai da sala
function onPartBefore(userobj) {

	//Aqui aparece a mensagem no display do chat -> Trocar como deseja que aparece	
	print("\x0301" + userobj.name + " saiu da sala");
	
	//Retorna um valor para a função
	return true;
}