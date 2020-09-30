import React, {Component} from 'react'
class Bomb extends Component{
    
    constructor(props) {
        super(props)
        this.state = { count: 0 };
    }

    componentDidMount(){
        this.interval=setInterval(() => {
            let countInterval = this.state.count + 1;
            console.log(this.state.count);
            this.setState({
                count: countInterval

            })
        }, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }

    oncount8()
    {
        clearInterval(this.interval);
        return "BOOM!!!";

    }
    


        render(){
        return <div>
            <p>
{this.state.count === 8 ?this.oncount8(): (this.state.count % 2 === 0? "tick":"tock")}</p>

        </div>
        }
   // }
}

export default Bomb;