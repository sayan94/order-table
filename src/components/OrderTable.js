import React, {Component} from 'react';
// import inputRow from './inputRow';

class OrderTable extends Component{
    constructor(props) {
        super(props);
        this.state = {
             rows:[],
            totalPrice:0
        };

    }
     handleSubmit = (e)=> {
         if(e.key === 'Enter') {
             e.preventDefault();
             if (this._inputItem.value !== '' && this._inputPrice !== '' && this._inputItem.value !== '') {
                 const newItem = {
                     item: this._inputItem.value,
                     qty: this._inputQty.value,
                     price: this._inputPrice.value
                 };
                 const newPrice = newItem.qty * newItem.price;
                 this.setState((prevState) => {
                     return {
                         rows: prevState.rows.concat(newItem),
                         totalPrice: prevState.totalPrice + newPrice
                     }
                 })
             }
             this._inputItem.value = '';
             this._inputQty.value = '';
             this._inputPrice.value = '';
         }

     };
    // handleInputChange = (event)=>{
    //     const name =event.target.name;
    //         const value = event.target.value;
    //
    //         if(name === 'item'){
    //             const newData = {
    //                 [value]:{
    //                     qty:0,
    //                     price:0
    //                 }
    //             }
    //             // this.setState({items: this.state.items.push(newData)});
    //         }else{
    //             // this.setState(items.[name])
    //         }
    //
    //
    //
    //
    // };
    handleKeyPress(event){
        event.preventDefault();
        document.getElementById("test").submit();
        // if(event.key === 'Enter'){
        //     event.preventDefault();
        //     // this.handleSubmit();
        //     // const a = this._inputItem.value;
        //      console.log('a');
        //
        // }
    }

    render(){
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Customer Name</td>
                            <td></td>
                            <td>Kiran</td>
                        </tr>
                        {this.state.rows.map((r)=>(
                            <tr key={r.price}>
                                <td>{r.item}</td>
                                <td>{r.qty}</td>
                                <td>{r.price}</td>
                            </tr>
                        ))}
                        <tr>
                            <td>Grand Total</td>
                            <td></td>
                            <td>{this.state.totalPrice}</td>
                        </tr>
                    </tbody>

                </table>
                <form onKeyDown={this.handleSubmit} id="test">
                        <input type="text" ref={(a) => this._inputItem = a} placeholder="Item"  />
                        <input type="number" ref={(b) => this._inputQty = b} placeholder="Quantity" />
                        <input type="number" ref={(c) => this._inputPrice = c}  placeholder="Price"/>
                    {/*<button type="submit">add</button>*/}
                </form>

            </div>
        )
    }

}

export default OrderTable;
