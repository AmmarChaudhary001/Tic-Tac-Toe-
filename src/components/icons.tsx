import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import type { PropsWithChildren } from 'react';

type iconProps=PropsWithChildren<{
    name:string
}>

const Icons=({name}:iconProps)=>{
    switch (name) {
        case 'circle':
            return <Icon name="circle-thin" size={38} color="#f59e0b" />
            break;
        case 'cross':
            return <Icon name="times" size={38} color="#3aaaea" />
            break;
        default:
            return <Icon name='pencil' size={38} color="#d5deea"/>
            break;
    }
}

export default Icons