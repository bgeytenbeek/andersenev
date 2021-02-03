var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';

//import "react-datepicker/dist/react-datepicker.css";
//import './bootstrap/dist/css/bootstrap.min.css';

var QuoteForm = function (_React$Component) {
    _inherits(QuoteForm, _React$Component);

    function QuoteForm(props) {
        _classCallCheck(this, QuoteForm);

        var _this = _possibleConstructorReturn(this, (QuoteForm.__proto__ || Object.getPrototypeOf(QuoteForm)).call(this, props));

        _this.state = {
            from: '',
            to: '',
            startDate: new Date()
        };
        _this.formsubmit = false;
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleDateChange = _this.handleDateChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(QuoteForm, [{
        key: 'handleChange',
        value: function handleChange(event) {
            var target = event.target;
            var value = target.value;
            var name = target.name;
            this.setState(_defineProperty({}, name, value));
        }
    }, {
        key: 'handleDateChange',
        value: function handleDateChange(date) {
            this.setState({
                startDate: date
            });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            console.log('New quote:');
            console.log(' From: ' + this.state.from);
            console.log(' To: ' + this.state.to);
            console.log(' Date: ' + this.state.startDate);
            this.formsubmit = true;
            this.forceUpdate();
            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { onSubmit: this.handleSubmit },
                React.createElement(
                    'div',
                    { className: 'card p-3 mx-lg-5 mt-lg-5 mt-md-5 mb-0 mb-lg-0 pb-0', style: {
                            borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px'
                        } },
                    React.createElement(
                        'div',
                        { className: 'card-body' },
                        React.createElement(
                            'h5',
                            null,
                            React.createElement(
                                'b',
                                null,
                                'Request a Quote'
                            )
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Pacific hake false trevally queen parrotfish Black prickback humuhumunukunukuapua\'a'
                        ),
                        React.createElement(
                            'div',
                            { className: 'input-group mb-3 mt-5' },
                            React.createElement(
                                'div',
                                { className: 'input-group-prepend' },
                                React.createElement(
                                    'div',
                                    { className: 'input-group-text material-icons' },
                                    'place'
                                )
                            ),
                            React.createElement('input', { type: 'text',
                                className: 'form-control',
                                id: 'from',
                                placeholder: 'From',
                                name: 'from',
                                value: this.state.from,
                                onChange: this.handleChange })
                        ),
                        React.createElement(
                            'div',
                            { className: 'input-group mb-3' },
                            React.createElement(
                                'div',
                                { className: 'input-group-prepend' },
                                React.createElement(
                                    'div',
                                    { className: 'input-group-text material-icons' },
                                    'place'
                                )
                            ),
                            React.createElement('input', { type: 'text',
                                className: 'form-control',
                                id: 'To',
                                placeholder: 'To',
                                name: 'to',
                                value: this.state.to,
                                onChange: this.handleChange })
                        ),
                        React.createElement(
                            'div',
                            { className: 'input-group' },
                            React.createElement(
                                'div',
                                { className: 'input-group-prepend' },
                                React.createElement(
                                    'div',
                                    { className: 'input-group-text material-icons' },
                                    'calendar_today'
                                )
                            ),
                            React.createElement(DatePicker, { closeOnScroll: function closeOnScroll(e) {
                                    return e.target === document;
                                },
                                selected: this.state.startDate,
                                onChange: this.handleDateChange,
                                name: 'startDate',
                                dateFormat: 'dd/MM/yyyy',
                                className: 'form-control',
                                placeholderText: 'Date' })
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'mx-lg-5 mb-lg-5' },
                    this.rendersubmit(this.formsubmit)
                )
            );
        }
    }, {
        key: 'rendersubmit',
        value: function rendersubmit(submit) {
            if (submit) {
                return React.createElement(Success, null);
            } else {
                return React.createElement(Sendbutton, null);
            }
        }
    }]);

    return QuoteForm;
}(React.Component);

export default QuoteForm;

var Success = function (_React$Component2) {
    _inherits(Success, _React$Component2);

    function Success(props) {
        _classCallCheck(this, Success);

        return _possibleConstructorReturn(this, (Success.__proto__ || Object.getPrototypeOf(Success)).call(this, props));
    }

    _createClass(Success, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'py-3 bg-primary text-white d-flex justify-content-center' },
                ' Quote submitted successfully!'
            );
        }
    }]);

    return Success;
}(React.Component);

var Sendbutton = function (_React$Component3) {
    _inherits(Sendbutton, _React$Component3);

    function Sendbutton(props) {
        _classCallCheck(this, Sendbutton);

        return _possibleConstructorReturn(this, (Sendbutton.__proto__ || Object.getPrototypeOf(Sendbutton)).call(this, props));
    }

    _createClass(Sendbutton, [{
        key: 'render',
        value: function render() {
            return React.createElement('input', _defineProperty({ type: 'button', className: 'btn btn-secondary btn-block py-3 border-0', value: 'Send Request' }, 'type', 'submit'));
        }
    }]);

    return Sendbutton;
}(React.Component);