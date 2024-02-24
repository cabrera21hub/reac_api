import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado/>
      <Cuerpo/>
      <Pie/>
    
    </View>
  );
}
export const Encabezado=()=>{
  return(
    <View style={styles.encabezado}>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>Encabezado</Text>
        <Text style={styles.texto}>X</Text>
    </View>
  )
}

export const Login=()=>{
  return(
    <View>
      <Text>Username...</Text>
      <TextInput placeholder='Username' autoComplete='off' inputMode='numeric'/>
      <Text>Password...</Text>
      <TextInput placeholder='Password' cursorColor={'red'} keyboardType='numeric' secureTextEntry={true} />
      <Button title='Login' />
      <Button title='Cancel'/>
      <Boton 
      texto={'login'} 
      logo={require('./assets/react.png')}
      accion={()=>Alert.alert('Boton de login')}
      colorA={'red'} colorB={'blue'}/>

      <Boton 
      texto={'cancel'} 
      logo={require('./assets/favicon.png')}
      accion={()=>Alert.alert('Boton de alerta ')}
      colorA={'red'} colorB={'blue'}/>

      <Boton 
      texto={'register'} 
      logo={require('./assets/icons8-reaccionar-nativo-50.png')} 
      accion={()=>Alert.alert('Boton de registro')}
      colorA={'red'} colorB={'blue'}/>
    </View>
  )
}

export const Cuerpo=()=>{
  return(
    <View style={styles.cuerpo}>
        <Text style={styles.texto}>Cuerpo</Text>
        <Login/>
    </View>
  )
}

export const Pie=()=>{
  //aqui podria tener varias operaciones sin problemas 
  return(
    <View style={styles.pie}>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>X</Text>
    </View>
  )
}

export const Pie2=(props)=>{
  return(
    <View style={styles.pie}>
        <Text style={styles.texto}>{props.opA}</Text>
        <Text style={styles.texto}>{props.opB}</Text>
        <Text style={styles.texto}>{props.opC}</Text>
        <Text style={styles.texto}>{props.opD}</Text>
    </View>
  )
}

export const Pie3=({op1, op2, op3,op4})=>{
  //aqui podria tener varias operaciones sin problemas 
  return(
    <View style={styles.pie}>
        <Text style={styles.texto}>{op1}</Text>
        <Text style={styles.texto}>{op2}</Text>
        <Text style={styles.texto}>{op3}</Text>
        <Text style={styles.texto}>{op4}</Text>
    </View>
  )
}

export const Boton=({texto,logo,accion,colorA,colorB})=>{
  return(
    <Pressable
      style={({pressed})=>[{
        backgroundColor:pressed?colorB:colorA,
        margin: pressed?10:5
      },styles.boton]}
      onPress={accion}
      >
      <Image 
      style={styles.logoB}
      source={logo}
      />
      <Text style={styles.textoB} >{texto}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a7d9f3',
    alignItems:'stretch',
    justifyContent: 'center',
  },
  texto:{
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  encabezado:{
    flex:1.5,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#227edb'
  },
  cuerpo:{
    flex:8
  },
  pie:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    backgroundColor:'#227edb'
  },
  boton:{
    //backgroundColor:'#5affcc',
    padding:5,
    borderRadius:5,
    borderColor:'black',
    borderWidth:2,
    //margin:3,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center'
  },
  textoB:{
    color:'white',
    fontSize:20
  },
  logoB:{
    height:35,
    width:35,
    marginRight:7
  }
});
