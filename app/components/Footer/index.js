import React from 'react';
import { FormattedMessage } from 'react-intl';

import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  console.log(messages.licenseMessage.defaultMessage)
  return (
    <Wrapper>
      <section>
        {/* <FormattedMessage {...messages.licenseMessage} /> */}
        <p>{messages.licenseMessage.defaultMessage}</p>
      </section>
    </Wrapper>
  );
}

export default Footer;
