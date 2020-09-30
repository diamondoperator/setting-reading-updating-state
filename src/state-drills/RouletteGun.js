import React, { Component } from 'react';

 class RouletteGun extends Component{

    static defaultProps = {
       bulletInChamber: 8
      };


    state ={
        chamber: null,
    spinningTheChamber: false,
    };

    
    componentWillUnmount(){
        clearTimeout(this.timeout)
    }
    
    // display(){
    //     let {chamber, spinningTheChamber} = this.state;
    //     let {bulletInchamber}=this.props;
    //     if(spinningTheChamber){
    //         return 'spinning the chamber and pulling the trigger...'
    //     }else if(chamber === bulletInchamber){
    //         return 'BANG!!!'
    //     }else{
    //         return 'you are safe'
    //     }

    //     }
    
    //pulltrigger function
    //sets spinningthechamber to true
    //then runs handleTimeout function after 2 seconds

    // pullTrigger = () => {
    // this.setState({
    // spinningTheChamber: true,
    // })
    // setTimeout(this.handleTimeout(),2000) 
    // }
    pullTrigger = () => {
        this.setState({
          spinningTheChamber: true,
        })
        this.timeout = setTimeout(() => {
          const randomChamber = Math.ceil(Math.random() * 8)
    
          this.setState({
            chamber: randomChamber,
            spinningTheChamber: false,
          })
        }, 2000)
      }

    //handletimeout gets random number between 1 and 8
    //then resets the state 
    // handleTimeout = () => {
    //     let bullet = Math.ceil(Math.random() * 8);
    //     this.setState({chamber: bullet, spinningTheChamber: false});
    //     console.log();
    // }

display(){
    const { chamber, spinningTheChamber } = this.state
    const { bulletInChamber } = this.props
    if (spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger! ...'
    } else if (chamber === bulletInChamber) {
      return 'BANG!!!!!'
    } else {
      return 'you are safe!'
    }
  }


    render() {
        return(
            <div>
                <p>{this.display()}</p>
                <button onClick={this.pullTrigger}>
                    Pull the trigger!
                </button>
            </div>
        );
    };
};

export default RouletteGun;