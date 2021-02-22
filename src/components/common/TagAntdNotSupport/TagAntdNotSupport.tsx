import React from 'react';
const Img= function(props:any){
    return <img {...props } />
}
const Div= function(props:any){
    return <div {...props } />
}
const Input= function(props:any){
    return <input {...props } />
}
const Label= function(props:any){
    return <label {...props } />
}
const Span= function(props:any){
    return <span {...props } />
}
export {
    Div,
    Img,
    Label,
    Span,
    Input
}