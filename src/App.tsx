import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import Icons from './components/icons'
import { Snackbar } from 'react-native-snackbar'



export default function App() {

  const [isCircle,setIsCircle]=useState<boolean>(false)
  const [gameWinner,setGameWinner]=useState<string>('')
  const [gameState, setGameState]=useState( new Array(9).fill('empty',0,8))

  const reload=()=>{
    setIsCircle(false)
    setGameWinner('')
    setGameState(new Array(9).fill('empty',0,9))
  }

  const chooseWinner=()=>{
    if(
      gameState[0]===gameState[1]&&
      gameState[0]===gameState[2]&&
      gameState[0]!=='empty'
    ){
      setGameWinner(`${gameState[0]}🥳🎉 is Winner`)
    }
    else if(
      gameState[3]===gameState[4]&&
      gameState[3]===gameState[5]&&
      gameState[3]!=='empty'
    ){
      setGameWinner(`${gameState[3]}🥳🎉 is Winner`)
    }
    else if(
      gameState[6]===gameState[7]&&
      gameState[6]===gameState[8]&&
      gameState[6]!=='empty'
    ){
      setGameWinner(`${gameState[6]}🥳🎉 is Winner`)
    }
    else if(
      gameState[0]===gameState[3]&&
      gameState[0]===gameState[6]&&
      gameState[0]!=='empty'
    ){
      setGameWinner(`${gameState[0]}🥳🎉 is Winner`)
    }
    else if(
      gameState[1]===gameState[4]&&
      gameState[1]===gameState[7]&&
      gameState[1]!=='empty'
    ){
      setGameWinner(`${gameState[1]}🥳🎉 is Winner`)
    }
    else if(
      gameState[2]===gameState[5]&&
      gameState[2]===gameState[8]&&
      gameState[2]!=='empty'
    ){
      setGameWinner(`${gameState[2]}🥳🎉 is Winner`)
    }
    else if(
      gameState[0]===gameState[4]&&
      gameState[0]===gameState[8]&&
      gameState[0]!=='empty'
    ){
      setGameWinner(`${gameState[0]}🥳🎉 is Winner`)
    }
    else if(
      gameState[2]===gameState[4]&&
      gameState[2]===gameState[6]&&
      gameState[2]!=='empty'
    ){
      setGameWinner(`${gameState[2]}🥳🎉 is Winner`)
    }
    else if(
      !gameState.includes('empty',0)
    ){
      setGameWinner('Draw Game...⌛️')
    }
  }

  const fillPosition=(itemIndex:number)=>{
    if(gameWinner){
      return Snackbar.show({
        text:gameWinner,
        backgroundColor:'#282f3e',
        textColor:'#cacbd0'
      })
    }
    if(gameState[itemIndex]==="empty"){
      gameState[itemIndex]=isCircle ? 'circle':'cross'
      setIsCircle(!isCircle)
    }
    else{
      return Snackbar.show({
        text:'Position is already Filled',
        backgroundColor:'#282f3e',
        textColor:'#cacbd0'
      })
    }
      chooseWinner();
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingTxt}>TIC TAC TOE</Text>
      </View>
      <StatusBar />
      {gameWinner ? (
        <View style={[styles.playerInfo, styles.WinnerInfo]}>
          <Text style={styles.winnerTxt}>
            {gameWinner}
          </Text>
        </View>
      ):
      (
        <View style={[styles.playerInfo, isCircle? styles.playerO : styles.playerX]}>
          <Text style={styles.playerInfoTxt}>
              {isCircle? "player O's Turn": "Player X's Turn"}
          </Text>
        </View>
      )
    }
      //Game Grid
        <FlatList
        
      style={styles.grid}
      data={gameState}
      numColumns={3}
      renderItem={({item,index})=>(
        <Pressable
        style={styles.card}
        key={index}
        onPress={()=>(fillPosition(index))}>
          <Icons name={item} />
        </Pressable>
  )} />
    //Reload or Reset Game
    <Pressable 
    style={styles.gameBtn}
    onPress={reload} >
      <Text style={styles.gameBtnTxt}>
        {gameWinner?'Start New Game...🚀':'Reload The Game...🔄'}
      </Text>
    </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor:'#242c3a',
    flex:1
  },
  headingContainer:{
    height:60,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1f232b',
    elevation:5,
    marginBottom:10,
    borderWidth:0.5
  },
  headingTxt:{
    color:'#FFFFFF',
    fontSize:30,
    fontWeight:600,
  },
  winnerTxt:{
    color:'#000',
    fontSize:25,
    fontWeight:600,
    
  },
  playerInfo:{
    height:60,
    paddingHorizontal:10,
    marginVertical:10,
    marginHorizontal:30,
    borderRadius:5,
    borderColor:'#FFFFFF',
    borderWidth:1,
    elevation:5,
    justifyContent:'center',
    alignItems:'center'
  },
  playerInfoTxt:{
    color:'#FFF',
    textAlign:'center',
    fontSize:32,
    fontWeight:600,

  },
  WinnerInfo:{
    borderRadius:8,
    backgroundColor:'#c4dff9',
    shadowOpacity:0.1
  },
  playerO:{
    backgroundColor:'#f59e0b',
  },
  playerX:{
    backgroundColor:'#619dd8',
  },
  grid:{
    marginHorizontal:10,
    marginVertical:15
  },
    card:{
    height:100,
    width:'32.33%',
    backgroundColor:'#151921',
    justifyContent:'center',
    alignItems:'center',
    margin:3,
    elevation:5,
    shadowColor:'#c4dff9',
  },
  gameBtn:{
    height:53,
    marginVertical:20,
    marginHorizontal:40,
    backgroundColor:'#0c0c0cc4',
    borderRadius:5,
    justifyContent:'center'
  },
  gameBtnTxt:{
    color:'#FFFFFF',
    fontSize:25,
    fontWeight:500,
    textAlign:'center',
    
  },
  
})
