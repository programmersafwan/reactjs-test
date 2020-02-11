import React, { Component } from 'react';



class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {string:''
      };
      
      this.handleChange = this.handleChange.bind(this);
       
            
      }

      handleChange = (event) => {
        this.setState({string: event.target.value});
      }

      
    render() {
            let string = this.state.string;

            let vowel=[];
            let consonant=[];
            let symbols=[];
            let number=[];
        
            let frequencyv = [string.length];
            let frequencyc = [string.length];
            let frequencys = [string.length];
            let frequencyn = [string.length];

            let string2 = string.split("")
            console.log(string2);

            for (let i = 0; i < string.length; i++) { 
           
              let ch = string2[i]; 
        
              if ( (ch >= 'a' && ch <= 'z') ||  
                    (ch >= 'A' && ch <= 'Z') ) { 
        
                  // To handle upper case letters 
                  ch.toLowerCase();
        
                  if (ch === 'a' || ch === 'e' || ch === 'i' || 
                      ch === 'o' || ch === 'u') 

                      vowel[i]=string2[i]
                      
                      
                     
                  else
                  consonant[i]=string2[i] 
              } 
              else if (ch >= '0' && ch <= '9') 
                  number[i]=string2[i] 
              else
                  symbols[i]=string2[i]
          } 

          
          //to calculate the vowels and their numbers
          for(let i = 0; i < string.length; i++) {
            frequencyv[i]=1;
            
            for(let j=i+1; j<string.length;j++)
            { 
               
               
                if (vowel[i]===vowel[j]){
                  frequencyv[i]++;
                  vowel[j]='0';
                }
               }
               
            }
            //to display the vowels and their numbers in console
            console.log("Vowel");
            for(let i = 0; i <frequencyv.length; i++) {  
              if(vowel[i] !== ' ' && vowel[i] !== '0')
              console.log(vowel[i] + "-" + frequencyv[i]);   
                    
            }  
          
            //to calculate the consonants and their numbers
            for(let i = 0; i < string.length; i++) {
            frequencyc[i]=1;
            
            for(let j=i+1; j<string.length;j++)
            { 
               
               
                if (consonant[i]===consonant[j]){
                  frequencyc[i]++;
                  consonant[j]='0';
                }
               }
               
            }
            //to display the consonants and their numbers in console
            console.log("Consonant");
            for(let i = 0; i <frequencyc.length; i++) {  
              if(consonant[i] !== ' ' && consonant[i] !== '0')  
                  console.log(consonant[i] + "-" + frequencyc[i]);  
            }


            //to calculate the digits and their numbers
            for(let i = 0; i < string.length; i++) {
              frequencyn[i]=1;
              
              for(let j=i+1; j<string.length;j++)
              { 
                 
                 
                  if (number[i]===number[j]){
                    frequencyn[i]++;
                    number[j]='0';
                  }
                 }
                 
              }
              //to display the digits and their numbers in console
              console.log("Number");
              for(let i = 0; i <frequencyn.length; i++) {  
                if(number[i] !== ' ' && number[i] !== '0')  
                    console.log(number[i] + "-" + frequencyn[i]);  
              }


              //to calculate the symbols and their numbers
            for(let i = 0; i < string.length; i++) {
              frequencys[i]=1;
              
              for(let j=i+1; j<string.length;j++)
              { 
                 
                 
                  if (symbols[i]===symbols[j]){
                    frequencys[i]++;
                    symbols[j]='0';
                  }
                 }
                 
              }
              //to display the symbols and their numbers in console
              console.log("Symbols");
              for(let i = 0; i <frequencys.length; i++) {  
                if(symbols[i] !== ' ' && symbols[i] !== '0')  
                    console.log(symbols[i] + "-" + frequencys[i]);  
              }
        
        return (
            
          <div>  
          
          <form>
            <label>Enter String</label>
            <input type="text" value={this.state.string} onChange={this.handleChange} />
          </form>
          </div>
          )
        
      }
    }

export default Form;