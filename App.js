import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Alert } from 'react-native';

export default class App extends React.Component {
	render() {
		const { container, btnNewPhrase, textBtn, backgroundImage } = Styles;

		return (
			<View style={container}>
				<ImageBackground source={require('./imgs/back.jpg')} style={backgroundImage}>
					<TouchableOpacity style={btnNewPhrase} onPress={getNewPhrase}>
						<Text style={textBtn}>NOVA FRASE</Text>
					</TouchableOpacity>
				</ImageBackground>
			</View>
		);
	}
}

const getNewPhrase = () => {
	var randomNumber = Math.random();
	randomNumber = Math.round(randomNumber * 10);

	var phrases = Array();
	phrases[0] = 'Sua luta não termina quando sentir cansaço, mas sim quando atingir o sucesso tão merecido.';
	phrases[1] =
		'Você não só tem o direito de ser feliz como também tem a obrigação de lutar para alcançar a felicidade.';
	phrases[2] =
		'As pessoas dizem frequentemente que a motivação não dura. Bem, nem o banho - e é por isso que ele é recomendado diariamente.';
	phrases[3] = 'Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.';
	phrases[4] = 'Às vezes um pouco de motivação ajuda a superar os maiores desafios.';
	phrases[5] = 'A motivação não acontece por acaso, como tudo na vida você tem de batalhar para a alcançar.';
	phrases[6] = 'Sonhos existem para serem realizados, por isso não olhe para trás nem escute palavras de desânimo!';
	phrases[7] =
		'Assim como os pássaros, precisamos aprender a superar os desafios que nos são apresentados, para alçarmos voos mais altos.';
	phrases[8] =
		'Quando fazemos da união nossa principal arma na luta por um objetivo comum, vencer é uma tarefa que se torna bem mais fácil.';
	phrases[9] =
		'Aquilo que você está vivendo, o peso que você está carregando, não é nada comparado à alegria que está esperando por você!';

	var selectPhrase = phrases[randomNumber];
	Alert.alert('Frase do dia:', selectPhrase);
};

const Styles = StyleSheet.create({
	container: {
		flex: 1
  },
  
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
		justifyContent: 'center'
  },

	btnNewPhrase: {
		marginTop: 20,
		paddingVertical: 15,
		paddingHorizontal: 40,
		borderRadius: 22,
		backgroundColor: '#f0f5f5'
	},

	textBtn: {
		color: '#334d4d',
		fontSize: 14,
		fontWeight: 'bold'
	}
});
