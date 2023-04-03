import React, {Component} from 'react';


class Example extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Alejandro',
            firstName: 'Lemus',
            lastName: 'Vazquez'
        }
    }

    render(){
        const {name, firstName, lastName} = this.state;
        return (
            <div>
                This is an example of a react CLASS COMPONENT made by <br></br><br></br><div class ="div-name">{ name + ' ' + firstName + ' ' + lastName}</div>
                
            </div>
        )
    }
}

export default Example
