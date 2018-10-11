import * as React from 'react';
import i18n from '../../i18n/i18n';

interface Props {}

interface State {}

class Home extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {}
  }

  render() {
    return <div>{i18n.t('greetings')} home</div>;
  }
}

export default Home;