
import React, {useState} from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TextInput, TouchableOpacity, Image, ImageBackground} from 'react-native';


export default function App() {
 
const [altura, setAltura] = useState('');
const [peso, setPeso] = useState('');
const [idade, setidade] = useState('');
const [imc, setIMC] = useState(0);


const CalculateIMC = () => {
  let imc = peso / (altura*altura/10000);
         setIMC(imc);

      



 
  

alert(`Altura: ${altura}cm \nPeso: ${peso}kg  \nSeu imc: ${imc.toFixed(2)} `);

if (imc < 18.5 ){
 alert("Você está muito magro");
} else if (imc > 18.5 && imc < 25){
  alert("Você está com um peso normal");
}  else if (imc >= 25 && imc < 30){
  alert("Você está com sobrepeso");
} else {
  alert("Você está na faixa de obesidade");
}


}
const [result, setResult] = useState(imc);
  return(

  
  <SafeAreaView style={styles.container}>
    <StatusBar />

     



    <Text style={styles.titulo}>CALCULE SEU IMC</Text>

    {/* campo de texto altura */}
    <TextInput 
     style={styles.input}
    placeholder='Altura(cm)'
    keyboardType='numeric'
    value={altura}
    onChangeText={(altura)=>setAltura(altura)}
    />


{/* campo de texto peso */}

<TextInput 
     style={styles.input}
    placeholder='Peso (kg)'
    keyboardType='numeric'
    value={peso}
    onChangeText={(peso)=>setPeso(peso)}
    />

    {/* campo de texto idade */}

    <TextInput 
     style={styles.input}
    placeholder='Idade (anos)'
    keyboardType='numeric'
    value={idade}
    onChangeText={(idade)=>setidade(idade)}
    />

{/* Button */}
<TouchableOpacity style={styles.botao}onPress={CalculateIMC}>


  <Text style={styles.btn_txt}>CALCULAR</Text>
  
</TouchableOpacity>


<Text style={styles.txtimc}>RESULTADO DO IMC:</Text>
<Text style={styles.resultimc}>
  {imc.toFixed(2)}
</Text>



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

  ideal:{
    fontSize:18,
    fontWeight: 'bold',
    fontFamily: 'orbitron',
    marginLeft: 8,
    marginTop: 10,

  },
  txtimc:{
    marginLeft: 120,
    marginTop: 5,
    fontSize: 15,
    fontFamily: 'orbitron',
    fontWeight: 'bold',
  },

  resultimc:{
    marginLeft: 120,
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
  }

});

