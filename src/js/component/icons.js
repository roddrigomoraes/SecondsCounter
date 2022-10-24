

/* global FontAwesomeConfig */

import fontawesome from '@fortawesome/fontawesome';

import faClock from '@fortawesome/free-regular-svg-icons/faClock';

fontawesome.config = {
  autoReplaceSvg: 'nest'
};


fontawesome.library.add(
    faClock
);



/**
 * 5) Now, you can place the icon tag anywhere you want to icon to show, for example:
 *    <i className="fas fa-check"></i>
*/