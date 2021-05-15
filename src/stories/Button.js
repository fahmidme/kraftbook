import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

import { ReactComponent as IconArrow } from './assets/arrow.svg';

/**
 * Icon to use
 */
const Icon = ({ name }) => {
  switch(name) {
    case 'arrow':
      return <IconArrow className={'icon'}/>
    default:
      return <></>
  }
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, icon, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      className={['storybook-button', mode, (icon && 'storybook-button-icon')].join(' ')}
      {...props}>
      <div>
        {icon && <Icon name={icon}/>}
        {label}
      </div>
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What icon to use, if any
   */
  icon: PropTypes.string,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: true,
  icon: undefined,
  onClick: undefined,
};
