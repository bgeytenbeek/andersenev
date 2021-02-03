import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';

//import "react-datepicker/dist/react-datepicker.css";
//import './bootstrap/dist/css/bootstrap.min.css';

class QuoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            from: '',
            to: '',
            startDate: new Date()
        };
        this.formsubmit = false;
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleDateChange(date) {
        this.setState({
            startDate: date
        })
    }

    handleSubmit(event) {
        console.log('New quote:');
        console.log(' From: ' + this.state.from);
        console.log(' To: ' + this.state.to);
        console.log(' Date: ' + this.state.startDate);
        this.formsubmit = true;
        this.forceUpdate();
        event.preventDefault();
    }

  
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="card p-3 mx-lg-5 mt-lg-5 mt-md-5 mb-0 mb-lg-0 pb-0" style={{
                    borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px'
                }}>
                    <div className="card-body">
                        <h5><b>Request a Quote</b></h5>
                        <p>Pacific hake false trevally queen parrotfish Black prickback humuhumunukunukuapua'a</p>
                        <div className="input-group mb-3 mt-5">
                            <div className="input-group-prepend">
                                <div className="input-group-text material-icons">
                                    place
                                                </div>
                            </div>
                            <input type="text"
                                className="form-control"
                                id="from"
                                placeholder="From"
                                name="from"
                                value={this.state.from}
                                onChange={this.handleChange} />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <div className="input-group-text material-icons">
                                    place
                                                </div>
                            </div>
                            <input type="text"
                                className="form-control"
                                id="To"
                                placeholder="To"
                                name="to"
                                value={this.state.to}
                                onChange={this.handleChange} />
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text material-icons">
                                    calendar_today
                                                </div>
                            </div>
                            <DatePicker closeOnScroll={e => e.target === document}
                                selected={this.state.startDate}
                                onChange={this.handleDateChange}
                                name="startDate"
                                dateFormat="dd/MM/yyyy"
                                className="form-control"
                                placeholderText="Date" />
                        </div>
                    </div>
                </div>
                <div className="mx-lg-5 mb-lg-5">
                    {this.rendersubmit(this.formsubmit)}
                </div>
            </form>
        );
    };

    rendersubmit(submit) {
        if (submit) {
            return (<Success />);
        } else {
            return (<Sendbutton />);
        }
    }

}
export default QuoteForm;

class Success extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="py-3 bg-primary text-white d-flex justify-content-center"> Quote submitted successfully!
            </div>
        );
    }

}

class Sendbutton extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <input type="button" className="btn btn-secondary btn-block py-3 border-0" value="Send Request" type="submit" />
        );
    }
}