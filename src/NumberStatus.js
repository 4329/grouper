import React from "react";
import "./NumberStatus.scss";

class NumberStatus extends React.Component {

    constructor(props) {
        super(props);
        let newState = this.constructArray(7);
        newState.groupSize = 12;
        newState.currentIdx = 0;
        newState.total = 1;
        newState.nextNumber = newState.vals[0];
        this.state = newState;

        this.groupSizeChanged = this.groupSizeChanged.bind(this);
    }

   render() {
       return (
           <div className="status-container">
               <div className="admin-container">
                    <div className="field-group">
                        <label>Group Size:</label>
                        <input type="number" value={this.state.groupSize} onChange={this.groupSizeChanged} />
                    </div>

                    <button onClick={() => this.getNextNumber()}>New number</button>
                    <div className="count">
                        <label>Total Count:</label>
                        <div className="number">{this.state.total}</div>
                    </div>
                </div>
 
                <div className="display-number">
                    <label>Your Number</label>
                    <div className="number">{this.state.nextNumber}</div>
                </div>
          </div>
       );
   }

   groupSizeChanged(event) {
       const newValue = parseInt(event.target.value);
       const newState = this.constructArray(newValue);
       newState.groupSize = newValue;
       this.setState(newState);
   } 

   getNextNumber() {
       let newState = {};

       if (this.state.currentIdx >= (this.state.vals.length - 1)) {
         newState = this.constructArray(this.state.groupSize);
         newState.nextNumber = newState.vals[0];
       }
       else {
         newState.currentIdx = this.state.currentIdx + 1;
         newState.nextNumber = this.state.vals[this.state.currentIdx + 1];
       }
       newState.total = this.state.total + 1;


       this.setState(newState);
   }

   constructArray(groupSize) {
       const newVals = new Array(groupSize);
       for (let i = 0; i < groupSize; i ++) {
           newVals[i] = i + 1;
       }

       for (let i = 0; i < groupSize; i++) {
           const firstIdx = Math.floor(Math.random() * groupSize);
           const secondIdx = Math.floor(Math.random() * groupSize);
           [newVals[firstIdx], newVals[secondIdx]] = [newVals[secondIdx], newVals[firstIdx]];
       }

       return {vals : newVals, currentIdx : 0};
   }
}

export default NumberStatus;