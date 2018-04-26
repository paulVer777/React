import React from 'react'
import {Link} from 'react-router-dom'

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const Sidebar=()=>(



    <Drawer open={this.state.isDrawerOpen}


            docked={false}
            onRequestChange={this.drawerHand}

    >


        <Link to={'/hello/Mateusz'}><MenuItem>Hello</MenuItem></Link>
        <Link to={'/counter'}><MenuItem>Counter</MenuItem></Link>
        <Link to={'/mapping-array'}><MenuItem>MappingArray</MenuItem></Link>
        <Link to={'/mappingarray2'}><MenuItem>MappingArray</MenuItem></Link>
        <Link to={'my-first-component'}><MenuItem>My first Component</MenuItem></Link>

    </Drawer>
);
//uzyc mapa zeby pokazac itemy w sidebarze.

export default Sidebar