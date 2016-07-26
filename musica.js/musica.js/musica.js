	//Função que verifica se script carregou
	function onLoad()
	{
		// Aqui aparece a mensagem no display do chat -> Não trocar
		print("\x0310Carregado script para música By səʞɹ[ɐ]ɯ~ҳ√");
	}

	//Aqui está a função que verifica troca de mensagem
	function onPersonalMessage(userobj, msg) 
	{ 
		// Verifica se a mensagem está vazia
		if (msg.length > 0)
		{
			//Verifica se a mensagem contem uma música
			if (msg.substr(0, 1) == "\x07") 
			{
				//Aqui aparece a mensagem do display do chat -> Trocar como deseja que aparece
				print("               \x0314" + userobj.name + " \x0301 está ouvindo \x0314" +msg + "\x07 \x0301 ♫♪"); 
			}
		}
		//Retorna true para não ficarem sem mensagem personalizada
		return true;
	}