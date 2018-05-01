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
    tableStyle = {
        border: '1px solid black',
        width:'132px'
    }
    render(){
        return(
            <div >
                <table>
                    <tbody>
                        <tr>
                            <td style={this.tableStyle}>Customer Name</td>
                            <td style={this.tableStyle}></td>
                            <td style={this.tableStyle}>Kiran</td>
                        </tr>
                        {this.state.rows.map((r)=>(
                            <tr key={r.price}>
                                <td style={this.tableStyle}>{r.item}</td>
                                <td style={this.tableStyle}>{r.qty}</td>
                                <td style={this.tableStyle}>{r.price}</td>
                            </tr>
                        ))}
                        <tr>
                            <td style={this.tableStyle}>Grand Total</td>
                            <td style={this.tableStyle}></td>
                            <td style={this.tableStyle}>{this.state.totalPrice}</td>
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
