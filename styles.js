import{StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    rowsocial:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'row'
    },
    textcontact:{
        fontSize:12
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'transparent',
        marginTop:5
    },
    line:{
        height:2,
        backgroundColor:'rgba(0,0,0,0.3)',
        flex:1
    },
    textlogin:{
      color: 'white',
      fontSize:12
    },
    loginbutton:{
      justifyContent:'center',
      alignItems:'center',
      padding:10,
      backgroundColor:'rgba(266,39,44,0.5)',
      
    },
    textdangki:{
    fontSize:12,
    fontStyle:'italic',
    alignSelf:'flex-end',
    margin:5,
    backgroundColor:'transparent',
    color: 'black'
    },
    phaninput:{
      flex:1,
      width:350,
      marginLeft:15
    },
    TextInput:{
      borderWidth:1,
      height:40,
      borderColor:'transparent',
      backgroundColor:'grey',
      padding:10,
      fontSize:12,
      color:'white'
  
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      resizeMode:'stretch',
      width:null,
      height:null
    },
    imgBackground:{
      width: '100%',
      height: '100%',
      flex:1
    },
    logo: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      width:200,
      resizeMode:'contain'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  export default styles;