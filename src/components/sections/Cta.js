import React, { useState }from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Button from '../elements/Button';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  
  const [email, setEmail] = useState('');
  const [submitActive, setSubmitActive] = useState(false);

  const sendEmail = async (e) => {
    // prevent page load
    e.preventDefault();
    {/* https://community.bearer.sh/pushtogsheet/*/}
    const spreadsheetId = '15RW7f9c4y-A-h9x28FEwWVysKDLUnY7lUGd-g2hvy0A'
    const baseUrl = "https://pushtogsheet.herokuapp.com";
    const query = `valueInputOption=RAW&pizzly_pkey=pope8Qy8qfYyppnHRMgLMpQ8MuEUKDGeyhfGCj`;
    const url = new URL(`/proxy/google-sheets/spreadsheets/${spreadsheetId}/values/A1:append?${query}`, baseUrl);
    const data = [[email]];

    fetch(url.href, {
      method: "POST",
      body: JSON.stringify({ values: data }),
      headers: { 'Pizzly-Auth-Id': 'eeabbcd0-c9fe-11ea-9a92-d7fa3fa06bce' }
    });
  }

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              We'd love to hear from you
              </h3>
          </div>
          <div className="cta-action" style={{}}>
            <Input 
              id="newsletter" 
              type="email" 
              label="Subscribe"
              value={email}
              labelHidden 
              hasIcon="right"
              placeholder="Your best email"
              onChange={(e) => {
                setEmail(e.target.value);
                setSubmitActive(true);
              }}
            >
            </Input>
            { submitActive &&
              <Button
                style={{width: "100%", marginTop: 10}}
                onClick={(e) => {
                  sendEmail(e).then(() => {
                    setEmail('Thanks!');
                    setSubmitActive(false);
                  });
                }}
              >
                Submit
              </Button>
            }
          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;