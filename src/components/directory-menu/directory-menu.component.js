import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from  'reselect';

import './directory-menu.styles.scss';
import MenuItem from '../main-item/main-item.component';
import {selectDirectorySection} from '../../redux/directory/directory.selector'

const DirectoryMenu = ({sections}) => {
    return(
        <div className="directory-menu">
            {sections.map(({id, ...otherSectionProps}) => 
                <MenuItem key={id} {...otherSectionProps}/>)}
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
})

export default connect(mapStateToProps)(DirectoryMenu);