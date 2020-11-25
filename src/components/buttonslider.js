import React, { Component } from 'react';
import ScrollMenu from "react-horizontal-scrolling-menu";
import './buttonslider.css';
import leftarrow from '../assets/leftarrow.svg'
import {useMediaQuery} from "react-responsive";
import rightarrow from '../assets/rightarrow.svg'
import comma from '../assets/comma.svg'
// list of items
const list = [
    { name: 'item1' },
    { name: 'item2' },
    { name: 'item3' },
    { name: 'item4' },
    { name: 'item5' },
    { name: 'item6' },
    { name: 'item7' },
    { name: 'item8' },
    { name: 'item9' }
];

// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
    return <div className={'button-card'}>
        <img src={comma} style={{position:'absolute',right:0,transform:'translateY(-50%)'}} alt=""/>
    </div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
    list.map(el => {
        const {name} = el;

        return <MenuItem text={name} key={name} selected={selected} />;
    });





const ArrowLeft = <img src={leftarrow} className={'arrow larrow'}  alt=""/>
const ArrowRight = <img src={rightarrow} className={'arrow rarrow'}  alt=""/>

const selected = 'item1';

class ButtonSlider extends Component {
    constructor(props) {
        super(props);
        // call it again if items count changes
        this.menuItems = Menu(list, selected);
    }

    state = {
        selected
    };

    onSelect = key => {
        this.setState({ selected: key });
    }


    render() {

        const { selected } = this.state;
        // Create menu from items
        const menu = this.menuItems;

        return (
            <div className="button-slider">
                <ScrollMenu
                    data={menu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    selected={selected}
                    onSelect={this.onSelect}


                    wrapperClass={'wraper'}
                />
            </div>
        );
    }
}

export default ButtonSlider;
