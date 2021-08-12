
import React, {useState} from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TextInput, TouchableOpacity, Image, ImageBackground} from 'react-native';


export default function App() {
 
const [altura, setAltura] = useState('');
const [peso, setPeso] = useState('');
const [idade, setidade] = useState('');
const [imc, setIMC] = useState(0);
const [classificado, setclass] = useState('');




const CalculateIMC = () => {
  let imc = peso / (altura*altura/10000);
         setIMC(imc);
alert(`Altura: ${altura}cm \nPeso: ${peso}kg\n Sua idade: ${idade}\nSeu imc: ${imc.toFixed(2)} `);

if (imc < 18.5 ){
 alert("Você está muito magro");
} else if (imc > 18.5 && imc < 25){
  alert("Você está com um peso normal");
}  else if (imc >= 25 && imc < 30){
  alert("Você está com sobrepeso");
} else {
  alert("Você está na faixa de obesidade");
}

let classificado;

  if (imc < 18.5){
    classificado = "Magreza"
  } else if (imc > 18.5 && imc < 25){
    classificado = "normal"
  } else if (imc >= 25 && imc < 30){
    classificado = "sobrepeso"
  } else {
    classificado = "obesidade"
  }
  

  

  setclass(classificado);
}


{/* bloco de comando para definir altura, peso e idade dos elementos abaixo do input */}
const Altidpes = () => { 
let altura = altura;
let idade  = idade;
let peso = peso;
}


{/* bloco de comando para definir o resultado do imc */}
const [result, setResult] = useState(imc);


  return(
  <SafeAreaView style={styles.container}>
    <StatusBar />
    <Text style={styles.titulo}>CALCULE SEU IMC</Text>






<SafeAreaView style={styles.topbar}>
<Text style={styles.txtimc}>RESULTADO DO IMC:</Text>
<Text style={styles.resultimc}>
  {imc.toFixed(2)}
</Text>

<Text style={styles.txtimc}>Classificação:</Text>
<Text style={styles.resultimc}>
  {classificado}
</Text>
</SafeAreaView>





<SafeAreaView style={styles.container1}>


<div></div>
{/* campo de texto altura */}
<TextInput 
     style={styles.input}
    placeholder='Altura(cm)'
    keyboardType='numeric'
    value={altura}
    onChangeText={(altura)=>setAltura(altura)}
    maxLength={3}
    />

<Text style={(styles.contesp)}> Sua altura: </Text>
<Text style={(styles.inputr)}>{altura}cm</Text>
{/* campo de texto peso */}


<TextInput 
     style={styles.input}
    placeholder='Peso (kg)'
    keyboardType='numeric'
    value={peso}
    onChangeText={(peso)=>setPeso(peso)}
    maxLength={3}

    />
<Text style={(styles.contesp)}> Seu peso: </Text>
<Text style={(styles.inputr)}>{peso}kg</Text>

    {/* campo de texto idade */}

<SafeAreaView style={styles.inputs}>

    <TextInput 
     style={styles.input}
    placeholder='Idade (anos)'
    keyboardType='numeric'
    value={idade}
    onChangeText={(idade)=>setidade(idade)}
    maxLength={2}
    />

    <Text style={(styles.contesp)}> Sua idade: </Text>
    <Text style={(styles.inputr)}>{idade}anos</Text>
    </SafeAreaView>
{/* Button */}
<TouchableOpacity style={styles.botao}onPress={CalculateIMC}>


  <Text style={styles.btn_txt}>CALCULAR</Text>
  
</TouchableOpacity>

</SafeAreaView>

  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
  backgroundColor: 'white',
  flex: 1,
  padding: 10,
  borderColor: 'black',
  borderWidth: 2,
  },




  container1:{
    height: 320,
    fontFamily: 'orbitron',
    marginTop: 50,
  },

  inputr:{
    marginLeft: 180,
  },

  contesp:{
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 150,
    marginTop: 5,
  },

  ideal:{
    fontSize:18,
    fontWeight: 'bold',
    fontFamily: 'orbitron',
    marginLeft: 8,
    marginTop: 10,

  },
  txtimc:{
    marginTop: 5,
    fontSize: 15,
    fontFamily: 'orbitron',
    fontWeight: 'bold',
  },

  resultimc:{
    marginLeft: 10,
    fontSize: 20,
  },

  titulo:{
color: 'white',
fontSize: 22,
fontFamily: 'arial',
textAlign: 'right',
paddingRight: 15,
fontWeight: 'bold',
backgroundColor: '#08685D',
paddingVertical: 10,
borderColor: 'black',
borderWidth: 1,
  },

  input:{
    backgroundColor: 'white',
    width: 150,
    marginTop: 20,
    marginLeft: 130,
    padding: 3,
    textAlign: 'center',
    borderRadius: 9,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 15,
    color: "black",
    fontWeight: 'bold',
  },
 

  botao:{
    //justifyContent: 'Center' , alignItems: 'center',
  backgroundColor: '#08685D',
  marginLeft: 152,
  marginTop: 10,
  width: 110,
  borderRadius: 7,
  opacity: 0.8,
  textAlign: 'center',
  height: 22,
  

  },

  btn_txt:{
    fontWeight: 'bold',
  fontFamily: 'orbitron',
  fontWeight: '900',
  fontSize: 14,
  paddingTop: 2,

  },

  resultadoimc:{
    marginLeft: 70,
    fontSize: 20,
  },

  red:{
    backgroundColor: 'red',
    width: '70%',
    height: 20,
    marginTop: 30,
    marginLeft: 60,
  },

  green:{
    backgroundColor: 'green',
    width: '20%',
    height: 20,

  },

  orange:{
    backgroundColor: 'orange',
    width: '30%',
    height: 20,
    marginLeft: 56,
    marginTop: -20,
  },
  
 

});

