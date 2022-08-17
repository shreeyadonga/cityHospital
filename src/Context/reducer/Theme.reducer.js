import React from 'react';
import { Themetoggle } from '../Theme.action';

export const Themereducer = (state,action)=>{
        switch(action.type){
          case Themetoggle: 
          return {
            ...state,
            theme : action.payload
          }
          default :
          return state;
        }
}