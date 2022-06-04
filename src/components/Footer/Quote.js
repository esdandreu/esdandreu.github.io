import React, {Component} from 'react';
import QUOTES from './Quotes'

class Quote extends Component {
    quote = "Hola, no pares de hacer cosas";
    author = "Anonymus";

    
    getQuote = () => {
        const key = Math.floor(Math.random() * QUOTES.length);
        this.quote = QUOTES[key].text;
        this.author = QUOTES[key].author;
    }

    componentDidMount() {
        this.getQuote();
    }

    render() {
        this.getQuote();
        return(
            <div>
                <p><em>&#8220;{this.quote}&#8221;</em></p>
                <p><strong>{this.author}</strong></p>
            </div>
        )
    }
}

export default Quote;