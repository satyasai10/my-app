import React, {Component} from "react";

class Satya extends Component {




    render(){
        return(
            <div>
    
                <form>
                    <h1>INTREST CALCULATION FORM</h1>
                <div>
                <div>
                <label for="Start-date">
                     Start-date :
                </label>
                <input name="Start-date" type="date" value="" placeholder="Start-date" />
                    
                </div>
                <div>
                <label for="End-date">
                    End-date :
                </label>
                <input name="End-date" type="date" value="" placeholder="End-date" />

                    
                </div>  
                <div>
                <label for="Principal">
                    Principal:
                </label>
                <input name="Principal" type="number" value="" placeholder="Principal" />

                    
                </div>  
                <div>
                <label for="Intrest">
                    Intrest:
                </label>
                <input name="Intrest" type="number" value="" placeholder="Intrest" />


                </div>
            
                <button type="submit">Submit</button>

            

                
                
                
                    
                </div>    
                
                
                
            


                
                </form>
    
            </div>
        )

    }
   
}


export default Satya