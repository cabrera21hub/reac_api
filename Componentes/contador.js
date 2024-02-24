import { useState } from "react";
import { Button,StyleSheet,Text,View } from "react-native";


    export const contador=()=>{
        
        const [cont,setcont]=useState(0)

        return(
          <View>
              <Text style={styles.texto}>X</Text>
              <Text style={styles.texto}>Encabezado</Text>
              <Text style={styles.texto}>X</Text>
          </View>
        )
      }
